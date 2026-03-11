import type {ScoreState} from "../../../../score-interfaces/match/ScoreState.ts";


const TENNIS_SCORES = ["0", "15", "30", "40", "AD"];

const indexUpper = (currentScore: string) => {
    const currentScoreIndex = TENNIS_SCORES.indexOf(currentScore);
    return TENNIS_SCORES[currentScoreIndex + 1];
}

export const scoreUpper = (scoreState:ScoreState, pointWinner: number ) =>{

const pointScorer = pointWinner === 1 ? scoreState.playerOneScore : scoreState.playerTwoScore;
const opponentScore = pointWinner === 1 ? scoreState.playerTwoScore : scoreState.playerOneScore;


try {
    if(pointScorer === "40" && opponentScore === "40"){

        return {PointScorerScore: "AD",
                OpponentScore: "40",
                GameEnded: false };

    }else if(pointScorer === "AD"){
        return {PointScorerScore: "AD",
                OpponentScore: "40",
                GameEnded: true,
                winner: pointWinner};

    }else if(TENNIS_SCORES.indexOf(opponentScore)<3 && pointScorer === "40"){
        return {PointScorerScore: "40",
                OpponentScore: opponentScore,
                GameEnded: true,
                winner: pointWinner};

    }else if(pointScorer === "40" && opponentScore === "AD"){
        return {PointScorerScore: "40",
                OpponentScore: "40",
                GameEnded: false };
    }
    else{
        return {PointScorerScore:indexUpper(pointScorer),
                OpponentScore: opponentScore,
                GameEnded: false};
    }
}catch(e){
    throw new Error("Error in scoreChanger function: " + e);
}

}
