import {Col, Row} from "react-bootstrap";

function Header(){
    return(
        <Row style={{backgroundColor: 'lightgray'}}>
            <Col>
              <h2>Memory Game</h2>
              <p>Click on the cards to flip them and find the natching pairs eith as little flips as possible.</p>
          </Col>
        </Row>
    );
}

export default Header;