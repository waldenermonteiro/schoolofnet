import React, { Component } from "react";
import InitForm from "./components/InitForm";

export default class App extends Component {
  onClick = (button) => {
    button.preventDefault();
    console.log("Clicked in redux form");
  };
  onChangeName = ({ target }) => {
    console.log(target.value);
  };
  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">Redux Form</div>
          <div className="card-body">
            <div className="card-title">Myform</div>
            <InitForm onClick={this.onClick} onChangeName={this.onChangeName}></InitForm>
          </div>
          <div className="card-footer">
            <p>Card footer</p>
          </div>
        </div>
      </div>
    );
  }
}
