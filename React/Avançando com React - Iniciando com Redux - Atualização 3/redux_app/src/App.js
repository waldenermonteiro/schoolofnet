import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clickHelloAction } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value,
    });
    console.log(event.target.value);
  };

  render() {
    const { text } = this.state;
    const { msg, clickHelloAction } = this.props;
    return (
      <div className="App">
        <input type="text" onChange={this.handleInputChange} name="" id="" />
        <button type="button" onClick={() => clickHelloAction(text)}>
          Click me
        </button>
        {msg}
      </div>
    );
  }
}
const mapStateToProps = store => ({
  msg: store.clickReducer.msg,
});
const mapDispatchToProps = dispatch => bindActionCreators({ clickHelloAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
