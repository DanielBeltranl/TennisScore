import type {SetData} from "../../../score-interfaces/match/SetData.ts";



export const createEmptySet = (setNumber: number): SetData => ({
    setNumber: setNumber,
    playerOneGames: 0,
    playerTwoGames: 0,
    gameHistory: [],
});