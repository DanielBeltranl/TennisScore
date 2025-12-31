/**
 * Custom Hook - SKELETON FOR LEARNING
 * Issue #5: Create useTennisScore hook
 *
 * ==============================================
 * WHAT IS A CUSTOM HOOK?
 * ==============================================
 *
 * A custom hook is a function that:
 *   - Starts with "use" (convention)
 *   - Uses React hooks inside (useState, useEffect, etc.)
 *   - Returns data + functions for components to use
 *
 * WHY USE HOOKS?
 *   - Separate logic from UI
 *   - Reusable across components
 *   - Easier to test
 *
 * THE PATTERN:
 *   1. useState() → holds the current state
 *   2. Functions → use pure functions from tennis-rules.ts
 *   3. Return → give component access to state + actions
 */

import { useState } from 'react'
import type { TeamId } from '../types'

// Import PURE FUNCTIONS from tennis-rules
import {
  calculatePoint,
  getScoreDisplay,
  type SimpleGameScore
} from '../lib/tennis-rules'

// ==============================================
// HOOK RETURN TYPE
// ==============================================

/** What this hook gives to components */
interface UseTennisScoreReturn {
  // State (read-only for component)
  score: SimpleGameScore
  team1Games: number
  team2Games: number
  displayScore: string

  // Actions (functions component can call)
  addPoint: (team: TeamId) => void
  resetGame: () => void
}

// ==============================================
// THE CUSTOM HOOK
// ==============================================

export function useTennisScore(): UseTennisScoreReturn {
  // ─────────────────────────────────────────────
  // STEP 1: Define state with useState
  // ─────────────────────────────────────────────

  const [score, setScore] = useState<SimpleGameScore>({
    team1Points: 0,
    team2Points: 0,
  })

  const [team1Games, setTeam1Games] = useState(0)
  const [team2Games, setTeam2Games] = useState(0)

  // ─────────────────────────────────────────────
  // STEP 2: Create action functions
  // ─────────────────────────────────────────────

  /**
   * Called when user clicks "Point Team X"
   *
   * This function:
   *   1. Calls pure function to calculate new state
   *   2. Updates React state with result
   *   3. React automatically re-renders
   */
  const addPoint = (team: TeamId) => {
    // Use pure function to calculate result
    const result = calculatePoint(score, team)

    // Update state
    setScore(result.newScore)

    // If game was won, update games count
    if (result.gameWon && result.winner) {
      if (result.winner === 1) {
        setTeam1Games(prev => prev + 1)
      } else {
        setTeam2Games(prev => prev + 1)
      }
    }
  }

  /**
   * Reset to fresh game
   */
  const resetGame = () => {
    setScore({ team1Points: 0, team2Points: 0 })
    setTeam1Games(0)
    setTeam2Games(0)
  }

  // ─────────────────────────────────────────────
  // STEP 3: Return state + actions
  // ─────────────────────────────────────────────

  return {
    // State
    score,
    team1Games,
    team2Games,
    displayScore: getScoreDisplay(score),

    // Actions
    addPoint,
    resetGame,
  }
}

// ==============================================
// HOW TO USE IN A COMPONENT
// ==============================================
/*

function ScoreboardPage() {
  // Get state and actions from hook
  const {
    displayScore,
    team1Games,
    team2Games,
    addPoint,
    resetGame
  } = useTennisScore()

  return (
    <div>
      <h1>Games: {team1Games} - {team2Games}</h1>
      <h2>Points: {displayScore}</h2>

      <button onClick={() => addPoint(1)}>
        Point Team 1
      </button>

      <button onClick={() => addPoint(2)}>
        Point Team 2
      </button>

      <button onClick={resetGame}>
        Reset
      </button>
    </div>
  )
}

*/
