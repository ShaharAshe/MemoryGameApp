import {Button, Modal} from "react-bootstrap";
import React from "react";
import ScoreElement from "./ScoreElement";

/**
 * Component for rendering the modal to display the leaderboard.
 * @param {Object} props - Component props containing show state and event handler.
 * @returns {JSX.Element} - Rendered PageContentModal component.
 */
function PageContentModal(props){
    /**
     * Handles closing the modal.
     * Updates the state to hide the modal.
     */
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