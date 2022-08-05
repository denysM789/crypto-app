const initialState = {
  data: { prices: [] },
  isLoading: false,
  error: false,
};

export const GET_COINDATA_PENDING = "GET_COINDATA_PENDING";
export const GET_COINDATA_SUCCESS = "GET_COINDATA_SUCCESS";
export const GET_COINDATA_ERROR = "GET_COINDATA_ERROR";

export function bottomChart(state = initialState, action) {
  switch (action.type) {
    case GET_COINDATA_PENDING:
      return { ...state, isLoading: true, error: false };
    case GET_COINDATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        isLoading: false,
      };
    case GET_COINDATA_ERROR:
      return { ...state, error: true, isLoading: false };
    default:
      return state;
  }
}
