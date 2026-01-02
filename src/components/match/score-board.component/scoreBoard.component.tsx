import ScoreUpButtomComponent from "../score-up-buttom.component/scoreUpButtom.component.tsx";
import GameScoreNumberComponent from "../game-score-number.component/gameScoreNumber.component.tsx";
import ScoreDownButtomComponent from "../score-down-button.component/scoreDownButton.component.tsx";
import {useState} from "react";

export default function ScoreBoardComponent () {

    //el useState le dice a react que este atento a los cambios de las variables que estan dentro del useState pa despues re-renderizarlas

    const [rightScore, setRightScore] = useState<number>(0);
    const [leftScore, setLeftScore] = useState<number>(0);

    //funciones pa el lado derecho, debe haber una mejor manera, pero no supe como :C

    const rightScoreCounterUpButtom = () => {
       setRightScore(rightScore + 15);

        if(rightScore === 30){
            setRightScore(rightScore + 10)
        }

        if(rightScore === 40){
            setRightScore(0)
        }

    };

    const rightScoredDownButton = () => {
        setRightScore(rightScore - 15);

        if(rightScore === 40){
            setRightScore(rightScore - 10)
        }

        if(rightScore === 0){
            setRightScore(0)
        }
    };

    const leftScoreCounterUpButtom = () => {
        setLeftScore(leftScore + 15);

        if(leftScore === 30){
            setLeftScore(leftScore + 10)
        }

        if(leftScore === 40){
            setLeftScore(0)
        }
    }

    const leftScoreDownButton = () => {
        setLeftScore(leftScore - 15);

        if(leftScore === 40){
            setLeftScore(leftScore - 10)
        }

        if (leftScore === 0){
            setLeftScore(0)
        }
    }

    return (
        <div className="grid grid-cols-2 justify-items-center mt-20">

            {/* lado izquierdo shamy */}

            <div className="flex gap-6 items-center">
            <div className="flex space flex-col gap-40">
                <ScoreUpButtomComponent onClick={leftScoreCounterUpButtom}/>
                <ScoreDownButtomComponent onClick={leftScoreDownButton}/>
            </div>
            <GameScoreNumberComponent score={leftScore}/>
        </div>

            {/* lado derecho bro, la unica diferencia es que dispongo los componentes al reves para que las propiedades de columna los ordene como en el mock */}

            <div className="flex gap-6 items-center">
        <GameScoreNumberComponent score={rightScore}/>
        <div className="flex space flex-col gap-40">
            <ScoreUpButtomComponent onClick={rightScoreCounterUpButtom}/>
            <ScoreDownButtomComponent onClick={rightScoredDownButton}/>
        </div>
    </div>
    </div>


    )
}