export interface LessonQuizQuestion {
  id: string;
  question: { id: string; ar: string; en: string };
  options: string[];
  correctAnswer: string;
  explanation: { id: string; ar: string; en: string };
}

// Questions organized by lesson topic
export const lessonQuizzes: Record<string, LessonQuizQuestion[]> = {
  'mubtada-khabar': [
    {
      id: 'lq-mk-1',
      question: {
        id: 'Apa kedudukan "الطالبُ" dalam kalimat "الطالبُ مُجتهِدٌ"?',
        ar: 'ما إعراب "الطالبُ" في جملة "الطالبُ مُجتهِدٌ"؟',
        en: 'What is the role of "الطالبُ" in "الطالبُ مُجتهِدٌ"?',
      },
      options: ['مبتدأ', 'خبر', 'فاعل', 'مفعول به'],
      correctAnswer: 'مبتدأ',
      explanation: {
        id: '"الطالب" adalah mubtada (subjek) karena merupakan isim yang memulai jumlah ismiyyah.',
        ar: '"الطالب" مبتدأ لأنه الاسم الذي بدأت به الجملة الاسمية.',
        en: '"الطالب" is mubtada (subject) because it starts the nominal sentence.',
      },
    },
    {
      id: 'lq-mk-2',
      question: {
        id: 'Manakah yang merupakan khabar dalam "البيتُ كبيرٌ"?',
        ar: 'ما هو الخبر في "البيتُ كبيرٌ"؟',
        en: 'Which is the khabar in "البيتُ كبيرٌ"?',
      },
      options: ['كبيرٌ', 'البيتُ', 'البيت كبير', 'لا يوجد'],
      correctAnswer: 'كبيرٌ',
      explanation: {
        id: '"كبير" adalah khabar karena memberikan informasi tentang mubtada "البيت".',
        ar: '"كبير" خبر لأنه يخبر عن المبتدأ "البيت".',
        en: '"كبير" is khabar because it provides information about the mubtada "البيت".',
      },
    },
    {
      id: 'lq-mk-3',
      question: {
        id: 'Apa harakat mubtada?',
        ar: 'ما حركة المبتدأ؟',
        en: 'What is the case of mubtada?',
      },
      options: ['مرفوع (dhammah)', 'منصوب (fathah)', 'مجرور (kasrah)', 'مبني (sukun)'],
      correctAnswer: 'مرفوع (dhammah)',
      explanation: {
        id: 'Mubtada selalu dalam keadaan marfu\' (rafa\'), ditandai dengan dhammah.',
        ar: 'المبتدأ دائماً مرفوع بالضمة.',
        en: 'Mubtada is always in the nominative case (marfu\'), marked with dhammah.',
      },
    },
  ],
  'fiil-fail': [
    {
      id: 'lq-ff-1',
      question: {
        id: 'Manakah yang merupakan fa\'il dalam "كَتَبَ الطالبُ الدرسَ"?',
        ar: 'ما هو الفاعل في "كَتَبَ الطالبُ الدرسَ"؟',
        en: 'Which is the fa\'il in "كَتَبَ الطالبُ الدرسَ"?',
      },
      options: ['الطالبُ', 'كَتَبَ', 'الدرسَ', 'لا يوجد'],
      correctAnswer: 'الطالبُ',
      explanation: {
        id: '"الطالب" adalah fa\'il (pelaku) yang melakukan perbuatan "menulis".',
        ar: '"الطالب" فاعل لأنه الذي قام بفعل الكتابة.',
        en: '"الطالب" is fa\'il (subject/doer) who performs the action of writing.',
      },
    },
    {
      id: 'lq-ff-2',
      question: {
        id: 'Fi\'il dalam jumlah fi\'liyyah selalu berada di posisi?',
        ar: 'أين يكون الفعل في الجملة الفعلية؟',
        en: 'Where is the verb in a verbal sentence?',
      },
      options: ['أول الجملة (awal kalimat)', 'بعد الفاعل (setelah fa\'il)', 'آخر الجملة (akhir kalimat)', 'أي مكان (di mana saja)'],
      correctAnswer: 'أول الجملة (awal kalimat)',
      explanation: {
        id: 'Dalam jumlah fi\'liyyah, fi\'il selalu di awal kalimat, diikuti oleh fa\'il.',
        ar: 'في الجملة الفعلية، يأتي الفعل أولاً ثم الفاعل.',
        en: 'In a verbal sentence, the verb always comes first, followed by the subject.',
      },
    },
    {
      id: 'lq-ff-3',
      question: {
        id: 'Apa harakat fa\'il?',
        ar: 'ما حركة الفاعل؟',
        en: 'What is the case of fa\'il?',
      },
      options: ['مرفوع (dhammah)', 'منصوب (fathah)', 'مجرور (kasrah)', 'ساكن (sukun)'],
      correctAnswer: 'مرفوع (dhammah)',
      explanation: {
        id: 'Fa\'il selalu dalam keadaan marfu\' (rafa\'), sama seperti mubtada.',
        ar: 'الفاعل دائماً مرفوع بالضمة.',
        en: 'Fa\'il is always in the nominative case (marfu\'), like mubtada.',
      },
    },
  ],
  'maful-bih': [
    {
      id: 'lq-mb-1',
      question: {
        id: 'Manakah maf\'ul bih dalam "أكلَ الولدُ التفاحةَ"?',
        ar: 'ما هو المفعول به في "أكلَ الولدُ التفاحةَ"؟',
        en: 'Which is the maf\'ul bih in "أكلَ الولدُ التفاحةَ"?',
      },
      options: ['التفاحةَ', 'أكلَ', 'الولدُ', 'لا يوجد'],
      correctAnswer: 'التفاحةَ',
      explanation: {
        id: '"التفاحة" adalah maf\'ul bih (objek) yang dikenai perbuatan.',
        ar: '"التفاحة" مفعول به لأنها وقع عليها فعل الأكل.',
        en: '"التفاحة" is maf\'ul bih (object) receiving the action.',
      },
    },
    {
      id: 'lq-mb-2',
      question: {
        id: 'Apa harakat maf\'ul bih?',
        ar: 'ما حركة المفعول به؟',
        en: 'What is the case of maf\'ul bih?',
      },
      options: ['منصوب (fathah)', 'مرفوع (dhammah)', 'مجرور (kasrah)', 'ساكن (sukun)'],
      correctAnswer: 'منصوب (fathah)',
      explanation: {
        id: 'Maf\'ul bih selalu dalam keadaan manshub (nashab), ditandai dengan fathah.',
        ar: 'المفعول به دائماً منصوب بالفتحة.',
        en: 'Maf\'ul bih is always in the accusative case (manshub), marked with fathah.',
      },
    },
    {
      id: 'lq-mb-3',
      question: {
        id: 'Fi\'il mana yang bisa memiliki maf\'ul bih?',
        ar: 'أي فعل يمكن أن يأخذ مفعولاً به؟',
        en: 'Which type of verb can have a maf\'ul bih?',
      },
      options: ['الفعل المتعدي (transitif)', 'الفعل اللازم (intransitif)', 'كلاهما (keduanya)', 'لا شيء (tidak ada)'],
      correctAnswer: 'الفعل المتعدي (transitif)',
      explanation: {
        id: 'Hanya fi\'il muta\'addi (transitif) yang bisa memiliki maf\'ul bih.',
        ar: 'فقط الفعل المتعدي يمكن أن يأخذ مفعولاً به.',
        en: 'Only transitive verbs (fi\'il muta\'addi) can have a maf\'ul bih.',
      },
    },
  ],
  'huruf-jar': [
    {
      id: 'lq-hj-1',
      question: {
        id: 'Apa pengaruh huruf jar terhadap isim setelahnya?',
        ar: 'ما أثر حرف الجر على الاسم بعده؟',
        en: 'What effect does a preposition have on the noun after it?',
      },
      options: ['يجعله مجروراً (majrur)', 'يجعله مرفوعاً (marfu\')', 'يجعله منصوباً (manshub)', 'لا تأثير (tidak berpengaruh)'],
      correctAnswer: 'يجعله مجروراً (majrur)',
      explanation: {
        id: 'Huruf jar menjadikan isim setelahnya dalam keadaan jar (majrur), ditandai kasrah.',
        ar: 'حرف الجر يجعل الاسم بعده مجروراً بالكسرة.',
        en: 'A preposition puts the noun after it in the genitive case (majrur), marked with kasrah.',
      },
    },
    {
      id: 'lq-hj-2',
      question: {
        id: 'Manakah yang bukan huruf jar?',
        ar: 'أي من التالي ليس حرف جر؟',
        en: 'Which of the following is NOT a preposition?',
      },
      options: ['هل', 'في', 'من', 'إلى'],
      correctAnswer: 'هل',
      explanation: {
        id: '"هل" adalah huruf istifham (tanya), bukan huruf jar.',
        ar: '"هل" حرف استفهام وليس حرف جر.',
        en: '"هل" is an interrogative particle, not a preposition.',
      },
    },
    {
      id: 'lq-hj-3',
      question: {
        id: 'Apa kedudukan "المدرسة" dalam "ذهبتُ إلى المدرسةِ"?',
        ar: 'ما إعراب "المدرسة" في "ذهبتُ إلى المدرسةِ"؟',
        en: 'What is the role of "المدرسة" in "ذهبتُ إلى المدرسةِ"?',
      },
      options: ['اسم مجرور', 'مفعول به', 'فاعل', 'خبر'],
      correctAnswer: 'اسم مجرور',
      explanation: {
        id: '"المدرسة" adalah isim majrur karena didahului huruf jar "إلى".',
        ar: '"المدرسة" اسم مجرور بحرف الجر "إلى".',
        en: '"المدرسة" is majrur (genitive) because it is preceded by the preposition "إلى".',
      },
    },
  ],
  'inna-akhawat': [
    {
      id: 'lq-ia-1',
      question: {
        id: 'Apa pengaruh "إنّ" terhadap mubtada?',
        ar: 'ما أثر "إنّ" على المبتدأ؟',
        en: 'What is the effect of "إنّ" on the subject?',
      },
      options: ['تنصبه (menashabkan)', 'ترفعه (merafakan)', 'تجره (menjarkan)', 'لا تأثير (tidak berpengaruh)'],
      correctAnswer: 'تنصبه (menashabkan)',
      explanation: {
        id: '"إنّ" menashobkan mubtada (menjadikannya isim inna/manshub) dan merafakan khabar.',
        ar: '"إنّ" تنصب المبتدأ ويصبح اسمها، وترفع الخبر.',
        en: '"إنّ" puts the subject in accusative (nashab) and keeps the predicate nominative.',
      },
    },
    {
      id: 'lq-ia-2',
      question: {
        id: 'Manakah yang termasuk saudara "إنّ"?',
        ar: 'أي من التالي من أخوات "إنّ"؟',
        en: 'Which is a sister of "إنّ"?',
      },
      options: ['لكنّ', 'هل', 'قد', 'سوف'],
      correctAnswer: 'لكنّ',
      explanation: {
        id: '"لكنّ" (tetapi) adalah salah satu saudara "إنّ" yang memiliki pengaruh yang sama.',
        ar: '"لكنّ" من أخوات "إنّ" وعملها النصب للمبتدأ.',
        en: '"لكنّ" (but) is one of the sisters of "إنّ" with the same grammatical effect.',
      },
    },
    {
      id: 'lq-ia-3',
      question: {
        id: 'Apa kedudukan "الجوَّ" dalam "إنّ الجوَّ جميلٌ"?',
        ar: 'ما إعراب "الجوَّ" في "إنّ الجوَّ جميلٌ"؟',
        en: 'What is the role of "الجوَّ" in "إنّ الجوَّ جميلٌ"?',
      },
      options: ['اسم إنّ منصوب', 'مبتدأ مرفوع', 'مفعول به', 'فاعل'],
      correctAnswer: 'اسم إنّ منصوب',
      explanation: {
        id: '"الجو" adalah isim inna (manshub) karena dimasuki oleh "إنّ".',
        ar: '"الجو" اسم إنّ منصوب بالفتحة.',
        en: '"الجو" is the noun of inna (accusative) because it follows "إنّ".',
      },
    },
  ],
  'akar-kata': [
    {
      id: 'lq-ak-1',
      question: {
        id: 'Berapa huruf akar kata dalam bahasa Arab biasanya?',
        ar: 'كم عدد أحرف الجذر في اللغة العربية عادة؟',
        en: 'How many root letters do Arabic words typically have?',
      },
      options: ['3 huruf', '2 huruf', '4 huruf', '5 huruf'],
      correctAnswer: '3 huruf',
      explanation: {
        id: 'Kebanyakan kata Arab memiliki 3 huruf akar (trilateral/tsulatsi).',
        ar: 'معظم الكلمات العربية لها ثلاثة أحرف أصلية (ثلاثي).',
        en: 'Most Arabic words have 3 root letters (trilateral/thulathi).',
      },
    },
    {
      id: 'lq-ak-2',
      question: {
        id: 'Apa akar kata dari "كاتِب" (penulis)?',
        ar: 'ما جذر كلمة "كاتِب"؟',
        en: 'What is the root of "كاتِب" (writer)?',
      },
      options: ['ك-ت-ب', 'ك-ا-ت', 'ت-ب-ك', 'ب-ك-ت'],
      correctAnswer: 'ك-ت-ب',
      explanation: {
        id: 'Akar kata "كاتب" adalah ك-ت-ب yang bermakna dasar "menulis".',
        ar: 'جذر "كاتب" هو ك-ت-ب ومعناه الأساسي الكتابة.',
        en: 'The root of "كاتب" is ك-ت-ب with the base meaning of "writing".',
      },
    },
    {
      id: 'lq-ak-3',
      question: {
        id: 'Kata mana yang berasal dari akar "د-ر-س"?',
        ar: 'أي كلمة من جذر "د-ر-س"؟',
        en: 'Which word comes from the root "د-ر-س"?',
      },
      options: ['مَدْرَسة', 'مَسْجِد', 'مَكْتَب', 'مَطْبَخ'],
      correctAnswer: 'مَدْرَسة',
      explanation: {
        id: '"مَدْرَسة" (sekolah) berasal dari akar "د-ر-س" yang bermakna "belajar/pelajaran".',
        ar: '"مَدْرَسة" من جذر "د-ر-س" بمعنى الدراسة.',
        en: '"مَدْرَسة" (school) comes from the root "د-ر-س" meaning "study/lesson".',
      },
    },
  ],
  'wazan-fail': [
    {
      id: 'lq-wf-1',
      question: {
        id: 'Apa pola (wazan) untuk isim fa\'il?',
        ar: 'ما وزن اسم الفاعل؟',
        en: 'What is the pattern for the active participle?',
      },
      options: ['فاعِل', 'مَفْعُول', 'فَعِيل', 'مَفْعَل'],
      correctAnswer: 'فاعِل',
      explanation: {
        id: 'Isim fa\'il dibentuk dengan pola "فاعِل" dari fi\'il tsulatsi.',
        ar: 'اسم الفاعل يُصاغ على وزن "فاعِل" من الفعل الثلاثي.',
        en: 'The active participle is formed with the pattern "فاعِل" from trilateral verbs.',
      },
    },
    {
      id: 'lq-wf-2',
      question: {
        id: 'Bentuk isim fa\'il dari "عَلِمَ" (mengetahui) adalah?',
        ar: 'ما اسم الفاعل من "عَلِمَ"؟',
        en: 'What is the active participle of "عَلِمَ" (to know)?',
      },
      options: ['عالِم', 'معلوم', 'عِلْم', 'تعليم'],
      correctAnswer: 'عالِم',
      explanation: {
        id: '"عالِم" (orang yang tahu/ilmuwan) adalah isim fa\'il dari "عَلِمَ".',
        ar: '"عالِم" هو اسم الفاعل من "عَلِمَ".',
        en: '"عالِم" (scholar) is the active participle of "عَلِمَ".',
      },
    },
    {
      id: 'lq-wf-3',
      question: {
        id: 'Isim fa\'il menunjukkan?',
        ar: 'اسم الفاعل يدل على؟',
        en: 'The active participle indicates?',
      },
      options: ['الذي يفعل (yang melakukan)', 'الذي وقع عليه الفعل (yang dikenai)', 'مكان الفعل (tempat)', 'زمان الفعل (waktu)'],
      correctAnswer: 'الذي يفعل (yang melakukan)',
      explanation: {
        id: 'Isim fa\'il menunjukkan orang/sesuatu yang melakukan perbuatan.',
        ar: 'اسم الفاعل يدل على من قام بالفعل.',
        en: 'The active participle indicates the one who does the action.',
      },
    },
  ],
  'wazan-maful': [
    {
      id: 'lq-wm-1',
      question: {
        id: 'Apa pola untuk isim maf\'ul?',
        ar: 'ما وزن اسم المفعول؟',
        en: 'What is the pattern for the passive participle?',
      },
      options: ['مَفْعُول', 'فاعِل', 'فَعِيل', 'تَفْعِيل'],
      correctAnswer: 'مَفْعُول',
      explanation: {
        id: 'Isim maf\'ul dibentuk dengan pola "مَفْعُول" dari fi\'il tsulatsi.',
        ar: 'اسم المفعول يُصاغ على وزن "مَفْعُول" من الفعل الثلاثي.',
        en: 'The passive participle is formed with the pattern "مَفْعُول" from trilateral verbs.',
      },
    },
    {
      id: 'lq-wm-2',
      question: {
        id: 'Bentuk isim maf\'ul dari "كَتَبَ" (menulis) adalah?',
        ar: 'ما اسم المفعول من "كَتَبَ"؟',
        en: 'What is the passive participle of "كَتَبَ" (to write)?',
      },
      options: ['مَكْتُوب', 'كاتِب', 'كِتاب', 'مَكْتَب'],
      correctAnswer: 'مَكْتُوب',
      explanation: {
        id: '"مَكْتُوب" (yang ditulis) adalah isim maf\'ul dari "كَتَبَ".',
        ar: '"مَكْتُوب" هو اسم المفعول من "كَتَبَ".',
        en: '"مَكْتُوب" (written) is the passive participle of "كَتَبَ".',
      },
    },
    {
      id: 'lq-wm-3',
      question: {
        id: 'Isim maf\'ul menunjukkan?',
        ar: 'اسم المفعول يدل على؟',
        en: 'The passive participle indicates?',
      },
      options: ['الذي وقع عليه الفعل (yang dikenai)', 'الذي يفعل (yang melakukan)', 'مكان الفعل (tempat)', 'آلة الفعل (alat)'],
      correctAnswer: 'الذي وقع عليه الفعل (yang dikenai)',
      explanation: {
        id: 'Isim maf\'ul menunjukkan sesuatu yang dikenai perbuatan.',
        ar: 'اسم المفعول يدل على من وقع عليه الفعل.',
        en: 'The passive participle indicates the one receiving the action.',
      },
    },
  ],
  'isim-makan': [
    {
      id: 'lq-im-1',
      question: {
        id: 'Pola apa yang digunakan untuk isim makan?',
        ar: 'ما وزن اسم المكان؟',
        en: 'What pattern is used for nouns of place?',
      },
      options: ['مَفْعَل / مَفْعِل', 'فاعِل', 'مَفْعُول', 'فَعَّال'],
      correctAnswer: 'مَفْعَل / مَفْعِل',
      explanation: {
        id: 'Isim makan dibentuk dengan pola "مَفْعَل" atau "مَفْعِل".',
        ar: 'اسم المكان يُصاغ على وزن "مَفْعَل" أو "مَفْعِل".',
        en: 'Nouns of place use the pattern "مَفْعَل" or "مَفْعِل".',
      },
    },
    {
      id: 'lq-im-2',
      question: {
        id: '"مَكْتَب" berarti tempat untuk?',
        ar: '"مَكْتَب" يعني مكان لـ؟',
        en: '"مَكْتَب" means a place for?',
      },
      options: ['الكتابة (menulis)', 'الأكل (makan)', 'النوم (tidur)', 'اللعب (bermain)'],
      correctAnswer: 'الكتابة (menulis)',
      explanation: {
        id: '"مَكْتَب" (kantor/meja tulis) dari akar ك-ت-ب, tempat untuk menulis.',
        ar: '"مَكْتَب" من جذر ك-ت-ب، مكان الكتابة.',
        en: '"مَكْتَب" (office/desk) from root ك-ت-ب, a place for writing.',
      },
    },
    {
      id: 'lq-im-3',
      question: {
        id: 'Isim makan dari "جَلَسَ" (duduk) adalah?',
        ar: 'ما اسم المكان من "جَلَسَ"؟',
        en: 'The noun of place from "جَلَسَ" (to sit) is?',
      },
      options: ['مَجْلِس', 'جالِس', 'جَلْسة', 'مَجْلُوس'],
      correctAnswer: 'مَجْلِس',
      explanation: {
        id: '"مَجْلِس" (tempat duduk/majelis) adalah isim makan dari "جَلَسَ".',
        ar: '"مَجْلِس" هو اسم المكان من "جَلَسَ".',
        en: '"مَجْلِس" (sitting place/council) is the noun of place from "جَلَسَ".',
      },
    },
  ],
  'tashrif-fiil': [
    {
      id: 'lq-tf-1',
      question: {
        id: 'Bentuk fi\'il madhi "كَتَبَ" untuk dhamir "أنتَ" adalah?',
        ar: 'ما تصريف "كَتَبَ" مع "أنتَ"؟',
        en: 'What is the past tense of "كَتَبَ" for "أنتَ"?',
      },
      options: ['كَتَبْتَ', 'كَتَبْتُ', 'كَتَبَا', 'كَتَبُوا'],
      correctAnswer: 'كَتَبْتَ',
      explanation: {
        id: '"كَتَبْتَ" adalah bentuk fi\'il madhi untuk dhamir "أنتَ" (kamu laki-laki).',
        ar: '"كَتَبْتَ" تصريف الماضي مع "أنتَ".',
        en: '"كَتَبْتَ" is the past tense conjugation for "أنتَ" (you, masculine).',
      },
    },
    {
      id: 'lq-tf-2',
      question: {
        id: 'Fi\'il mudhari\' dari "كَتَبَ" untuk dhamir "هو" adalah?',
        ar: 'ما المضارع من "كَتَبَ" مع "هو"؟',
        en: 'What is the present tense of "كَتَبَ" for "هو"?',
      },
      options: ['يَكْتُبُ', 'كَتَبَ', 'اُكْتُبْ', 'نَكْتُبُ'],
      correctAnswer: 'يَكْتُبُ',
      explanation: {
        id: '"يَكْتُبُ" adalah bentuk fi\'il mudhari\' untuk dhamir "هو" (dia laki-laki).',
        ar: '"يَكْتُبُ" هو المضارع مع "هو".',
        en: '"يَكْتُبُ" is the present tense for "هو" (he).',
      },
    },
    {
      id: 'lq-tf-3',
      question: {
        id: 'Bentuk fi\'il amr dari "كَتَبَ" untuk "أنتَ" adalah?',
        ar: 'ما فعل الأمر من "كَتَبَ" لـ"أنتَ"؟',
        en: 'What is the command form of "كَتَبَ" for "أنتَ"?',
      },
      options: ['اُكْتُبْ', 'يَكْتُبُ', 'كَتَبْتَ', 'تَكْتُبُ'],
      correctAnswer: 'اُكْتُبْ',
      explanation: {
        id: '"اُكْتُبْ" adalah bentuk fi\'il amr (perintah) dari "كَتَبَ".',
        ar: '"اُكْتُبْ" فعل أمر من "كَتَبَ".',
        en: '"اُكْتُبْ" (Write!) is the command form of "كَتَبَ".',
      },
    },
  ],
};

export function getLessonQuiz(topicId: string): LessonQuizQuestion[] {
  return lessonQuizzes[topicId] || [];
}
