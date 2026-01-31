import {scoreUpper} from "./scoreUp.ts";
import type {ScoreState} from "../score-interfaces/ScoreState.ts";
import {scoreDown} from "./scoreDown.ts";

interface Action{
    type: string
    payload?: number
}

interface scoreChangeResult{
    PointScorerScore: string
    OpponentScore: string
    GameEnded: boolean
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
                gameEnded: result.GameEnded
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
            }
        }

        case 'PLAYER_ONE_SCORE_DOWN': {

            const playerAfected = 1;
            const newScore = scoreDown(scoreState, playerAfected);

                return {
                    ...scoreState,
                    playerOneScore: newScore.affectedPlayerScore,
                    playerTwoScore: newScore.opponentScore
                }

        }

        case 'PLAYER_TWO_SCORE_DOWN': {

            const playerAfected = 2;
            const newScore = scoreDown(scoreState, playerAfected);

                return {
                    ...scoreState,
                    playerOneScore: newScore.opponentScore,
                    playerTwoScore: newScore.affectedPlayerScore,
                }
        }
        default :{
            return scoreState;
        }
    }

}