import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Atom,
  Clock,
  Globe,
  Trophy,
  Cpu,
  BookOpen,
  Shuffle,
  Film,
  Smile,
  Calculator,
  Heart,
  Music,
  ChefHat,
} from "lucide-react";
import { categories } from "../data/questions";

const iconMap = {
  Atom,
  Clock,
  Globe,
  Trophy,
  Cpu,
  BookOpen,
  Film,
  Smile,
  Calculator,
  Heart,
  Music,
  ChefHat,
};

const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            What Do You Want{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              to Play?
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pick a category you like. Each quiz has 10 random questions with
            different difficulty levels.
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-blue-600">
            <Shuffle className="w-4 h-4 mr-2" />
            <span>Questions are randomized for each attempt!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category) => {
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap];

            return (
              <Link
                key={category.id}
                to={`/quiz/${category.id}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={`${category.color} h-20 flex items-center justify-center relative`}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                  <div className="absolute top-2 right-2">
                    <Shuffle className="w-3 h-3 text-white opacity-70" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>10 Random Questions</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      Mixed
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Quiz Features
            </h2>
            <div className="grid md:grid-cols-4 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Time Limit
                  </h3>
                  <p className="text-xs text-gray-600">5 minutes per quiz</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Trophy className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Scoring
                  </h3>
                  <p className="text-xs text-gray-600">
                    1 point per correct answer
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 rounded-full p-2">
                  <Shuffle className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Randomized
                  </h3>
                  <p className="text-xs text-gray-600">
                    Different questions each time
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 rounded-full p-2">
                  <Heart className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    12 Categories
                  </h3>
                  <p className="text-xs text-gray-600">
                    Wide variety of topics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
