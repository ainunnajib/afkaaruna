# Afkaaruna (أفكارنا)

An interactive game for kids to learn Arabic grammar, specifically **Nahwu** (syntax) and **Shorof** (morphology).

## About

Afkaaruna is designed for Indonesian students learning Arabic through an engaging, game-based approach. The app supports three languages to accommodate trilingual learners.

### Target Audience
- Students aged 11-14 years
- Based in Indonesia
- Trilingual speakers (Indonesian, Arabic, English)

### Learning Focus
- **Nahwu (النحو)** - Arabic syntax and sentence structure
  - I'rab (case endings)
  - Sentence types (Jumlah Ismiyyah/Fi'liyyah)
  - Subject-predicate relationships
  - Particles and their effects

- **Shorof (الصرف)** - Arabic morphology
  - Verb patterns (أوزان)
  - Root letters (حروف أصلية)
  - Word derivations
  - Conjugation

## Features

### Mini-Games
- 🧩 **Word Builder** - Build words from root letters and patterns
- 🩺 **Sentence Doctor** - Find and fix i'rab errors in sentences
- 🔗 **Grammar Match** - Match words with their grammatical roles (coming soon)
- 📖 **Story Mode** - Read stories and answer grammar questions (coming soon)
- ⏱️ **Conjugation Race** - Conjugate verbs against the clock (coming soon)
- 🌳 **I'rab Analyzer** - Break down sentence components (coming soon)

### Gamification
- ⭐ Star ratings (1-3 stars per level)
- 🏆 XP and leveling system
- 🔥 Daily streaks
- 🎖️ Achievements and badges

### Languages
| Language | Status |
|----------|--------|
| Indonesian (Bahasa Indonesia) | ✅ Primary |
| Arabic (العربية) | ✅ Primary |
| English | ✅ Secondary |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **State:** Zustand
- **Database:** PostgreSQL with Prisma
- **Deployment:** Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database (optional for local development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ainunnajib/afkaaruna.git
cd afkaaruna
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file with:
```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Project Structure

```
afkaaruna/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── play/              # Game pages
│   │   ├── learn/             # Learning content
│   │   └── profile/           # User profile
│   ├── components/
│   │   ├── games/             # Mini-game components
│   │   ├── ui/                # Reusable UI components
│   │   └── layout/            # Layout components
│   ├── lib/
│   │   ├── hooks/             # Custom React hooks
│   │   └── utils/             # Utility functions
│   ├── data/
│   │   ├── nahwu/             # Nahwu lessons & exercises
│   │   ├── shorof/            # Shorof lessons & exercises
│   │   └── i18n/              # Translations
│   └── types/                 # TypeScript types
├── prisma/
│   └── schema.prisma          # Database schema
└── public/
    ├── images/
    └── sounds/
```

## Development

### Running Tests
```bash
npm run test
```

### Building for Production
```bash
npm run build
```

### Database Migrations
```bash
npx prisma migrate dev
npx prisma generate
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

### Phase 1 (MVP) ✅
- [x] Project setup
- [x] Basic UI components
- [x] Trilingual support
- [x] Word Builder game
- [x] Sentence Doctor game
- [x] Basic content

### Phase 2 (In Progress)
- [ ] User authentication
- [ ] Progress persistence
- [ ] All 6 mini-games
- [ ] Full curriculum
- [ ] Achievement system

### Phase 3
- [ ] Leaderboards
- [ ] Teacher dashboard
- [ ] Certificate generation

### Phase 4
- [ ] PWA support
- [ ] Offline mode
- [ ] Community features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Arabic grammar content verified by qualified teachers
- Inspired by language learning apps like Duolingo
- Built with ❤️ for Indonesian students learning Arabic

---

<p align="center">
  <strong>بسم الله الرحمن الرحيم</strong><br>
  <em>In the name of Allah, the Most Gracious, the Most Merciful</em>
</p>
