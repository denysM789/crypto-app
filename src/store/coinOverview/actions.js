import axios from "axios";
import {
  GET_ALLCOINS_SUCCESS,
  GET_ALLCOINS_PENDING,
  GET_ALLCOINS_ERROR,
  GET_CHARTDATA_PENDING,
  GET_CHARTDATA_SUCCESS,
  GET_CHARTDATA_ERROR,
} from "./index";

export const getAllCoins = (currency) => async (dispatch, getState) => {
  const state = getState();

  try {
    dispatch({ type: GET_ALLCOINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );

    dispatch({
      type: GET_ALLCOINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_ALLCOINS_ERROR, payload: err });
  }
};

export const getBitcoinData = () => async (dispatch, getState) => {
  const state = getState();

  try {
    dispatch({ type: GET_CHARTDATA_PENDING });
    const { data } = await axios(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily"
    );
    dispatch({ type: GET_CHARTDATA_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_CHARTDATA_ERROR, payload: err });
  }
};
