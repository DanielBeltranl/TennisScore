import {scoreUpper} from "../scoreUp.ts";
import type {ScoreState} from "../../../score-interfaces/match/ScoreState.ts";
import {scoreDown} from "../scoreDown.ts";

interface Action{
    type: string
    payload?: number
}

interface scoreChangeResult{
    PointScorerScore: string
    OpponentScore: string
    GameEnded: boolean,
    winner?: number

}

export const scoreReducer = (scoreState: ScoreState,  action: Action) =>{

    switch(action.type){
        case "PLAYER_ONE_SCORE_UP":{
            const pointWinner = 1;
            const result: scoreChangeResult = scoreUpper(scoreState, pointWinner);

            return {
                ...scoreState,
                playerOneScore: result.PointScorerScore,
                playerTwoScore: result.OpponentScore,
                gameEnded: result.GameEnded,
                gameWinner: result.winner
            }
        }

        case 'PLAYER_TWO_SCORE_UP': {

            const pointWinner = 2;
            const result: scoreChangeResult = scoreUpper(scoreState, pointWinner);

            return {
                ...scoreState,
                playerOneScore: result.OpponentScore,
                playerTwoScore: result.PointScorerScore,
                gameEnded: result.GameEnded,
                gameWinner: result.winner
            }
        }

        case 'PLAYER_ONE_SCORE_DOWN': {

            const playerAfected = 1;
            const newScore = scoreDown(scoreState, playerAfected);

                return {
                    ...scoreState,
                    playerOneScore: newScore.affectedPlayerScore,
                    playerTwoScore: newScore.opponentScore,
                    gameEnded: newScore.gameEnded,


                }
        }

        case 'PLAYER_TWO_SCORE_DOWN': {

            const playerAfected = 2;
            const newScore = scoreDown(scoreState, playerAfected);

                return {
                    ...scoreState,
                    playerOneScore: newScore.opponentScore,
                    playerTwoScore: newScore.affectedPlayerScore,
                    gameEnded: newScore.gameEnded,

                }
        }
        case 'RESET_SCORE': {

            const servingPlayer: number = scoreState.servingPlayer===1? 2 : 1;
            return {
                playerOneScore: '0',
                playerTwoScore: '0',
                servingPlayer: servingPlayer,
                gameEnded: false,
                gameWinner: undefined,
                breakPLayerOne: false,
                breakPLayerTwo: false
            }
        }
        default :{
            return scoreState;
        }
    }

}