import React, {useEffect, useState} from "react";
import * as service from "../../services/security-service"

const Coins = () => {
    const [user, setUser] = useState({});
    useEffect(async () => {
        try {
          const user = await service.profile();
          setUser(user);
        } catch (e) {
        }
      }, []);
    console.log(user)
    return(
        <div className="col">
            <i className="fa fa-circle-thin fa-3x fa-pull-left"></i><h2>{user.coins}</h2>
        </div>
    );
};
export default Coins;