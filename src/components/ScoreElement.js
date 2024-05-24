import Table from "react-bootstrap/Table";
import React from "react";

/**
 * Component for rendering the leaderboard.
 * @returns {JSX.Element} - Rendered ScoreElement component.
 */
function ScoreElement(){
    // Retrieve leaderboard data from local storage or initialize as an empty array
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard'))||[];

    // Map each score entry to a table row
    const listItems = leaderboard.map(score =>
        <tr key={score["Index"]}>
            <td>{score["Index"]}</td>
            <td>{score["Player"]}</td>
            <td>{score["Score"]}</td>
        </tr>
    );

    return (
        <>
            <Table striped bordered hover>
                <thead>
                {
                    leaderboard.length === 0 ?
                        (<tr><th>The table is empty! There were no games yet 🎮</th></tr>)
                        :
                        (<tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Score</th>
                        </tr>)
                }
                </thead>
                <tbody>{listItems}</tbody>
            </Table>
        </>
    );
}
export default ScoreElement;