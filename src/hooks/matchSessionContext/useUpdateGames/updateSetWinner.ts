import type {SetData} from "../../../components/match/score-interfaces/match/SetData.ts";


export const updateSetWinner = (currentSet: SetData): SetData => {

    if (currentSet.playerOneGames ===6 && currentSet.playerTwoGames <=4) {
        currentSet.setWinner= 1
    }else if (currentSet.playerTwoGames ===6 && currentSet.playerOneGames <=4) {
        currentSet.setWinner= 2
    }else if(currentSet.playerOneGames ===7 && currentSet.playerTwoGames ===5){
        currentSet.setWinner= 1
    }else if(currentSet.playerTwoGames ===7 && currentSet.playerOneGames ===5){
        currentSet.setWinner= 2
    }else if (currentSet.playerTwoGames === 6 && currentSet.playerOneGames === 6) {
        currentSet.tiebreak = true;
    }

    return currentSet

}