export { cn } from './cn';

// Calculate stars based on score percentage
export function calculateStars(score: number, maxScore: number): 0 | 1 | 2 | 3 {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 90) return 3;
  if (percentage >= 70) return 2;
  if (percentage >= 50) return 1;
  return 0;
}

// Format time in mm:ss
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Calculate XP from game session
export function calculateXP(score: number, stars: number, streak: number): number {
  const baseXP = score;
  const starBonus = stars * 10;
  const streakBonus = Math.min(streak * 5, 50); // cap at 50
  return baseXP + starBonus + streakBonus;
}

// Shuffle array (for randomizing questions/options)
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Arabic letter helpers
export function separateArabicLetters(word: string): string[] {
  // Remove diacritics for letter separation
  const withoutDiacritics = word.replace(/[\u064B-\u065F\u0670]/g, '');
  return withoutDiacritics.split('');
}

export function getArabicRoot(letters: string[]): string {
  return letters.join('-');
}
