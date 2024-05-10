import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function SettingForm(props){
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        props.updateInput(values => ({...values, [name]: value}))
    }

    return(
        <>
            <Row>
                <Col>
                    <form action="#">
                        <div>
                            <label htmlFor="rows" className="form-label">Number of rows:</label>
                            <input
                                id="rows"
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
                            <label htmlFor="cols" className="form-label">Number of columns:</label>
                            <input
                                id="cols"
                                type="text"
                                name="cols"
                                value={props.inputs.cols || ""}
                                onChange={handleChange}
                                className="form-control"
                                min="2"
                                max="5"
                            />
                        </div>
                        {props.rowColAlert?<div className="bad-val-fu alert alert-danger">(row x col) should be even</div>:""}
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
                                step="0.1"
                                id="customRange3"
                                value={props.inputs.delay}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                    <div>
                        <Link className="btn btn-primary" to="/">Close Setting</Link>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default SettingForm;