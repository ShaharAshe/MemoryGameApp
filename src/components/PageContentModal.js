import {Button, Modal} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React from "react";
import ScoreElement from "./ScoreElement";

function PageContentModal(props){
    const handleClose = () => props.updateShow(false);
    return(
        <>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Leaderboard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ScoreElement/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PageContentModal;