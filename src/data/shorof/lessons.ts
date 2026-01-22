import type { LessonContent } from '../nahwu/lessons';

export const shorofLessons: Record<string, LessonContent> = {
  'akar-kata': {
    id: 'akar-kata',
    title: { id: 'Akar Kata', ar: 'جذور الكلمات', en: 'Word Roots' },
    description: {
      id: 'Pelajari konsep dasar huruf asal (akar kata) dalam bahasa Arab',
      ar: 'تعلم مفهوم الحروف الأصلية (جذور الكلمات) في اللغة العربية',
      en: 'Learn the basic concept of root letters in Arabic',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Akar Kata?', ar: 'ما هي جذور الكلمات؟', en: 'What are Word Roots?' },
        content: {
          id: 'Dalam bahasa Arab, kebanyakan kata berasal dari tiga huruf dasar yang disebut "akar kata" atau "huruf asli" (حروف أصلية). Dari akar ini, berbagai kata dengan makna terkait dapat dibentuk dengan menambahkan pola (wazan) tertentu.',
          ar: 'في اللغة العربية، معظم الكلمات تأتي من ثلاثة حروف أساسية تسمى "الجذر" أو "الحروف الأصلية". من هذا الجذر، يمكن تكوين كلمات مختلفة ذات معانٍ مرتبطة.',
          en: 'In Arabic, most words come from three basic letters called "root letters" (huruf asliyyah). From this root, various words with related meanings can be formed by applying patterns (wazan).',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh: Akar ك-ت-ب', ar: 'مثال: جذر ك-ت-ب', en: 'Example: Root ك-ت-ب' },
        content: {
          id: 'Akar ك-ت-ب (ka-ta-ba) berhubungan dengan makna "menulis". Perhatikan kata-kata yang terbentuk:',
          ar: 'جذر ك-ت-ب يتعلق بمعنى "الكتابة". انظر إلى الكلمات المشتقة:',
          en: 'The root ك-ت-ب (ka-ta-ba) relates to "writing". See the words formed:',
        },
        breakdown: [
          {
            word: 'كَتَبَ',
            role: 'Fi\'il',
            explanation: {
              id: 'Kata kerja: dia (lk) menulis',
              ar: 'فعل: هو كَتَبَ',
              en: 'Verb: he wrote',
            },
          },
          {
            word: 'كَاتِب',
            role: 'Isim Fa\'il',
            explanation: {
              id: 'Pelaku: penulis',
              ar: 'اسم الفاعل: كاتب',
              en: 'Doer: writer',
            },
          },
          {
            word: 'مَكْتُوب',
            role: 'Isim Maf\'ul',
            explanation: {
              id: 'Yang ditulis: tulisan/surat',
              ar: 'اسم المفعول: مكتوب',
              en: 'Written: letter/document',
            },
          },
          {
            word: 'مَكْتَب',
            role: 'Isim Makan',
            explanation: {
              id: 'Tempat menulis: meja/kantor',
              ar: 'اسم المكان: مكتب',
              en: 'Place of writing: desk/office',
            },
          },
          {
            word: 'كِتَاب',
            role: 'Isim',
            explanation: {
              id: 'Buku',
              ar: 'كتاب',
              en: 'Book',
            },
          },
          {
            word: 'مَكْتَبَة',
            role: 'Isim Makan',
            explanation: {
              id: 'Perpustakaan',
              ar: 'مكتبة',
              en: 'Library',
            },
          },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Kaidah Penting', ar: 'قاعدة مهمة', en: 'Important Rule' },
        content: {
          id: '1. Kebanyakan akar kata terdiri dari 3 huruf (tsulatsi)\n2. Huruf asal tidak berubah, hanya ditambah huruf tambahan\n3. Memahami akar kata membantu menebak makna kata baru\n4. Huruf tambahan biasanya: ا، و، ي، م، ت، ن، س، ه',
          ar: '١. معظم الجذور تتكون من ٣ حروف (ثلاثي)\n٢. الحروف الأصلية لا تتغير، فقط تُضاف حروف زائدة\n٣. فهم الجذر يساعد على تخمين معنى الكلمات الجديدة\n٤. الحروف الزائدة عادة: ا، و، ي، م، ت، ن، س، ه',
          en: '1. Most roots consist of 3 letters (trilateral)\n2. Root letters don\'t change, only extra letters are added\n3. Understanding roots helps guess meanings of new words\n4. Extra letters are usually: ا، و، ي، م، ت، ن، س، ه',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Mainkan Word Builder untuk berlatih membentuk kata dari akar dan pola!',
          ar: 'العب بناء الكلمات للتدرب على تكوين الكلمات من الجذور والأوزان!',
          en: 'Play Word Builder to practice forming words from roots and patterns!',
        },
      },
    ],
  },
  'wazan-fail': {
    id: 'wazan-fail',
    title: { id: 'Wazan Fa\'il', ar: 'وزن فاعل', en: 'Fa\'il Pattern' },
    description: {
      id: 'Pelajari pola fa\'il untuk membentuk isim fa\'il (kata pelaku)',
      ar: 'تعلم وزن فاعل لتكوين اسم الفاعل',
      en: 'Learn the fa\'il pattern to form active participles',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Wazan Fa\'il?', ar: 'ما هو وزن فاعل؟', en: 'What is Wazan Fa\'il?' },
        content: {
          id: 'Wazan فَاعِل (fa\'il) adalah pola untuk membentuk isim fa\'il, yaitu kata benda yang menunjukkan pelaku perbuatan. Pola ini dibentuk dengan menambahkan alif setelah huruf pertama akar kata.',
          ar: 'وزن فاعل هو صيغة لتكوين اسم الفاعل، وهو اسم يدل على من قام بالفعل. يُشكَّل بإضافة ألف بعد الحرف الأول من الجذر.',
          en: 'The fa\'il pattern is used to form the active participle (isim fa\'il), a noun indicating the doer of an action. It\'s formed by adding alif after the first root letter.',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh Pembentukan', ar: 'أمثلة على التكوين', en: 'Formation Examples' },
        content: {
          id: 'Perhatikan bagaimana akar kata menjadi isim fa\'il:',
          ar: 'انظر كيف يصبح الجذر اسم فاعل:',
          en: 'See how roots become active participles:',
        },
        breakdown: [
          {
            word: 'كَاتِب',
            role: 'ك-ت-ب',
            explanation: {
              id: 'Penulis (dari akar ك-ت-ب = menulis)',
              ar: 'كاتب (من جذر ك-ت-ب = كتب)',
              en: 'Writer (from root ك-ت-ب = write)',
            },
          },
          {
            word: 'عَالِم',
            role: 'ع-ل-م',
            explanation: {
              id: 'Orang berilmu (dari akar ع-ل-م = mengetahui)',
              ar: 'عالم (من جذر ع-ل-م = علم)',
              en: 'Scholar (from root ع-ل-م = know)',
            },
          },
          {
            word: 'قَارِئ',
            role: 'ق-ر-أ',
            explanation: {
              id: 'Pembaca (dari akar ق-ر-أ = membaca)',
              ar: 'قارئ (من جذر ق-ر-أ = قرأ)',
              en: 'Reader (from root ق-ر-أ = read)',
            },
          },
          {
            word: 'سَامِع',
            role: 'س-م-ع',
            explanation: {
              id: 'Pendengar (dari akar س-م-ع = mendengar)',
              ar: 'سامع (من جذر س-م-ع = سمع)',
              en: 'Listener (from root س-م-ع = hear)',
            },
          },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Rumus Pembentukan', ar: 'قاعدة التكوين', en: 'Formation Formula' },
        content: {
          id: 'Rumus: فَاعِل\n- ف = huruf pertama akar (dengan fathah)\n- ا = alif tambahan\n- ع = huruf kedua akar (dengan kasrah)\n- ل = huruf ketiga akar\n\nContoh: ك-ت-ب → كَـ + ا + تِـ + ب → كَاتِب',
          ar: 'الصيغة: فَاعِل\n- ف = الحرف الأول (مع فتحة)\n- ا = ألف زائدة\n- ع = الحرف الثاني (مع كسرة)\n- ل = الحرف الثالث\n\nمثال: ك-ت-ب → كَـ + ا + تِـ + ب → كَاتِب',
          en: 'Formula: فَاعِل\n- ف = first root letter (with fatha)\n- ا = added alif\n- ع = second root letter (with kasra)\n- ل = third root letter\n\nExample: ك-ت-ب → كَـ + ا + تِـ + ب → كَاتِب',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Mainkan Word Builder untuk berlatih membentuk isim fa\'il dari berbagai akar kata!',
          ar: 'العب بناء الكلمات للتدرب على تكوين اسم الفاعل من جذور مختلفة!',
          en: 'Play Word Builder to practice forming active participles from various roots!',
        },
      },
    ],
  },
  'wazan-maful': {
    id: 'wazan-maful',
    title: { id: 'Wazan Maf\'ul', ar: 'وزن مفعول', en: 'Maf\'ul Pattern' },
    description: {
      id: 'Pelajari pola maf\'ul untuk membentuk isim maf\'ul (kata objek)',
      ar: 'تعلم وزن مفعول لتكوين اسم المفعول',
      en: 'Learn the maf\'ul pattern to form passive participles',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Wazan Maf\'ul?', ar: 'ما هو وزن مفعول؟', en: 'What is Wazan Maf\'ul?' },
        content: {
          id: 'Wazan مَفْعُول (maf\'ul) adalah pola untuk membentuk isim maf\'ul, yaitu kata benda yang menunjukkan sesuatu yang dikenai perbuatan. Pola ini menambahkan mim di awal dan waw sebelum huruf terakhir.',
          ar: 'وزن مفعول هو صيغة لتكوين اسم المفعول، وهو اسم يدل على من وقع عليه الفعل. يُشكَّل بإضافة ميم في البداية وواو قبل الحرف الأخير.',
          en: 'The maf\'ul pattern forms the passive participle (isim maf\'ul), a noun indicating what receives the action. It adds mim at the start and waw before the last letter.',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh Pembentukan', ar: 'أمثلة على التكوين', en: 'Formation Examples' },
        content: {
          id: 'Perhatikan bagaimana akar kata menjadi isim maf\'ul:',
          ar: 'انظر كيف يصبح الجذر اسم مفعول:',
          en: 'See how roots become passive participles:',
        },
        breakdown: [
          {
            word: 'مَكْتُوب',
            role: 'ك-ت-ب',
            explanation: {
              id: 'Yang ditulis (dari akar ك-ت-ب)',
              ar: 'مكتوب (من جذر ك-ت-ب)',
              en: 'Written (from root ك-ت-ب)',
            },
          },
          {
            word: 'مَعْلُوم',
            role: 'ع-ل-م',
            explanation: {
              id: 'Yang diketahui (dari akar ع-ل-م)',
              ar: 'معلوم (من جذر ع-ل-م)',
              en: 'Known (from root ع-ل-م)',
            },
          },
          {
            word: 'مَفْتُوح',
            role: 'ف-ت-ح',
            explanation: {
              id: 'Yang dibuka (dari akar ف-ت-ح)',
              ar: 'مفتوح (من جذر ف-ت-ح)',
              en: 'Opened (from root ف-ت-ح)',
            },
          },
          {
            word: 'مَشْرُوب',
            role: 'ش-ر-ب',
            explanation: {
              id: 'Yang diminum / minuman (dari akar ش-ر-ب)',
              ar: 'مشروب (من جذر ش-ر-ب)',
              en: 'Drink/beverage (from root ش-ر-ب)',
            },
          },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Rumus Pembentukan', ar: 'قاعدة التكوين', en: 'Formation Formula' },
        content: {
          id: 'Rumus: مَفْعُول\n- مَـ = mim dengan fathah (tambahan)\n- ف = huruf pertama akar (sukun)\n- ع = huruf kedua akar (dengan dhammah)\n- و = waw tambahan\n- ل = huruf ketiga akar\n\nContoh: ك-ت-ب → مَـ + كْـ + تُـ + و + ب → مَكْتُوب',
          ar: 'الصيغة: مَفْعُول\n- مَـ = ميم مفتوحة (زائدة)\n- ف = الحرف الأول (ساكن)\n- ع = الحرف الثاني (مع ضمة)\n- و = واو زائدة\n- ل = الحرف الثالث\n\nمثال: ك-ت-ب → مَـ + كْـ + تُـ + و + ب → مَكْتُوب',
          en: 'Formula: مَفْعُول\n- مَـ = mim with fatha (added)\n- ف = first root letter (sukun)\n- ع = second root letter (with damma)\n- و = added waw\n- ل = third root letter\n\nExample: ك-ت-ب → مَـ + كْـ + تُـ + و + ب → مَكْتُوب',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Mainkan Word Builder untuk berlatih membentuk isim maf\'ul dari berbagai akar kata!',
          ar: 'العب بناء الكلمات للتدرب على تكوين اسم المفعول من جذور مختلفة!',
          en: 'Play Word Builder to practice forming passive participles from various roots!',
        },
      },
    ],
  },
};

export function getShorofLesson(topicId: string): LessonContent | undefined {
  return shorofLessons[topicId];
}
