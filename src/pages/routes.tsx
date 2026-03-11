import {Route, Routes} from "react-router";
import FullScoreBoardComponent from "../components/match/fullScoreboard/fullScoreBoard.component.tsx";
import {PlayersName} from "../components/match/playersName/playersName.tsx";


export default function AppRoutes (){

    return(
        <Routes>
            <Route path="/" element={<FullScoreBoardComponent />}/>
            <Route path="/test" element={<PlayersName/>}/>
        </Routes>
    )

}