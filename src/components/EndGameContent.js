import ScoreElement from "./ScoreElement";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

function EndGameContent(props){
    return(
        <>
        {props.rank?
            (<>
                <Row>
                    <Col>
                        <h2><b>Game Over!</b></h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Number of cards played: {props.numOfCards}
                        </p>
                    </Col>
                    <Col>
                        <p>
                            score: {props.score}. You are ranked {props.rank} out of {props.totalRank}
                        </p>
                    </Col>
                </Row>
            <Row>
                <Col>
                    <ScoreElement/>
                </Col>
                <Col>
            <a className="btn btn-primary" href="/">OK</a>
                </Col>
            </Row>
            </>)
    :
    (<Row>
        <Col>
            <h1>You need to go back to the main page and start Game to see that page 🕹️</h1>
            <Link className="btn btn-primary" to="/">main</Link>
        </Col>
    </Row>)
}</>
    );
}

export default EndGameContent;