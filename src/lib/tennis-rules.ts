/**
 * Tennis Scoring Logic - SKELETON FOR LEARNING
 * Issue #4: Implementar lógica de puntuación de tenis
 *
 * ==============================================
 * ARCHITECTURE EXPLANATION
 * ==============================================
 *
 * This file contains PURE FUNCTIONS (no React, no state).
 * Pure functions:
 *   - Take input → return output
 *   - No side effects (don't modify external variables)
 *   - Same input = same output (predictable)
 *
 * WHY?
 *   - Easy to test
 *   - Easy to reuse
 *   - Easy to understand
 *
 * HOW IT CONNECTS TO REACT:
 *   1. React component calls a custom hook (useTennisScore)
 *   2. Hook manages state with useState/useReducer
 *   3. Hook uses these pure functions to calculate new state
 *   4. Hook returns state + functions to component
 *
 * FLOW EXAMPLE:
 *   User clicks "Point Team 1"
 *   → Component calls addPoint(1) from hook
 *   → Hook calls calculateGamePoint() from this file
 *   → Function returns new score
 *   → Hook updates state
 *   → React re-renders with new score
 */

import type { TeamId } from '../types'

// ==============================================
// STEP 1: Define your data types
// ==============================================

/** Simple game score for learning */
export interface SimpleGameScore {
  team1Points: number  // 0, 1, 2, 3 (representing 0, 15, 30, 40)
  team2Points: number
}

// ==============================================
// STEP 2: Create PURE FUNCTIONS
// ==============================================

/**
 * Convert internal point (0,1,2,3) to display string (0,15,30,40)
 *
 * PURE FUNCTION: input → output, no side effects
 */
export function pointToDisplay(point: number): string {
  const displayMap: Record<number, string> = {
    0: '0',
    1: '15',
    2: '30',
    3: '40',
  }
  return displayMap[point] ?? String(point)
}

/**
 * Calculate what happens when a team scores a point
 *
 * PURE FUNCTION:
 *   - Takes current score + who scored
 *   - Returns new score + whether game was won
 *
 * TODO: Implement deuce/advantage logic
 * TODO: Handle tiebreak scoring
 */
export function calculatePoint(
  currentScore: SimpleGameScore,
  scoringTeam: TeamId
): { newScore: SimpleGameScore; gameWon: boolean; winner?: TeamId } {

  // Get current points
  const scorerPoints = scoringTeam === 1
    ? currentScore.team1Points
    : currentScore.team2Points

  // If scorer already at 40 (3), they win the game
  // TODO: This is simplified! Real tennis has deuce at 40-40
  if (scorerPoints >= 3) {
    return {
      newScore: { team1Points: 0, team2Points: 0 }, // Reset for new game
      gameWon: true,
      winner: scoringTeam
    }
  }

  // Otherwise, add a point
  return {
    newScore: {
      team1Points: currentScore.team1Points + (scoringTeam === 1 ? 1 : 0),
      team2Points: currentScore.team2Points + (scoringTeam === 2 ? 1 : 0),
    },
    gameWon: false
  }
}

/**
 * Get display string like "15-30"
 */
export function getScoreDisplay(score: SimpleGameScore): string {
  return `${pointToDisplay(score.team1Points)}-${pointToDisplay(score.team2Points)}`
}

/**
 * Check if score is at deuce (40-40)
 *
 * TODO: You implement this!
 */
export function isDeuce(score: SimpleGameScore): boolean {
  // EXERCISE: Return true if both players are at 40 (3 points)
  return false // ← Fix this
}

// ==============================================
// STEP 3: Export for use in hooks
// ==============================================

// These functions will be imported in useTennisScore.ts hook
// The hook will manage React state and call these functions
