import {Col, Row} from "react-bootstrap";
import SettingButtons from "./SettingButtons";
import SettingTemplate from "./SettingTemplate";

/**
 * Component for rendering the setting form.
 * @param {Object} props - Component props containing inputs and event handlers.
 * @returns {JSX.Element} - Rendered SettingForm component.
 */
function SettingForm(props){
    /**
     * Event handler for input change.
     * Updates the input state with the new value.
     * @param {Object} event - The event object.
     */
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        props.updateInput(values => ({...values, [name]: value}))
    }

    /**
     * Event handler for resetting settings to default values.
     * Resets username, rows, cols, and delay to default values.
     * @param {Object} event - The event object.
     */
    const handleReset = (event) => {
        props.updateInput({username:"", rows:4, cols:4, delay:0.5});
    }

    return(
        <>
            <Row className="text-center">
                <Col className="text-center">
                    <SettingTemplate inputs={props.inputs} handleChange={handleChange} rowColAlert={props.rowColAlert}/>
                    <SettingButtons handleReset={handleReset}/>
                </Col>
            </Row>
        </>
    );
}

export default SettingForm;