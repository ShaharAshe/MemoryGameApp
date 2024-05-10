import FormElement from "./FormElement";


function PageContentForm(props){
    return(
        <>
            <FormElement inputs={props.inputs} updateInput={props.updateInput} updateResult={props.updateResult} show={props.show} updateShow={props.updateShow} nameAlert={props.nameAlert} updateNameAlert={props.updateNameAlert} updateRowColAlert={props.updateRowColAlert}/>
        </>
    );
}

export default PageContentForm;
