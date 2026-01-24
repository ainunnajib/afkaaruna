'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Card, CardContent, Button } from '@/components/ui';
import { LessonQuiz } from '@/components/games';
import { getNahwuLesson } from '@/data/nahwu/lessons';
import { getLessonQuiz } from '@/data/lesson-quiz-questions';
import { ArrowLeft, BookOpen, Lightbulb, CheckCircle, Gamepad2 } from 'lucide-react';

export default function NahwuTopicPage() {
  const params = useParams();
  const topicId = params.topicId as string;
  const { language, t } = useLanguage();

  const lesson = getNahwuLesson(topicId);
  const quizQuestions = getLessonQuiz(topicId);

  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'id' && 'Pelajaran tidak ditemukan'}
            {language === 'ar' && 'الدرس غير موجود'}
            {language === 'en' && 'Lesson not found'}
          </h1>
          <Link href="/learn">
            <Button>{t('button.back')}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getSectionIcon = (type: string) => {
    switch (type) {
      case 'explanation':
        return <BookOpen className="w-5 h-5" />;
      case 'example':
        return <Lightbulb className="w-5 h-5" />;
      case 'rule':
        return <CheckCircle className="w-5 h-5" />;
      case 'practice':
        return <Gamepad2 className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getSectionColor = (type: string) => {
    switch (type) {
      case 'explanation':
        return 'bg-blue-100 text-blue-600';
      case 'example':
        return 'bg-yellow-100 text-yellow-600';
      case 'rule':
        return 'bg-green-100 text-green-600';
      case 'practice':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link href="/learn" className="inline-flex items-center text-muted hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('button.back')}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
              {t('topic.nahwu')}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{lesson.title[language]}</h1>
          <p className="text-muted">{lesson.description[language]}</p>
        </div>

        {/* Lesson Content */}
        <div className="space-y-6">
          {lesson.sections.map((section, index) => (
            <Card key={index} variant="default">
              <CardContent className="pt-6">
                {section.title && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getSectionColor(section.type)}`}>
                      {getSectionIcon(section.type)}
                    </div>
                    <h2 className="text-lg font-semibold">{section.title[language]}</h2>
                  </div>
                )}

                <div className="text-foreground/80 whitespace-pre-line mb-4">
                  {section.content[language]}
                </div>

                {section.arabicExample && (
                  <div className="bg-accent rounded-xl p-4 mb-4">
                    <p className="arabic-text text-2xl text-center text-primary" dir="rtl">
                      {section.arabicExample}
                    </p>
                  </div>
                )}

                {section.breakdown && (
                  <div className="space-y-3 mt-4">
                    {section.breakdown.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                        <div className="text-center min-w-[80px]">
                          <p className="arabic-text text-lg font-bold text-primary">{item.word}</p>
                          <p className="text-xs text-muted">{item.role}</p>
                        </div>
                        <div className="flex-1 text-sm text-muted">
                          {item.explanation[language]}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'practice' && (
                  <div className="mt-4">
                    <Link href="/play/sentence-doctor">
                      <Button className="w-full">
                        <Gamepad2 className="w-4 h-4 mr-2" />
                        {language === 'id' && 'Main Sentence Doctor'}
                        {language === 'ar' && 'العب طبيب الجمل'}
                        {language === 'en' && 'Play Sentence Doctor'}
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lesson Quiz */}
        {quizQuestions.length > 0 && (
          <div className="mt-8">
            <LessonQuiz questions={quizQuestions} />
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link href="/learn">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'id' && 'Kembali ke Daftar'}
              {language === 'ar' && 'العودة إلى القائمة'}
              {language === 'en' && 'Back to List'}
            </Button>
          </Link>
          <Link href="/play/sentence-doctor">
            <Button>
              {language === 'id' && 'Latihan'}
              {language === 'ar' && 'تدريب'}
              {language === 'en' && 'Practice'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
