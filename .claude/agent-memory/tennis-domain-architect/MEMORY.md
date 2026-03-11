# Tennis Domain Architect — Memory

## Project Structure
- Score interfaces live in `src/components/match/score-interfaces/match/`
  - `ScoreState.ts` — per-game point state (playerOneScore, playerTwoScore, gameEnded, servingPlayer, gameWinner, break flags)
  - `SetData.ts` — set state with gameHistory: ScoreState[]
  - `MatchSession.ts` — top-level match container with optional sets: SetData[]
  - `MatchData.ts` — match configuration
- Scoring utilities in `src/components/match/utils/gameScore/`
  - `reducers/scoreReducer.ts` — main reducer dispatching to utility functions
  - `reducers/gameUtils/scoreUp.ts` / `scoreDown.ts` — standard game scoring
  - `reducers/tiebrakUtils/tiebreakScoreUp.ts` / `tiebreakScoreDown.ts` — tiebreak scoring
  - `sccoreContextModifier/scoreGameUpdater.ts` — updates SetData[] after a game ends

## Established Conventions
- ScoreState uses string scores ("0","15","30","40","AD") for standard games, numeric strings for tiebreaks
- Reducer action types use a discriminated union type alias (ActionType) — never `type: string`
- All reducer cases return new ScoreState objects (immutability enforced)
- scoreReducer return type is explicitly annotated as ScoreState
- scoreGameUpdater return type is explicitly annotated as SetData[]
- Local interfaces that mirror utility function return shapes are removed — TypeScript infers from the utility return directly
- playerAffected (not playerAfected) is the canonical variable name for the affected player parameter

## Key Decisions
- scoreReducer `RESET_SCORE` case: servingPlayer defaults to 2 when undefined (treats undefined as "not player 1") — acceptable for current state shape
- scoreGameUpdater: when sets is empty/undefined, always creates set number 1 via createEmptySet(1); the redundant setNumber variable was removed
- tiebreakScoreUp returns `servingPlayer` in the non-ended branch and `winner` in the ended branch — this asymmetry is intentional and comes from the utility layer (not changed)

## Patterns to Apply When Reviewing
- Check for `type: string` in Action interfaces — always replace with discriminated union
- Check for explicit return types on all exported functions
- Check for typos: playerAfected → playerAffected
- Check for inconsistent indentation between switch cases
- Remove local interface duplicates when they only restate utility return shapes
