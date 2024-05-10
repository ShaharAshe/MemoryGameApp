import {Button, Modal} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React from "react";

function PageContentModal(props){
    const handleClose = () => props.updateShow(false);
    return(
        <>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Leaderboard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>The table is empty! There were no games yet 🎮</th>
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

export default PageContentModal;