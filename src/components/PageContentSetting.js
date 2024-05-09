import FormElement from "./FormElement";
import React from "react";
import SettingForm from "./SettingForm";
import PageContentScore from "./PageContentScore";

function PageContentSetting(props){
    return (
        <>
            <FormElement inputs={props.inputs} updateInput={props.updateInput} updateResult={props.updateResult} show={props.show} updateShow={props.updateShow}/>
            <SettingForm inputs={props.inputs} updateInput={props.updateInput} updateResult={props.updateResult} show={props.show} updateShow={props.updateShow}/>
        </>
    )
}

export default PageContentSetting;