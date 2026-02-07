import type {MatchSession} from "../../../score-interfaces/match/MatchSession.ts";
import type {ScoreState} from "../../../score-interfaces/match/ScoreState.ts";
import {createEmptySet} from "../empySetCreator/emptySetCreator.ts";
import type {SetData} from "../../../score-interfaces/match/SetData.ts";

export const scoreGameUpdater = (matchData: MatchSession, scoreState: ScoreState) => {

    const setNumber = matchData.sets ? matchData.sets.length + 1 : 1;
    const setsScore = (matchData.sets && matchData.sets.length>0) ? matchData.sets : [createEmptySet(setNumber)];

    const currentSet: SetData = setsScore[setsScore.length - 1];

    const newSetsScore: SetData = {
        ...currentSet,
        playerOneGames: scoreState.gameWinner === 1 ? currentSet.playerOneGames + 1 : currentSet.playerOneGames,
        playerTwoGames: scoreState.gameWinner === 2 ? currentSet.playerTwoGames + 1 : currentSet.playerTwoGames,
        gameHistory: [...currentSet.gameHistory, scoreState],

    };


    return [...setsScore.slice(0, setsScore.length - 1), newSetsScore];
}