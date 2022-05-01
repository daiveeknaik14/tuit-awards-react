import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
import * as dislikesService from "../../services/dislikes-service";
import * as awardsService from "../../services/awards-service";
import Tuit from "../tuits/tuit";
import Award from "./award";
import React, {useEffect, useState} from "react";

const Awards = ({awards = [], refreshawards, awardTuit, tuit, award}) => {
    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    awards.map && awards.map(award =>
                        <Award tuit={tuit} awardTuit={awardTuit} key={award._id}
                              award={award} award={award} / >)
                }

            </ul>
            <hr/>
            <ul>
            {
                award && <>
                {award.A1 && <>
                    <div>A1: {award.A1}</div>
                </>
                }
                {award.A2 && <>
                    <div>A2: {award.A2}</div>
                </>
                }
                {award.A3 && <>
                    <div>A3: {award.A3}</div>
                </>
                }
                {award.A4 && <>
                    <div>A4: {award.A4}</div>
                </>
                }
                </>
            }
            
            </ul>

        </div>
    );
}

export default Awards;