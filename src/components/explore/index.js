import React from "react";
import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
import * as dislikesService from "../../services/dislikes-service";
import * as awardsService from "../../services/awards-service";
import Tuit from "../tuits/tuit";

const Explore = ({tuits = [], refreshTuits, refreshCoins}) => {
  const coinNum = 10
  tuits.sort((tuit1, tuit2) => {
      return tuit2.stats.awards - tuit1.stats.awards;
  });
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
          <div className="border border-bottom-0">
              <h4 className="fw-bold p-2">Explore</h4>
              <div className="d-flex">
                  <div className="p-2">
                      <img className="ttr-width-50px rounded-circle"
                           src="../images/nasa-logo.jpg"/>
                  </div>
                  <div className="p-2 w-100">
                      <div className="row">
                          <div className="col-10 ttr-font-size-150pc text-primary">
                              <i className="fas fa-portrait me-3"></i>
                              <i className="far fa-gif me-3"></i>
                              <i className="far fa-bar-chart me-3"></i>
                              <i className="far fa-face-smile me-3"></i>
                              <i className="far fa-calendar me-3"></i>
                              <i className="far fa-map-location me-3"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
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

export default Explore;