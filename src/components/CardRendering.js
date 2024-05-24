import {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import CardShow from "./CardShow";

/**
 * Component responsible for managing the logic and rendering of memory game cards.
 * @param {Object} props - Component props containing inputs, images, and functions for updating state.
 * @returns {JSX.Element} - Rendered CardRendering component.
 */
function CardRendering(props){
    const [exposure, setExposure] = useState([]);
    const [gameSet, setGameSet] = useState([]);
    const navigate = useNavigate();

    /**
     * Event handler for card exposure (flipping).
     * Adds the clicked card to the exposure state if fewer than two cards are exposed.
     * @param {Event} event - Click event object.
     */
    function handleExposure(event) {
        if(exposure.length !== 2) {
            const num_pattern = /[0-9]+$/;
            const img_num = num_pattern.exec(event.target.className.trim());
            if (img_num && !exposure.includes(parseInt(img_num[0])))
                setExposure(prevExposure => [...prevExposure, parseInt(img_num[0])]);
        }
    }

    /**
     * Initializes the images for the game.
     * Generates pairs of image paths, shuffles them, and updates the images state.
     */
    const initializeImages = () => {
        // Create an array of image paths
        const newImages = [];
        for (let i = 0; i < (props.inputs.rows*props.inputs.cols)/2; ++i) {
            newImages[i] = '\\images\\' + i + '.jpg';
        }
        // Duplicate the image paths to create pairs
        for (let i = 0; i < (props.inputs.rows*props.inputs.cols)/2; ++i) {
            newImages.push(newImages[i]);
        }
        // Shuffle the image paths
        for (let i = 0; i < (props.inputs.cols*props.inputs.rows); ++i) {
            const change_i = Math.floor(Math.random()*(props.inputs.rows*props.inputs.cols));
            if (i % 2 !== 0) {
                let temp = newImages[change_i];
                newImages[change_i] = newImages[(props.inputs.rows*props.inputs.cols) - 1 - i];
                newImages[(props.inputs.rows*props.inputs.cols) - 1 - i] = temp;
            }
        }
        // Update the images state
        props.updateImages(newImages);
    };

    /**
     * Creates card components based on the images.
     * Generates rows and columns of CardShow components.
     * @param {string[]} images - Array of image paths.
     */
    const createCards = (images) => {
        const upCards = [];
        for (let i = 0; i < props.inputs.rows; i++) {
            const row = []
            for (let j = 0; j < props.inputs.cols; j++) {
                row.push(<CardShow inputs={props.inputs} i={i} j={j} handleExposure={handleExposure} gameSet={gameSet} images={images} exposure={exposure}/>)
            }
            upCards.push(<Row key={i}>{row}</Row>);
        }
        props.updateCards(upCards);
    };

    /**
     * Saves game results to local storage and navigates to the end game page.
     * Checks if all cards are matched, updates the leaderboard, and navigates to the end game page.
     */
    function saveLocal() {
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

            leaderboard.forEach(score => {
                if (score["Score"] === props.score)
                    props.updateRanke(score["Index"]);
            })
            props.updateTotalRank(leaderboard.length);

            navigate("/endGame");
        }
    }

    /**
     * Handles card exposure and checks for matches.
     * Updates the game state based on the exposed cards.
     */
    function exposureHandle() {
        if (exposure.length === 2) {
            if (props.images[exposure[0]] === props.images[exposure[1]]) {
                setGameSet(addSet => [...addSet, exposure[0], exposure[1]]);
                props.updateScore(a => a+10)
            } else {
                if(props.score-5<0)
                    props.updateScore(a => 0)
                else
                    props.updateScore(a => a-5)
            }
            setExposure(e => []);
        }
    }

    // Effect hook to initialize images when the component mounts
    useEffect(() => {
        initializeImages();
    },[]);

    // Effect hook to create cards when the images state changes
    useEffect(() => {
        if (Object.keys(props.images).length > 0)
            createCards(props.images);
    }, [props.images, exposure]);

    // Effect hook to handle card exposure and game end logic
    useEffect(() => {
        setTimeout(() => {
            exposureHandle();
            saveLocal();
        }, (parseFloat(props.inputs.delay)*1000));
    }, [exposure]);

    return (
        <div>{props.cards}</div>
    );
}
export default CardRendering;