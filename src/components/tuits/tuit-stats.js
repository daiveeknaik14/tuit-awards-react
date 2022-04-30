import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import Awards from "../awards";
import * as service from "../../services/tuits-service";
import * as awardService from "../../services/awards-service";


const TuitStats = ({tuit, likeTuit, dislikeTuit = () => {}, awardTuit = () => {}}) => {
    const [awards,setAwards] = useState([]);
    const findAwards = () =>
        awardService.findAllAwards()
            .then(awards => setAwards(awards));

    useEffect(() => {
        let isMounted = true;
        findAwards()
        return () => {isMounted = false;}
    }, []);

    const [awardModalOpen, setAwardsModalOpen] = useState(false);

    const setAwardModalOpenToTrue = () => {
        setAwardsModalOpen(true);
    }

    const setAwardModalOpenToFalse = () => {
        setAwardsModalOpen(false);
    }
    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
          {tuit.stats && tuit.stats.replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit.stats && tuit.stats.retuits}
        </div>
        <div className="col">
          <span onClick={() => likeTuit(tuit)}>
              {
                  <i className="fa-regular fa-thumbs-up"></i>
              }
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>
        <div className="col">
          <span onClick={() => dislikeTuit(tuit)}>
                {
                    <i className="fa-regular fa-thumbs-down"></i>
                }
              {tuit.stats && tuit.stats.dislikes}
          </span>
        </div>
        <div className="col">
          <span onClick={setAwardModalOpenToTrue}>
                {
                    <i className="fa-regular fa-circle-thin"></i>
                }
              {tuit.stats && tuit.stats.awards}
          </span>
            <Modal isOpen={awardModalOpen}>
                <button onClick={setAwardModalOpenToFalse}>x</button>
                <Awards awards={awards} refreshawards={findAwards}/>
            </Modal>
        </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
}
export default TuitStats;