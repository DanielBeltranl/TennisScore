import { useContext } from "react";
import { MatchContext } from "../../../context/scoreContext/scoreContext.tsx";

export const PlayersName = () => {
    const context = useContext(MatchContext);
    const matchSessionData = context?.matchSessionData.matchData;

    const formatName = (fullName: string | undefined) => {
        if (!fullName) return "";
        const parts = fullName.trim().split(" ");
        if (parts.length < 2) return fullName.toLowerCase();

        const firstName = parts[0].toLowerCase();
        const lastName = parts.slice(1).join(" ").toUpperCase();

        return `${firstName} ${lastName}`;
    };

    const boxNameStyle = "flex items-center px-4 bg-purple-900 w-[clamp(325px,30vw,650px)] h-[clamp(60px,30vw,120px)] border-2 border-amber-50 rounded-lg";
    const playerNameStyle = "text-[clamp(25px,10vw,50px)] text-amber-50 leading-none font-bold";

    return (
        <div className="flex flex-col ">
            <div className={boxNameStyle}>
                <span className={playerNameStyle}>
                    {formatName(matchSessionData?.playerOneName)}
                </span>
            </div>

            <div className={boxNameStyle}>
                <span className={playerNameStyle}>
                    {formatName(matchSessionData?.playerTwoName)}
                </span>
            </div>
        </div>
    );
};