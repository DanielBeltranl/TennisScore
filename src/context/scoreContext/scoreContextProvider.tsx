import {type ReactNode, useState} from "react";
import type {MatchSession} from "../../components/match/score-interfaces/match/MatchSession.ts";
import {MatchContext} from "./scoreContext.tsx";
import type {MatchData} from "../../components/match/score-interfaces/match/MatchData.ts";

const matchData: MatchData ={
    playerOneName: 'Jannik Sinner',
    playerTwoName: 'Carlos Alcaraz',
    bestOfSets: 5,
}

const initialMatchContext: MatchSession = {
    matchId: `${Math.floor(100 + Math.random() * 900)}`,
    matchData: matchData,
    status: 'SCHEDULED',
}

interface Props {
    children: ReactNode;
}

export const ScoreContextProvider = ({children}:Props) => {

    const [matchSessionData, setMatchSessionData] = useState<MatchSession>(initialMatchContext);

    const scoreValue = {matchSessionData, setMatchSessionData}

    return (
        <MatchContext.Provider value={scoreValue}>
            {children}
            </MatchContext.Provider>
    )
}