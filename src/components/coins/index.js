import React, {useEffect, useState} from "react";
import * as userService from "../../services/security-service"
import * as coinService from "../../services/coins-service"
import "./coin.css";

const Coins = (refreshCoins) => {
    const [user, setUser] = useState([]);
    const [coins, setCoins] = useState([]);
    console.log("coins1"+coins);
    useEffect(async () => {
        try {
          const user = await userService.profile();
          const coins = await coinService.findAllUserCoins(user._id)
          setCoins(coins);
          console.log("coins inside index.js"+coins)
        } catch (e) {
        }
      }, []);
    return(
        <div className="col" id="coins">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>
            {/*<i className="fa fa-circle-thin fa-3x fa-pull-left"></i><h2>{JSON.stringify(coins)}</h2>*/}
            <span className="bi bi-coin blue-color">{coins > 0 && JSON.stringify(coins)}</span>
        </div>
    );
};
export default Coins;