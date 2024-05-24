import {Card, Col} from "react-bootstrap";

function CardShow(props){
    return(
        <Col xs={12/props.inputs.cols} key={props.i*props.inputs.cols + props.j} className={((props.i + props.j) * (props.i + 1)).toString()}>
            <Card onClick={props.handleExposure}>
                {(props.gameSet.includes(props.i * props.inputs.cols + props.j) || props.exposure.includes(props.i * props.inputs.cols + props.j))?
                    (<Card.Img variant="top" src={props.images[props.i * props.inputs.cols + props.j]} className={(props.i * props.inputs.cols + props.j).toString()}/>)
                    :
                    (<Card.Img variant="top" src={'\\images\\card.jpg'} className={(props.i * props.inputs.cols + props.j).toString()}/>)}
            </Card>
        </Col>
        );
}

export default CardShow;