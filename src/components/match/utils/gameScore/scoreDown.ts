import type {ScoreState} from "../../score-interfaces/match/ScoreState.ts";

const TENNIS_SCORES = ["0", "15", "30", "40", "AD"];

const indexDown = (currentScore: string) => {
    const currentScoreIndex = TENNIS_SCORES.indexOf(currentScore);
    return TENNIS_SCORES[currentScoreIndex -1];
}


export const scoreDown = (scoreSate: ScoreState, playerAfected: number) => {

    const affectedPlayerScore = playerAfected === 1 ? scoreSate.playerOneScore : scoreSate.playerTwoScore;
    const opponentScore = playerAfected === 1 ? scoreSate.playerTwoScore : scoreSate.playerOneScore;

    try {
        if(affectedPlayerScore === "0"){

            return {affectedPlayerScore: "0",
                    opponentScore: opponentScore
                    ,gameEnded: false};

        }else if(affectedPlayerScore === "40" && opponentScore === "AD"){
            
            return {affectedPlayerScore: indexDown(affectedPlayerScore),
                    opponentScore: indexDown(opponentScore),
                    gameEnded: false};
            
        } else {

            return {affectedPlayerScore: indexDown(affectedPlayerScore),
                    opponentScore: opponentScore,
                    gameEnded: false};

        }
    } catch (e) {
        throw new Error("Error in scoreDown function: " + e);
    }
}