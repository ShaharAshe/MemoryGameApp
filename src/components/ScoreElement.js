import Table from "react-bootstrap/Table";
import React from "react";

function ScoreElement(){
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard'))||[];
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