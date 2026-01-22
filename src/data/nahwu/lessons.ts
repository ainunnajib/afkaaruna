export interface LessonContent {
  id: string;
  title: { id: string; ar: string; en: string };
  description: { id: string; ar: string; en: string };
  sections: LessonSection[];
}

export interface LessonSection {
  type: 'explanation' | 'example' | 'rule' | 'practice';
  title?: { id: string; ar: string; en: string };
  content: { id: string; ar: string; en: string };
  arabicExample?: string;
  breakdown?: { word: string; role: string; explanation: { id: string; ar: string; en: string } }[];
}

export const nahwuLessons: Record<string, LessonContent> = {
  'mubtada-khabar': {
    id: 'mubtada-khabar',
    title: { id: 'Mubtada & Khabar', ar: 'المبتدأ والخبر', en: 'Subject & Predicate' },
    description: {
      id: 'Pelajari struktur dasar kalimat nominal (jumlah ismiyyah) dalam bahasa Arab',
      ar: 'تعلم البنية الأساسية للجملة الاسمية في اللغة العربية',
      en: 'Learn the basic structure of nominal sentences in Arabic',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Mubtada?', ar: 'ما هو المبتدأ؟', en: 'What is Mubtada?' },
        content: {
          id: 'Mubtada adalah kata benda yang menjadi subjek atau pokok pembicaraan dalam kalimat. Mubtada selalu dalam keadaan rafa\' (marfu\') ditandai dengan dhammah.',
          ar: 'المبتدأ هو الاسم الذي يكون موضوع الجملة. المبتدأ دائماً مرفوع بالضمة.',
          en: 'Mubtada is the noun that serves as the subject of the sentence. It is always in the nominative case (marfu\') marked with damma.',
        },
      },
      {
        type: 'explanation',
        title: { id: 'Apa itu Khabar?', ar: 'ما هو الخبر؟', en: 'What is Khabar?' },
        content: {
          id: 'Khabar adalah kata atau frasa yang memberikan informasi tentang mubtada. Khabar juga dalam keadaan rafa\' (marfu\').',
          ar: 'الخبر هو الكلمة أو العبارة التي تخبر عن المبتدأ. الخبر أيضاً مرفوع.',
          en: 'Khabar is the word or phrase that provides information about the mubtada. It is also in the nominative case.',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh 1', ar: 'مثال ١', en: 'Example 1' },
        content: {
          id: 'Perhatikan contoh kalimat berikut:',
          ar: 'انظر إلى المثال التالي:',
          en: 'Look at the following example:',
        },
        arabicExample: 'الطَّالِبُ مُجْتَهِدٌ',
        breakdown: [
          {
            word: 'الطَّالِبُ',
            role: 'Mubtada',
            explanation: {
              id: 'Mubtada, marfu\' dengan dhammah. Artinya: murid/pelajar',
              ar: 'مبتدأ مرفوع بالضمة. معناه: الطالب',
              en: 'Subject (mubtada), nominative with damma. Meaning: the student',
            },
          },
          {
            word: 'مُجْتَهِدٌ',
            role: 'Khabar',
            explanation: {
              id: 'Khabar, marfu\' dengan dhammah. Artinya: rajin',
              ar: 'خبر مرفوع بالضمة. معناه: مجتهد',
              en: 'Predicate (khabar), nominative with damma. Meaning: diligent',
            },
          },
        ],
      },
      {
        type: 'example',
        title: { id: 'Contoh 2', ar: 'مثال ٢', en: 'Example 2' },
        content: {
          id: 'Contoh lain:',
          ar: 'مثال آخر:',
          en: 'Another example:',
        },
        arabicExample: 'البَيْتُ كَبِيرٌ',
        breakdown: [
          {
            word: 'البَيْتُ',
            role: 'Mubtada',
            explanation: {
              id: 'Mubtada, marfu\' dengan dhammah. Artinya: rumah',
              ar: 'مبتدأ مرفوع بالضمة. معناه: البيت',
              en: 'Subject, nominative with damma. Meaning: the house',
            },
          },
          {
            word: 'كَبِيرٌ',
            role: 'Khabar',
            explanation: {
              id: 'Khabar, marfu\' dengan dhammah. Artinya: besar',
              ar: 'خبر مرفوع بالضمة. معناه: كبير',
              en: 'Predicate, nominative with damma. Meaning: big',
            },
          },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Kaidah Penting', ar: 'قاعدة مهمة', en: 'Important Rule' },
        content: {
          id: '1. Mubtada dan Khabar keduanya harus marfu\' (rafa\')\n2. Mubtada biasanya berupa isim ma\'rifah (kata benda yang sudah diketahui)\n3. Khabar biasanya berupa isim nakirah (kata benda yang belum diketahui)',
          ar: '١. المبتدأ والخبر كلاهما مرفوعان\n٢. المبتدأ عادة يكون معرفة\n٣. الخبر عادة يكون نكرة',
          en: '1. Both Mubtada and Khabar must be in the nominative case (marfu\')\n2. Mubtada is usually definite (ma\'rifah)\n3. Khabar is usually indefinite (nakirah)',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Sekarang coba mainkan game Sentence Doctor untuk berlatih mengidentifikasi kesalahan i\'rab pada mubtada dan khabar!',
          ar: 'الآن جرب لعبة طبيب الجمل للتدرب على تحديد أخطاء الإعراب في المبتدأ والخبر!',
          en: 'Now try playing Sentence Doctor to practice identifying i\'rab errors in mubtada and khabar!',
        },
      },
    ],
  },
  'fiil-fail': {
    id: 'fiil-fail',
    title: { id: 'Fi\'il & Fa\'il', ar: 'الفعل والفاعل', en: 'Verb & Subject' },
    description: {
      id: 'Pelajari struktur kalimat verbal (jumlah fi\'liyyah) dalam bahasa Arab',
      ar: 'تعلم بنية الجملة الفعلية في اللغة العربية',
      en: 'Learn the structure of verbal sentences in Arabic',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Fi\'il?', ar: 'ما هو الفعل؟', en: 'What is Fi\'il?' },
        content: {
          id: 'Fi\'il adalah kata kerja dalam bahasa Arab. Ada tiga jenis fi\'il: fi\'il madhi (lampau), fi\'il mudhari\' (sekarang/akan datang), dan fi\'il amr (perintah).',
          ar: 'الفعل هو الكلمة التي تدل على حدث. هناك ثلاثة أنواع: الفعل الماضي، والفعل المضارع، وفعل الأمر.',
          en: 'Fi\'il is a verb in Arabic. There are three types: past tense (madhi), present/future tense (mudhari\'), and imperative (amr).',
        },
      },
      {
        type: 'explanation',
        title: { id: 'Apa itu Fa\'il?', ar: 'ما هو الفاعل؟', en: 'What is Fa\'il?' },
        content: {
          id: 'Fa\'il adalah pelaku perbuatan (subjek dari kata kerja). Fa\'il selalu dalam keadaan rafa\' (marfu\') ditandai dengan dhammah.',
          ar: 'الفاعل هو من قام بالفعل. الفاعل دائماً مرفوع بالضمة.',
          en: 'Fa\'il is the doer of the action (subject of the verb). It is always in the nominative case (marfu\').',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh', ar: 'مثال', en: 'Example' },
        content: {
          id: 'Perhatikan contoh kalimat fi\'liyyah:',
          ar: 'انظر إلى مثال الجملة الفعلية:',
          en: 'Look at this verbal sentence example:',
        },
        arabicExample: 'ذَهَبَ الطَّالِبُ إِلَى المَدْرَسَةِ',
        breakdown: [
          {
            word: 'ذَهَبَ',
            role: 'Fi\'il Madhi',
            explanation: {
              id: 'Kata kerja lampau. Artinya: pergi',
              ar: 'فعل ماضٍ. معناه: ذهب',
              en: 'Past tense verb. Meaning: went',
            },
          },
          {
            word: 'الطَّالِبُ',
            role: 'Fa\'il',
            explanation: {
              id: 'Fa\'il (pelaku), marfu\' dengan dhammah. Artinya: murid',
              ar: 'فاعل مرفوع بالضمة. معناه: الطالب',
              en: 'Subject (fa\'il), nominative with damma. Meaning: the student',
            },
          },
          {
            word: 'إِلَى المَدْرَسَةِ',
            role: 'Jar-Majrur',
            explanation: {
              id: 'Huruf jar + majrur. Artinya: ke sekolah',
              ar: 'جار ومجرور. معناه: إلى المدرسة',
              en: 'Preposition + noun. Meaning: to the school',
            },
          },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Kaidah Penting', ar: 'قاعدة مهمة', en: 'Important Rule' },
        content: {
          id: '1. Jumlah fi\'liyyah dimulai dengan fi\'il (kata kerja)\n2. Fa\'il selalu marfu\' (rafa\')\n3. Fa\'il bisa berupa isim zhahir (nyata) atau dhamir (kata ganti)',
          ar: '١. الجملة الفعلية تبدأ بالفعل\n٢. الفاعل دائماً مرفوع\n٣. الفاعل يمكن أن يكون اسماً ظاهراً أو ضميراً',
          en: '1. Verbal sentences start with a verb\n2. Fa\'il is always marfu\'\n3. Fa\'il can be a noun or a pronoun',
        },
      },
    ],
  },
  'maful-bih': {
    id: 'maful-bih',
    title: { id: 'Maf\'ul Bih', ar: 'المفعول به', en: 'Direct Object' },
    description: {
      id: 'Pelajari tentang objek langsung dalam kalimat bahasa Arab',
      ar: 'تعلم عن المفعول به في الجملة العربية',
      en: 'Learn about the direct object in Arabic sentences',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Maf\'ul Bih?', ar: 'ما هو المفعول به؟', en: 'What is Maf\'ul Bih?' },
        content: {
          id: 'Maf\'ul bih adalah kata benda yang menjadi objek dari kata kerja transitif (fi\'il muta\'addi). Maf\'ul bih selalu dalam keadaan nashab (manshub) ditandai dengan fathah.',
          ar: 'المفعول به هو الاسم الذي يقع عليه فعل الفاعل. المفعول به دائماً منصوب بالفتحة.',
          en: 'Maf\'ul bih is the noun that receives the action of a transitive verb. It is always in the accusative case (manshub) marked with fatha.',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh', ar: 'مثال', en: 'Example' },
        content: {
          id: 'Perhatikan contoh berikut:',
          ar: 'انظر إلى المثال التالي:',
          en: 'Look at the following example:',
        },
        arabicExample: 'قَرَأَ المُعَلِّمُ الكِتَابَ',
        breakdown: [
          {
            word: 'قَرَأَ',
            role: 'Fi\'il',
            explanation: {
              id: 'Kata kerja lampau. Artinya: membaca',
              ar: 'فعل ماضٍ. معناه: قرأ',
              en: 'Past tense verb. Meaning: read',
            },
          },
          {
            word: 'المُعَلِّمُ',
            role: 'Fa\'il',
            explanation: {
              id: 'Fa\'il, marfu\' dengan dhammah. Artinya: guru',
              ar: 'فاعل مرفوع بالضمة. معناه: المعلم',
              en: 'Subject, nominative with damma. Meaning: the teacher',
            },
          },
          {
            word: 'الكِتَابَ',
            role: 'Maf\'ul Bih',
            explanation: {
              id: 'Maf\'ul bih, manshub dengan fathah. Artinya: buku',
              ar: 'مفعول به منصوب بالفتحة. معناه: الكتاب',
              en: 'Direct object, accusative with fatha. Meaning: the book',
            },
          },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Kaidah Penting', ar: 'قاعدة مهمة', en: 'Important Rule' },
        content: {
          id: '1. Maf\'ul bih selalu manshub (nashab)\n2. Hanya fi\'il muta\'addi (transitif) yang memiliki maf\'ul bih\n3. Urutan biasanya: Fi\'il - Fa\'il - Maf\'ul Bih',
          ar: '١. المفعول به دائماً منصوب\n٢. فقط الفعل المتعدي له مفعول به\n٣. الترتيب عادة: الفعل - الفاعل - المفعول به',
          en: '1. Maf\'ul bih is always manshub\n2. Only transitive verbs have maf\'ul bih\n3. Order is usually: Verb - Subject - Object',
        },
      },
    ],
  },
};

export function getNahwuLesson(topicId: string): LessonContent | undefined {
  return nahwuLessons[topicId];
}
