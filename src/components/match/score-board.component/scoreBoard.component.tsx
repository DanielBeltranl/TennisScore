import GameScoreNumberComponent from "../game-score-number.component/gameScoreNumber.component.tsx";
import {useReducer} from "react";
import {ScoreButtomPackComponent} from "../Buttoms/ScoreButtoms/ScoreButtomPack.component.tsx";
import {scoreReducer} from "../utils/gameScore/reducers/scoreReducer.ts";
import type {ScoreState} from "../score-interfaces/match/ScoreState.ts";
import {GameEnderButtom} from "../Buttoms/gameEnderButtom.tsx";
import {useUpdateGames} from "../../../hooks/matchSessionContext/useUpdateGames/useUpdateGames.ts";
import {useGetSetsScore} from "../../../hooks/matchSessionContext/useGetSetsScore/useGetSetsScore.ts";
import type {SetData} from "../score-interfaces/match/SetData.ts";
import {useUpdateSets} from "../../../hooks/matchSessionContext/useUpdateSets/useUpdateSets.ts";
import {SetsScoreBoard} from "../setsScoreBoard/setsScoreBoard/setsScoreBoard.tsx";

const initialScoreState: ScoreState = {
    playerOneScore: '0',
    playerTwoScore: '0',
    servingPlayer: 1,
    gameEnded: false,
    breakPLayerOne: false,
    breakPLayerTwo: false,
};

export default function ScoreBoardComponent () {

    const [scoreState, dispatch] = useReducer(scoreReducer, initialScoreState );

    const setsScore: SetData[] | null = useGetSetsScore()

    const currentSetScore = setsScore ? setsScore[setsScore.length - 1] : null;

    const {updateGameScore} = useUpdateGames()

    const gameEndHandler = () => {
        updateGameScore(scoreState);
        dispatch({type: 'RESET_SCORE'});
    }

    const {updateSets} = useUpdateSets();

    const endSetHandler = () => {
        updateSets()
        dispatch({type: 'RESET_SCORE'});
    }

    return (

        <div className="flex flex-col gap-10 items-center justify-center">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center mt-20 w-full px-10 gap-10">
                {/* Columna Izquierda: Botones */}
                <ScoreButtomPackComponent onScoreUp={()=>dispatch({type: 'PLAYER_ONE_SCORE_UP'})} onScoreDown={()=> dispatch({type: 'PLAYER_ONE_SCORE_DOWN'})} className={"justify-self-end"}/>
                {/* Indicadores de puntos */}
                <div className="flex justify-center items-center gap-8 md:gap-20 lg:gap-32">
                    <GameScoreNumberComponent
                        score={scoreState.playerOneScore}
                    />
                    <GameScoreNumberComponent
                        score={scoreState.playerTwoScore}
                    />
                </div>
                {/* Columna Derecha: Botones */}
                <ScoreButtomPackComponent onScoreUp={()=> dispatch({type: 'PLAYER_TWO_SCORE_UP'}) } onScoreDown={()=> dispatch({type:'PLAYER_TWO_SCORE_DOWN'})} className={"justify-self-start"}/>
            </div>
            {scoreState.gameEnded && !currentSetScore?.setWinner  && (<GameEnderButtom onClick={gameEndHandler} string={"Terminar juego"}/>)}
            {currentSetScore?.setWinner && (<GameEnderButtom onClick={endSetHandler} string={"Terminar Set"}/>)}

            <div>
                <SetsScoreBoard/>
            </div>
        </div>
    )
}