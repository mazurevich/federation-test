import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import "./index.css";

const App = () => (
  <>
    <Header title="Header on remote" />
    <div className="container">
      <div>Name: remote</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
