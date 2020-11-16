import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import "./Fonts.css";
import "./styles.css";
import styled from "styled-components";

const Btn = styled.button`
  z-index: 5;
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  line-height: 20px;
`

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
      <iframe class="frame" src="https://github.com/VENDREDl/dit1/blob/main/src/Components/App.js" title="myFrame"/>
      <Btn>Chat</Btn>
    
    </>
  );
}

export default App;
