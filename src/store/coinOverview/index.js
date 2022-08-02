const initialState = {
  coinsData: [],
  bitcoinPrices: { prices: [] },
  bitcoinVolumes: { total_volumes: [] },
  isLoading: false,
  error: false,
};

export const GET_ALLCOINS_PENDING = "GET_ALLCOINS_PENDING";
export const GET_ALLCOINS_SUCCESS = "GET_ALLCOINS_SUCCESS";
export const GET_ALLCOINS_ERROR = "GET_ALLCOINS_ERROR";
export const GET_CHARTDATA_PENDING = "GET_CHARTDATA_PENDING";
export const GET_CHARTDATA_SUCCESS = "GET_CHARTDATA_SUCCESS";
export const GET_CHARTDATA_ERROR = "GET_CHARTDATA_ERROR";

export function coinOverviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALLCOINS_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case GET_ALLCOINS_SUCCESS:
      return {
        ...state,
        coinsData: action.payload,
        isLoading: false,
      };
    case GET_ALLCOINS_ERROR:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
}
export function lineChartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARTDATA_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case GET_CHARTDATA_SUCCESS:
      return {
        ...state,
        bitcoinPrices: action.payload,
        isLoading: false,
      };
    case GET_CHARTDATA_ERROR:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
}

export function barChartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARTDATA_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case GET_CHARTDATA_SUCCESS:
      return {
        ...state,
        bitcoinVolumes: action.payload,
        isLoading: false,
      };
    case GET_CHARTDATA_ERROR:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
}
