import ScoreElement from "./ScoreElement";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

function EndGameContent(props){
    return(
        <>
            {props.rank?(
                <>
                    <Row>
                        <Col xs={12}>
                            <h2><b>Game Over!</b></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p>Number of cards played: {props.numOfCards}</p>
                        </Col>
                        <Col xs={12}>
                            <p>score: {props.score}. You are ranked {props.rank} out of {props.totalRank}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <ScoreElement/>
                        </Col>
                        <Col xs={12}>
                            <a className="btn btn-primary" href="/">OK</a>
                        </Col>
                    </Row>
                </>
                )
                :
                (
                    <Row>
                        <Col xs={12}>
                            <h1>This page can only be seen after finishing a game!</h1>
                        </Col>
                        <Col xs={12}>
                            <h3>You need to go back to the main page and start a new game 🕹️</h3>
                        </Col>
                        <Col xs={12}>
                            <Link className="btn btn-primary" to="/">main</Link>
                        </Col>
                    </Row>
                )}
        </>
    );
}

export default EndGameContent;