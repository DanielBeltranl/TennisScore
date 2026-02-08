import { useReducer } from "react";
import { ScoreButtomPackComponent } from "../Buttoms/ScoreButtoms/ScoreButtomPack.component.tsx";
import { scoreReducer } from "../utils/gameScore/reducers/scoreReducer.ts";
import type { ScoreState } from "../score-interfaces/match/ScoreState.ts";
import { GameEnderButtom } from "../Buttoms/gameEnderButtom.tsx";
import { useUpdateGames } from "../../../hooks/matchSessionContext/useUpdateGames/useUpdateGames.ts";
import { useGetSetsScore } from "../../../hooks/matchSessionContext/useGetSetsScore/useGetSetsScore.ts";
import type { SetData } from "../score-interfaces/match/SetData.ts";
import { useUpdateSets } from "../../../hooks/matchSessionContext/useUpdateSets/useUpdateSets.ts";
import { SetsScoreBoard } from "../setsScoreBoard/setsScoreBoard/setsScoreBoard.tsx";
import { AnimatePresence } from "framer-motion";
import { GameScoreBoard } from "../game-score-number.component/gameSocreBoard/gameScoreBoard.tsx";

const initialScoreState: ScoreState = {
    playerOneScore: '0',
    playerTwoScore: '0',
    servingPlayer: 1,
    gameEnded: false,
    breakPLayerOne: false,
    breakPLayerTwo: false,
};

export default function ScoreBoardComponent() {
    const [scoreState, dispatch] = useReducer(scoreReducer, initialScoreState);
    const setsScore: SetData[] | null = useGetSetsScore();
    const currentSetScore = setsScore ? setsScore[setsScore.length - 1] : null;

    const { updateGameScore } = useUpdateGames();
    const { updateSets } = useUpdateSets();

    const gameEndHandler = () => {
        updateGameScore(scoreState);
        dispatch({ type: 'RESET_SCORE' });
    }

    const endSetHandler = () => {
        updateSets();
    }

    const isGameEnding = scoreState.gameEnded && !currentSetScore?.setWinner;
    const isSetEnding = !!currentSetScore?.setWinner;

    return (
        <div className="flex flex-col w-full pb-10">
            <div className="grid grid-cols-[minmax(80px,1fr)_auto_minmax(80px,1fr)] items-center mt-20 w-full px-10 gap-10">

                    <div className="flex justify-end">
                        <AnimatePresence>
                        {!currentSetScore?.setWinner ? (
                            <ScoreButtomPackComponent
                                key="pack2"
                                onScoreUp={() => dispatch({ type: 'PLAYER_ONE_SCORE_UP' })}
                                onScoreDown={() => dispatch({ type: 'PLAYER_ONE_SCORE_DOWN' })}
                            />
                        ) : (
                            <div className="w-20 h-10" aria-hidden="true" />
                        )}
                        </AnimatePresence>
                    </div>


                <GameScoreBoard scoreState={scoreState} />

                    <div className="flex justify-start">
                        <AnimatePresence>
                            {!currentSetScore?.setWinner ? (
                                <ScoreButtomPackComponent
                                    key="pack1"
                                    onScoreUp={() => dispatch({ type: 'PLAYER_TWO_SCORE_UP' })}
                                    onScoreDown={() => dispatch({ type: 'PLAYER_TWO_SCORE_DOWN' })}
                                />
                            ) : (
                                <div className="w-20 h-10" aria-hidden="true" />
                            )}
                        </AnimatePresence>
                    </div>

            </div>


            <div className="h-16 flex items-center justify-center mt-10">
                <AnimatePresence mode="wait">
                    {isGameEnding && (
                        <GameEnderButtom key="game-ender" onClick={gameEndHandler} string={"Terminar juego"} />
                    )}
                    {isSetEnding && (
                        <GameEnderButtom key="set-ender" onClick={endSetHandler} string={"Terminar Set"} />
                    )}
                </AnimatePresence>
                {!isGameEnding && !isSetEnding && <div className="h-10 w-40"></div>}
            </div>

            <div className="flex justify-center w-full px-10 mt-5">
                <div className="flex flex-wrap w-full max-w-[1032px]">
                    <SetsScoreBoard />
                </div>
            </div>
        </div>
    );
}