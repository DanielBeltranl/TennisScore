import {Route, Routes} from "react-router";
import ScoreBoardComponent from "../components/match/score-board.component/scoreBoard.component.tsx";



export default function AppRoutes (){

    return(
        <Routes>
            <Route path="/" element={<ScoreBoardComponent />}/>
        </Routes>
    )

}