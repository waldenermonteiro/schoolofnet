import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <p>{value}</p>
      </div>
    );
  }
}
export default Counter;
