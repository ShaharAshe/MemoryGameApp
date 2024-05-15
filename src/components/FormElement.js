import {Button, Col, Row} from "react-bootstrap";
import {Link, useNavigate, useNavigation} from "react-router-dom";
import PageContentModal from "./PageContentModal";

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
            <Row>
                <Col>
                    <form action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="form-label">Your name:</label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={props.inputs.username || ""}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Your Name"
                            />
                        </div>
                        {props.nameAlert?<div className="bad-val-fu alert alert-danger">Username should include English letters or numbers.<div>And maximum 12 letters!</div></div>:""}
                        <div>
                            <Button variant="primary" type="submit">Play</Button>
                            <Link className="btn btn-primary" to="/setting">Setting</Link>
                            <Button variant="primary" onClick={handleShow} type="button">High Score</Button>
                        </div>
                    </form>
                </Col>
            </Row>
            <PageContentModal show={props.show} updateShow={props.updateShow}/>
        </>
    );
}

export default FormElement;
