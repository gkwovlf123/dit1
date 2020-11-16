import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import "./Fonts.css";
import "./styles.css";
import styled from "styled-components";

const Btn = styled.button`
  z-index: 5;
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  color: yellow;
`

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
      <iframe class="frame" src="http://localhost:3000/" title="myFrame"/>
      <Btn>Chat</Btn>
    
    </>
  );
}

export default App;
