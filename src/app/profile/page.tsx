'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import { Card, CardContent, Progress, Stars } from '@/components/ui';
import { User, Trophy, Zap, Calendar, Target, Award } from 'lucide-react';

export default function ProfilePage() {
  const { language, t } = useLanguage();

  // Mock user data - will be replaced with actual data from DB
  const user = {
    name: 'Pelajar',
    level: 3,
    currentXP: 450,
    nextLevelXP: 1000,
    totalXP: 2450,
    streak: 5,
    achievements: [
      { id: 'first-lesson', name: { id: 'Langkah Pertama', ar: 'الخطوة الأولى', en: 'First Step' }, icon: '🎯' },
      { id: 'streak-7', name: { id: 'Seminggu Berturut', ar: 'أسبوع متتالي', en: 'Week Streak' }, icon: '🔥' },
      { id: 'perfect-score', name: { id: 'Skor Sempurna', ar: 'درجة مثالية', en: 'Perfect Score' }, icon: '⭐' },
    ],
    stats: {
      lessonsCompleted: 12,
      gamesPlayed: 45,
      correctAnswers: 387,
      accuracy: 86,
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <Card variant="elevated" className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <div className="flex items-center gap-2 text-muted">
                  <span>{t('profile.level')} {user.level}</span>
                  <span>•</span>
                  <span>{user.totalXP} XP</span>
                </div>
              </div>
            </div>

            {/* Level Progress */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted">
                  {language === 'id' && 'Progress ke Level'}
                  {language === 'ar' && 'التقدم إلى المستوى'}
                  {language === 'en' && 'Progress to Level'}
                  {' '}{user.level + 1}
                </span>
                <span className="font-medium">{user.currentXP} / {user.nextLevelXP} XP</span>
              </div>
              <Progress value={user.currentXP} max={user.nextLevelXP} variant="success" />
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card variant="game" className="text-center">
            <CardContent className="py-4">
              <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
              <p className="text-2xl font-bold">{user.streak}</p>
              <p className="text-xs text-muted">{t('profile.streak')}</p>
            </CardContent>
          </Card>
          <Card variant="game" className="text-center">
            <CardContent className="py-4">
              <Target className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{user.stats.lessonsCompleted}</p>
              <p className="text-xs text-muted">
                {language === 'id' && 'Pelajaran'}
                {language === 'ar' && 'الدروس'}
                {language === 'en' && 'Lessons'}
              </p>
            </CardContent>
          </Card>
          <Card variant="game" className="text-center">
            <CardContent className="py-4">
              <Zap className="w-6 h-6 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold">{user.stats.gamesPlayed}</p>
              <p className="text-xs text-muted">
                {language === 'id' && 'Permainan'}
                {language === 'ar' && 'الألعاب'}
                {language === 'en' && 'Games'}
              </p>
            </CardContent>
          </Card>
          <Card variant="game" className="text-center">
            <CardContent className="py-4">
              <Trophy className="w-6 h-6 text-error mx-auto mb-2" />
              <p className="text-2xl font-bold">{user.stats.accuracy}%</p>
              <p className="text-xs text-muted">
                {language === 'id' && 'Akurasi'}
                {language === 'ar' && 'الدقة'}
                {language === 'en' && 'Accuracy'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card variant="elevated">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-secondary" />
              <h2 className="text-lg font-bold">{t('profile.achievements')}</h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {user.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-accent rounded-xl p-4 text-center"
                >
                  <span className="text-3xl mb-2 block">{achievement.icon}</span>
                  <p className="text-sm font-medium">{achievement.name[language]}</p>
                </div>
              ))}
              {/* Locked achievements placeholder */}
              {[1, 2, 3].map((i) => (
                <div
                  key={`locked-${i}`}
                  className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 text-center opacity-50"
                >
                  <span className="text-3xl mb-2 block">🔒</span>
                  <p className="text-sm text-muted">???</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
