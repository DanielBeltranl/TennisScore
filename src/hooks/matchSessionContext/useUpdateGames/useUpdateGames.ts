import {MatchContext} from "../../../context/scoreContext/scoreContext.tsx";
import {useCallback, useContext} from "react";
import {createEmptySet} from "../../../components/match/utils/gameScore/empySetCreator/emptySetCreator.ts";
import type {ScoreState} from "../../../components/match/score-interfaces/match/ScoreState.ts";
import type {SetData} from "../../../components/match/score-interfaces/match/SetData.ts";
import {updateSetWinner} from "./updateSetWinner.ts";

export const useUpdateGames = () => {
    const context = useContext(MatchContext);

    if (!context) throw new Error("useUpdateGames must be used within Provider");

    const { matchSessionData, setMatchSessionData } = context;

    const updateGameScore = useCallback((scoreState: ScoreState) => {

        const currentSetScore = matchSessionData.sets?.length ? matchSessionData.sets[matchSessionData.sets.length - 1] : createEmptySet(1);

        let newSetsScore: SetData = {
            ...currentSetScore,
            playerOneGames: scoreState.gameWinner === 1 ? currentSetScore.playerOneGames + 1 : currentSetScore.playerOneGames,
            playerTwoGames: scoreState.gameWinner === 2 ? currentSetScore.playerTwoGames + 1 : currentSetScore.playerTwoGames,
            gameHistory: [...currentSetScore.gameHistory, scoreState],
        };

        newSetsScore = updateSetWinner(newSetsScore);
        console.log(newSetsScore);

        const updatedSets = matchSessionData.sets ? [...matchSessionData.sets.slice(0, -1), newSetsScore] : [newSetsScore];

        setMatchSessionData({
            ...matchSessionData,
            sets: updatedSets,
        });
    }, [matchSessionData, setMatchSessionData]);



    return { updateGameScore };
};