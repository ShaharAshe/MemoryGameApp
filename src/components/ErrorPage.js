import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

function ErrorPage(){
    return(
        <>
            <Row className="text-center">
                <Col className="text-center" xs={12}>
                    <h1>This page does not exist ⛔</h1>
                </Col>
                <Col className="text-center" xs={12}>
                    <Link className="btn btn-primary" to="/">main page</Link>
                </Col>
            </Row>
        </>
    );
}

export default ErrorPage;