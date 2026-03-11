import type {ScoreState} from "../../../../score-interfaces/match/ScoreState.ts";


export const tiebreakScoreUp = (scoreState: ScoreState, pointWinner : number) =>{

    const pointWinnerScore = pointWinner === 1 ? scoreState.playerOneScore : scoreState.playerTwoScore;
    const opponentScore = pointWinner === 1 ? scoreState.playerTwoScore : scoreState.playerOneScore;
    const totalPoints = Number(scoreState.playerOneScore) + Number(scoreState.playerTwoScore);

    const newPointWinnerScore = (Number(pointWinnerScore) + 1).toString();



    let nextServer = scoreState.servingPlayer || 1;

    if (totalPoints % 2 !== 0) {
        nextServer = nextServer === 1 ? 2 : 1;
    }

    if (Number(newPointWinnerScore) >= 7 && Math.abs((Number(newPointWinnerScore) - Number(opponentScore))) >= 2) {
        return {
            PointScorerScore: newPointWinnerScore,
            OpponentScore: opponentScore,
            GameEnded: true,
            winner: pointWinner,
        }
    } else {
        return {
            PointScorerScore: newPointWinnerScore,
            OpponentScore: opponentScore,
            GameEnded: false,
            servingPlayer: nextServer
        }
    }
}