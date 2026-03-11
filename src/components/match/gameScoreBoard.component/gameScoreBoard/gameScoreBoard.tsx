import type {ScoreState} from "../../score-interfaces/match/ScoreState.ts";
import ScoreNumberBox from "../scoreNombreBox/scoreNumberBox.tsx";

interface GameScoreBoardProps {
    scoreState: ScoreState;
}

export const GameScoreBoard = ({scoreState}: GameScoreBoardProps) =>{

    const servingPlayerBorder: string = "border-8 border-amber-400 rounded-2xl";
    const defaultBorder: string = "border-8 border-white rounded-2xl";

    return (
        <>
            <div className="flex justify-center items-center gap-8 md:gap-20 lg:gap-32 ">
                <ScoreNumberBox score={scoreState.playerOneScore} borderStyle={scoreState.servingPlayer === 1? servingPlayerBorder: defaultBorder } />
                <ScoreNumberBox score={scoreState.playerTwoScore} borderStyle={scoreState.servingPlayer === 2? servingPlayerBorder: defaultBorder }  />
            </div>
        </>
    )

}