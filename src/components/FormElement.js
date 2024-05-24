import {Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import PageContentModal from "./PageContentModal";
import FormTemplate from "./FormTemplate";

/**
 * Component for rendering the form element.
 * @param {Object} props - Component props containing inputs and event handlers.
 * @returns {JSX.Element} - Rendered FormElement component.
 */
function FormElement(props){
    const userName_pattern = /^\w{1,12}$/;
    const navigate = useNavigate();

    /**
     * Handles input change events.
     * Updates the state with the new input value.
     * @param {Event} event - The input change event object.
     */
    const handleChange = (event) => {
        const name = event.target.name.trim().toLowerCase();
        const value = event.target.value.trim().toLowerCase();
        props.updateInput(values => ({...values, [name]: value}))
    }

    /**
     * Handles form submission.
     * Validates the input fields and navigates to the game page if validation passes.
     * @param {Event} event - The form submission event object.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        let is_prevent = false;

        // Check username pattern
        if (!userName_pattern.test(props.inputs.username.trim())) {
            props.updateNameAlert(true);
            is_prevent = true;
        } else {
            props.updateNameAlert(false);
        }

        // Check rows and columns constraints
        if((props.inputs.rows%2!==0 && props.inputs.cols%2!==0)||props.inputs.rows<2||props.inputs.rows>5||props.inputs.cols<2||props.inputs.cols>5){
            props.updateRowColAlert(true);
            is_prevent = true;
        } else {
            props.updateRowColAlert(false);
        }

        // Navigate to game page if validation passes
        if (!is_prevent)
            navigate("/game");
    }

    /**
     * Handles showing the modal.
     * Updates the state to show the modal.
     */
    const handleShow = () => props.updateShow(true);

    return(
        <>
            <Row className="text-center">
                <Col className="text-center">
                    <FormTemplate username={props.inputs.username} handleChange={handleChange} handleShow={handleShow} handleSubmit={handleSubmit} nameAlert={props.nameAlert}/>
                </Col>
            </Row>
            <PageContentModal show={props.show} updateShow={props.updateShow}/>
        </>
    );
}

export default FormElement;
