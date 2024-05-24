import {Col, Row} from "react-bootstrap";

/**
 * Component for rendering the header of the application.
 * @returns {JSX.Element} - Rendered Header component.
 */
function Header(){
    return(
        <Row className="text-center" style={{backgroundColor: 'lightgray'}}>
            <Col className="text-center">
              <h2>Memory Game</h2>
              <p>Click on the cards to flip them and find the matching pairs with as little flips as possible.</p>
          </Col>
        </Row>
    );
}

export default Header;