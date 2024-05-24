import {Link} from "react-router-dom";
import React, {useState} from "react";
import CardRendering from "./CardRendering";
import {Col, Row} from "react-bootstrap";

function PageContentGame(props){
    const [cards, setCards] = useState([])
    const [images, setImages] = useState({});

    return(
        <>
            {props.inputs.username?
                (<>
                    <Row className="text-center">
                        <Col className="text-center">
                            <p><b>Good Luck {props.inputs.username}</b></p>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col className="text-center">
                            <p>Score: {props.score}</p>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col xs={12} className="text-center">
                            <CardRendering inputs={props.inputs} cards={cards} updateCards={setCards} images={images} updateImages={setImages} score={props.score} updateScore={props.updateScore} updateRanke={props.updateRank}  updateTotalRank={props.updateTotalRank}/>
                        </Col>
                        <Col xs={12} className="text-center">
                            <Link className="btn btn-primary m-3" to="/">Abandon</Link>
                        </Col>
                    </Row>
                </>)
                :
                (
                    <Row className="text-center">
                        <Col className="text-center">
                            <h1>You need to go back to the main page and enter your name 🔙</h1>
                            <Link className="btn btn-primary" to="/">main</Link>
                        </Col>
                    </Row>
                )
            }
        </>
    );
}

export default PageContentGame;