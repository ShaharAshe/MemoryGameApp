import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

/**
 * Component for rendering buttons in the setting form.
 * @param {Object} props - Component props containing event handlers.
 * @returns {JSX.Element} - Rendered SettingButtons component.
 */
function SettingButtons(props){
    return (
        <div>
            <Button variant="primary" onClick={props.handleReset} type="button">Reset Default</Button>
            <Link className="btn btn-primary" to="/">Close Setting</Link>
        </div>
    );
}

export default SettingButtons;