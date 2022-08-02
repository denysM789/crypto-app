import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  coinOverviewReducer,
  lineChartReducer,
  barChartReducer,
} from "./coinOverview/index";

const reducers = combineReducers({
  coinOverviewReducer,
  lineChartReducer,
  barChartReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
