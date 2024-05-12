import {Link} from "react-router-dom";
import React, {useState} from "react";
import CardRendering from "./CardRendering";
import {Col, Row} from "react-bootstrap";

function PageContentGame(props){
    const [cards, setCards] = useState([])
    const [images, setImages] = useState({});
    const [score, setScore] = useState(0);
    return(
        <>
            {props.inputs.username?
                (<>
                    <Row>
                        <Col>
                            <p><b>Good Luck {props.inputs.username}</b></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Score: {score}</p>
                        </Col>
                    </Row>
                    <Row>
                        <CardRendering inputs={props.inputs} cards={cards} updateCards={setCards} images={images} updateImages={setImages} score={score} updateScore={setScore}/>
                        <Link className="btn btn-primary m-3" to="/">Abandon</Link>
                    </Row>
                </>)
                :
                (<Row>
                    <Col>
                        <h1>You need to go back to the main page and enter your name 🔙</h1>
                        <Link className="btn btn-primary" to="/">main</Link>
                    </Col>
                </Row>)
            }
        </>
    );
}

export default PageContentGame;