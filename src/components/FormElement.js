import { Col, Row} from "react-bootstrap";
import React, { useState } from 'react';
import {Link} from "react-router-dom";

function FormElement(){
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const score = 0;
        // the expression [name] is evaluated to the value of the variable name
        // note that the square brackets [] do not denote an array!
        setInputs(values => ({...values, [name]: value, score}))
    }

    const handleSubmit = (event) => {
        //check The form values
    }

    return(
        <Row>
            <Col>
                <form action="#">
                    <label className="form-label">Your name:</label>
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""} // why this || ""? because if the value is undefined, React will complain
                        onChange={handleChange}
                        className="form-control"
                    />
                    <Link className="btn btn-primary m-3" to="/game" onClick={()=>handleSubmit()}>Play</Link>
                    <Link className="btn btn-primary m-3" to="/setting">Setting</Link>
                    <Link className="btn btn-primary m-3" to="/score">High Score</Link>
                </form>

            </Col>
        </Row>
    );
}

export default FormElement;
