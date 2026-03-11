import { motion } from "framer-motion";
import ScoreUpButtomComponent from "../score-up-buttom.component/scoreUpButtom.component.tsx";
import ScoreDownButtomComponent from "../score-down-button.component/scoreDownButton.component.tsx";

interface scoreButtomPackProps {
    onScoreUp: () => void;
    onScoreDown: () => void;
    className?: string;
}

export const ScoreButtomPackComponent = ({ onScoreUp, onScoreDown, className }: scoreButtomPackProps) => {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
            className={`flex flex-col gap-32 ${className}`}
        >
            <ScoreUpButtomComponent onClick={onScoreUp}/>
            <ScoreDownButtomComponent onClick={onScoreDown}/>
        </motion.div>
    );
};

