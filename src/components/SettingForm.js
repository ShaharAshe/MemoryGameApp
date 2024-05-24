import {Col, Row} from "react-bootstrap";
import SettingButtons from "./SettingButtons";
import SettingTemplate from "./SettingTemplate";

function SettingForm(props){
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        props.updateInput(values => ({...values, [name]: value}))
    }

    const handleReset = (event) => {
        props.updateInput({username:"", rows:4, cols:4, delay:0.5});
    }

    return(
        <>
            <Row className="text-center">
                <Col className="text-center">
                    <SettingTemplate inputs={props.inputs} handleChange={handleChange}/>
                    <SettingButtons handleReset={handleReset}/>
                </Col>
            </Row>
        </>
    );
}

export default SettingForm;