import {useEffect, useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";
import {Col, Image, Row} from "react-bootstrap";

function CardRendering(props){
    const [images, setImages] = useState({});
    const initializeImages = () => {
        const newImages = [];
        for (let i = 0; i < (props.inputs.cols*props.inputs.cols)/2; ++i) {
            newImages[i] = '\\images\\' + i + '.jpg';
        }
        for (let i = 0; i < (props.inputs.cols*props.inputs.cols)/2; ++i) {
            newImages.push(newImages[i]);
        }
        {console.log(Object.keys(newImages))}
        for (let i = 0; i < (props.inputs.cols*props.inputs.cols); ++i) {
            const change_i = Math.floor(Math.random()*(props.inputs.cols*props.inputs.cols));
            if (i % 2 !== 0) {
                let temp = newImages[change_i];
                newImages[change_i] = newImages[(props.inputs.cols*props.inputs.cols) - 1 - i];
                newImages[(props.inputs.cols*props.inputs.cols) - 1 - i] = temp;
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
                    <Col xs={12/props.inputs.cols} key={i*props.inputs.cols + j} className={((i + j) * (i + 1)).toString()}>
                        <img src={images[i*props.inputs.cols + j]} className="img-fluid" alt="img"/>
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
    }, [images]);

    return (
        <div>{props.cards}</div>
    );
}
export default CardRendering;