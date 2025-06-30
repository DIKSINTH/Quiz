import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Home, RotateCcw, Trophy, Share2, Copy, Check } from 'lucide-react';
import { getPerformanceMessage, formatTime } from '../utils/quizUtils';
import ScoreCard from '../components/ScoreCard';

interface ResultsState {
  score: number;
  totalQuestions: number;
  timeUsed: number;
  category: string;
  quizId?: number;
}

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultsState;
  const [copied, setCopied] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);

  if (!state) {
    navigate('/');
    return null;
  }

  const { score, totalQuestions, timeUsed, category } = state;
  const percentage = (score / totalQuestions) * 100;
  const performanceMessage = getPerformanceMessage(percentage);

  const shareText = `🎯 Quiz Master Results 🎯\n\n📚 Category: ${category}\n🏆 Score: ${score}/${totalQuestions} (${percentage.toFixed(0)}%)\n⏱️ Time: ${formatTime(timeUsed)}\n\n${performanceMessage}\n\nTry the quiz yourself at ${window.location.origin}`;

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Quiz Master Results',
          text: shareText,
          url: window.location.origin
        });
      } catch (err) {
        // User cancelled sharing or error occurred
        console.log('Share cancelled or failed');
      }
    } else {
      handleCopyToClipboard();
    }
  };

  const handleTwitterShare = () => {
    const twitterText = encodeURIComponent(`🎯 Just scored ${score}/${totalQuestions} on the ${category} quiz! ${performanceMessage} Try it yourself:`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}&url=${encodeURIComponent(window.location.origin)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-lg">
                <Trophy className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Quiz Complete!
            </h1>
            <p className="text-lg text-gray-600">
              Here's how you performed on the {category} quiz
            </p>
          </div>

          <div className="mb-8">
            <ScoreCard
              score={score}
              totalQuestions={totalQuestions}
              timeUsed={timeUsed}
              category={category}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link
              to="/categories"
              className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Another Quiz
            </Link>
            
            <Link
              to="/"
              className="flex items-center justify-center px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="relative inline-block">
              <button
                onClick={() => setShareMenuOpen(!shareMenuOpen)}
                className="flex items-center justify-center mx-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share Results
              </button>

              {shareMenuOpen && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border p-4 z-10 min-w-64">
                  <div className="space-y-2">
                    <button
                      onClick={handleNativeShare}
                      className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Share2 className="w-4 h-4 mr-3 text-blue-600" />
                      <span>Share via System</span>
                    </button>
                    
                    <button
                      onClick={handleCopyToClipboard}
                      className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 mr-3 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 mr-3 text-gray-600" />
                      )}
                      <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                    </button>

                    <div className="border-t pt-2">
                      <p className="text-xs text-gray-500 mb-2">Share on social media:</p>
                      
                      <button
                        onClick={handleTwitterShare}
                        className="w-full flex items-center px-4 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <div className="w-4 h-4 mr-3 bg-blue-400 rounded"></div>
                        <span>Twitter</span>
                      </button>
                      
                      <button
                        onClick={handleFacebookShare}
                        className="w-full flex items-center px-4 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <div className="w-4 h-4 mr-3 bg-blue-600 rounded"></div>
                        <span>Facebook</span>
                      </button>
                      
                      <button
                        onClick={handleWhatsAppShare}
                        className="w-full flex items-center px-4 py-2 text-left hover:bg-green-50 rounded-lg transition-colors"
                      >
                        <div className="w-4 h-4 mr-3 bg-green-500 rounded"></div>
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Click outside to close share menu */}
          {shareMenuOpen && (
            <div 
              className="fixed inset-0 z-5"
              onClick={() => setShareMenuOpen(false)}
            />
          )}

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Performance Analysis
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Time Management</h3>
                <p className="text-blue-700">
                  {timeUsed < 180 ? 
                    "Excellent! You completed the quiz efficiently with time to spare." : 
                    timeUsed < 240 ?
                    "Good pacing! You used your time well." :
                    "Consider reading questions more quickly next time to save time."
                  }
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Knowledge Level</h3>
                <p className="text-green-700">
                  {percentage >= 90 ? 
                    "Outstanding! You have excellent knowledge in this area!" : 
                    percentage >= 70 ?
                    "Great job! You have solid understanding of the topic." :
                    percentage >= 50 ?
                    "Good foundation! Consider reviewing the topic to improve further." :
                    "Keep studying! Every expert was once a beginner."
                  }
                </p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg text-center">
              <p className="text-yellow-800 font-medium">{performanceMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;