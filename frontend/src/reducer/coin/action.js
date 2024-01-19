import axios from "axios";
import { COIN_FALIURE, COIN_REQUEST, COIN_SUCCESS } from "./actionType";

const BaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getCoins = (payload) => (dispatch) => {
  dispatch({ type: COIN_REQUEST });
  axios({
    method: "get",
    url: `${BaseUrl}/coin/`,
    headers: {
      "Content-Type": "application/json",
    },
    params: payload,
  })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: COIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({ type: COIN_FALIURE });
    });
};
