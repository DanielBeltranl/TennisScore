import type {ScoreState} from "./ScoreState.ts";

export interface SetData {
    setNumber: number
    playerOneGames: number
    playerTwoGames: number
    gameHistory: ScoreState[]
    setWinner?: number
    tiebreak?: boolean
}