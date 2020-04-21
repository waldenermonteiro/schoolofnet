import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterActions from "./redux/counterSauce";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    value: PropTypes.number.isRequired
  }
  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div className="App">
        <Counter value={value} increment={increment} decrement={decrement}></Counter>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  value: state.counter.number,
});
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(CounterActions.increment()),
  decrement: () => dispatch(CounterActions.decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
