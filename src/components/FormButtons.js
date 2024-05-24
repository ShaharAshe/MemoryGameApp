import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function FormButtons(props){
    return (
        <div>
            <Button variant="primary" type="submit">Play</Button>
            <Link className="btn btn-primary" to="/setting">Setting</Link>
            <Button variant="primary" onClick={props.handleShow} type="button">High Score</Button>
        </div>
    );
}

export default FormButtons;