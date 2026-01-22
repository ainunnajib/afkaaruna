'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Button, Card, CardContent, Stars } from '@/components/ui';
import { calculateStars, calculateXP } from '@/lib/utils';
import type { GameState } from '@/types';
import { Trophy, RotateCcw, Home, Share2 } from 'lucide-react';
import Link from 'next/link';

interface GameResultsProps {
  gameState: GameState;
  maxScore: number;
  onRetry: () => void;
  gameTitle: string;
}

export function GameResults({ gameState, maxScore, onRetry, gameTitle }: GameResultsProps) {
  const { language, t } = useLanguage();
  const stars = calculateStars(gameState.score, maxScore);
  const xpEarned = calculateXP(gameState.score, stars, gameState.streak);
  const accuracy = Math.round(
    (gameState.answers.filter(a => a.isCorrect).length / gameState.answers.length) * 100
  );

  const getMessage = () => {
    if (stars === 3) return t('game.excellent');
    if (stars === 2) return t('game.good');
    return t('game.keepTrying');
  };

  return (
    <div className="max-w-md mx-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card variant="elevated" className="text-center">
          <CardContent className="pt-8 pb-6">
            {/* Trophy Icon */}
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Trophy className="w-10 h-10 text-secondary" />
            </motion.div>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">{t('result.title')}</h2>
            <p className="text-lg text-primary font-medium mb-6">{getMessage()}</p>

            {/* Stars */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="flex justify-center mb-6"
            >
              <Stars count={stars} size="lg" animated />
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-accent rounded-xl p-4"
              >
                <p className="text-2xl font-bold text-primary">{gameState.score}</p>
                <p className="text-xs text-muted">{t('game.score')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-accent rounded-xl p-4"
              >
                <p className="text-2xl font-bold text-secondary">{accuracy}%</p>
                <p className="text-xs text-muted">
                  {language === 'id' && 'Akurasi'}
                  {language === 'ar' && 'الدقة'}
                  {language === 'en' && 'Accuracy'}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-accent rounded-xl p-4"
              >
                <p className="text-2xl font-bold text-success">+{xpEarned}</p>
                <p className="text-xs text-muted">XP</p>
              </motion.div>
            </div>

            {/* Breakdown */}
            <div className="text-sm text-muted mb-6 space-y-1">
              <p>
                ✓ {gameState.answers.filter(a => a.isCorrect).length} {language === 'id' ? 'benar' : language === 'ar' ? 'صحيح' : 'correct'}
              </p>
              <p>
                ✗ {gameState.answers.filter(a => !a.isCorrect).length} {language === 'id' ? 'salah' : language === 'ar' ? 'خطأ' : 'incorrect'}
              </p>
              {gameState.streak > 2 && (
                <p>
                  🔥 {language === 'id' ? `Beruntun terbaik: ${gameState.streak}` : language === 'ar' ? `أفضل سلسلة: ${gameState.streak}` : `Best streak: ${gameState.streak}`}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button onClick={onRetry} className="w-full">
                <RotateCcw className="w-4 h-4 mr-2" />
                {t('game.retry')}
              </Button>
              <Link href="/play" className="w-full">
                <Button variant="outline" className="w-full">
                  <Home className="w-4 h-4 mr-2" />
                  {language === 'id' && 'Kembali ke Menu'}
                  {language === 'ar' && 'العودة إلى القائمة'}
                  {language === 'en' && 'Back to Menu'}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
