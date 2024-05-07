import Header from "./Header";
import PageContentForm from "./PageContentForm";
import PageContentGame from "./PageContentGame";
import SettingForm from "./SettingForm";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import FormElement from "./FormElement";
import React from "react";
import PageContentSetting from "./PageContentSetting";
import PageContentScore from "./PageContentScore";

function MemoryGameTable(){

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<PageContentForm/>}/>
                <Route path="/score" element ={<PageContentScore/>} />
                <Route path="/setting" element={<PageContentSetting/>}/>
                <Route path="/game" element ={<PageContentGame/>}/>
                {/*<Route path="*" element={<ErrorPage />} />*/}
            </Routes>
        </BrowserRouter >
    );
}

export default MemoryGameTable;