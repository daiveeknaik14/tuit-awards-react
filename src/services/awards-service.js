import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const AWARDS_API = `${BASE_URL}/api/users`;
const COINS_API = `${BASE_URL}/api/users`;

const api = axios.create({
    withCredentials: true
});

export const userAwardsTuit = (tid) => {
    api.post(`${COINS_API}/my/decreaseCoins/10`)
    return api.post(`${BASE_URL}/api/tuits/${tid}/mockaward`)
        .then(response => response.data);
}

export const findAllAwards = () =>
    api.get(`${BASE_URL}/api/awards`)
        .then(response => response.data);
