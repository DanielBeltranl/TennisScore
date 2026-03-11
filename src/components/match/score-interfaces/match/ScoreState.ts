 export interface ScoreState{
    playerOneScore: string
    playerTwoScore: string
    gameEnded?: boolean
    servingPlayer?: number
    tiebreakServing?: number
    gameWinner?:number
    breakPLayerOne?: boolean //evaluar existencia
    breakPLayerTwo?: boolean //evaluar existencia
}