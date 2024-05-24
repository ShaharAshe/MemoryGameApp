import {Card, Col} from "react-bootstrap";

/**
 * Component for rendering individual cards in the game.
 * @param {Object} props - Component props containing card data and event handlers.
 * @returns {JSX.Element} - Rendered CardShow component.
 */
function CardShow(props){
    /**
     * Dynamically calculates the value of 'xs' for the Col component based on the number of columns.
     * @param {number} cols - Number of columns.
     * @returns {number} - The value of 'xs' for the Col component.
     */
    function calculateXsValue(cols) {
        switch (cols) {
            case "1":
                return 12;
            case "2":
                return 6;
            case "3":
                return 4;
            case "4":
                return 3;
            case "5":
                return 2;
            default:
                return 12;
        }
    }

    return(
        <Col xs={calculateXsValue(props.inputs.cols)} key={props.i*props.inputs.cols + props.j} className={((props.i + props.j) * (props.i + 1)).toString()}>
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