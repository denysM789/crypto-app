import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { coinOverview, lineChart, barChart } from "./coinOverview";
import { coinInfo } from "./coinInfo";
import { infoBar } from "./infoBar";
import { bottomChart } from "./bottomChart";

const reducers = combineReducers({
  coinOverview,
  lineChart,
  barChart,
  coinInfo,
  infoBar,
  bottomChart,
});

export const store = createStore(reducers, applyMiddleware(thunk));
