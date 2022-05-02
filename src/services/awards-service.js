import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const AWARDS_API = `${BASE_URL}/api/users`;
const COINS_API = `${BASE_URL}/api/users`;

const api = axios.create({
    withCredentials: true
});

export const userAwardsTuit = (tid, name, coins) => {
    console.log(name)
    api.post(`${COINS_API}/my/decreaseCoins/${coins}`)
    return api.post(`${BASE_URL}/api/users/my/tuits/${tid}/${name}`)
        .then(response => response.data);
}

export const findAllAwards = () =>
    api.get(`${BASE_URL}/api/awards`)
        .then(response => response.data);

export const findAwardByTuit = (tid) => {
    return api.get(`${BASE_URL}/api/awards/${tid}`)
        .then(response => { 
            const x = response.data;
            let toReturn = new Array(x);
            let newArr = new Array();
            newArr  = [].concat(...toReturn)
            let awardsCount = new Map()
            newArr.forEach(e => {
                if (!awardsCount.has(e?.awards?.name)) {
                    awardsCount.set(e?.awards?.name, 0)
                }
                let currCount = awardsCount.get(e?.awards?.name)
                awardsCount.set(e?.awards?.name, currCount + 1)

            })
            awardsCount = Object.fromEntries(awardsCount)
            //console.log(awardsCount)
            return awardsCount
            })
}
