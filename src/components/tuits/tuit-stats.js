import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import Awards from "../awards";
import * as service from "../../services/tuits-service";
import * as awardService from "../../services/awards-service";


const TuitStats = ({tuit, likeTuit, dislikeTuit = () => {}, awardTuit = () => {}, findAwardsByTuit = () => {}}) => {
  /*const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : 'white'
      }
  };*/
    const customStyles = {
        content : {
            position: 'absolute',
            left: '20.5rem',
            right: '20.5rem',
            top: '7.5rem',
            bottom: '7.5rem',
    boxShadow: '0 0 10px 0 rgba(0,0,97,0.5)',
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
            backgroundColor: '#F6F3ED'
        }
    };
    const [awards,setAwards] = useState([]);
    const findAwards = () =>
        awardService.findAllAwards()
            .then(awards => setAwards(awards));

    const [award,setAward] = useState();
    const findAward = () =>
        findAwardsByTuit(tuit)
            .then(serverAward => {
            console.log('ser awa')
            var result = Object.keys(serverAward).map((key) => [Number(key), serverAward[key]]);
              console.log(serverAward)
              setAward(serverAward)
            console.log('awa')
            console.log(award)
          });

    useEffect(() => {
      let isMounted = true;
      findAward()
      return () => {isMounted = false;}
    }, []);

    useEffect(() => {
        let isMounted = true;
        findAwards()
        return () => {isMounted = false;}
    }, []);

    useEffect(() => {
      console.log("useeff")
      console.log(award)
    }, [award])


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
              <span style={{fontSize: '1.5em', color: 'blue'}}>
                  <i className="fa-duotone fa-message me-1"></i>
            </span>
          {tuit.stats && tuit.stats.replies}
        </div>
        <div className="col">
            <span style={{fontSize: '1.5em', color: 'blue'}}>
                <i className="fa-duotone fa-retweet me-1"></i>
            </span>
          {tuit.stats && tuit.stats.retuits}
        </div>
        <div className="col">
          <span onClick={() => likeTuit(tuit)}>
              {
                  <span style={{fontSize: '1.5em', color: 'blue'}}>
                    <i className="fa-duotone fa-thumbs-up"></i>
                  </span>
              }
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>
        <div className="col">
          <span onClick={() => dislikeTuit(tuit)}>
                {
                    <span style={{fontSize: '1.5em', color: 'blue'}}>
                        <i className="fa-duotone fa-thumbs-down"></i>
                    </span>
                }
              {tuit.stats && tuit.stats.dislikes}
          </span>
        </div>
        <div className="col">
          <span onClick={setAwardModalOpenToTrue}>
                {
                    <span style={{fontSize: '1.5em', color: 'blue'}}>
                        <i className="fa-regular fa-trophy-star"></i>
                    </span>
                }
              {tuit.stats && tuit.stats.awards}
          </span>
            <Modal isOpen={awardModalOpen} style={customStyles}>
                <button onClick={setAwardModalOpenToFalse} style = {{float: 'right', backgroundColor : '#E2532F'}}>x</button>
                {
                  award && 
                <Awards awards={awards} refreshawards={findAwards} awardTuit={awardTuit} tuit={tuit} award={award}/>
                }
            </Modal>
        </div>
        <div className="col">
            <span style={{fontSize: '1.5em', color: 'blue'}}>
                 <i className="far fa-inbox-out"></i>
            </span>
        </div>
      </div>
    );
}
export default TuitStats;