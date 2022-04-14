import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const COINS_API = `${BASE_URL}/api/users`;

const api = axios.create({
    withCredentials: true
});

export const findAllUserCoins = (userId) =>
    api.get(`${COINS_API}/${userId}/coins`)
        .then(response => response.data);

export const decreaseUserCoins = (coinNum) =>
    api.get(`${COINS_API}/my/decreaseCoins/${coinNum}`)
        .then(response => response.data);