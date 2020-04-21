import { createStore, compose, applyMiddleware } from "redux";

export default (rootReducer) => {
  const middleware = [];
  const enchancers = [];

  enchancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enchancers));
  return store;
};
