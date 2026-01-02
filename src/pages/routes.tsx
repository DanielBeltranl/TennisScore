import {Route, Routes} from "react-router";
import GameScoreNumberComponent from "../components/match/game-score-number.component/gameScoreNumber.component.tsx";
import ScoreUpButtomComponent from "../components/match/score-up-buttom.component/scoreUpButtom.component.tsx";
import ScoreBoardComponent from "../components/match/score-board.component/scoreBoard.component.tsx";
import ScoreDownButtomComponent from "../components/match/score-down-button.component/scoreDownButton.component.tsx";


export default function AppRoutes (){

    return(
        <Routes>
            <Route path="/gameScoreNumberTest" element={<GameScoreNumberComponent score={4} />} />
            <Route path="/upButtonTest" element={<ScoreUpButtomComponent onClick={function(): void {
                throw new Error("Function not implemented.");
            } } /> } />
            <Route path="/scoreBoardTest" element={<ScoreBoardComponent />}/>
            <Route path="/scoreDownTest" element={<ScoreDownButtomComponent onClick={function(): void {}}/>}/>
        </Routes>
    )

}