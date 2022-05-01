import React, {useEffect, useState} from "react";
import * as awardsService from "../../services/awards-service";

const Award = ({award, refreshawards, tuit, awardTuit, findAwardsByTuit}) => {
    return (
        <div>
            <h1></h1>
            <ul className="ttr-tuits list-group">
                {
                    <>
                    <span onClick={() => awardTuit(tuit, award.name, award.coins)}>
                    <h1>{award.name} : {award.coins}</h1>
                    </span>
                    </>
                }
            </ul>
        </div>
    );
}

export default Award;