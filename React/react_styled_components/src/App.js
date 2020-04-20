import React from "react";
import "./App.css";
import styled, { css } from "styled-components";

const ParaStyle = styled.p`
  font-size: 2em;
  color:blue;
  ${(props) =>
    props.red &&
    css`
      color: red;
    `}

`;
function App() {
  return (
    <div className="App">
      <ParaStyle red> Teste</ParaStyle>
    </div>
  );
}

export default App;
