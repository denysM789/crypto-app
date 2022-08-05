import axios from "axios";
import {
  GET_MARKETDATA_PENDING,
  GET_MARKETDATA_SUCCES,
  GET_MARKETDATA_ERROR,
} from "./index";

export const getMarketData = () => async (dispatch, getState) => {
  const state = getState();

  try {
    dispatch({ type: GET_MARKETDATA_PENDING });
    const { data } = await axios("https://api.coingecko.com/api/v3/global");
    dispatch({ type: GET_MARKETDATA_SUCCES, payload: data });
  } catch (err) {
    dispatch({ type: GET_MARKETDATA_ERROR, payload: err });
  }
};
