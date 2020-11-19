import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import "./Fonts.css";
import "./styles.css";

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
      <iframe class="frame" src="https://localhost:3000" title="myFrame"/>
      <div class="box">Chat</div>
      
    </>
  );
}

export default App;
