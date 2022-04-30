import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
import * as dislikesService from "../../services/dislikes-service"
import * as awardsService from "../../services/awards-service"
const Tuits = ({tuits = [], refreshTuits, refreshCoins}) => {
  const coinNum = 10
  const likeTuit = (tuit) =>
      likesService.userTogglesTuitLikes("my", tuit._id, coinNum)
          .then(refreshTuits)
          .catch(e => alert(e))
  const deleteTuit = (tid) =>
      service.deleteTuit(tid)
          .then(refreshTuits);
  const dislikeTuit = (tuit) =>
      dislikesService.userTogglesTuitDislikes("my", tuit._id)
          .then(refreshTuits);
  const awardTuit = (tuit) =>
      awardsService.userAwardsTuit(tuit._id)
          .then(refreshTuits).then(refreshCoins);
  return (
      <div>
        <ul className="ttr-tuits list-group">
          {
            tuits.map && tuits.map(tuit =>
                <Tuit key={tuit._id}
                      deleteTuit={deleteTuit}
                      likeTuit={likeTuit}
                      dislikeTuit={dislikeTuit}
                      awardTuit={awardTuit}
                      tuit={tuit}/>)
          }
        </ul>
      </div>
    );
}

export default Tuits;