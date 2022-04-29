import React from "react";
import ReactDOM from "react-dom";
import Header from "remote/Header";

import "./index.css";

const App = () => (
  <>
    <Header title="Header downloaded from the remote" />
    <div className="container">And here is page content</div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
