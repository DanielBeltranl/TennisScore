import type {ReactNode} from "react";
import {useGetSetsScore} from "../../../../hooks/matchSessionContext/useGetSetsScore/useGetSetsScore.ts";
import type {SetData} from "../../score-interfaces/match/SetData.ts";
import { motion } from "framer-motion";

export const ClosedSetsScoreboard = (): ReactNode => {
    const setsScore: SetData[] | null = useGetSetsScore();
    const style = "relative overflow-hidden flex items-center justify-center bg-purple-900 w-[clamp(60px,20vw,120px)] h-[clamp(60px,20vw,120px)] border-2 border-amber-50 rounded-lg text-[clamp(45px,20vw,90px)] text-amber-50";

    if (!setsScore) return null;

    return (
        <div className="flex gap-1">
            {setsScore.slice(0, -1).map((set, index) => (
                <div key={index} className="flex flex-col justify-center">
                    <div className={style}>
                        <motion.div
                            initial={{ x: "0%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.1 }}
                            className="absolute inset-0 bg-purple-700 z-10" // Cortina en capa media
                        />
                        <span className="relative z-20 font-bold">{set.playerOneGames}</span>
                    </div>

                    <div className={style}>
                        <motion.div
                            initial={{ x: "0%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.1 }}
                            className="absolute inset-0 bg-purple-700 z-10"
                        />
                        <span className="relative z-20 font-bold">{set.playerTwoGames}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};