const initialState = {
  data: { data: {} },
  isLoading: false,
  hasError: false,
};

export const GET_MARKETDATA_PENDING = "GET_MARKETDATA_PENDING";
export const GET_MARKETDATA_SUCCES = "GET_MARKETDATA_SUCCES";
export const GET_MARKETDATA_ERROR = "GET_MARKETDATA_ERROR";

export function infoBar(state = initialState, action) {
  switch (action.type) {
    case GET_MARKETDATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_MARKETDATA_SUCCES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasError: true,
      };
    case GET_MARKETDATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
