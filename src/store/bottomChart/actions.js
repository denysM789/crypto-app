import axios from "axios";
import {
  GET_COINDATA_PENDING,
  GET_COINDATA_SUCCESS,
  GET_COINDATA_ERROR,
} from "./index";

export const getCoinData =
  (coinId, activeDuration) => async (dispatch, getState) => {
    const state = getState();

    try {
      dispatch({ type: GET_COINDATA_PENDING });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${activeDuration}&interval=daily`
      );
      dispatch({ type: GET_COINDATA_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: GET_COINDATA_ERROR, payload: err });
    }
  };
