const initialState = {
  watchlist: [],
  addCoinToWatchlist: {},
  isLoading: false,
  hasError: false,
};

export const ADD_COIN_TO_WATCHLIST = "ADD_COIN_TO_WATCHLIST";

export function watchlistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COIN_TO_WATCHLIST:
      return {
        ...state,
        watchlist: action.payload,
      };
  }
}
