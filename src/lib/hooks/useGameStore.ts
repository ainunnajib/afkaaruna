'use client';

import { create } from 'zustand';
import type { GameState, AnswerRecord, GameType } from '@/types';

interface GameStore {
  // Current game state
  gameType: GameType | null;
  gameState: GameState | null;

  // Actions
  startGame: (type: GameType, totalQuestions: number) => void;
  submitAnswer: (questionId: string, userAnswer: string, isCorrect: boolean, timeSpent: number, points: number) => void;
  nextQuestion: () => void;
  endGame: () => void;
  resetGame: () => void;

  // Timer
  decrementTime: () => void;
}

const initialGameState: GameState = {
  currentQuestion: 0,
  totalQuestions: 0,
  score: 0,
  streak: 0,
  timeRemaining: undefined,
  answers: [],
  isComplete: false,
};

export const useGameStore = create<GameStore>((set, get) => ({
  gameType: null,
  gameState: null,

  startGame: (type: GameType, totalQuestions: number) => {
    set({
      gameType: type,
      gameState: {
        ...initialGameState,
        totalQuestions,
        timeRemaining: type === 'conjugation-race' ? 60 : undefined, // 60 seconds for timed games
      },
    });
  },

  submitAnswer: (questionId: string, userAnswer: string, isCorrect: boolean, timeSpent: number, points: number) => {
    const { gameState } = get();
    if (!gameState) return;

    const answer: AnswerRecord = {
      questionId,
      userAnswer,
      isCorrect,
      timeSpent,
      points: isCorrect ? points : 0,
    };

    set({
      gameState: {
        ...gameState,
        score: gameState.score + (isCorrect ? points : 0),
        streak: isCorrect ? gameState.streak + 1 : 0,
        answers: [...gameState.answers, answer],
      },
    });
  },

  nextQuestion: () => {
    const { gameState } = get();
    if (!gameState) return;

    const nextQuestionIndex = gameState.currentQuestion + 1;
    const isComplete = nextQuestionIndex >= gameState.totalQuestions;

    set({
      gameState: {
        ...gameState,
        currentQuestion: nextQuestionIndex,
        isComplete,
      },
    });
  },

  endGame: () => {
    const { gameState } = get();
    if (!gameState) return;

    set({
      gameState: {
        ...gameState,
        isComplete: true,
      },
    });
  },

  resetGame: () => {
    set({
      gameType: null,
      gameState: null,
    });
  },

  decrementTime: () => {
    const { gameState } = get();
    if (!gameState || gameState.timeRemaining === undefined) return;

    const newTime = gameState.timeRemaining - 1;

    set({
      gameState: {
        ...gameState,
        timeRemaining: newTime,
        isComplete: newTime <= 0 ? true : gameState.isComplete,
      },
    });
  },
}));
