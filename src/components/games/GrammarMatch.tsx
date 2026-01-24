'use client';

import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Button, Card, CardContent, Progress } from '@/components/ui';
import { cn, shuffleArray } from '@/lib/utils';
import type { GameState, AnswerRecord } from '@/types';
import type { GrammarMatchPair } from '@/data/grammar-match-questions';
import { ArrowRight, Link2, Trophy } from 'lucide-react';

interface GrammarMatchProps {
  pairs: GrammarMatchPair[];
  onComplete: (state: GameState) => void;
}

const PAIRS_PER_ROUND = 6;

interface DisplayItem {
  id: string;
  text: string;
  pairId: string;
  side: 'term' | 'definition';
}

export function GrammarMatch({ pairs, onComplete }: GrammarMatchProps) {
  const { language, t } = useLanguage();

  // Divide pairs into rounds of 6
  const rounds = useMemo(() => {
    const result: GrammarMatchPair[][] = [];
    for (let i = 0; i < pairs.length; i += PAIRS_PER_ROUND) {
      result.push(pairs.slice(i, i + PAIRS_PER_ROUND));
    }
    return result;
  }, [pairs]);

  const totalRounds = rounds.length;

  const [currentRound, setCurrentRound] = useState(0);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedDefinition, setSelectedDefinition] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [wrongIds, setWrongIds] = useState<Set<string>>(new Set());
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    totalQuestions: pairs.length,
    score: 0,
    streak: 0,
    answers: [],
    isComplete: false,
  });

  // Shuffled terms and definitions for the current round
  const { shuffledTerms, shuffledDefinitions } = useMemo(() => {
    const currentPairs = rounds[currentRound] || [];
    const terms: DisplayItem[] = currentPairs.map(p => ({
      id: `term-${p.id}`,
      text: p.term,
      pairId: p.id,
      side: 'term' as const,
    }));
    const definitions: DisplayItem[] = currentPairs.map(p => ({
      id: `def-${p.id}`,
      text: p.definition,
      pairId: p.id,
      side: 'definition' as const,
    }));
    return {
      shuffledTerms: shuffleArray(terms),
      shuffledDefinitions: shuffleArray(definitions),
    };
  }, [rounds, currentRound]);

  // Use a ref to track streak for scoring to avoid stale closure issues
  const streakRef = useRef(0);
  streakRef.current = gameState.streak;

  const checkMatch = (termPairId: string, defPairId: string) => {
    const isCorrect = termPairId === defPairId;

    if (isCorrect) {
      // Correct match
      const points = 10 * (streakRef.current + 1);
      setMatchedIds(prev => new Set([...prev, termPairId]));

      const answer: AnswerRecord = {
        questionId: termPairId,
        userAnswer: termPairId,
        isCorrect: true,
        timeSpent: 0,
        points,
      };

      setGameState(prev => ({
        ...prev,
        score: prev.score + points,
        streak: prev.streak + 1,
        currentQuestion: prev.currentQuestion + 1,
        answers: [...prev.answers, answer],
      }));

      setSelectedTerm(null);
      setSelectedDefinition(null);
    } else {
      // Wrong match - flash red briefly
      setWrongIds(new Set([termPairId, defPairId]));

      const answer: AnswerRecord = {
        questionId: termPairId,
        userAnswer: defPairId,
        isCorrect: false,
        timeSpent: 0,
        points: 0,
      };

      setGameState(prev => ({
        ...prev,
        streak: 0,
        currentQuestion: prev.currentQuestion + 1,
        answers: [...prev.answers, answer],
      }));

      setTimeout(() => {
        setWrongIds(new Set());
        setSelectedTerm(null);
        setSelectedDefinition(null);
      }, 600);
    }
  };

  const handleTermClick = (pairId: string) => {
    if (matchedIds.has(pairId) || wrongIds.size > 0) return;

    if (selectedTerm === pairId) {
      // Deselect
      setSelectedTerm(null);
    } else {
      setSelectedTerm(pairId);

      // If a definition is already selected, check the match
      if (selectedDefinition) {
        checkMatch(pairId, selectedDefinition);
      }
    }
  };

  const handleDefinitionClick = (pairId: string) => {
    if (matchedIds.has(pairId) || wrongIds.size > 0) return;

    if (selectedDefinition === pairId) {
      // Deselect
      setSelectedDefinition(null);
    } else {
      setSelectedDefinition(pairId);

      // If a term is already selected, check the match
      if (selectedTerm) {
        checkMatch(selectedTerm, pairId);
      }
    }
  };

  // Check if current round is complete
  const currentPairsCount = rounds[currentRound]?.length || 0;
  const isRoundComplete = matchedIds.size >= currentPairsCount && currentPairsCount > 0;

  const handleNextRound = () => {
    if (currentRound < totalRounds - 1) {
      setCurrentRound(prev => prev + 1);
      setMatchedIds(new Set());
      setSelectedTerm(null);
      setSelectedDefinition(null);
      setWrongIds(new Set());
    } else {
      // Game complete
      const finalState: GameState = {
        ...gameState,
        isComplete: true,
      };
      setGameState(finalState);
      onComplete(finalState);
    }
  };

  const totalMatched = (currentRound * PAIRS_PER_ROUND) + matchedIds.size;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted">
            {language === 'id' && `Babak ${currentRound + 1} dari ${totalRounds}`}
            {language === 'ar' && `الجولة ${currentRound + 1} من ${totalRounds}`}
            {language === 'en' && `Round ${currentRound + 1} of ${totalRounds}`}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{t('game.score')}: {gameState.score}</span>
            {gameState.streak > 1 && (
              <span className="text-xs bg-secondary/20 text-secondary-dark px-2 py-1 rounded-full">
                🔥 {gameState.streak}x
              </span>
            )}
          </div>
        </div>
        <Progress value={totalMatched} max={pairs.length} />
      </div>

      {/* Game Card */}
      <Card variant="elevated" className="mb-6">
        <CardContent className="pt-6">
          {/* Match Icon */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Link2 className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Instruction */}
          <p className="text-center text-muted mb-6">
            {language === 'id' && 'Cocokkan istilah tata bahasa Arab dengan definisinya:'}
            {language === 'ar' && 'طابق المصطلحات النحوية بتعريفاتها:'}
            {language === 'en' && 'Match the Arabic grammar terms with their definitions:'}
          </p>

          {/* Matching Area */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Terms Column */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide text-center mb-2">
                {language === 'id' && 'Istilah'}
                {language === 'ar' && 'المصطلحات'}
                {language === 'en' && 'Terms'}
              </p>
              <AnimatePresence>
                {shuffledTerms.map((item, index) => {
                  const isMatched = matchedIds.has(item.pairId);
                  const isSelected = selectedTerm === item.pairId;
                  const isWrong = wrongIds.has(item.pairId) && selectedTerm === item.pairId;

                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleTermClick(item.pairId)}
                      disabled={isMatched}
                      className={cn(
                        'w-full p-3 rounded-xl border-2 transition-all arabic-text text-lg text-center',
                        !isMatched && !isSelected && !isWrong && 'border-zinc-200 hover:border-primary/50 bg-white cursor-pointer',
                        isSelected && !isWrong && 'border-primary bg-primary/10 ring-2 ring-primary/30',
                        isMatched && 'border-success bg-success/10 text-success cursor-default opacity-75',
                        isWrong && 'border-error bg-error/10 text-error animate-pulse'
                      )}
                      dir="rtl"
                    >
                      {item.text}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Definitions Column */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide text-center mb-2">
                {language === 'id' && 'Definisi'}
                {language === 'ar' && 'التعريفات'}
                {language === 'en' && 'Definitions'}
              </p>
              <AnimatePresence>
                {shuffledDefinitions.map((item, index) => {
                  const isMatched = matchedIds.has(item.pairId);
                  const isSelected = selectedDefinition === item.pairId;
                  const isWrong = wrongIds.has(item.pairId) && selectedDefinition === item.pairId;

                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleDefinitionClick(item.pairId)}
                      disabled={isMatched}
                      className={cn(
                        'w-full p-3 rounded-xl border-2 transition-all arabic-text text-sm text-center leading-relaxed',
                        !isMatched && !isSelected && !isWrong && 'border-zinc-200 hover:border-primary/50 bg-white cursor-pointer',
                        isSelected && !isWrong && 'border-primary bg-primary/10 ring-2 ring-primary/30',
                        isMatched && 'border-success bg-success/10 text-success cursor-default opacity-75',
                        isWrong && 'border-error bg-error/10 text-error animate-pulse'
                      )}
                      dir="rtl"
                    >
                      {item.text}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Round Complete Feedback */}
          <AnimatePresence>
            {isRoundComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-success/10 p-4 rounded-xl mb-4"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-success" />
                  <span className="font-bold text-success">
                    {language === 'id' && 'Babak Selesai!'}
                    {language === 'ar' && 'اكتملت الجولة!'}
                    {language === 'en' && 'Round Complete!'}
                  </span>
                </div>
                <p className="text-sm text-muted text-center">
                  {language === 'id' && `Skor saat ini: ${gameState.score} poin`}
                  {language === 'ar' && `النتيجة الحالية: ${gameState.score} نقطة`}
                  {language === 'en' && `Current score: ${gameState.score} points`}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          {isRoundComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Button className="w-full" onClick={handleNextRound}>
                {currentRound < totalRounds - 1 ? (
                  <>
                    {language === 'id' && 'Babak Selanjutnya'}
                    {language === 'ar' && 'الجولة التالية'}
                    {language === 'en' && 'Next Round'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                ) : (
                  <>
                    {language === 'id' && 'Lihat Hasil'}
                    {language === 'ar' && 'عرض النتائج'}
                    {language === 'en' && 'View Results'}
                  </>
                )}
              </Button>
            </motion.div>
          )}

          {/* Match Counter */}
          {!isRoundComplete && (
            <div className="text-center text-sm text-muted">
              {language === 'id' && `${matchedIds.size} dari ${currentPairsCount} pasangan dicocokkan`}
              {language === 'ar' && `${matchedIds.size} من ${currentPairsCount} أزواج مطابقة`}
              {language === 'en' && `${matchedIds.size} of ${currentPairsCount} pairs matched`}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
