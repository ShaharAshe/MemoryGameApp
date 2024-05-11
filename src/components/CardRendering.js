import {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";

function CardRendering(props){
    const [exposure, setExposure] = useState([]);
    function handleExposure(event) {
        const num_pattern = /[0-9]+$/;
        const img_num = parseInt(num_pattern.exec(event.target.className.trim())[0]);
        setExposure(prevExposure => [...prevExposure, img_num]);
    }
    const initializeImages = () => {
        const newImages = [];
        for (let i = 0; i < (props.inputs.rows*props.inputs.cols)/2; ++i) {
            newImages[i] = '\\images\\' + i + '.jpg';
        }
        for (let i = 0; i < (props.inputs.rows*props.inputs.cols)/2; ++i) {
            newImages.push(newImages[i]);
        }
        for (let i = 0; i < (props.inputs.cols*props.inputs.cols); ++i) {
            const change_i = Math.floor(Math.random()*(props.inputs.cols*props.inputs.cols));
            if (i % 2 !== 0) {
                let temp = newImages[change_i];
                newImages[change_i] = newImages[(props.inputs.cols*props.inputs.cols) - 1 - i];
                newImages[(props.inputs.cols*props.inputs.cols) - 1 - i] = temp;
            }
        }
        props.updateImages(newImages);
    };
    const createCards = (images) => {
        const upCards = [];
        for (let i = 0; i < props.inputs.rows; i++) {
            const row = []
            for (let j = 0; j < props.inputs.cols; j++) {
                row.push(
                    <Col xs={12/props.inputs.cols} key={i*props.inputs.cols + j} className={((i + j) * (i + 1)).toString()}>
                        <Card onClick={handleExposure}>
                        {exposure.includes(i * props.inputs.cols + j)?
                            (<Card.Img variant="top" src={images[i * props.inputs.cols + j]} className={(i * props.inputs.cols + j).toString()}/>)
                            :
                            (<Card.Img variant="top" src={'\\images\\card.jpg'} className={(i * props.inputs.cols + j).toString()}/>)}
                        </Card>
                    </Col>
                )
            }
            upCards.push(<Row key={i}>{row}</Row>);
        }
        props.updateCards(upCards);
    };

    useEffect(() => {
        initializeImages();
    },[]);
    useEffect(() => {
        if (Object.keys(props.images).length > 0) {
            createCards(props.images);
        }
    }, [props.images, exposure]);

    return (
        <div>{props.cards}</div>
    );
}
export default CardRendering;