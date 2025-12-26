# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TenisScore is a PWA tennis scoring application with real-time updates for spectators. Users can configure match rules (singles/doubles, sets, tiebreaks), track scores, and share matches via public links or private codes.

## Technical Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Realtime)
- **State**: React Context + custom hooks
- **PWA**: vite-plugin-pwa + Workbox
- **Deployment**: Vercel

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Type checking
npx tsc --noEmit
```

## Folder Structure

```
/
├── public/                 # Static files (icons, manifest.json for PWA)
├── supabase/               # [BACKEND - Samuel]
│   └── migrations/         # SQL files (001_init.sql, etc.)
│
├── src/
│   ├── assets/             # Images, fonts
│   │
│   ├── components/         # [FRONTEND - Daniel]
│   │   ├── ui/             # Reusable: Button, Card, Modal
│   │   ├── match/          # Business: Scoreboard, PointButtons
│   │   ├── config/         # MatchConfig form
│   │   └── history/        # MatchHistory list
│   │
│   ├── context/            # [FRONTEND - Daniel]
│   │   └── MatchContext.tsx
│   │
│   ├── hooks/              # [SHARED - Both]
│   │   ├── useTennisScore.ts   # Local scoring logic
│   │   ├── useSupabase.ts      # Database connection
│   │   ├── useRealtime.ts      # Live updates
│   │   └── useOffline.ts       # Offline sync
│   │
│   ├── lib/                # [BACKEND - Samuel]
│   │   ├── supabase.ts         # Supabase client
│   │   ├── tennis-rules.ts     # Scoring algorithms
│   │   ├── constants.ts        # Game config (points, sets)
│   │   └── utils.ts            # Helpers (ID generation, dates)
│   │
│   ├── pages/              # [FRONTEND - Daniel]
│   │   ├── HomePage.tsx
│   │   ├── NewMatchPage.tsx
│   │   ├── ScoreboardPage.tsx
│   │   ├── ViewMatchPage.tsx
│   │   └── HistoryPage.tsx
│   │
│   ├── types/              # [SHARED - Both]
│   │   ├── index.ts            # App types: Match, Set, Player, Config
│   │   └── database.ts         # Supabase auto-generated types
│   │
│   ├── App.tsx             # Route configuration
│   └── main.tsx            # Entry point
│
└── .env                    # Supabase credentials
```

## Team Responsibilities

| Area | Owner | Key Files |
|------|-------|-----------|
| Database/SQL | Samuel | `supabase/migrations/`, `src/lib/supabase.ts` |
| Tennis Logic | Samuel | `src/lib/tennis-rules.ts`, `src/lib/constants.ts` |
| Type Definitions | Both | `src/types/index.ts`, `src/types/database.ts` |
| Hooks | Both | `src/hooks/` |
| UI Components | Daniel | `src/components/` |
| Pages | Daniel | `src/pages/` |

## Database Schema

Three PostgreSQL tables in Supabase:
- `matches` - Active match state (players, scores, config, share_code)
- `players` - Player information (name, country, birthdate)
- `sets` - Individual set scores per match

## Environment Variables

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## GitHub Project

Task tracking: https://github.com/users/Samuelb1992/projects/1
