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

## Architecture

### Core Tennis Logic
- `src/lib/tennis-rules.ts` - Scoring algorithms (points → games → sets, tiebreak logic)
- `src/hooks/useTennisScore.ts` - State management hook for match scoring

### Data Flow
1. `MatchContext` provides global match state
2. `useTennisScore` hook handles scoring logic locally
3. `useSupabase` hook syncs with database
4. `useRealtime` hook enables live spectator updates

### Key Components
- `components/match/` - Scoreboard, PointButtons, SetDisplay
- `components/config/` - MatchConfig form
- `components/history/` - MatchHistory list

### Pages
- HomePage - Navigation entry point
- NewMatchPage - Match configuration
- ScoreboardPage - Active match scoring
- ViewMatchPage - Read-only spectator view
- HistoryPage - Past matches

## Database Schema

Three PostgreSQL tables in Supabase:
- `matches` - Active match state (players, scores, config, share_code)
- `sets` - Individual set scores per match
- `match_history` - Completed match summaries

## Environment Variables

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## GitHub Project

Task tracking: https://github.com/users/Samuelb1992/projects/1

Issues are organized by development phase (1-8) and assigned to:
- **DanielBeltranL**: Frontend tasks
- **Samuelb1992**: Backend/database tasks
