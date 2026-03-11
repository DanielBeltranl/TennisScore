import {useGetSetsScore} from "../../../../hooks/matchSessionContext/useGetSetsScore/useGetSetsScore.ts";
import type {SetData} from "../../score-interfaces/match/SetData.ts";
import {PlayersName} from "../../playersName/playersName.tsx";
import {ClosedSetsScoreboard} from "../closedSetsScoreboard/closedSetsScoreBoard.tsx";
import {CurrentSetsScoreBoard} from "../currentSetScoreboard/CurrentSetScoreBoard.tsx";


export const SetsScoreBoard = () => {

    const currentSetsScore: SetData[] | null = useGetSetsScore()

    return (
        <div className="flex">
            <PlayersName/>
            {currentSetsScore && currentSetsScore?.length >1 && (
                <ClosedSetsScoreboard/>
            ) }
            {currentSetsScore && (<CurrentSetsScoreBoard/>)}
        </div>
    )
}