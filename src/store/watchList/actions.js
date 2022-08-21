export const addToWatchList = (coin) => (dispatch, getState) => {
  const watchlist = getState().watchlistReducer.watchlist;
  const doubleEntry = watchlist.find((element) => element.id == coin.id);
  if (!doubleEntry) {
    console.log("no double entry");
    dispatch({ type: ADD_COIN_TO_WATCHLIST, payload: [...watchlist, coin] });
  }

  if (doubleEntry) {
    const newWatchlist = watchlist.filter((el) => el.id !== coin.id);
    dispatch({ type: ADD_COIN_TO_WATCHLIST, payload: [newWatchlist] });
  }
};
