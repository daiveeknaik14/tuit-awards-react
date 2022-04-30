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
    api.get(`${BASE_URL}/api/awards/${tid}`)
        .then(response => response.data)
}
