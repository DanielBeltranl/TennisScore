import type {ReactNode} from "react";
import {useGetSetsScore} from "../../../../hooks/matchSessionContext/useGetSetsScore/useGetSetsScore.ts";
import type {SetData} from "../../score-interfaces/match/SetData.ts";

export const ClosedSetsScoreboard = (): ReactNode => {

    const setsScore: SetData[] | null = useGetSetsScore();

    const style = "flex items-center justify-center bg-purple-900 w-[clamp(60px,20vw,120px)] h-[clamp(60px,20vw,120px)] border-2 border-amber-50  rounded-lg text-[clamp(45px,20vw,90px)] text-amber-50  "

    if (!setsScore) return null;

    return(
        <div className="flex">
            {setsScore && setsScore.slice(0,-1).map((set, index) => (
                <div key={index} className="flex flex-col justify-center">
                <div className={`${style}`}>
                    {set.playerOneGames}
                </div>
                <div className={`${style}`}>
                    {set.playerTwoGames}
                </div>
            </div>))}
        </div>
    )
}