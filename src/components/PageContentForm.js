import FormElement from "./FormElement";

/**
 * Component for rendering the form page content.
 * @param {Object} props - Component props containing inputs and event handlers.
 * @returns {JSX.Element} - Rendered PageContentForm component.
 */
function PageContentForm(props){
    return(
        <>
            <FormElement inputs={props.inputs} updateInput={props.updateInput} updateResult={props.updateResult} show={props.show} updateShow={props.updateShow} nameAlert={props.nameAlert} updateNameAlert={props.updateNameAlert} updateRowColAlert={props.updateRowColAlert}/>
        </>
    );
}

export default PageContentForm;
