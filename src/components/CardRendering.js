import {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function CardRendering(props){
    const [exposure, setExposure] = useState([]);
    const [gameSet, setGameSet] = useState([]);
    const navigate = useNavigate();

    function handleExposure(event) {
        if(exposure.length !== 2) {
            const num_pattern = /[0-9]+$/;
            const img_num = num_pattern.exec(event.target.className.trim());
            if (img_num && !exposure.includes(parseInt(img_num[0])))
                setExposure(prevExposure => [...prevExposure, parseInt(img_num[0])]);
        }
    }
    const initializeImages = () => {
        const newImages = [];
        for (let i = 0; i < (props.inputs.rows*props.inputs.cols)/2; ++i) {
            newImages[i] = '\\images\\' + i + '.jpg';
        }
        for (let i = 0; i < (props.inputs.rows*props.inputs.cols)/2; ++i) {
            newImages.push(newImages[i]);
        }
        for (let i = 0; i < (props.inputs.cols*props.inputs.rows); ++i) {
            const change_i = Math.floor(Math.random()*(props.inputs.rows*props.inputs.cols));
            if (i % 2 !== 0) {
                let temp = newImages[change_i];
                newImages[change_i] = newImages[(props.inputs.rows*props.inputs.cols) - 1 - i];
                newImages[(props.inputs.rows*props.inputs.cols) - 1 - i] = temp;
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
                        {(gameSet.includes(i * props.inputs.cols + j) || exposure.includes(i * props.inputs.cols + j))?
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
    useEffect(() => {
        // Adding a delay before executing the logic
        setTimeout(() => {
            if (exposure.length === 2) {
                if (props.images[exposure[0]] === props.images[exposure[1]]) {
                    setGameSet(addSet => [...addSet, exposure[0], exposure[1]]);
                    props.updateScore(a => a+10)
                }
                else{
                    if(props.score-5<0)
                        props.updateScore(a => 0)
                    else
                        props.updateScore(a => a-5)
                }
                setExposure(e => []);
            }
            if(gameSet.length === (props.inputs.cols*props.inputs.rows)) {
                let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
                let existingUser = leaderboard.find(item => item.Player === props.inputs.username);
                if (existingUser && props.score > existingUser.Score)
                    existingUser.Score = props.score;
                else
                    leaderboard.push({Player: props.inputs.username, Score: props.score});
                leaderboard.sort((a, b) => b.Score - a.Score);
                leaderboard = leaderboard.map((item, index) => ({...item, Index: index + 1}));
                localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

                leaderboard.forEach(score=>{
                    if(score["Score"] === props.score)
                        props.updateRanke(score["Index"]);
                })
                props.updateTotalRank(leaderboard.length);

                navigate("/endGame");
            }
        }, (parseFloat(props.inputs.delay)*1000));
    }, [exposure]);

    return (
        <div>{props.cards}</div>
    );
}
export default CardRendering;