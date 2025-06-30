export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getRandomQuestions = (questions: any[], count: number = 10) => {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
};

export const getPerformanceMessage = (percentage: number): string => {
  if (percentage >= 90) return "Outstanding! You're a quiz master! 🏆";
  if (percentage >= 80) return "Excellent work! You really know your stuff! 🌟";
  if (percentage >= 70) return "Great job! You're doing well! 👏";
  if (percentage >= 60) return "Good effort! Keep practicing! 💪";
  if (percentage >= 50) return "Not bad! Room for improvement! 📚";
  return "Keep trying! Practice makes perfect! 🎯";
};