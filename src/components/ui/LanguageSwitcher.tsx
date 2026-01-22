'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import type { Language } from '@/types';
import { cn } from '@/lib/utils';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'id', label: 'ID', flag: '🇮🇩' },
  { code: 'ar', label: 'ع', flag: '🇸🇦' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-accent rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
            language === lang.code
              ? 'bg-primary text-white'
              : 'text-foreground hover:bg-white/50'
          )}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
    </div>
  );
}
