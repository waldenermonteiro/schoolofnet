import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
const { Types, Creators } = createActions({
  increment: null,
  decrement: null,
});

export const CounterTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  number: 0,
});
const increment = (state) => {
  return state.merge({ number: state.number + 1 });
};
const decrement = (state) => {
  if (state.number === 0) {
    return state.merge({ number: 0 });
  }
  return state.merge({ number: state.number - 1 });
};

export const counter = createReducer(INITIAL_STATE, {
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement,
});
