// Language types
export type Language = 'id' | 'ar' | 'en';

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  currentLevel: number;
  totalXP: number;
  preferredLanguage: Language;
  createdAt: Date;
}

// Game types
export type GameType = 'word-builder' | 'sentence-doctor' | 'grammar-match' | 'story-mode' | 'conjugation-race' | 'irab-analyzer';

export interface GameSession {
  id: string;
  userId: string;
  gameType: GameType;
  topicId: string;
  score: number;
  maxScore: number;
  duration: number; // in seconds
  mistakes: GameMistake[];
  completedAt: Date;
}

export interface GameMistake {
  questionId: string;
  userAnswer: string;
  correctAnswer: string;
  timestamp: number;
}

// Progress types
export interface Progress {
  userId: string;
  topicId: string;
  starsEarned: 0 | 1 | 2 | 3;
  bestScore: number;
  attempts: number;
  completedAt?: Date;
}

// Achievement types
export type AchievementType =
  | 'first-lesson'
  | 'streak-7'
  | 'streak-30'
  | 'perfect-score'
  | 'nahwu-master'
  | 'shorof-master'
  | 'level-10'
  | 'level-25'
  | 'level-50';

export interface Achievement {
  id: string;
  userId: string;
  type: AchievementType;
  unlockedAt: Date;
}

// Content types
export type TopicCategory = 'nahwu' | 'shorof';

export interface Topic {
  id: string;
  category: TopicCategory;
  order: number;
  title: {
    ar: string;
    id: string;
    en: string;
  };
  description: {
    ar: string;
    id: string;
    en: string;
  };
  requiredLevel: number;
  lessons: Lesson[];
  exercises: Exercise[];
}

export interface Lesson {
  id: string;
  topicId: string;
  order: number;
  title: {
    ar: string;
    id: string;
    en: string;
  };
  content: {
    ar: string;
    id: string;
    en: string;
  };
  examples: Example[];
}

export interface Example {
  arabic: string;
  transliteration: string;
  translation: {
    id: string;
    en: string;
  };
  breakdown?: WordBreakdown[];
}

export interface WordBreakdown {
  word: string;
  role: string;
  explanation: {
    ar: string;
    id: string;
    en: string;
  };
}

// Exercise types
export type ExerciseType = 'multiple-choice' | 'drag-drop' | 'fill-blank' | 'matching' | 'ordering';

export interface Exercise {
  id: string;
  topicId: string;
  type: ExerciseType;
  difficulty: 1 | 2 | 3;
  question: {
    ar: string;
    id: string;
    en: string;
  };
  options?: ExerciseOption[];
  correctAnswer: string | string[];
  explanation: {
    ar: string;
    id: string;
    en: string;
  };
  points: number;
}

export interface ExerciseOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

// Word Builder specific types
export interface WordBuilderQuestion {
  id: string;
  root: string; // e.g., "ك-ت-ب"
  rootLetters: string[]; // e.g., ["ك", "ت", "ب"]
  pattern: string; // e.g., "فَاعِل"
  targetWord: string; // e.g., "كَاتِب"
  meaning: {
    ar: string;
    id: string;
    en: string;
  };
  hints?: string[];
}

// Sentence Doctor specific types
export interface SentenceDoctorQuestion {
  id: string;
  incorrectSentence: string;
  correctSentence: string;
  errorType: 'irab' | 'word-order' | 'agreement' | 'missing-word';
  errorPosition: number; // index of the erroneous word
  explanation: {
    ar: string;
    id: string;
    en: string;
  };
  options?: string[]; // for multiple choice corrections
}

// Game state types
export interface GameState {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  streak: number;
  timeRemaining?: number;
  answers: AnswerRecord[];
  isComplete: boolean;
}

export interface AnswerRecord {
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
  points: number;
}
