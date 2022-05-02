import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
import * as dislikesService from "../../services/dislikes-service";
import * as awardsService from "../../services/awards-service";
import Tuit from "../tuits/tuit";
import Award from "./award";
import React, {useEffect, useState} from "react";

const Awards = ({awards = [], refreshawards, awardTuit, tuit, award}) => {
    const headingStyle = {
            float: 'center',
            fontSize: '50px',
    fontWeight: '600',
    backgroundImage: 'linear-gradient(to left, #e66465, #9198e5)',
    color: 'transparent',
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',

    };
    return (
        <div>
            <h1 style={headingStyle}>Awards!</h1>
            <ul className="ttr-tuits list-group" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr"
            }}>
                {
                    awards.map && awards.map(award =>
                        <Award tuit={tuit} awardTuit={awardTuit} key={award._id}
                              award={award} award={award} />)
                }

            </ul>
            <hr/>
            <h1 style={headingStyle}>Awards Received!</h1>
            <ul style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr"
            }}>

            {
                award && <>
                {award.A1 && <>
                    <img src={`../images/A1.png`}/>
                    <h1>{award.A1}</h1>
                </>
                }
                {award.A2 && <>
                    <img src={`../images/A2.png`}/>
                    <h1>{award.A2}</h1>
                </>
                }
                {award.A3 && <>
                    <img src={`../images/A3.png`}/>
                    <h1>{award.A3}</h1>
                </>
                }
                {award.A4 && <>
                    <img src={`../images/A4.png`}/>
                    <h1>{award.A4}</h1>
                </>
                }
                {award.A5 && <>
                    <img src={`../images/A5.png`}/>
                    <h1>{award.A5}</h1>
                </>
                }
                {award.A6 && <>
                    <img src={`../images/A6.png`}/>
                    <h1>{award.A6}</h1>
                </>
                }
                {award.A7 && <>
                    <img src={`../images/A7.png`}/>
                        <h1>A7: {award.A7}</h1>
                    </>
                }
                {award.A8 && <>
                    <img src={`../images/A8.png`}/>
                        <h1>A8: {award.A8}</h1>
                    </>
                }
                </>
            }
            
            </ul>

        </div>
    );
}

export default Awards;