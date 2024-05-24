import {Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import PageContentModal from "./PageContentModal";
import FormTemplate from "./FormTemplate";

function FormElement(props){
    const userName_pattern = /^\w{1,12}$/;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name.trim().toLowerCase();
        const value = event.target.value.trim().toLowerCase();
        props.updateInput(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let is_prevent = false;
        if (!userName_pattern.test(props.inputs.username.trim()))
        {
            props.updateNameAlert(true);
            is_prevent = true;
        } else
            props.updateNameAlert(false);
        if((props.inputs.rows%2!==0 && props.inputs.cols%2!==0)||props.inputs.rows<2||props.inputs.rows>5||props.inputs.cols<2||props.inputs.cols>5){
            props.updateRowColAlert(true);
            is_prevent = true;
        } else
            props.updateRowColAlert(false);
        if (!is_prevent)
            navigate("/game");
    }
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
