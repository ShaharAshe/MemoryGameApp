import Table from "react-bootstrap/Table";
import React from "react";

function ScoreElement(){
    return(
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>The table is empty! There were no games yet 🎮</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
        </>
    );
}
export default ScoreElement;