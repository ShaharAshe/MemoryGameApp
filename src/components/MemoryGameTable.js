import Header from "./Header";
import PageContentForm from "./PageContentForm";
import PageContentGame from "./PageContentGame";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import React, {useState} from "react";
import PageContentSetting from "./PageContentSetting";

function MemoryGameTable(){
    const [inputs, setInputs] = useState({username:"", rows:4, cols:4, delay:0.5});
    const [show, setShow] = useState(false);
    const [nameAlert, setNameAlert] = useState(false);
    const [rowColAlert, setRowColAlert] = useState(false);

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<PageContentForm inputs={inputs} updateInput={setInputs} show={show} updateShow={setShow} nameAlert={nameAlert} updateNameAlert={setNameAlert} updateRowColAlert={setRowColAlert}/>}/>
                <Route path="setting" element={<PageContentSetting inputs={inputs} updateInput={setInputs} show={show} updateShow={setShow} nameAlert={nameAlert} updateNameAlert={setNameAlert} rowColAlert={rowColAlert} updateRowColAlert={setRowColAlert}/>}/>
                <Route path="/game" element ={<PageContentGame inputs={inputs}/>}/>
                {/*<Route path="*" element={<ErrorPage />} />*/}
            </Routes>
        </BrowserRouter >
    );
}

export default MemoryGameTable;