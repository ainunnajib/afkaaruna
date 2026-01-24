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

  'huruf-jar': {
    id: 'huruf-jar',
    title: { id: 'Huruf Jar', ar: 'حروف الجر', en: 'Prepositions' },
    description: {
      id: 'Pelajari huruf-huruf jar (preposisi) dan pengaruhnya terhadap i\'rab',
      ar: 'تعلم حروف الجر وأثرها في الإعراب',
      en: 'Learn prepositions and their effect on grammatical case',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Huruf Jar?', ar: 'ما هي حروف الجر؟', en: 'What are Huruf Jar?' },
        content: {
          id: 'Huruf jar (preposisi) adalah huruf yang menjadikan isim setelahnya dalam keadaan jar (majrur), ditandai dengan kasrah. Huruf jar yang paling umum: مِنْ (dari), إِلَى (ke), عَنْ (dari/tentang), عَلَى (di atas), فِي (di dalam), بِ (dengan), لِ (untuk/milik), كَ (seperti).',
          ar: 'حروف الجر هي حروف تجعل الاسم بعدها مجروراً بالكسرة. أشهر حروف الجر: مِنْ، إِلَى، عَنْ، عَلَى، فِي، الباء، اللام، الكاف.',
          en: 'Huruf jar (prepositions) are particles that put the noun after them in the genitive case (majrur), marked with kasra. Common ones: مِنْ (from), إِلَى (to), عَنْ (about/from), عَلَى (on), فِي (in), بِ (with), لِ (for), كَ (like).',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh 1', ar: 'مثال ١', en: 'Example 1' },
        content: {
          id: 'Huruf jar "إلى" (ke/kepada):',
          ar: 'حرف الجر "إلى":',
          en: 'Preposition "إلى" (to):',
        },
        arabicExample: 'ذَهَبَ إِلَى المَدْرَسَةِ',
        breakdown: [
          { word: 'ذَهَبَ', role: 'Fi\'il', explanation: { id: 'Kata kerja lampau: pergi', ar: 'فعل ماضٍ', en: 'Past verb: went' } },
          { word: 'إِلَى', role: 'Huruf Jar', explanation: { id: 'Huruf jar (preposisi): ke', ar: 'حرف جر: إلى', en: 'Preposition: to' } },
          { word: 'المَدْرَسَةِ', role: 'Majrur', explanation: { id: 'Isim majrur dengan kasrah: sekolah', ar: 'اسم مجرور بالكسرة: المدرسة', en: 'Genitive noun with kasra: the school' } },
        ],
      },
      {
        type: 'example',
        title: { id: 'Contoh 2', ar: 'مثال ٢', en: 'Example 2' },
        content: {
          id: 'Huruf jar "في" (di dalam):',
          ar: 'حرف الجر "في":',
          en: 'Preposition "في" (in):',
        },
        arabicExample: 'جَلَسَ فِي المَسْجِدِ',
        breakdown: [
          { word: 'جَلَسَ', role: 'Fi\'il', explanation: { id: 'Kata kerja lampau: duduk', ar: 'فعل ماضٍ', en: 'Past verb: sat' } },
          { word: 'فِي', role: 'Huruf Jar', explanation: { id: 'Huruf jar: di dalam', ar: 'حرف جر: في', en: 'Preposition: in' } },
          { word: 'المَسْجِدِ', role: 'Majrur', explanation: { id: 'Isim majrur dengan kasrah: masjid', ar: 'اسم مجرور بالكسرة: المسجد', en: 'Genitive noun with kasra: the mosque' } },
        ],
      },
      {
        type: 'example',
        title: { id: 'Contoh 3', ar: 'مثال ٣', en: 'Example 3' },
        content: {
          id: 'Huruf jar "بِ" (dengan):',
          ar: 'حرف الجر "الباء":',
          en: 'Preposition "بِ" (with):',
        },
        arabicExample: 'كَتَبَ بِالقَلَمِ',
        breakdown: [
          { word: 'كَتَبَ', role: 'Fi\'il', explanation: { id: 'Kata kerja lampau: menulis', ar: 'فعل ماضٍ', en: 'Past verb: wrote' } },
          { word: 'بِالقَلَمِ', role: 'Jar-Majrur', explanation: { id: 'Ba\' + isim majrur: dengan pena', ar: 'الباء واسم مجرور: بالقلم', en: 'Ba + genitive noun: with the pen' } },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Kaidah Penting', ar: 'قاعدة مهمة', en: 'Important Rule' },
        content: {
          id: '1. Isim setelah huruf jar SELALU majrur (kasrah)\n2. Huruf jar tidak bisa berdiri sendiri, harus diikuti isim\n3. Jar-majrur bisa menjadi khabar (predikat): الكتابُ في الحقيبةِ\n4. Jika isim setelah huruf jar adalah isim yang tidak bisa menerima tanwin, maka tanda jarnya adalah fathah (mamnu\' min ash-sharf)',
          ar: '١. الاسم بعد حرف الجر دائماً مجرور (بالكسرة)\n٢. حرف الجر لا يقف وحده، بل يحتاج إلى اسم بعده\n٣. الجار والمجرور قد يكونان خبراً: الكتابُ في الحقيبةِ\n٤. الممنوع من الصرف يُجَرّ بالفتحة بدل الكسرة',
          en: '1. Nouns after huruf jar are ALWAYS majrur (kasra)\n2. Huruf jar cannot stand alone, must be followed by a noun\n3. Jar-majrur can be a predicate: الكتابُ في الحقيبةِ\n4. Diptote nouns take fatha instead of kasra as genitive marker',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Mainkan Sentence Doctor untuk berlatih mengidentifikasi kesalahan jar-majrur!',
          ar: 'العب لعبة طبيب الجمل للتدرب على تحديد أخطاء الجر!',
          en: 'Play Sentence Doctor to practice identifying jar-majrur errors!',
        },
      },
    ],
  },
  'inna-akhawat': {
    id: 'inna-akhawat',
    title: { id: 'Inna & Saudaranya', ar: 'إنّ وأخواتها', en: 'Inna and Sisters' },
    description: {
      id: 'Pelajari huruf-huruf yang mirip fi\'il (inna dan saudaranya) dan pengaruhnya',
      ar: 'تعلم الحروف المشبهة بالفعل (إنّ وأخواتها) وأثرها',
      en: 'Learn verb-like particles (inna and its sisters) and their grammatical effects',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Inna wa Akhawatiha?', ar: 'ما هي إنّ وأخواتها؟', en: 'What are Inna and Sisters?' },
        content: {
          id: 'Inna dan saudaranya adalah huruf-huruf yang masuk pada jumlah ismiyyah (kalimat nominal). Mereka menashab-kan mubtada (menjadi isim inna) dan membiarkan khabar tetap marfu\' (menjadi khabar inna). Ada 6 huruf: إنَّ (sesungguhnya), أنَّ (bahwasanya), لكنَّ (akan tetapi), كأنَّ (seolah-olah), ليتَ (andai saja), لعلَّ (semoga/mudah-mudahan).',
          ar: 'إنّ وأخواتها حروف تدخل على الجملة الاسمية فتنصب المبتدأ (ويسمى اسمها) وترفع الخبر (ويسمى خبرها). وهي ستة: إنَّ، أنَّ، لكنَّ، كأنَّ، ليتَ، لعلَّ.',
          en: 'Inna and its sisters are particles that enter nominal sentences. They make the subject accusative (ism of inna) and keep the predicate nominative (khabar of inna). There are 6: إنَّ (indeed), أنَّ (that), لكنَّ (but), كأنَّ (as if), ليتَ (if only), لعلَّ (perhaps).',
        },
      },
      {
        type: 'explanation',
        title: { id: 'Makna Setiap Huruf', ar: 'معنى كل حرف', en: 'Meaning of Each Particle' },
        content: {
          id: '1. إنَّ - untuk penegasan (sesungguhnya)\n2. أنَّ - bermakna "bahwasanya"\n3. لكنَّ - untuk istidrak/pengecualian (akan tetapi)\n4. كأنَّ - untuk tasybih/perumpamaan (seolah-olah)\n5. ليتَ - untuk tamanniy/angan-angan (andai saja)\n6. لعلَّ - untuk tarajji/harapan (semoga)',
          ar: '١. إنَّ - للتوكيد\n٢. أنَّ - للتوكيد (تأتي في وسط الكلام)\n٣. لكنَّ - للاستدراك\n٤. كأنَّ - للتشبيه\n٥. ليتَ - للتمني\n٦. لعلَّ - للترجي',
          en: '1. إنَّ - emphasis (indeed)\n2. أنَّ - that (in middle of speech)\n3. لكنَّ - exception (however)\n4. كأنَّ - comparison (as if)\n5. ليتَ - wish (if only)\n6. لعلَّ - hope (perhaps)',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh 1: إنَّ', ar: 'مثال ١: إنَّ', en: 'Example 1: إنَّ' },
        content: {
          id: 'Penggunaan إنَّ:',
          ar: 'استخدام إنَّ:',
          en: 'Using إنَّ:',
        },
        arabicExample: 'إِنَّ العِلْمَ نُورٌ',
        breakdown: [
          { word: 'إِنَّ', role: 'Huruf Nasikh', explanation: { id: 'Huruf musyabbahah bil fi\'il: sesungguhnya', ar: 'حرف مشبه بالفعل', en: 'Verb-like particle: indeed' } },
          { word: 'العِلْمَ', role: 'Isim Inna', explanation: { id: 'Isim inna, manshub dengan fathah: ilmu', ar: 'اسم إنّ منصوب بالفتحة', en: 'Noun of inna, accusative: knowledge' } },
          { word: 'نُورٌ', role: 'Khabar Inna', explanation: { id: 'Khabar inna, marfu\' dengan dhammah: cahaya', ar: 'خبر إنّ مرفوع بالضمة', en: 'Predicate of inna, nominative: light' } },
        ],
      },
      {
        type: 'example',
        title: { id: 'Contoh 2: لكنَّ', ar: 'مثال ٢: لكنَّ', en: 'Example 2: لكنَّ' },
        content: {
          id: 'Penggunaan لكنَّ:',
          ar: 'استخدام لكنَّ:',
          en: 'Using لكنَّ:',
        },
        arabicExample: 'الجَوُّ حَارٌّ لَكِنَّ المَاءَ بَارِدٌ',
        breakdown: [
          { word: 'لَكِنَّ', role: 'Huruf Nasikh', explanation: { id: 'Huruf istidrak: akan tetapi', ar: 'حرف استدراك', en: 'Exception particle: however' } },
          { word: 'المَاءَ', role: 'Isim Lakinna', explanation: { id: 'Isim lakinna, manshub: air', ar: 'اسم لكنّ منصوب', en: 'Noun of lakinna, accusative: water' } },
          { word: 'بَارِدٌ', role: 'Khabar Lakinna', explanation: { id: 'Khabar lakinna, marfu\': dingin', ar: 'خبر لكنّ مرفوع', en: 'Predicate of lakinna, nominative: cold' } },
        ],
      },
      {
        type: 'example',
        title: { id: 'Contoh 3: ليتَ', ar: 'مثال ٣: ليتَ', en: 'Example 3: ليتَ' },
        content: {
          id: 'Penggunaan ليتَ:',
          ar: 'استخدام ليتَ:',
          en: 'Using ليتَ:',
        },
        arabicExample: 'لَيْتَ الشَّبَابَ يَعُودُ',
        breakdown: [
          { word: 'لَيْتَ', role: 'Huruf Nasikh', explanation: { id: 'Huruf tamanniy: andai saja', ar: 'حرف تمنٍّ', en: 'Wish particle: if only' } },
          { word: 'الشَّبَابَ', role: 'Isim Laita', explanation: { id: 'Isim laita, manshub: masa muda', ar: 'اسم ليت منصوب', en: 'Noun of laita, accusative: youth' } },
          { word: 'يَعُودُ', role: 'Khabar Laita', explanation: { id: 'Khabar laita (jumlah fi\'liyyah): kembali', ar: 'خبر ليت (جملة فعلية)', en: 'Predicate of laita (verbal sentence): returns' } },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Kaidah Penting', ar: 'قاعدة مهمة', en: 'Important Rule' },
        content: {
          id: '1. Isim inna/akhawatiha selalu MANSHUB (fathah)\n2. Khabar inna/akhawatiha tetap MARFU\' (dhammah)\n3. Bandingkan dengan kalimat biasa: العلمُ نورٌ → إنَّ العلمَ نورٌ\n4. Jika inna diikuti oleh jumlah fi\'liyyah, ia tidak berpengaruh pada fi\'il',
          ar: '١. اسم إنّ وأخواتها دائماً منصوب (بالفتحة)\n٢. خبر إنّ وأخواتها يبقى مرفوعاً (بالضمة)\n٣. قارن: العلمُ نورٌ ← إنَّ العلمَ نورٌ\n٤. إذا جاء بعد إنّ جملة فعلية فلا تؤثر فيها',
          en: '1. Noun of inna/sisters is ALWAYS accusative (fatha)\n2. Predicate of inna/sisters stays nominative (damma)\n3. Compare: العلمُ نورٌ → إنَّ العلمَ نورٌ\n4. If followed by a verbal sentence, inna has no effect on the verb',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Mainkan Sentence Doctor untuk berlatih mengidentifikasi kesalahan i\'rab pada inna dan saudaranya!',
          ar: 'العب لعبة طبيب الجمل للتدرب على تحديد أخطاء إنّ وأخواتها!',
          en: 'Play Sentence Doctor to practice identifying errors with inna and its sisters!',
        },
      },
    ],
  },
};

export function getNahwuLesson(topicId: string): LessonContent | undefined {
  return nahwuLessons[topicId];
}
