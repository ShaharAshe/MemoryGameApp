import FormElement from "./FormElement";
import SettingForm from "./SettingForm";
import React from "react";
import ScoreElement from "./ScoreElement";
import PageContentSetting from "./PageContentSetting";
import PageContentForm from "./PageContentForm";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function PageContentScore(){
    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1); // Go back to the previous route, closing the modal
    };
    return (
        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Leaderboard</Modal.Title>
            </Modal.Header>
            <Modal.Body>Here is some modal content.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PageContentScore;