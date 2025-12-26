/**
 * Application-level TypeScript types for TenisScore
 * Issue #3: Crear tipos TypeScript para el marcador
 */

// ============================================
// Match Configuration Types
// ============================================

/** Type of match: singles (1v1) or doubles (2v2) */
export type MatchType = 'singles' | 'doubles'

/** Current status of a match */
export type MatchStatus = 'in_progress' | 'completed' | 'paused'

/** Tennis point values: 0=0, 1=15, 2=30, 3=40 */
export type TennisPoint = 0 | 1 | 2 | 3

/** Display values for tennis points */
export const POINT_DISPLAY: Record<TennisPoint, string> = {
  0: '0',
  1: '15',
  2: '30',
  3: '40',
}

/** Configuration options when creating a new match */
export interface MatchConfig {
  matchType: MatchType
  totalSets: 1 | 3 | 5
  tiebreakEnabled: boolean
  tiebreakInFinalSet: boolean
  advantageScoring: boolean // true = deuce/advantage, false = no-ad
  isPublic: boolean
  player1Name: string
  player2Name: string
  player3Name?: string // For doubles
  player4Name?: string // For doubles
}

// ============================================
// Player Types
// ============================================

/** Player information */
export interface Player {
  id: string
  name: string
  country?: string
  birthdate?: string
}

/** Team identifier (1 or 2) */
export type TeamId = 1 | 2

// ============================================
// Score Types
// ============================================

/** Score for a single game */
export interface GameScore {
  team1Points: TennisPoint | 'AD'
  team2Points: TennisPoint | 'AD'
  isDeuce: boolean
  isTiebreak: boolean
  tiebreakPoints?: {
    team1: number
    team2: number
  }
}

/** Score for a single set */
export interface SetScore {
  setNumber: number
  team1Games: number
  team2Games: number
  isComplete: boolean
  winner?: TeamId
  tiebreakScore?: {
    team1: number
    team2: number
  }
}

/** Complete match state */
export interface Match {
  id: string
  shareCode: string
  config: MatchConfig
  status: MatchStatus
  currentSet: number
  servingTeam: TeamId

  // Current game score
  currentGame: GameScore

  // All sets in this match
  sets: SetScore[]

  // Summary counts
  team1SetsWon: number
  team2SetsWon: number

  // Players
  team1Players: Player[]
  team2Players: Player[]

  // Match result
  winner?: TeamId

  // Timestamps
  createdAt: string
  updatedAt?: string
  completedAt?: string
}

// ============================================
// Match History Types
// ============================================

/** Simplified match data for history list */
export interface MatchHistoryItem {
  id: string
  matchType: MatchType
  team1Names: string[]
  team2Names: string[]
  team1SetsWon: number
  team2SetsWon: number
  winner: TeamId
  completedAt: string
  duration?: number // in minutes
}

// ============================================
// Action Types (for undo functionality)
// ============================================

/** Types of actions that can be undone */
export type MatchAction =
  | { type: 'POINT_SCORED'; team: TeamId }
  | { type: 'GAME_WON'; team: TeamId }
  | { type: 'SET_WON'; team: TeamId }
  | { type: 'MATCH_WON'; team: TeamId }

/** History entry for undo functionality */
export interface MatchHistoryEntry {
  action: MatchAction
  previousState: Match
  timestamp: string
}

// ============================================
// Hook Return Types
// ============================================

/** Return type for useTennisScore hook */
export interface UseTennisScoreReturn {
  match: Match
  addPoint: (team: TeamId) => void
  undoPoint: () => void
  isMatchOver: boolean
  winner: TeamId | null
  servingTeam: TeamId
  getDisplayScore: () => string
  canUndo: boolean
}

// ============================================
// Component Props Types
// ============================================

/** Props for Scoreboard component */
export interface ScoreboardProps {
  match: Match
  isSpectator?: boolean
}

/** Props for PointButtons component */
export interface PointButtonsProps {
  onPoint: (team: TeamId) => void
  onUndo: () => void
  canUndo: boolean
  disabled?: boolean
  team1Name: string
  team2Name: string
}

/** Props for MatchConfig form component */
export interface MatchConfigProps {
  onSubmit: (config: MatchConfig) => void
  initialConfig?: Partial<MatchConfig>
}
