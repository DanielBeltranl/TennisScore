import {useGetSetsScore} from "../../../../hooks/matchSessionContext/useGetSetsScore/useGetSetsScore.ts";
import type {SetData} from "../../score-interfaces/match/SetData.ts";

export const CurrentSetsScoreBoard = () => {

    const scoreSets =  useGetSetsScore();

    const style = "flex items-center justify-center bg-amber-50 w-[clamp(60px,20vw,120px)] h-[clamp(60px,20vw,120px)] rounded-lg text-[clamp(45px,20vw,90px)] bg-purple-700 border-2 border-white text-amber-50 "

    const currentSetScore: SetData | null = scoreSets ? scoreSets[scoreSets.length - 1] : null;

    return (
        <div className="flex-col justify-center">
            <div className={`${style} bg-purple-700 border-2 border-white text-amber-50`}>
                {currentSetScore?.playerOneGames}
            </div>
            <div className={`${style} border-2 border-black`}>
                {currentSetScore?.playerTwoGames}
            </div>
        </div>
    );
};