import type {MatchData} from "./MatchData.ts";
import type {SetData} from "./SetData.ts";


export interface MatchSession {
    matchId: string
    matchData: MatchData
    sets?: SetData[]
    status?: 'IN PROGRESS' | 'COMPLETED' | 'SCHEDULED'
}