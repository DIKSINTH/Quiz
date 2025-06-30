import React from 'react';
import { Trophy, Target, Clock, Star } from 'lucide-react';

interface ScoreCardProps {
  score: number;
  totalQuestions: number;
  timeUsed: number;
  category: string;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ score, totalQuestions, timeUsed, category }) => {
  const percentage = (score / totalQuestions) * 100;
  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;

  const getPerformanceLevel = () => {
    if (percentage >= 90) return { level: 'Excellent!', color: 'text-green-600', icon: Trophy };
    if (percentage >= 70) return { level: 'Good Job!', color: 'text-blue-600', icon: Target };
    if (percentage >= 50) return { level: 'Not Bad!', color: 'text-yellow-600', icon: Star };
    return { level: 'Keep Trying!', color: 'text-red-600', icon: Target };
  };

  const performance = getPerformanceLevel();
  const Icon = performance.icon;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-6">
        <Icon className={`w-16 h-16 mx-auto mb-3 ${performance.color}`} />
        <h2 className={`text-2xl font-bold ${performance.color}`}>
          {performance.level}
        </h2>
        <p className="text-gray-600 mt-1">
          You scored {score} out of {totalQuestions} questions
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-800">
            {percentage.toFixed(0)}%
          </div>
          <div className="text-sm text-gray-600">Accuracy</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-800">
            {minutes}:{String(seconds).padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600">Time Used</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Score Progress</span>
          <span className="text-sm text-gray-500">{score}/{totalQuestions}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-1000 ${
              percentage >= 90 ? 'bg-green-500' :
              percentage >= 70 ? 'bg-blue-500' :
              percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
        Category: <span className="font-medium capitalize">{category}</span>
      </div>
    </div>
  );
};

export default ScoreCard;