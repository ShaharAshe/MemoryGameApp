import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function SettingButtons(props){
    return (
        <div>
            <Button variant="primary" onClick={props.handleReset} type="button">Reset Default</Button>
            <Link className="btn btn-primary" to="/">Close Setting</Link>
        </div>
    );
}

export default SettingButtons;