import FormElement from "./FormElement";
import React from "react";
import SettingForm from "./SettingForm";

function PageContentSetting(props){
    return (
        <>
            <FormElement inputs={props.inputs} updateInput={props.updateInput} updateResult={props.updateResult} show={props.show} updateShow={props.updateShow} nameAlert={props.nameAlert} updateNameAlert={props.updateNameAlert} updateRowColAlert={props.updateRowColAlert}/>
            <SettingForm inputs={props.inputs} updateInput={props.updateInput} updateResult={props.updateResult} show={props.show} updateShow={props.updateShow} rowColAlert={props.rowColAlert}/>
        </>
    )
}

export default PageContentSetting;