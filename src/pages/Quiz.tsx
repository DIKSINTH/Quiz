import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { questions, categories } from "../data/questions";
import { Question, QuizState } from "../types/quiz";
import { getRandomQuestions } from "../utils/quizUtils";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";

const Quiz: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    timeRemaining: 120, // 5 minutes
    isActive: false,
    category: categoryId || "",
    difficulty: "mixed",
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [quizStartTime] = useState<number>(Date.now());

  const category = categories.find((cat) => cat.id === categoryId);

  useEffect(() => {
    if (!category) {
      navigate("/categories");
      return;
    }

    // Get all questions for the category and randomize them
    const categoryQuestions = questions.filter(
      (q) => q.category === categoryId
    );
    const randomizedQuestions = getRandomQuestions(categoryQuestions, 10);

    setQuizQuestions(randomizedQuestions);
    setQuizState((prev) => ({ ...prev, isActive: true }));
  }, [categoryId, category, navigate]);

  const handleTimeUp = useCallback(() => {
    setQuizState((prev) => ({ ...prev, isActive: false }));
    const finalScore = quizState.score;
    const timeUsed = 300 - quizState.timeRemaining;
    navigate("/results", {
      state: {
        score: finalScore,
        totalQuestions: quizQuestions.length,
        timeUsed,
        category: category?.name || "",
        quizId: quizStartTime,
      },
    });
  }, [
    navigate,
    quizState.score,
    quizState.timeRemaining,
    quizQuestions.length,
    category,
    quizStartTime,
  ]);

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect =
      answerIndex === quizQuestions[quizState.currentQuestion].correctAnswer;

    setQuizState((prev) => ({
      ...prev,
      answers: [...prev.answers, answerIndex],
      score: isCorrect ? prev.score + 1 : prev.score,
    }));

    setTimeout(() => {
      if (quizState.currentQuestion + 1 >= quizQuestions.length) {
        // Quiz completed
        setQuizState((prev) => ({ ...prev, isActive: false }));
        const finalScore = quizState.score + (isCorrect ? 1 : 0);
        const timeUsed = 300 - quizState.timeRemaining;
        navigate("/results", {
          state: {
            score: finalScore,
            totalQuestions: quizQuestions.length,
            timeUsed,
            category: category?.name || "",
            quizId: quizStartTime,
          },
        });
      } else {
        // Next question
        setQuizState((prev) => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
        }));
        setSelectedAnswer(null);
        setShowResult(false);
      }
    }, 2000);
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
      }));
      setSelectedAnswer(
        quizState.answers[quizState.currentQuestion - 1] || null
      );
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    // Generate new random questions for restart
    const categoryQuestions = questions.filter(
      (q) => q.category === categoryId
    );
    const newRandomizedQuestions = getRandomQuestions(categoryQuestions, 10);

    setQuizQuestions(newRandomizedQuestions);
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      timeRemaining: 300,
      isActive: true,
      category: categoryId || "",
      difficulty: "mixed",
    });
    setSelectedAnswer(null);
    setShowResult(false);
  };

  if (!category || quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[quizState.currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/categories")}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Categories
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleRestart}
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              New Questions
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-800 mb-2 lg:mb-0">
                {category.name} Quiz
              </h1>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  Score:{" "}
                  <span className="font-semibold text-blue-600">
                    {quizState.score}
                  </span>
                </div>
                <Timer
                  timeRemaining={quizState.timeRemaining}
                  onTimeUp={handleTimeUp}
                  isActive={quizState.isActive}
                />
              </div>
            </div>

            <ProgressBar
              current={quizState.currentQuestion + 1}
              total={quizQuestions.length}
            />
          </div>

          <div className="mb-6">
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={quizState.currentQuestion === 0}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                quizState.currentQuestion === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Question {quizState.currentQuestion + 1} of{" "}
                {quizQuestions.length}
              </p>
            </div>

            <div className="w-24">
              {showResult &&
                quizState.currentQuestion + 1 < quizQuestions.length && (
                  <div className="flex items-center text-blue-600">
                    <span className="text-sm">Next</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
