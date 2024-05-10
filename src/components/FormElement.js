import {Button, Col, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";
import alert from "bootstrap/js/src/alert";

function FormElement(props){
    const userName_pattern = /^[A-Za-z]+ ?[A-Za-z]*$/;
    const handleChange = (event) => {
        const name = event.target.name.trim().toLowerCase();
        const value = event.target.value;
        props.updateInput(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        if (!userName_pattern.test(props.inputs.username.trim()))
        {
            if (props.inputs.username.trim().length)
                props.updateAlert(true);
            event.preventDefault();
            }
    }

    const handleClose = () => props.updateShow(false);
    const handleShow = () => props.updateShow(true);

    return(
        <>
            <Row>
                <Col>
                    <form action="/game" onClick={handleSubmit}>
                        <label className="form-label">Your name:</label>
                        <input
                            type="text"
                            name="username"
                            value={props.inputs.username || ""}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Your Name"
                            pattern="^[A-Za-z]+ ?[A-Za-z]*$"
                        />
                        {props.alert?<div className="bad-val-fu alert alert-danger">Username should have
                            the letters a-z and A-Z and a space only</div>:""}
                        <Button variant="primary" type="submit">Play</Button>
                        <Link className="btn btn-primary" to="/setting">Setting</Link>
                        <Button variant="primary" onClick={handleShow} type="button">High Score</Button>
                        {/*<Link className="btn btn-primary m-3" to="/score">High Score</Link>*/}
                    </form>
                </Col>
            </Row>

            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Leaderboard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>
                                The table is empty! There were no games yet 🎮
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormElement;
