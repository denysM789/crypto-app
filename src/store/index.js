import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { coinOverview, lineChart, barChart } from "./coinOverview";

import { coinInfo } from "./coinInfo";

const reducers = combineReducers({
  coinOverview,
  lineChart,
  barChart,
  coinInfo,
});

export const store = createStore(reducers, applyMiddleware(thunk));
