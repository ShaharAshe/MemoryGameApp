import { Col, Row} from "react-bootstrap";
import React, { useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import FormElement from "./FormElement";
import SettingForm from "./SettingForm";
import PageContentGame from "./PageContentGame";


function PageContentForm(){
    return(
        <>
            <FormElement/>
        </>
    );
}

export default PageContentForm;
