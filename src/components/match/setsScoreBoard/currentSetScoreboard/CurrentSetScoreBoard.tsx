import { motion } from "framer-motion";
import { useGetSetsScore } from "../../../../hooks/matchSessionContext/useGetSetsScore/useGetSetsScore.ts";

export const CurrentSetsScoreBoard = () => {
    const scoreSets = useGetSetsScore();
    const currentSetIndex = scoreSets ? scoreSets.length : 0;
    const currentSetScore = scoreSets ? scoreSets[scoreSets.length - 1] : null;

    const style = "flex items-center justify-center w-[clamp(60px,20vw,120px)] h-[clamp(60px,20vw,120px)]  text-[clamp(45px,20vw,90px)] font-bold bg-purple-700 border-2 text-amber-50 relative overflow-hidden";

    return (
        <div className="overflow-hidden">
            <motion.div
                key={currentSetIndex}
                initial={{ x: "-105%" }}
                animate={{ x: 0 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                }}
                className="flex flex-col justify-center"
            >
                <div className={`${style} border-white`}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="relative z-20"
                    >
                        {currentSetScore?.playerOneGames}
                    </motion.span>
                </div>

                <div className={`${style} border-white`}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="relative z-20"
                    >
                        {currentSetScore?.playerTwoGames}
                    </motion.span>
                </div>
            </motion.div>
        </div>
    );
};