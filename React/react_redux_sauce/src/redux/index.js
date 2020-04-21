import { combineReducers } from "redux";
import configureStore from "./createStore";
import { counter } from "./counterSauce";
export default () => {
  const rootReducer = combineReducers({ counter });
  return configureStore(rootReducer);
};
