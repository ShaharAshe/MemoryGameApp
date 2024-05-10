import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";

function SettingForm(props){
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        props.updateInput(values => ({...values, [name]: value}))
    }

    return(
        <Row>
            <Col>
                <form action="#">
                    <div>
                        <label className="form-label">Number of rows:</label>
                        <input
                            type="text"
                            name="rows"
                            value={props.inputs.rows || ""}
                            onChange={handleChange}
                            className="form-control"
                            min="2"
                            max="5"
                        />
                    </div>
                    <div>
                        <label className="form-label">Number of columns:</label>
                        <input
                            type="text"
                            name="cols"
                            value={props.inputs.cols || ""}
                            onChange={handleChange}
                            className="form-control"
                            min="2"
                            max="5"
                        />
                    </div>
                    <div>
                        <label htmlFor="customRange3" className="form-label">
                            Delay (in seconds): {props.inputs.delay||""}
                        </label>
                        <input
                            type="range"
                            name="delay"
                            className="form-range"
                            min="0.5"
                            max="2"
                            step="0.5"
                            id="customRange3"
                            value={props.inputs.delay}
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <Link className="btn btn-primary" to="/">Close Setting</Link>
            </Col>
        </Row>
    );
}

export default SettingForm;