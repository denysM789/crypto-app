import axios from "axios";
import {
  GET_COININFO_PENDING,
  GET_COININFO_SUCCESS,
  GET_COININFO_ERROR,
} from "./index";

export const getCoinInfo = (props) => async (dispatch, getState) => {
  const state = getState();
  const coinId = props.coinId;

  try {
    dispatch({ type: GET_COININFO_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
    );
    dispatch({ type: GET_COININFO_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_COININFO_ERROR, payload: err });
  }
};
