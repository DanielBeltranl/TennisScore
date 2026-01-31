 export interface ScoreState{
    playerOneScore: string
    playerTwoScore: string
    gameEnded?: boolean
    servingPlayer?: 1 | 2
    break?: boolean //evaluar existencia
}