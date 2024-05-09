import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";

function SettingForm(){
    const [inputs, setInputs] = useState({});
    const [sliderValue, setSliderValue] = useState(0.5);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const score = 0;
        // the expression [name] is evaluated to the value of the variable name
        // note that the square brackets [] do not denote an array!
        setInputs(values => ({...values, [name]: value, score}))
    }


    // Handler to update the slider value when it changes
    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
        handleChange(e);
    };

    return(
        <Row>
            <Col>
                <form action="#">
                    <div>
                        <label className="form-label">Number of rows:</label>
                        <input
                            type="text"
                            name="rows"
                            value={inputs.rows || ""}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label className="form-label">Number of columns:</label>
                        <input
                            type="text"
                            name="cols"
                            value={inputs.cols || ""}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label htmlFor="customRange3" className="form-label">
                            Delay (in seconds): {sliderValue}
                        </label>
                        <input
                            type="range"
                            className="form-range"
                            min="0.5"
                            max="2"
                            step="0.5"
                            id="customRange3"
                            value={sliderValue}
                            onChange={handleSliderChange}
                        />
                    </div>
                </form>
                <Link className="btn btn-primary" to="/">Close Setting</Link>
            </Col>
        </Row>
    );
}

export default SettingForm;