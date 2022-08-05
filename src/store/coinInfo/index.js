const initialState = {
  coinData: {},
  isLoading: false,
  activeCoin: "",
  error: false,
};

export const GET_COININFO_PENDING = "GET_COININFO_PENDING";
export const GET_COININFO_SUCCESS = "GET_COININFO_SUCCESS";
export const GET_COININFO_ERROR = "GET_COININFO_ERROR";

export function coinInfo(state = initialState, action) {
  switch (action.type) {
    case GET_COININFO_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case GET_COININFO_SUCCESS:
      return {
        ...state,
        coinData: action.payload,
        error: false,
        isLoading: false,
      };
    case GET_COININFO_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
}
