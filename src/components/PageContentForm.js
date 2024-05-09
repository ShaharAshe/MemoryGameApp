import { Col, Row} from "react-bootstrap";
import React, { useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import FormElement from "./FormElement";
import SettingForm from "./SettingForm";
import PageContentGame from "./PageContentGame";


function PageContentForm(props){
    return(
        <>
            <FormElement inputs={props.inputs} updateInput={props.updateInput} updateResult={props.updateResult} show={props.show} updateShow={props.updateShow}/>
        </>
    );
}

export default PageContentForm;
