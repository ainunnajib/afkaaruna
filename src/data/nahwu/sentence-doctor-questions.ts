import type { SentenceDoctorQuestion } from '@/types';

export const sentenceDoctorQuestions: SentenceDoctorQuestion[] = [
  // ============================================
  // Level 1 - Basic: Mubtada-Khabar, Fa'il, Maf'ul Bih
  // ============================================

  // Mubtada-Khabar (Subject-Predicate) errors
  {
    id: 'sd-001',
    incorrectSentence: 'الطالبَ مجتهدٌ',
    correctSentence: 'الطالبُ مجتهدٌ',
    errorType: 'irab',
    errorPosition: 0,
    explanation: {
      ar: 'المبتدأ مرفوع دائماً، والصحيح: الطالبُ (بالضمة)',
      id: 'Mubtada selalu marfu\' (rafa\'). Yang benar: الطالبُ dengan dhammah',
      en: 'The subject (mubtada) is always in the nominative case (marfu\'). Correct: الطالبُ with damma',
    },
    options: ['الطالبُ', 'الطالبَ', 'الطالبِ'],
  },
  {
    id: 'sd-002',
    incorrectSentence: 'البيتُ كبيرٍ',
    correctSentence: 'البيتُ كبيرٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الخبر مرفوع مثل المبتدأ، والصحيح: كبيرٌ (بالضمة)',
      id: 'Khabar marfu\' seperti mubtada. Yang benar: كبيرٌ dengan dhammah',
      en: 'The predicate (khabar) is nominative like the subject. Correct: كبيرٌ with damma',
    },
    options: ['كبيرٌ', 'كبيرٍ', 'كبيرَ'],
  },
  {
    id: 'sd-003',
    incorrectSentence: 'المعلمُ نشيطَ',
    correctSentence: 'المعلمُ نشيطٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الخبر يجب أن يكون مرفوعاً: نشيطٌ',
      id: 'Khabar harus marfu\': نشيطٌ',
      en: 'The predicate must be nominative: نشيطٌ',
    },
    options: ['نشيطٌ', 'نشيطَ', 'نشيطِ'],
  },
  {
    id: 'sd-004',
    incorrectSentence: 'الكتابِ مفيدٌ',
    correctSentence: 'الكتابُ مفيدٌ',
    errorType: 'irab',
    errorPosition: 0,
    explanation: {
      ar: 'المبتدأ مرفوع: الكتابُ',
      id: 'Mubtada harus marfu\': الكتابُ',
      en: 'The subject must be nominative: الكتابُ',
    },
    options: ['الكتابُ', 'الكتابِ', 'الكتابَ'],
  },
  {
    id: 'sd-005',
    incorrectSentence: 'السماءَ صافيةٌ',
    correctSentence: 'السماءُ صافيةٌ',
    errorType: 'irab',
    errorPosition: 0,
    explanation: {
      ar: 'المبتدأ مرفوع: السماءُ',
      id: 'Mubtada harus marfu\': السماءُ',
      en: 'The subject must be nominative: السماءُ',
    },
    options: ['السماءُ', 'السماءَ', 'السماءِ'],
  },
  {
    id: 'sd-006',
    incorrectSentence: 'الماءُ باردٍ',
    correctSentence: 'الماءُ باردٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الخبر مرفوع: باردٌ',
      id: 'Khabar harus marfu\': باردٌ',
      en: 'The predicate must be nominative: باردٌ',
    },
    options: ['باردٌ', 'باردٍ', 'باردَ'],
  },

  // Fa'il (Subject of verb) errors
  {
    id: 'sd-007',
    incorrectSentence: 'ذهبَ الولدَ إلى المدرسةِ',
    correctSentence: 'ذهبَ الولدُ إلى المدرسةِ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الفاعل مرفوع دائماً، والصحيح: الولدُ (بالضمة)',
      id: 'Fa\'il (pelaku) selalu marfu\'. Yang benar: الولدُ dengan dhammah',
      en: 'The subject of the verb (fa\'il) is always nominative. Correct: الولدُ with damma',
    },
    options: ['الولدُ', 'الولدَ', 'الولدِ'],
  },
  {
    id: 'sd-008',
    incorrectSentence: 'كتبَ الطالبِ الدرسَ',
    correctSentence: 'كتبَ الطالبُ الدرسَ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الفاعل مرفوع: الطالبُ',
      id: 'Fa\'il harus marfu\': الطالبُ',
      en: 'The subject must be nominative: الطالبُ',
    },
    options: ['الطالبُ', 'الطالبِ', 'الطالبَ'],
  },
  {
    id: 'sd-009',
    incorrectSentence: 'جاءَ المعلمَ إلى الفصلِ',
    correctSentence: 'جاءَ المعلمُ إلى الفصلِ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الفاعل مرفوع: المعلمُ',
      id: 'Fa\'il harus marfu\': المعلمُ',
      en: 'The subject must be nominative: المعلمُ',
    },
    options: ['المعلمُ', 'المعلمَ', 'المعلمِ'],
  },
  {
    id: 'sd-010',
    incorrectSentence: 'نامَ الطفلِ مبكراً',
    correctSentence: 'نامَ الطفلُ مبكراً',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الفاعل مرفوع: الطفلُ',
      id: 'Fa\'il harus marfu\': الطفلُ',
      en: 'The subject must be nominative: الطفلُ',
    },
    options: ['الطفلُ', 'الطفلِ', 'الطفلَ'],
  },

  // Maf'ul bihi (Object) errors
  {
    id: 'sd-011',
    incorrectSentence: 'قرأَ المعلمُ الكتابُ',
    correctSentence: 'قرأَ المعلمُ الكتابَ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'المفعول به منصوب دائماً، والصحيح: الكتابَ (بالفتحة)',
      id: 'Maf\'ul bih (objek) selalu manshub. Yang benar: الكتابَ dengan fathah',
      en: 'The object (maf\'ul bihi) is always in the accusative case. Correct: الكتابَ with fatha',
    },
    options: ['الكتابَ', 'الكتابُ', 'الكتابِ'],
  },
  {
    id: 'sd-012',
    incorrectSentence: 'شربَ الولدُ الماءُ',
    correctSentence: 'شربَ الولدُ الماءَ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'المفعول به منصوب: الماءَ',
      id: 'Maf\'ul bih harus manshub: الماءَ',
      en: 'The object must be accusative: الماءَ',
    },
    options: ['الماءَ', 'الماءُ', 'الماءِ'],
  },
  {
    id: 'sd-013',
    incorrectSentence: 'أكلَ الطالبُ الطعامِ',
    correctSentence: 'أكلَ الطالبُ الطعامَ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'المفعول به منصوب: الطعامَ',
      id: 'Maf\'ul bih harus manshub: الطعامَ',
      en: 'The object must be accusative: الطعامَ',
    },
    options: ['الطعامَ', 'الطعامِ', 'الطعامُ'],
  },
  {
    id: 'sd-014',
    incorrectSentence: 'فتحَ الأبُ البابِ',
    correctSentence: 'فتحَ الأبُ البابَ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'المفعول به منصوب: البابَ',
      id: 'Maf\'ul bih harus manshub: البابَ',
      en: 'The object must be accusative: البابَ',
    },
    options: ['البابَ', 'البابِ', 'البابُ'],
  },
  {
    id: 'sd-015',
    incorrectSentence: 'سمعَ الطالبُ الأذانِ',
    correctSentence: 'سمعَ الطالبُ الأذانَ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'المفعول به منصوب: الأذانَ',
      id: 'Maf\'ul bih harus manshub: الأذانَ',
      en: 'The object must be accusative: الأذانَ',
    },
    options: ['الأذانَ', 'الأذانِ', 'الأذانُ'],
  },

  // ============================================
  // Level 2 - Intermediate: Jar-Majrur, Inna, Kana, Idhafah
  // ============================================

  // Jar-Majrur (Preposition + Noun) errors
  {
    id: 'sd-016',
    incorrectSentence: 'سافرَ إلى المدينةُ',
    correctSentence: 'سافرَ إلى المدينةِ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الاسم بعد حرف الجر مجرور، والصحيح: المدينةِ (بالكسرة)',
      id: 'Kata setelah huruf jar harus majrur. Yang benar: المدينةِ dengan kasrah',
      en: 'Nouns after prepositions are in the genitive case. Correct: المدينةِ with kasra',
    },
    options: ['المدينةِ', 'المدينةُ', 'المدينةَ'],
  },
  {
    id: 'sd-017',
    incorrectSentence: 'خرجَ منَ البيتُ',
    correctSentence: 'خرجَ منَ البيتِ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الاسم بعد حرف الجر مجرور: البيتِ',
      id: 'Kata setelah huruf jar harus majrur: البيتِ',
      en: 'Noun after preposition must be genitive: البيتِ',
    },
    options: ['البيتِ', 'البيتُ', 'البيتَ'],
  },
  {
    id: 'sd-018',
    incorrectSentence: 'جلسَ على الكرسيُّ',
    correctSentence: 'جلسَ على الكرسيِّ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الاسم بعد حرف الجر مجرور: الكرسيِّ',
      id: 'Kata setelah huruf jar harus majrur: الكرسيِّ',
      en: 'Noun after preposition must be genitive: الكرسيِّ',
    },
    options: ['الكرسيِّ', 'الكرسيُّ', 'الكرسيَّ'],
  },
  {
    id: 'sd-019',
    incorrectSentence: 'ذهبَ إلى السوقَ',
    correctSentence: 'ذهبَ إلى السوقِ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الاسم بعد حرف الجر مجرور: السوقِ',
      id: 'Kata setelah huruf jar harus majrur: السوقِ',
      en: 'Noun after preposition must be genitive: السوقِ',
    },
    options: ['السوقِ', 'السوقَ', 'السوقُ'],
  },
  {
    id: 'sd-020',
    incorrectSentence: 'رجعَ منَ المدرسةُ',
    correctSentence: 'رجعَ منَ المدرسةِ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الاسم بعد حرف الجر مجرور: المدرسةِ',
      id: 'Kata setelah huruf jar harus majrur: المدرسةِ',
      en: 'Noun after preposition must be genitive: المدرسةِ',
    },
    options: ['المدرسةِ', 'المدرسةُ', 'المدرسةَ'],
  },
  {
    id: 'sd-021',
    incorrectSentence: 'كتبَ بالقلمُ',
    correctSentence: 'كتبَ بالقلمِ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الاسم بعد حرف الجر مجرور: بالقلمِ',
      id: 'Kata setelah huruf jar harus majrur: بالقلمِ',
      en: 'Noun after preposition must be genitive: بالقلمِ',
    },
    options: ['بالقلمِ', 'بالقلمُ', 'بالقلمَ'],
  },

  // Inna and its sisters
  {
    id: 'sd-022',
    incorrectSentence: 'إنَّ الطالبُ مجتهدٌ',
    correctSentence: 'إنَّ الطالبَ مجتهدٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'اسم إنَّ منصوب، والصحيح: الطالبَ (بالفتحة)',
      id: 'Isim inna selalu manshub. Yang benar: الطالبَ dengan fathah',
      en: 'The noun after inna is accusative. Correct: الطالبَ with fatha',
    },
    options: ['الطالبَ', 'الطالبُ', 'الطالبِ'],
  },
  {
    id: 'sd-023',
    incorrectSentence: 'إنَّ العلمُ نورٌ',
    correctSentence: 'إنَّ العلمَ نورٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'اسم إنَّ منصوب: العلمَ',
      id: 'Isim inna harus manshub: العلمَ',
      en: 'Noun after inna must be accusative: العلمَ',
    },
    options: ['العلمَ', 'العلمُ', 'العلمِ'],
  },
  {
    id: 'sd-024',
    incorrectSentence: 'لكنَّ الامتحانِ صعبٌ',
    correctSentence: 'لكنَّ الامتحانَ صعبٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'اسم لكنَّ منصوب: الامتحانَ',
      id: 'Isim lakinna harus manshub: الامتحانَ',
      en: 'Noun after lakinna must be accusative: الامتحانَ',
    },
    options: ['الامتحانَ', 'الامتحانِ', 'الامتحانُ'],
  },
  {
    id: 'sd-025',
    incorrectSentence: 'لعلَّ الجوُّ يتحسنُ',
    correctSentence: 'لعلَّ الجوَّ يتحسنُ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'اسم لعلَّ منصوب: الجوَّ',
      id: 'Isim la\'alla harus manshub: الجوَّ',
      en: 'Noun after la\'alla must be accusative: الجوَّ',
    },
    options: ['الجوَّ', 'الجوُّ', 'الجوِّ'],
  },
  {
    id: 'sd-026',
    incorrectSentence: 'كأنَّ القمرُ مصباحٌ',
    correctSentence: 'كأنَّ القمرَ مصباحٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'اسم كأنَّ منصوب: القمرَ',
      id: 'Isim ka\'anna harus manshub: القمرَ',
      en: 'Noun after ka\'anna must be accusative: القمرَ',
    },
    options: ['القمرَ', 'القمرُ', 'القمرِ'],
  },
  {
    id: 'sd-027',
    incorrectSentence: 'ليتَ الشبابُ يعودُ',
    correctSentence: 'ليتَ الشبابَ يعودُ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'اسم ليتَ منصوب: الشبابَ',
      id: 'Isim laita harus manshub: الشبابَ',
      en: 'Noun after laita must be accusative: الشبابَ',
    },
    options: ['الشبابَ', 'الشبابُ', 'الشبابِ'],
  },

  // Kana and its sisters
  {
    id: 'sd-028',
    incorrectSentence: 'كانَ الجوُّ جميلٌ',
    correctSentence: 'كانَ الجوُّ جميلاً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'خبر كان منصوب، والصحيح: جميلاً (بالفتحة)',
      id: 'Khabar kana selalu manshub. Yang benar: جميلاً dengan fathah',
      en: 'The predicate of kana is accusative. Correct: جميلاً with fatha',
    },
    options: ['جميلاً', 'جميلٌ', 'جميلٍ'],
  },
  {
    id: 'sd-029',
    incorrectSentence: 'كانَ الطالبُ مجتهدٌ',
    correctSentence: 'كانَ الطالبُ مجتهداً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'خبر كان منصوب: مجتهداً',
      id: 'Khabar kana harus manshub: مجتهداً',
      en: 'Predicate of kana must be accusative: مجتهداً',
    },
    options: ['مجتهداً', 'مجتهدٌ', 'مجتهدٍ'],
  },
  {
    id: 'sd-030',
    incorrectSentence: 'أصبحَ الولدُ سعيدٌ',
    correctSentence: 'أصبحَ الولدُ سعيداً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'خبر أصبح منصوب: سعيداً',
      id: 'Khabar ashbaha harus manshub: سعيداً',
      en: 'Predicate of asbaha must be accusative: سعيداً',
    },
    options: ['سعيداً', 'سعيدٌ', 'سعيدٍ'],
  },
  {
    id: 'sd-031',
    incorrectSentence: 'ليسَ المطرُ غزيرٌ',
    correctSentence: 'ليسَ المطرُ غزيراً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'خبر ليس منصوب: غزيراً',
      id: 'Khabar laisa harus manshub: غزيراً',
      en: 'Predicate of laisa must be accusative: غزيراً',
    },
    options: ['غزيراً', 'غزيرٌ', 'غزيرٍ'],
  },

  // Mudaf-Mudaf ilaih (Idhafah)
  {
    id: 'sd-032',
    incorrectSentence: 'كتابُ الطالبُ',
    correctSentence: 'كتابُ الطالبِ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'المضاف إليه مجرور دائماً، والصحيح: الطالبِ (بالكسرة)',
      id: 'Mudhaf ilaih selalu majrur. Yang benar: الطالبِ dengan kasrah',
      en: 'The mudaf ilaihi is always genitive. Correct: الطالبِ with kasra',
    },
    options: ['الطالبِ', 'الطالبُ', 'الطالبَ'],
  },
  {
    id: 'sd-033',
    incorrectSentence: 'بابُ المسجدُ',
    correctSentence: 'بابُ المسجدِ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'المضاف إليه مجرور: المسجدِ',
      id: 'Mudhaf ilaih harus majrur: المسجدِ',
      en: 'Mudaf ilaihi must be genitive: المسجدِ',
    },
    options: ['المسجدِ', 'المسجدُ', 'المسجدَ'],
  },
  {
    id: 'sd-034',
    incorrectSentence: 'مديرُ المدرسةَ',
    correctSentence: 'مديرُ المدرسةِ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'المضاف إليه مجرور: المدرسةِ',
      id: 'Mudhaf ilaih harus majrur: المدرسةِ',
      en: 'Mudaf ilaihi must be genitive: المدرسةِ',
    },
    options: ['المدرسةِ', 'المدرسةَ', 'المدرسةُ'],
  },
  {
    id: 'sd-035',
    incorrectSentence: 'صديقُ أبيُ',
    correctSentence: 'صديقُ أبي',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'المضاف إليه مجرور. "أبي" من الأسماء الخمسة، تجر بالياء',
      id: 'Mudhaf ilaih harus majrur. "أبي" termasuk asma\' khamsah, majrur dengan ya\'',
      en: 'Mudaf ilaihi must be genitive. "أبي" is one of the five nouns, genitive with ya\'',
    },
    options: ['أبي', 'أبيُ', 'أبيَ'],
  },

  // ============================================
  // Level 3 - Advanced: Na't, Hal, Tamyiz, more complex structures
  // ============================================

  // Na't (Adjective) agreement
  {
    id: 'sd-036',
    incorrectSentence: 'رأيتُ طالباً مجتهدٌ',
    correctSentence: 'رأيتُ طالباً مجتهداً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الصفة تتبع الموصوف في الإعراب. الموصوف منصوب فالصفة منصوبة: مجتهداً',
      id: 'Sifat mengikuti mausuf dalam i\'rab. Mausuf manshub maka sifat juga manshub: مجتهداً',
      en: 'The adjective follows the noun in case. The noun is accusative, so the adjective is too: مجتهداً',
    },
    options: ['مجتهداً', 'مجتهدٌ', 'مجتهدٍ'],
  },
  {
    id: 'sd-037',
    incorrectSentence: 'مررتُ برجلٍ طويلاً',
    correctSentence: 'مررتُ برجلٍ طويلٍ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الصفة تتبع الموصوف: رجلٍ مجرور فالصفة مجرورة: طويلٍ',
      id: 'Sifat mengikuti mausuf: رجلٍ majrur maka sifat juga majrur: طويلٍ',
      en: 'Adjective follows the noun: رجلٍ is genitive so adjective is also genitive: طويلٍ',
    },
    options: ['طويلٍ', 'طويلاً', 'طويلٌ'],
  },
  {
    id: 'sd-038',
    incorrectSentence: 'في البيتِ الكبيرُ',
    correctSentence: 'في البيتِ الكبيرِ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الصفة تتبع الموصوف: البيتِ مجرور فالصفة مجرورة: الكبيرِ',
      id: 'Sifat mengikuti mausuf: البيتِ majrur maka sifat juga majrur: الكبيرِ',
      en: 'Adjective follows the noun in case: الكبيرِ (genitive like البيتِ)',
    },
    options: ['الكبيرِ', 'الكبيرُ', 'الكبيرَ'],
  },

  // Hal (Circumstantial accusative)
  {
    id: 'sd-039',
    incorrectSentence: 'جاءَ الولدُ مسرورٌ',
    correctSentence: 'جاءَ الولدُ مسروراً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الحال منصوب دائماً: مسروراً',
      id: 'Hal selalu manshub: مسروراً',
      en: 'The hal (circumstantial) is always accusative: مسروراً',
    },
    options: ['مسروراً', 'مسرورٌ', 'مسرورٍ'],
  },
  {
    id: 'sd-040',
    incorrectSentence: 'رجعَ الأبُ متعبٌ',
    correctSentence: 'رجعَ الأبُ متعباً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الحال منصوب: متعباً',
      id: 'Hal harus manshub: متعباً',
      en: 'The hal must be accusative: متعباً',
    },
    options: ['متعباً', 'متعبٌ', 'متعبٍ'],
  },
  {
    id: 'sd-041',
    incorrectSentence: 'دخلَ المسجدَ خاشعٌ',
    correctSentence: 'دخلَ المسجدَ خاشعاً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الحال منصوب: خاشعاً',
      id: 'Hal harus manshub: خاشعاً',
      en: 'The hal must be accusative: خاشعاً',
    },
    options: ['خاشعاً', 'خاشعٌ', 'خاشعٍ'],
  },

  // Tamyiz (Specification)
  {
    id: 'sd-042',
    incorrectSentence: 'عندي عشرونَ كتابٌ',
    correctSentence: 'عندي عشرونَ كتاباً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'تمييز العدد منصوب: كتاباً',
      id: 'Tamyiz bilangan harus manshub: كتاباً',
      en: 'The number specification (tamyiz) is accusative: كتاباً',
    },
    options: ['كتاباً', 'كتابٌ', 'كتابٍ'],
  },
  {
    id: 'sd-043',
    incorrectSentence: 'اشتريتُ رطلاً تمرٌ',
    correctSentence: 'اشتريتُ رطلاً تمراً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'التمييز منصوب: تمراً',
      id: 'Tamyiz harus manshub: تمراً',
      en: 'The tamyiz must be accusative: تمراً',
    },
    options: ['تمراً', 'تمرٌ', 'تمرٍ'],
  },

  // Verb-Subject agreement
  {
    id: 'sd-044',
    incorrectSentence: 'ذهبتْ الطلابُ إلى المدرسةِ',
    correctSentence: 'ذهبَ الطلابُ إلى المدرسةِ',
    errorType: 'agreement',
    errorPosition: 0,
    explanation: {
      ar: 'الفعل يكون مفرداً مع الفاعل الجمع المذكر إذا تقدم: ذهبَ',
      id: 'Fi\'il tetap mufrad jika fa\'il jamak mudzakkar setelahnya: ذهبَ',
      en: 'Verb remains singular when preceding a masculine plural subject: ذهبَ',
    },
    options: ['ذهبَ', 'ذهبتْ', 'ذهبوا'],
  },
  {
    id: 'sd-045',
    incorrectSentence: 'قرأوا الطلابُ الدرسَ',
    correctSentence: 'قرأَ الطلابُ الدرسَ',
    errorType: 'agreement',
    errorPosition: 0,
    explanation: {
      ar: 'إذا تقدم الفعل على الفاعل يكون مفرداً: قرأَ',
      id: 'Jika fi\'il mendahului fa\'il, fi\'il harus mufrad: قرأَ',
      en: 'When verb precedes subject, it stays singular: قرأَ',
    },
    options: ['قرأَ', 'قرأوا', 'قرأتْ'],
  },

  // Jazm (Jussive) after lam al-amr and la an-nahiya
  {
    id: 'sd-046',
    incorrectSentence: 'لا تذهبُ إلى هناك',
    correctSentence: 'لا تذهبْ إلى هناك',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الفعل بعد لا الناهية مجزوم بالسكون: تذهبْ',
      id: 'Fi\'il setelah la nahiyah harus majzum dengan sukun: تذهبْ',
      en: 'Verb after la an-nahiya is jussive (jazm): تذهبْ',
    },
    options: ['تذهبْ', 'تذهبُ', 'تذهبَ'],
  },
  {
    id: 'sd-047',
    incorrectSentence: 'لم يكتبُ الدرسَ',
    correctSentence: 'لم يكتبْ الدرسَ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الفعل بعد لم مجزوم: يكتبْ',
      id: 'Fi\'il setelah lam harus majzum: يكتبْ',
      en: 'Verb after lam is jussive: يكتبْ',
    },
    options: ['يكتبْ', 'يكتبُ', 'يكتبَ'],
  },

  // Nasb after an/lan
  {
    id: 'sd-048',
    incorrectSentence: 'أريدُ أنْ أدرسُ',
    correctSentence: 'أريدُ أنْ أدرسَ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الفعل بعد أنْ منصوب بالفتحة: أدرسَ',
      id: 'Fi\'il setelah an harus manshub dengan fathah: أدرسَ',
      en: 'Verb after an is accusative (nasb): أدرسَ',
    },
    options: ['أدرسَ', 'أدرسُ', 'أدرسْ'],
  },
  {
    id: 'sd-049',
    incorrectSentence: 'لنْ أذهبُ غداً',
    correctSentence: 'لنْ أذهبَ غداً',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الفعل بعد لن منصوب: أذهبَ',
      id: 'Fi\'il setelah lan harus manshub: أذهبَ',
      en: 'Verb after lan is accusative: أذهبَ',
    },
    options: ['أذهبَ', 'أذهبُ', 'أذهبْ'],
  },
  {
    id: 'sd-050',
    incorrectSentence: 'يجبُ أنْ نجتهدُ',
    correctSentence: 'يجبُ أنْ نجتهدَ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الفعل بعد أنْ منصوب: نجتهدَ',
      id: 'Fi\'il setelah an harus manshub: نجتهدَ',
      en: 'Verb after an must be accusative: نجتهدَ',
    },
    options: ['نجتهدَ', 'نجتهدُ', 'نجتهدْ'],
  },

  // Munada (Vocative)
  {
    id: 'sd-051',
    incorrectSentence: 'يا طالبٌ اجتهدْ',
    correctSentence: 'يا طالبُ اجتهدْ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'المنادى المفرد المعرفة مبني على الضم: يا طالبُ',
      id: 'Munada mufrad ma\'rifah mabni atas dhammah: يا طالبُ',
      en: 'Definite singular vocative is built on damma: يا طالبُ',
    },
    options: ['طالبُ', 'طالبٌ', 'طالباً'],
  },
  {
    id: 'sd-052',
    incorrectSentence: 'يا أيُّها الطالبَ',
    correctSentence: 'يا أيُّها الطالبُ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'المنادى بعد أيها مرفوع: الطالبُ',
      id: 'Munada setelah ayyuha harus marfu\': الطالبُ',
      en: 'Noun after ayyuha in vocative is nominative: الطالبُ',
    },
    options: ['الطالبُ', 'الطالبَ', 'الطالبِ'],
  },
];

