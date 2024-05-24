import {Col, Row} from "react-bootstrap";
import FormButtons from "./FormButtons";

function FormTemplate(props){
    return(
        <form action="#" onSubmit={props.handleSubmit}>
            <Row className="text-center">
                <Col className="text-center" xs={12}>
                    <div>
                        <label htmlFor="username" className="form-label">Your name:</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={props.username || ""}
                            onChange={props.handleChange}
                            className="form-control"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    {
                        props.nameAlert?
                            (<div className="bad-val-fu alert alert-danger">Username should include English letters or numbers.
                                <div>And maximum 12 letters!</div></div>)
                            :
                            ""
                    }
                </Col>
                <Col className="text-center" xs={12}>
                    <FormButtons handleShow={props.handleShow}/>
                </Col>
            </Row>
        </form>

);
}

export default FormTemplate;