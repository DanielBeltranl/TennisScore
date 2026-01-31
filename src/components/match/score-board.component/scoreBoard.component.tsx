import GameScoreNumberComponent from "../game-score-number.component/gameScoreNumber.component.tsx";
import {useReducer} from "react";
import {ScoreButtomPackComponent} from "../Buttoms/ScoreButtoms/ScoreButtomPack.component.tsx";
import {scoreReducer} from "../utils/scoreReducer.ts";
import type {ScoreState} from "../score-interfaces/ScoreState.ts";

export default function ScoreBoardComponent () {

    const initialScoreState: ScoreState = {
        playerOneScore: '0',
        playerTwoScore: '0',
        servingPlayer: 1,
        gameEnded: false
    };

    const [scoreState, dispatch] = useReducer(scoreReducer, initialScoreState );

    const scoreStyles = "w-[clamp(150px,20vw,300px)] aspect-square text-[clamp(70px,12vw,210px)] font-bold flex items-center justify-center";

    return (
        <div className="grid grid-cols-[1fr_auto_1fr] items-center mt-20 w-full px-10 gap-10">
            {/* Columna Izquierda: Botones */}
            <ScoreButtomPackComponent onScoreUp={()=>dispatch({type: 'PLAYER_ONE_SCORE_UP'})} onScoreDown={()=> dispatch({type: 'PLAYER_ONE_SCORE_DOWN'})} className={"justify-self-end"}/>
            {/* Indicadores de puntos */}
            <div className="flex justify-center items-center gap-8 md:gap-20 lg:gap-32">
                <GameScoreNumberComponent
                    score={scoreState.playerOneScore}
                    className={scoreStyles}
                />
                <GameScoreNumberComponent
                    score={scoreState.playerTwoScore}
                    className={scoreStyles}
                />
            </div>
            {/* Columna Derecha: Botones */}
            <ScoreButtomPackComponent onScoreUp={()=> dispatch({type: 'PLAYER_TWO_SCORE_UP'}) } onScoreDown={()=> dispatch({type:'PLAYER_TWO_SCORE_DOWN'})} className={"justify-self-start"}/>

        </div>

    )
}