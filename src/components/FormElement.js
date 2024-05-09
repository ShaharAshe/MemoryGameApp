import {Button, Col, Modal, Row} from "react-bootstrap";
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";

function FormElement(props){
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const score = 0;
        // the expression [name] is evaluated to the value of the variable name
        // note that the square brackets [] do not denote an array!
        props.updateInput(values => ({...values, [name]: value, score}))
    }

    const handleSubmit = (event) => {
        //check The form values
    }

    const handleClose = () => props.updateShow(false);
    const handleShow = () => props.updateShow(true);

    return(
        <>
            <Row>
                <Col>
                    <form action="#">
                        <label className="form-label">Your name:</label>
                        <input
                            type="text"
                            name="username"
                            value={props.inputs.username || ""}
                            onChange={handleChange}
                            className="form-control"
                        />
                        <Link className="btn btn-primary" to="/game" onClick={()=>handleSubmit()}>Play</Link>
                        <Link className="btn btn-primary" to="/setting">Setting</Link>
                        <Button variant="primary" onClick={handleShow}>High Score</Button>
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
