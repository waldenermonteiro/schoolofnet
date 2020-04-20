import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clickHelloAction } from './actions';
import Counter from './components/Counter';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}
