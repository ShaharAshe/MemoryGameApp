import {Col, Row} from "react-bootstrap";

function SettingTemplate(props){
    return (
        <div>
        <form action="#">
            <Row className="text-center">
                <Col className="text-center" xs={12}>
                    <div>
                        <label htmlFor="rows" className="form-label">Number of rows:</label>
                        <input
                            id="rows"
                            type="number"
                            name="rows"
                            value={props.inputs.rows || ""}
                            onChange={props.handleChange}
                            className="form-control"
                            min="2"
                            max="5"
                        />
                    </div>
                </Col>
                <Col className="text-center" xs={12}>
                    <div>
                        <label htmlFor="cols" className="form-label">Number of columns:</label>
                        <input
                            id="cols"
                            type="number"
                            name="cols"
                            value={props.inputs.cols || ""}
                            onChange={props.handleChange}
                            className="form-control"
                            min="2"
                            max="5"
                        />
                    </div>
                    {props.rowColAlert ?
                        <div className="bad-val-fu alert alert-danger">(row x col) should be even. Also, the cols and the
                            rows should be between 2 and 5</div> : ""}
                </Col>
                <Col className="text-center" xs={12}>
                    <div>
                        <label htmlFor="customRange3" className="form-label">
                            Delay (in seconds): {props.inputs.delay || ""}
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
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
            </Row>
        </form>
            </div>
    );
}

export default SettingTemplate;