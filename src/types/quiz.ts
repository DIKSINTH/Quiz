export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: number[];
  timeRemaining: number;
  isActive: boolean;
  category: string;
  difficulty: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  totalQuestions: number;
}