import {createContext} from 'react';
import type {MatchSession} from "../../components/match/score-interfaces/match/MatchSession.ts";


interface MatchContextType {
    matchSessionData: MatchSession;
    setMatchSessionData: (data: MatchSession) => void;
}

export const MatchContext  = createContext<MatchContextType | undefined>(undefined);



