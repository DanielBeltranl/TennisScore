import {Route, Routes} from "react-router";
import ScoreBoardComponent from "../components/match/score-board.component/scoreBoard.component.tsx";
import {PlayersName} from "../components/match/playersName/playersName.tsx";


export default function AppRoutes (){

    return(
        <Routes>
            <Route path="/" element={<ScoreBoardComponent />}/>
            <Route path="/test" element={<PlayersName/>}/>
        </Routes>
    )

}