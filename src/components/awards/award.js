import React, {useEffect, useState} from "react";
import * as awardsService from "../../services/awards-service";

const Award = ({award, refreshawards, tuit, awardTuit, findAwardsByTuit}) => {
    return (
        <div>
            <h1></h1>

                {
                    <>
                    <span onClick={() => awardTuit(tuit, award.name, award.coins)}>
                     <img src={`../images/${award.name}.png`}/>
                    <h1><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>
<span className="bi bi-coin blue-color" style={{fontSize: "35px", color: 'gold'}}/> {award.coins}</h1>
                    </span>
                    </>
                }

        </div>
    );
}

export default Award;