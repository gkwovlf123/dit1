import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import "./Fonts.css";
import "./styles.css";
import "./ma.js"

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
      <iframe class="frame" src="https://github.com/VENDREDl/dit1/blob/main/src/Components/App.js" title="myFrame"/>
      <button class="button">Chat</button>
      
    </>
  );
}

export default App;
