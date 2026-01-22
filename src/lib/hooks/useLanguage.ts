'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from '@/types';
import { translations, type TranslationKey } from '@/data/i18n/translations';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'id',
      setLanguage: (lang: Language) => set({ language: lang }),
      t: (key: TranslationKey) => {
        const lang = get().language;
        return translations[key]?.[lang] || translations[key]?.['en'] || key;
      },
    }),
    {
      name: 'afkaaruna-language',
    }
  )
);

// Hook to get direction based on current language
export function useDirection() {
  const { language } = useLanguage();
  return language === 'ar' ? 'rtl' : 'ltr';
}
