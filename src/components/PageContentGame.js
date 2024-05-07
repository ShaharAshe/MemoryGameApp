import {Link} from "react-router-dom";
import React from "react";

function PageContentGame(){
    return(
        <>
            <p>
                Game
            </p>
            <Link className="btn btn-primary m-3" to="/">Abandon</Link>
        </>
    );
}

export default PageContentGame;