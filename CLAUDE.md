# CLAUDE.md - Project Development Summary

This document tracks the development progress of Afkaaruna, built with assistance from Claude.

## Project Overview

**Afkaaruna (أفكارنا)** is an interactive web game for Indonesian students (ages 11-14) to learn Arabic grammar - specifically Nahwu (syntax) and Shorof (morphology). The app is trilingual: Indonesian, Arabic, and English.

---

## Development Log

### Session 1 - January 22, 2026

#### Phase 1: Project Setup
- Initialized GitHub repository: https://github.com/ainunnajib/afkaaruna
- Created Next.js 14 project with TypeScript and Tailwind CSS
- Installed dependencies:
  - `framer-motion` - animations
  - `zustand` - state management
  - `next-intl` - internationalization
  - `prisma` - database ORM
  - `lucide-react` - icons
  - `clsx` + `tailwind-merge` - styling utilities

#### Phase 2: Core Infrastructure
- **Custom Theme**: Teal primary, gold secondary, cream accents with Islamic geometric pattern
- **Typography**: Plus Jakarta Sans (Latin), Noto Naskh Arabic (Arabic)
- **i18n System**: Custom translation system with language switcher (ID/AR/EN)
- **State Management**: Zustand stores for language and game state

#### Phase 3: UI Components
Created reusable components in `src/components/ui/`:
- `Button` - Primary, secondary, outline, ghost variants
- `Card` - Default, game, elevated variants
- `LanguageSwitcher` - Three-language toggle
- `Stars` - 1-3 star rating display
- `Progress` - Progress bar with variants

#### Phase 4: Layout & Navigation
- `Navbar` - Desktop and mobile navigation with language switcher
- Responsive design with mobile bottom navigation
- RTL support for Arabic language

#### Phase 5: Pages
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, features, CTA sections |
| Play | `/play` | Game hub with 6 game cards |
| Word Builder | `/play/word-builder` | Shorof game - build words from roots |
| Sentence Doctor | `/play/sentence-doctor` | Nahwu game - fix i'rab errors |
| Learn | `/learn` | Topic list for Nahwu and Shorof |
| Nahwu Lessons | `/learn/nahwu/[topicId]` | Lesson detail pages |
| Shorof Lessons | `/learn/shorof/[topicId]` | Lesson detail pages |
| Profile | `/profile` | User stats and achievements (mock) |

#### Phase 6: Mini-Games Implemented

**1. Word Builder (Shorof)**
- Build Arabic words from root letters + wazan patterns
- Drag-and-drop letter arrangement
- 15+ questions covering patterns: فَاعِل، مَفْعُول، مَفْعَل
- Streak multiplier scoring

**2. Sentence Doctor (Nahwu)**
- Identify and fix i'rab errors in sentences
- Multiple choice corrections
- 15+ questions covering:
  - Mubtada-Khabar
  - Fa'il-Maf'ul Bih
  - Huruf Jar
  - Inna and sisters
  - Idhafah

#### Phase 7: Learning Content

**Nahwu Lessons:**
1. Mubtada & Khabar - Subject and predicate
2. Fi'il & Fa'il - Verb and subject
3. Maf'ul Bih - Direct object

**Shorof Lessons:**
1. Akar Kata - Word roots concept
2. Wazan Fa'il - Active participle pattern
3. Wazan Maf'ul - Passive participle pattern

Each lesson includes:
- Trilingual explanations
- Arabic examples with word breakdowns
- Grammar rules
- Links to practice games

#### Phase 8: Database Schema
Created Prisma schema (`prisma/schema.prisma`) with models:
- `User` - Profile, level, XP, language preference
- `Progress` - Topic completion tracking
- `GameSession` - Game play records
- `Achievement` - Unlockable achievements
- `UserAchievement` - User-achievement relations
- `Topic` - Lesson topics metadata

---

## Project Structure

```
afkaaruna/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout
│   │   ├── play/
│   │   │   ├── page.tsx          # Game hub
│   │   │   ├── word-builder/     # Word Builder game
│   │   │   └── sentence-doctor/  # Sentence Doctor game
│   │   ├── learn/
│   │   │   ├── page.tsx          # Topics list
│   │   │   ├── nahwu/[topicId]/  # Nahwu lessons
│   │   │   └── shorof/[topicId]/ # Shorof lessons
│   │   └── profile/              # User profile
│   ├── components/
│   │   ├── games/                # Game components
│   │   ├── ui/                   # Reusable UI
│   │   └── layout/               # Layout components
│   ├── lib/
│   │   ├── hooks/                # useLanguage, useGameStore
│   │   └── utils/                # Helpers
│   ├── data/
│   │   ├── i18n/                 # Translations
│   │   ├── nahwu/                # Nahwu content
│   │   └── shorof/               # Shorof content
│   └── types/                    # TypeScript types
├── prisma/
│   └── schema.prisma             # Database schema
└── public/
```

---

## Git Commits

1. `62b960b` - Initial commit: project setup for Afkaaruna
2. `06a40e7` - Implement Phase 1 MVP: Arabic grammar learning game
3. `fb3c03c` - Add clickable lesson pages with detailed content

---

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm run lint         # Run ESLint

# Database (when configured)
npx prisma migrate dev    # Run migrations
npx prisma generate       # Generate client
npx prisma studio         # Open Prisma Studio
```

---

## Next Steps (Phase 2)

- [ ] User authentication (NextAuth.js)
- [ ] Connect to PostgreSQL database
- [ ] Persist user progress
- [ ] Implement remaining 4 mini-games:
  - Grammar Match
  - Story Mode
  - Conjugation Race
  - I'rab Analyzer
- [ ] Achievement system
- [ ] Daily streaks
- [ ] Sound effects

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| State | Zustand |
| Database | PostgreSQL + Prisma |
| Deployment | Vercel (planned) |

---

*Last updated: January 22, 2026*
