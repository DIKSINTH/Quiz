import React, { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  selectedAnswer: number | null;
  showResult: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  selectedAnswer,
  showResult
}) => {
  const [animatedAnswer, setAnimatedAnswer] = useState<number | null>(null);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setAnimatedAnswer(index);
    setTimeout(() => {
      onAnswer(index);
    }, 300);
  };

  const getOptionStyle = (index: number) => {
    if (!showResult && selectedAnswer === null) {
      return animatedAnswer === index
        ? 'bg-blue-100 border-blue-400 scale-105'
        : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400';
    }

    if (showResult) {
      if (index === question.correctAnswer) {
        return 'bg-green-100 border-green-400 text-green-800';
      }
      if (index === selectedAnswer && index !== question.correctAnswer) {
        return 'bg-red-100 border-red-400 text-red-800';
      }
    }

    if (selectedAnswer === index) {
      return 'bg-blue-100 border-blue-400';
    }

    return 'bg-white border-gray-300';
  };

  const getIcon = (index: number) => {
    if (showResult && index === question.correctAnswer) {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
    if (showResult && index === selectedAnswer && index !== question.correctAnswer) {
      return <Circle className="w-5 h-5 text-red-600" />;
    }
    return <Circle className="w-5 h-5 text-gray-400" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
            question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {question.difficulty}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 leading-relaxed">
          {question.question}
        </h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 text-left border-2 rounded-lg transition-all duration-300 flex items-center space-x-3 ${getOptionStyle(index)} ${
              selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            {getIcon(index)}
            <span className="flex-1 font-medium">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;