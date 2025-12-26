# GEMINI.md

## Project Overview
TenisScore is a tennis scoring application designed to track match scores, maintain history, and provide real-time updates for spectators. The application allows users to configure match rules, track points game-by-game, and share live match results.

## Technical Stack
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Backend:** Supabase (Database, Realtime, Auth)
- **State Management:** React Context + Hooks
- **Routing:** React Router DOM
- **Deployment:** Vercel

## Development Roadmap

### Phase 1: Setup & Local Scoreboard
Focus on project initialization and the core scoring logic.
- [ ] **Setup Project:** Initialize Vite + React + TypeScript (Issue #1)
- [ ] **Styling:** Configure Tailwind CSS (Issue #2)
- [ ] **Type Definitions:** Define TypeScript interfaces for Match, Set, Game, etc. (Issue #3)
- [ ] **Core Logic:** Implement `tennis-rules.ts` (scoring algorithms) (Issue #4)
- [ ] **State Logic:** Create `useTennisScore` hook (Issue #5)
- [ ] **UI Components:** Build basic UI kit (Button, Card, Input, Modal) (Issue #6)
- [ ] **Scoreboard UI:** Create main Scoreboard component and subcomponents (Issue #7)
- [ ] **Interaction:** Create PointButtons component (Issue #8)
- [ ] **Page:** Assemble ScoreboardPage (Issue #9)

### Phase 2: Match Configuration
Allow users to set up matches and navigate the app.
- [ ] **Config Form:** Create MatchConfig component (Singles/Doubles, Sets, etc.) (Issue #10)
- [ ] **Home:** Create HomePage with navigation (Issue #11)
- [ ] **New Match:** Create NewMatchPage integrating the config form (Issue #12)
- [ ] **Global State:** Implement MatchContext (Issue #13)
- [ ] **Routing:** Configure React Router paths (Issue #14)

### Phase 3: Backend (Supabase)
Persist data and manage users.
- [ ] **DB Setup:** Create Supabase project and SQL Schema (Issue #15)
- [ ] **Client:** Configure Supabase client and env variables (Issue #16)
- [ ] **Data Hooks:** Create `useSupabase` for CRUD operations (Issue #17)
- [ ] **Integration:** Connect app flow to Supabase (Save/Update matches) (Issue #18)

### Phase 4: History
View past matches.
- [ ] **UI:** Create MatchHistory list component (Issue #19)
- [ ] **Page:** Create HistoryPage (Issue #20)

### Phase 5: Sharing
Share matches with others.
- [ ] **Spectator View:** Create ViewMatchPage for read-only access (Issue #21)
- [ ] **Sharing:** Implement link sharing functionality (Issue #22)

### Phase 6: Realtime
Live updates for spectators.
- [ ] **Realtime:** Implement Supabase Realtime subscriptions (Issue #23)

### Phase 7: PWA & Offline
Mobile optimization.
- [ ] **PWA:** Configure Manifest and Service Workers (Issue #24)
- [ ] **Offline:** Implement offline data handling and synchronization (Issue #25)

### Phase 8: Deploy
Release the application.
- [ ] **Production:** Deploy to Vercel (Issue #26)