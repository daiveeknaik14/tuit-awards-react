import React, {useEffect, useState} from "react";
import * as userService from "../../services/security-service"
import * as coinService from "../../services/coins-service"

const Coins = () => {
    const [user, setUser] = useState({});
    const [coins, setCoins] = useState({});
    useEffect(async () => {
        try {
          const user = await userService.profile();
          console.log(user)
          const coins = await coinService.findAllUserCoins(user._id)
          setCoins(coins);
          console.log(coins)
          setUser(user);
        } catch (e) {
        }
      }, []);
    return(
        <div className="col">
            <i className="fa fa-circle-thin fa-3x fa-pull-left"></i><h2>{JSON.stringify(coins)}</h2>
        </div>
    );
};
export default Coins;