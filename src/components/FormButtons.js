import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

/**
 * Component for rendering buttons in the form.
 * @param {Object} props - Component props containing event handlers.
 * @returns {JSX.Element} - Rendered FormButtons component.
 */
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