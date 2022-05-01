import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;
const TUITS_API = `${BASE_URL}/api/tuits`;

const api = axios.create({
  withCredentials: true
});

export const findAllTuitsLikedByUser = (userId) =>
    api.get(`${USERS_API}/${userId}/likes`)
        .then(response => response.data);

export const findAllUsersThatLikedTuit = (tid) =>
    api.get(`${TUITS_API}/${tid}/likes`)
        .then(response => response.data);

export const userLikesTuit = (uid, tid) =>
    api.put(`${USERS_API}/${uid}/likes/${tid}`)
        .then(response => response.data);

export const userTogglesTuitLikes = async (uid, tid, coinNum) => {
  await api.put(`${USERS_API}/${uid}/likes/${tid}`)
      .then(response => response.data);
  await api.post(`${USERS_API}/${uid}/increaseCoins/${coinNum}`)
      .then(response => response.data);
}


export const findAllTuitsDisLikedByUser = (userId) =>
    api.get(`${USERS_API}/${userId}/dislikes`)
        .then(response => response.data);