// Difficulty levels
export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

// Get questions by difficulty
export function getQuestionsByDifficulty(difficulty: QuestionDifficulty): SentenceDoctorQuestion[] {
  switch (difficulty) {
    case 'easy':
      return sentenceDoctorQuestions.slice(0, 15); // Basic: Mubtada, Fa'il, Maf'ul
    case 'medium':
      return sentenceDoctorQuestions.slice(15, 35); // Intermediate: Jar, Inna, Kana, Idhafah
    case 'hard':
      return sentenceDoctorQuestions.slice(35); // Advanced: Na't, Hal, Tamyiz, Jazm, Nasb
    default:
      return sentenceDoctorQuestions;
  }
}

// Get questions for a specific level (backward compatible)
export function getQuestionsByLevel(level: number): SentenceDoctorQuestion[] {
  switch (level) {
    case 1:
      return getQuestionsByDifficulty('easy');
    case 2:
      return getQuestionsByDifficulty('medium');
    case 3:
      return getQuestionsByDifficulty('hard');
    default:
      return sentenceDoctorQuestions;
  }
}

// Get random questions with optional difficulty filter
export function getRandomQuestions(count: number, difficulty?: QuestionDifficulty): SentenceDoctorQuestion[] {
  const pool = difficulty ? getQuestionsByDifficulty(difficulty) : sentenceDoctorQuestions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get mixed difficulty questions
export function getMixedQuestions(count: number): SentenceDoctorQuestion[] {
  const easy = getQuestionsByDifficulty('easy');
  const medium = getQuestionsByDifficulty('medium');
  const hard = getQuestionsByDifficulty('hard');

  const easyCount = Math.round(count * 0.4);
  const mediumCount = Math.round(count * 0.35);
  const hardCount = count - easyCount - mediumCount;

  const selected = [
    ...easy.sort(() => Math.random() - 0.5).slice(0, easyCount),
    ...medium.sort(() => Math.random() - 0.5).slice(0, mediumCount),
    ...hard.sort(() => Math.random() - 0.5).slice(0, hardCount),
  ];

  return selected.sort(() => Math.random() - 0.5);
}
