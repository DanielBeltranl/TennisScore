import ScoreUpButtomComponent from "../score-up-buttom.component/scoreUpButtom.component.tsx";
import ScoreDownButtomComponent from "../score-down-button.component/scoreDownButton.component.tsx";


interface scoreButtomPackProps {
    onScoreUp: () => void
    onScoreDown: () => void
    className?: string
}

export const ScoreButtomPackComponent = ({onScoreUp, onScoreDown, className}: scoreButtomPackProps) => {

    return (
        <div className={`flex flex-col gap-32 ${className}`}>
            <ScoreUpButtomComponent onClick={onScoreUp}/>
            <ScoreDownButtomComponent onClick={onScoreDown}/>
        </div>

    )
}

