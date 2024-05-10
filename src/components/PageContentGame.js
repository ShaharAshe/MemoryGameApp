import {Link} from "react-router-dom";
import React, {useState} from "react";
import CardRendering from "./CardRendering";

function PageContentGame(props){
    const [cards, setCards] = useState([])
    return(
        <>
            <p>
                Game
            </p>
            <CardRendering inputs={props.inputs} cards={cards} updateCards={setCards}/>
            <Link className="btn btn-primary m-3" to="/">Abandon</Link>
        </>
    );
}

export default PageContentGame;