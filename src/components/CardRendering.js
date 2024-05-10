import {useEffect, useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";
import {Col, Image, Row} from "react-bootstrap";

function CardRendering(props){
    const [images, setImages] = useState({});
    const initializeImages = () => {
        const newImages = {};
        for (let i = 0; i <= 15; ++i) {
            newImages[i] = '\\images\\' + i + '.jpg'; // Example path
        }
        for (let i = 0; i < 15; ++i) {
            if (i % 2 !== 0) {
                let temp = newImages[0];
                newImages[0] = newImages[15 - 1 - i];
                newImages[15 - 1 - i] = temp;
            }
        }
        setImages(newImages);
    };

    const createCards = (images) => {
        const upCards = [];
        for (let i = 0; i < props.inputs.rows; i++) {
            const row = []
            for (let j = 0; j < props.inputs.cols; j++) {
                row.push(
                    <Col xs={12/props.inputs.cols} key={i + j + (props.inputs.cols-1)} className={((i + j) * (i + 1)).toString()}>
                        <img src={images[i + j + (props.inputs.cols-1)]} className="img-fluid" alt="img"/>
                    </Col>
                );
            }
            upCards.push(<Row>{row}</Row>);
        }
        props.updateCards(upCards);
    };

    useEffect(() => {
        initializeImages();
    },[]);
    useEffect(() => {
        if (Object.keys(images).length > 0) {
            createCards(images); // Create cards when images are set
        }
    }, [createCards, images]);

    return (
        <div>{props.cards}</div>
    );
}
export default CardRendering;