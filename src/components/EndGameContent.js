import ScoreElement from "./ScoreElement";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

/**
 * Component for rendering the end game page content.
 * @param {Object} props - Component props containing game result data.
 * @returns {JSX.Element} - Rendered EndGameContent component.
 */
function EndGameContent(props){
    return(
        <>
            {props.rank?(
                <>
                    <Row className="text-center">
                        <Col className="text-center" xs={12}>
                            <h2><b>Game Over!</b></h2>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col className="text-center" xs={12}>
                            <p>Number of cards played: <b>{props.numOfCards}</b></p>
                        </Col>
                        <Col className="text-center" xs={12}>
                            <p><b>score:</b> {props.score}. You are ranked <b>{props.rank}</b> out of {props.totalRank}</p>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col className="text-center" xs={12}>
                            <ScoreElement/>
                        </Col>
                        <Col className="text-center" xs={12}>
                            <a className="btn btn-primary" href="/">OK</a>
                        </Col>
                    </Row>
                </>
                )
                :
                (
                    <Row className="text-center">
                        <Col className="text-center" xs={12}>
                            <h1>This page can only be seen after finishing a game!</h1>
                        </Col>
                        <Col className="text-center" xs={12}>
                            <h3>You need to go back to the main page and start a new game 🕹️</h3>
                        </Col>
                        <Col className="text-center" xs={12}>
                            <Link className="btn btn-primary" to="/">main</Link>
                        </Col>
                    </Row>
                )}
        </>
    );
}

export default EndGameContent;