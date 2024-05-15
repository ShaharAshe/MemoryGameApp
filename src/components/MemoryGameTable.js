import Header from "./Header";
import PageContentForm from "./PageContentForm";
import PageContentGame from "./PageContentGame";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import React, {useState} from "react";
import PageContentSetting from "./PageContentSetting";
import EndGameContent from "./EndGameContent";
import ErrorPage from "./ErrorPage";

function MemoryGameTable(){
    const [inputs, setInputs] = useState({username:"", rows:4, cols:4, delay:0.5});
    const [show, setShow] = useState(false);
    const [nameAlert, setNameAlert] = useState(false);
    const [rowColAlert, setRowColAlert] = useState(false);
    const [score, setScore] = useState(0);
    const [rank, setRank] = useState(0);
    const [totalRank, setTotalRank] = useState(0);

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<PageContentForm inputs={inputs} updateInput={setInputs} show={show}
                                                          updateShow={setShow} nameAlert={nameAlert}
                                                          updateNameAlert={setNameAlert}
                                                          updateRowColAlert={setRowColAlert}/>}/>
                <Route path="setting" element={<PageContentSetting inputs={inputs} updateInput={setInputs} show={show}
                                                                   updateShow={setShow} nameAlert={nameAlert}
                                                                   updateNameAlert={setNameAlert}
                                                                   rowColAlert={rowColAlert}
                                                                   updateRowColAlert={setRowColAlert}/>}/>
                <Route path="/game" element={<PageContentGame inputs={inputs} score={score} updateScore={setScore} updateRank={setRank}updateTotalRank={setTotalRank}/>}/>
                <Route path="/endGame" element={<EndGameContent numOfCards={inputs.cols*inputs.rows} score={score} updateScore={setScore} rank={rank} totalRank={totalRank} />}/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MemoryGameTable;