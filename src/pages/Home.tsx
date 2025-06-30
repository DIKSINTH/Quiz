import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Trophy, Clock, Star, Brain } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-lg">
              <Brain className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Quiz <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Master</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Challenge yourself with our interactive quiz game featuring multiple categories, 
            real-time scoring, and engaging animations. Test your knowledge and climb the leaderboard!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <Play className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Multiple Categories</h3>
            <p className="text-gray-600">
              Choose from Science, History, Geography, Sports, Technology, and Literature
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Timed Challenges</h3>
            <p className="text-gray-600">
              Race against time with our countdown timer and track your performance
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Score Tracking</h3>
            <p className="text-gray-600">
              Monitor your progress with detailed scoring and performance analytics
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/categories"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            <Star className="w-5 h-5 mr-2" />
            Start Quiz
          </Link>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Choose Category</h3>
              <p className="text-sm text-gray-600">Select your favorite topic</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Answer Questions</h3>
              <p className="text-sm text-gray-600">Respond to multiple choice questions</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Beat the Clock</h3>
              <p className="text-sm text-gray-600">Race against time for bonus points</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">View Results</h3>
              <p className="text-sm text-gray-600">See your score and performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;