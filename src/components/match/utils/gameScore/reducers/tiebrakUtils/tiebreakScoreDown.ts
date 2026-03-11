import type {ScoreState} from "../../../../score-interfaces/match/ScoreState.ts";


export const tiebreakScoreDown=(scoreState: ScoreState, playerAffected: number)=>{

    const affectedPlayerScore = playerAffected === 1 ? scoreState.playerOneScore : scoreState.playerTwoScore;
    const opponentScore = playerAffected === 1 ? scoreState.playerTwoScore : scoreState.playerOneScore;

    const newAffectedPlayerScore = affectedPlayerScore === "0" ? "0" : (parseInt(affectedPlayerScore) - 1).toString();

    return {
        affectedPlayerScore: newAffectedPlayerScore,
        opponentScore: opponentScore,
        gameEnded: false
    }

}