import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
import * as dislikesService from "../../services/dislikes-service";
import * as awardsService from "../../services/awards-service";
import Tuit from "../tuits/tuit";
import Award from "./award";
import React, {useEffect, useState} from "react";

const Awards = ({awards = [], refreshawards, awardTuit, tuit, findAwardsByTuit}) => {
    return (
        <div>
            <h1></h1>
            <ul className="ttr-tuits list-group">
                {
                    awards.map && awards.map(award =>
                        <Award tuit={tuit} awardTuit={awardTuit} key={award._id}
                              award={award} findAwardsByTuit={findAwardsByTuit} / >)
                }

            </ul>
        </div>
    );
}

export default Awards;