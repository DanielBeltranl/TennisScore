import {scoreUpper} from "./gameUtils/scoreUp.ts";
import type {ScoreState} from "../../../score-interfaces/match/ScoreState.ts";
import {scoreDown} from "./gameUtils/scoreDown.ts";
import {tiebreakScoreUp} from "./tiebrakUtils/tiebreakScoreUp.ts";
import {tiebreakScoreDown} from "./tiebrakUtils/tiebreakScoreDown.ts";

type ActionType =
    | 'PLAYER_ONE_SCORE_UP'
    | 'PLAYER_TWO_SCORE_UP'
    | 'PLAYER_ONE_SCORE_DOWN'
    | 'PLAYER_TWO_SCORE_DOWN'
    | 'RESET_SCORE';

interface Action {
    type: ActionType;
    payload?: boolean;
}

export const scoreReducer = (scoreState: ScoreState, action: Action): ScoreState => {

    switch (action.type) {
        case 'PLAYER_ONE_SCORE_UP': {
            const pointWinner = 1;
            const result = action.payload
                ? tiebreakScoreUp(scoreState, pointWinner)
                : scoreUpper(scoreState, pointWinner);

            return {
                ...scoreState,
                playerOneScore: result.PointScorerScore,
                playerTwoScore: result.OpponentScore,
                gameEnded: result.GameEnded,
                gameWinner: result.winner,
                servingPlayer: 'servingPlayer' in result ? result.servingPlayer : scoreState.servingPlayer,
            };
        }
        case 'PLAYER_TWO_SCORE_UP': {
            const pointWinner = 2;
            const result = action.payload
                ? tiebreakScoreUp(scoreState, pointWinner)
                : scoreUpper(scoreState, pointWinner);

            return {
                ...scoreState,
                playerOneScore: result.OpponentScore,
                playerTwoScore: result.PointScorerScore,
                gameEnded: result.GameEnded,
                gameWinner: result.winner,
                servingPlayer: 'servingPlayer' in result ? result.servingPlayer : scoreState.servingPlayer,
            };
        }
        case 'PLAYER_ONE_SCORE_DOWN': {
            const playerAffected = 1;
            const newScore = action.payload
                ? tiebreakScoreDown(scoreState, playerAffected)
                : scoreDown(scoreState, playerAffected);

            return {
                ...scoreState,
                playerOneScore: newScore.affectedPlayerScore,
                playerTwoScore: newScore.opponentScore,
                gameEnded: newScore.gameEnded,
            };
        }
        case 'PLAYER_TWO_SCORE_DOWN': {
            const playerAffected = 2;
            const newScore = action.payload
                ? tiebreakScoreDown(scoreState, playerAffected)
                : scoreDown(scoreState, playerAffected);

            return {
                ...scoreState,
                playerOneScore: newScore.opponentScore,
                playerTwoScore: newScore.affectedPlayerScore,
                gameEnded: newScore.gameEnded,
            };
        }
        case 'RESET_SCORE': {
            const servingPlayer: number = scoreState.servingPlayer === 1 ? 2 : 1;
            return {
                playerOneScore: '0',
                playerTwoScore: '0',
                servingPlayer: servingPlayer,
                gameEnded: false,
                gameWinner: undefined,
                breakPLayerOne: false,
                breakPLayerTwo: false,
            };
        }
        default: {
            return scoreState;
        }
    }
};