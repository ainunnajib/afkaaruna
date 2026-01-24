export interface ConjugationQuestion {
  id: string;
  verb: string; // base verb (past tense, 3rd person masculine singular)
  meaning: { ar: string; id: string; en: string };
  tense: 'past' | 'present' | 'command';
  pronoun: string; // Arabic pronoun
  pronounLabel: { ar: string; id: string; en: string };
  correctAnswer: string;
  options: string[];
}

export const conjugationQuestions: ConjugationQuestion[] = [
  // كَتَبَ - to write
  { id: 'cj-001', verb: 'كَتَبَ', meaning: { ar: 'كتب', id: 'Menulis', en: 'To write' }, tense: 'past', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'كَتَبَ', options: ['كَتَبَ', 'كَتَبَتْ', 'كَتَبْتُ'] },
  { id: 'cj-002', verb: 'كَتَبَ', meaning: { ar: 'كتب', id: 'Menulis', en: 'To write' }, tense: 'past', pronoun: 'هي', pronounLabel: { ar: 'هي', id: 'Dia (pr)', en: 'She' }, correctAnswer: 'كَتَبَتْ', options: ['كَتَبَتْ', 'كَتَبَ', 'كَتَبُوا'] },
  { id: 'cj-003', verb: 'كَتَبَ', meaning: { ar: 'كتب', id: 'Menulis', en: 'To write' }, tense: 'past', pronoun: 'أنا', pronounLabel: { ar: 'أنا', id: 'Saya', en: 'I' }, correctAnswer: 'كَتَبْتُ', options: ['كَتَبْتُ', 'كَتَبَ', 'كَتَبْنَا'] },
  { id: 'cj-004', verb: 'كَتَبَ', meaning: { ar: 'كتب', id: 'Menulis', en: 'To write' }, tense: 'past', pronoun: 'هم', pronounLabel: { ar: 'هم', id: 'Mereka (lk)', en: 'They (m)' }, correctAnswer: 'كَتَبُوا', options: ['كَتَبُوا', 'كَتَبْنَ', 'كَتَبَ'] },
  { id: 'cj-005', verb: 'كَتَبَ', meaning: { ar: 'كتب', id: 'Menulis', en: 'To write' }, tense: 'past', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'كَتَبْتَ', options: ['كَتَبْتَ', 'كَتَبْتِ', 'كَتَبْتُ'] },
  { id: 'cj-006', verb: 'كَتَبَ', meaning: { ar: 'كتب', id: 'Menulis', en: 'To write' }, tense: 'present', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'يَكْتُبُ', options: ['يَكْتُبُ', 'تَكْتُبُ', 'أَكْتُبُ'] },
  { id: 'cj-007', verb: 'كَتَبَ', meaning: { ar: 'كتب', id: 'Menulis', en: 'To write' }, tense: 'present', pronoun: 'هي', pronounLabel: { ar: 'هي', id: 'Dia (pr)', en: 'She' }, correctAnswer: 'تَكْتُبُ', options: ['تَكْتُبُ', 'يَكْتُبُ', 'نَكْتُبُ'] },
  { id: 'cj-008', verb: 'كَتَبَ', meaning: { ar: 'كتب', id: 'Menulis', en: 'To write' }, tense: 'present', pronoun: 'أنا', pronounLabel: { ar: 'أنا', id: 'Saya', en: 'I' }, correctAnswer: 'أَكْتُبُ', options: ['أَكْتُبُ', 'يَكْتُبُ', 'نَكْتُبُ'] },
  { id: 'cj-009', verb: 'كَتَبَ', meaning: { ar: 'كتب', id: 'Menulis', en: 'To write' }, tense: 'command', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'اُكْتُبْ', options: ['اُكْتُبْ', 'اُكْتُبِي', 'اُكْتُبُوا'] },

  // ذَهَبَ - to go
  { id: 'cj-010', verb: 'ذَهَبَ', meaning: { ar: 'ذهب', id: 'Pergi', en: 'To go' }, tense: 'past', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'ذَهَبَ', options: ['ذَهَبَ', 'ذَهَبَتْ', 'ذَهَبْتُ'] },
  { id: 'cj-011', verb: 'ذَهَبَ', meaning: { ar: 'ذهب', id: 'Pergi', en: 'To go' }, tense: 'past', pronoun: 'هي', pronounLabel: { ar: 'هي', id: 'Dia (pr)', en: 'She' }, correctAnswer: 'ذَهَبَتْ', options: ['ذَهَبَتْ', 'ذَهَبَ', 'ذَهَبْتُ'] },
  { id: 'cj-012', verb: 'ذَهَبَ', meaning: { ar: 'ذهب', id: 'Pergi', en: 'To go' }, tense: 'past', pronoun: 'نحن', pronounLabel: { ar: 'نحن', id: 'Kami', en: 'We' }, correctAnswer: 'ذَهَبْنَا', options: ['ذَهَبْنَا', 'ذَهَبُوا', 'ذَهَبْتُم'] },
  { id: 'cj-013', verb: 'ذَهَبَ', meaning: { ar: 'ذهب', id: 'Pergi', en: 'To go' }, tense: 'present', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'يَذْهَبُ', options: ['يَذْهَبُ', 'تَذْهَبُ', 'أَذْهَبُ'] },
  { id: 'cj-014', verb: 'ذَهَبَ', meaning: { ar: 'ذهب', id: 'Pergi', en: 'To go' }, tense: 'present', pronoun: 'نحن', pronounLabel: { ar: 'نحن', id: 'Kami', en: 'We' }, correctAnswer: 'نَذْهَبُ', options: ['نَذْهَبُ', 'يَذْهَبُ', 'تَذْهَبُ'] },
  { id: 'cj-015', verb: 'ذَهَبَ', meaning: { ar: 'ذهب', id: 'Pergi', en: 'To go' }, tense: 'command', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'اِذْهَبْ', options: ['اِذْهَبْ', 'اِذْهَبِي', 'اِذْهَبُوا'] },

  // جَلَسَ - to sit
  { id: 'cj-016', verb: 'جَلَسَ', meaning: { ar: 'جلس', id: 'Duduk', en: 'To sit' }, tense: 'past', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'جَلَسَ', options: ['جَلَسَ', 'جَلَسَتْ', 'جَلَسْتُ'] },
  { id: 'cj-017', verb: 'جَلَسَ', meaning: { ar: 'جلس', id: 'Duduk', en: 'To sit' }, tense: 'past', pronoun: 'أنتِ', pronounLabel: { ar: 'أنتِ', id: 'Kamu (pr)', en: 'You (f)' }, correctAnswer: 'جَلَسْتِ', options: ['جَلَسْتِ', 'جَلَسْتَ', 'جَلَسْتُ'] },
  { id: 'cj-018', verb: 'جَلَسَ', meaning: { ar: 'جلس', id: 'Duduk', en: 'To sit' }, tense: 'present', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'يَجْلِسُ', options: ['يَجْلِسُ', 'تَجْلِسُ', 'أَجْلِسُ'] },
  { id: 'cj-019', verb: 'جَلَسَ', meaning: { ar: 'جلس', id: 'Duduk', en: 'To sit' }, tense: 'present', pronoun: 'هم', pronounLabel: { ar: 'هم', id: 'Mereka (lk)', en: 'They (m)' }, correctAnswer: 'يَجْلِسُونَ', options: ['يَجْلِسُونَ', 'تَجْلِسُونَ', 'يَجْلِسْنَ'] },
  { id: 'cj-020', verb: 'جَلَسَ', meaning: { ar: 'جلس', id: 'Duduk', en: 'To sit' }, tense: 'command', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'اِجْلِسْ', options: ['اِجْلِسْ', 'اِجْلِسِي', 'اِجْلِسُوا'] },

  // قَرَأَ - to read
  { id: 'cj-021', verb: 'قَرَأَ', meaning: { ar: 'قرأ', id: 'Membaca', en: 'To read' }, tense: 'past', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'قَرَأَ', options: ['قَرَأَ', 'قَرَأَتْ', 'قَرَأْتُ'] },
  { id: 'cj-022', verb: 'قَرَأَ', meaning: { ar: 'قرأ', id: 'Membaca', en: 'To read' }, tense: 'past', pronoun: 'هم', pronounLabel: { ar: 'هم', id: 'Mereka (lk)', en: 'They (m)' }, correctAnswer: 'قَرَأُوا', options: ['قَرَأُوا', 'قَرَأْنَ', 'قَرَأْتُم'] },
  { id: 'cj-023', verb: 'قَرَأَ', meaning: { ar: 'قرأ', id: 'Membaca', en: 'To read' }, tense: 'present', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'يَقْرَأُ', options: ['يَقْرَأُ', 'تَقْرَأُ', 'أَقْرَأُ'] },
  { id: 'cj-024', verb: 'قَرَأَ', meaning: { ar: 'قرأ', id: 'Membaca', en: 'To read' }, tense: 'present', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'تَقْرَأُ', options: ['تَقْرَأُ', 'يَقْرَأُ', 'أَقْرَأُ'] },
  { id: 'cj-025', verb: 'قَرَأَ', meaning: { ar: 'قرأ', id: 'Membaca', en: 'To read' }, tense: 'command', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'اِقْرَأْ', options: ['اِقْرَأْ', 'اِقْرَأِي', 'اِقْرَأُوا'] },

  // فَتَحَ - to open
  { id: 'cj-026', verb: 'فَتَحَ', meaning: { ar: 'فتح', id: 'Membuka', en: 'To open' }, tense: 'past', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'فَتَحَ', options: ['فَتَحَ', 'فَتَحَتْ', 'فَتَحْتُ'] },
  { id: 'cj-027', verb: 'فَتَحَ', meaning: { ar: 'فتح', id: 'Membuka', en: 'To open' }, tense: 'past', pronoun: 'أنتُم', pronounLabel: { ar: 'أنتُم', id: 'Kalian (lk)', en: 'You (pl.m)' }, correctAnswer: 'فَتَحْتُم', options: ['فَتَحْتُم', 'فَتَحُوا', 'فَتَحْنَا'] },
  { id: 'cj-028', verb: 'فَتَحَ', meaning: { ar: 'فتح', id: 'Membuka', en: 'To open' }, tense: 'present', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'يَفْتَحُ', options: ['يَفْتَحُ', 'تَفْتَحُ', 'نَفْتَحُ'] },
  { id: 'cj-029', verb: 'فَتَحَ', meaning: { ar: 'فتح', id: 'Membuka', en: 'To open' }, tense: 'present', pronoun: 'هي', pronounLabel: { ar: 'هي', id: 'Dia (pr)', en: 'She' }, correctAnswer: 'تَفْتَحُ', options: ['تَفْتَحُ', 'يَفْتَحُ', 'أَفْتَحُ'] },

  // سَمِعَ - to hear
  { id: 'cj-030', verb: 'سَمِعَ', meaning: { ar: 'سمع', id: 'Mendengar', en: 'To hear' }, tense: 'past', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'سَمِعَ', options: ['سَمِعَ', 'سَمِعَتْ', 'سَمِعْتُ'] },
  { id: 'cj-031', verb: 'سَمِعَ', meaning: { ar: 'سمع', id: 'Mendengar', en: 'To hear' }, tense: 'past', pronoun: 'هي', pronounLabel: { ar: 'هي', id: 'Dia (pr)', en: 'She' }, correctAnswer: 'سَمِعَتْ', options: ['سَمِعَتْ', 'سَمِعَ', 'سَمِعْتُ'] },
  { id: 'cj-032', verb: 'سَمِعَ', meaning: { ar: 'سمع', id: 'Mendengar', en: 'To hear' }, tense: 'present', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'يَسْمَعُ', options: ['يَسْمَعُ', 'تَسْمَعُ', 'أَسْمَعُ'] },
  { id: 'cj-033', verb: 'سَمِعَ', meaning: { ar: 'سمع', id: 'Mendengar', en: 'To hear' }, tense: 'present', pronoun: 'نحن', pronounLabel: { ar: 'نحن', id: 'Kami', en: 'We' }, correctAnswer: 'نَسْمَعُ', options: ['نَسْمَعُ', 'يَسْمَعُ', 'تَسْمَعُ'] },
  { id: 'cj-034', verb: 'سَمِعَ', meaning: { ar: 'سمع', id: 'Mendengar', en: 'To hear' }, tense: 'command', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'اِسْمَعْ', options: ['اِسْمَعْ', 'اِسْمَعِي', 'اِسْمَعُوا'] },

  // عَلِمَ - to know
  { id: 'cj-035', verb: 'عَلِمَ', meaning: { ar: 'علم', id: 'Mengetahui', en: 'To know' }, tense: 'past', pronoun: 'أنا', pronounLabel: { ar: 'أنا', id: 'Saya', en: 'I' }, correctAnswer: 'عَلِمْتُ', options: ['عَلِمْتُ', 'عَلِمَ', 'عَلِمْنَا'] },
  { id: 'cj-036', verb: 'عَلِمَ', meaning: { ar: 'علم', id: 'Mengetahui', en: 'To know' }, tense: 'present', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'يَعْلَمُ', options: ['يَعْلَمُ', 'تَعْلَمُ', 'أَعْلَمُ'] },

  // نَصَرَ - to help
  { id: 'cj-037', verb: 'نَصَرَ', meaning: { ar: 'نصر', id: 'Menolong', en: 'To help' }, tense: 'past', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'نَصَرَ', options: ['نَصَرَ', 'نَصَرَتْ', 'نَصَرْتُ'] },
  { id: 'cj-038', verb: 'نَصَرَ', meaning: { ar: 'نصر', id: 'Menolong', en: 'To help' }, tense: 'present', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'يَنْصُرُ', options: ['يَنْصُرُ', 'تَنْصُرُ', 'أَنْصُرُ'] },
  { id: 'cj-039', verb: 'نَصَرَ', meaning: { ar: 'نصر', id: 'Menolong', en: 'To help' }, tense: 'present', pronoun: 'هم', pronounLabel: { ar: 'هم', id: 'Mereka (lk)', en: 'They (m)' }, correctAnswer: 'يَنْصُرُونَ', options: ['يَنْصُرُونَ', 'تَنْصُرُونَ', 'يَنْصُرْنَ'] },
  { id: 'cj-040', verb: 'نَصَرَ', meaning: { ar: 'نصر', id: 'Menolong', en: 'To help' }, tense: 'command', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'اُنْصُرْ', options: ['اُنْصُرْ', 'اُنْصُرِي', 'اُنْصُرُوا'] },

  // دَرَسَ - to study
  { id: 'cj-041', verb: 'دَرَسَ', meaning: { ar: 'درس', id: 'Belajar', en: 'To study' }, tense: 'past', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'دَرَسَ', options: ['دَرَسَ', 'دَرَسَتْ', 'دَرَسْتُ'] },
  { id: 'cj-042', verb: 'دَرَسَ', meaning: { ar: 'درس', id: 'Belajar', en: 'To study' }, tense: 'present', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'تَدْرُسُ', options: ['تَدْرُسُ', 'يَدْرُسُ', 'أَدْرُسُ'] },
  { id: 'cj-043', verb: 'دَرَسَ', meaning: { ar: 'درس', id: 'Belajar', en: 'To study' }, tense: 'past', pronoun: 'نحن', pronounLabel: { ar: 'نحن', id: 'Kami', en: 'We' }, correctAnswer: 'دَرَسْنَا', options: ['دَرَسْنَا', 'دَرَسُوا', 'دَرَسْتُم'] },

  // أَكَلَ - to eat
  { id: 'cj-044', verb: 'أَكَلَ', meaning: { ar: 'أكل', id: 'Makan', en: 'To eat' }, tense: 'past', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'أَكَلَ', options: ['أَكَلَ', 'أَكَلَتْ', 'أَكَلْتُ'] },
  { id: 'cj-045', verb: 'أَكَلَ', meaning: { ar: 'أكل', id: 'Makan', en: 'To eat' }, tense: 'present', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'يَأْكُلُ', options: ['يَأْكُلُ', 'تَأْكُلُ', 'نَأْكُلُ'] },
  { id: 'cj-046', verb: 'أَكَلَ', meaning: { ar: 'أكل', id: 'Makan', en: 'To eat' }, tense: 'command', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'كُلْ', options: ['كُلْ', 'كُلِي', 'كُلُوا'] },

  // شَرِبَ - to drink
  { id: 'cj-047', verb: 'شَرِبَ', meaning: { ar: 'شرب', id: 'Minum', en: 'To drink' }, tense: 'past', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'شَرِبَ', options: ['شَرِبَ', 'شَرِبَتْ', 'شَرِبْتُ'] },
  { id: 'cj-048', verb: 'شَرِبَ', meaning: { ar: 'شرب', id: 'Minum', en: 'To drink' }, tense: 'present', pronoun: 'هو', pronounLabel: { ar: 'هو', id: 'Dia (lk)', en: 'He' }, correctAnswer: 'يَشْرَبُ', options: ['يَشْرَبُ', 'تَشْرَبُ', 'أَشْرَبُ'] },
  { id: 'cj-049', verb: 'شَرِبَ', meaning: { ar: 'شرب', id: 'Minum', en: 'To drink' }, tense: 'present', pronoun: 'أنتِ', pronounLabel: { ar: 'أنتِ', id: 'Kamu (pr)', en: 'You (f)' }, correctAnswer: 'تَشْرَبِينَ', options: ['تَشْرَبِينَ', 'يَشْرَبُ', 'أَشْرَبُ'] },
  { id: 'cj-050', verb: 'شَرِبَ', meaning: { ar: 'شرب', id: 'Minum', en: 'To drink' }, tense: 'command', pronoun: 'أنتَ', pronounLabel: { ar: 'أنتَ', id: 'Kamu (lk)', en: 'You (m)' }, correctAnswer: 'اِشْرَبْ', options: ['اِشْرَبْ', 'اِشْرَبِي', 'اِشْرَبُوا'] },
];

export function getRandomConjugations(count: number): ConjugationQuestion[] {
  const shuffled = [...conjugationQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getConjugationsByVerb(verb: string): ConjugationQuestion[] {
  return conjugationQuestions.filter(q => q.verb === verb);
}

export function getConjugationsByTense(tense: 'past' | 'present' | 'command'): ConjugationQuestion[] {
  return conjugationQuestions.filter(q => q.tense === tense);
}
