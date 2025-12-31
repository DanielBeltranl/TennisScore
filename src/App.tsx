/**
 * App - LEARNING EXAMPLE
 *
 * This shows how everything connects:
 *   Component → Hook → Pure Functions
 */

import { useTennisScore } from './hooks/useTennisScore'

function App() {
  // ─────────────────────────────────────────────
  // Use the custom hook to get state + actions
  // ─────────────────────────────────────────────
  const {
    displayScore,
    team1Games,
    team2Games,
    addPoint,
    resetGame
  } = useTennisScore()

  // ─────────────────────────────────────────────
  // Render UI
  // ─────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center space-y-8">

        {/* Title */}
        <h1 className="text-4xl font-bold text-white">
          TenisScore
        </h1>

        {/* Games Score */}
        <div className="text-2xl text-gray-300">
          Games: {team1Games} - {team2Games}
        </div>

        {/* Current Game Points */}
        <div className="text-6xl font-bold text-green-400">
          {displayScore}
        </div>

        {/* Point Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => addPoint(1)}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-lg transition"
          >
            Point Team 1
          </button>

          <button
            onClick={() => addPoint(2)}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-lg transition"
          >
            Point Team 2
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetGame}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition"
        >
          Reset Match
        </button>

        {/* Learning Note */}
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          This is a skeleton. Edit <code className="text-green-400">src/lib/tennis-rules.ts</code> to
          add deuce logic, tiebreaks, and set scoring.
        </p>

      </div>
    </div>
  )
}

export default App
