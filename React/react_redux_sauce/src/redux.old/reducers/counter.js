const INITIAL_VALUE = {
  number: 0,
};
export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: ++state.number };
    case "DECREMENT":
      return { ...state, number: --state.number };

    default:
      return state;
  }
};
