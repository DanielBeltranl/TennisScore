import {useContext} from "react";
import {MatchContext} from "../../../context/scoreContext/scoreContext.tsx";
import type {SetData} from "../../../components/match/score-interfaces/match/SetData.ts";


export const useGetSetsScore = (): SetData[] | null => {

    const Context = useContext(MatchContext);

    if (!Context) throw new Error("No se ha provisto el contexto");

        const {matchSessionData} = Context;

        const setsScore = matchSessionData.sets ? matchSessionData.sets : null;

        if (!setsScore) return null ;

        return setsScore

}