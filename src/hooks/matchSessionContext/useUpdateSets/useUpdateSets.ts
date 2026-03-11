import {MatchContext} from "../../../context/scoreContext/scoreContext.tsx";
import {useContext} from "react";
import {createEmptySet} from "../../../components/match/utils/gameScore/empySetCreator/emptySetCreator.ts";


export const useUpdateSets = () => {

    const context  = useContext(MatchContext);
    if (!context) throw new Error("useUpdateSets must be used within Provider");

    const updateSets = () => {

        const {matchSessionData, setMatchSessionData} = context;

        const currentSetsScore = matchSessionData.sets ? matchSessionData.sets : [];

        const updateSetsScore = [...currentSetsScore, createEmptySet(currentSetsScore.length +1)];

        console.log(matchSessionData)
        console.log("----------------")

        console.log(updateSetsScore);

        setMatchSessionData({
            ...matchSessionData,
            sets: updateSetsScore,
        });
    }



    return {updateSets};

};