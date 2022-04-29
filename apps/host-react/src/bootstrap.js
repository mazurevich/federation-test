import { registerApplication, start } from "single-spa";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

registerApplication(
  "header",
  () => import("header/Header"),
  (location) => location.pathname.startsWith("/"),
  {
    title: "Test",
  }
);

registerApplication(
  "menu",
  () => import("menu/Menu"),
  (location) => location.pathname.startsWith("/"),
  {
    menu: [
      {
        id: "qwer",
        label: "asdfasdf",
      },
    ],
  }
);

start();

ReactDOM.render(<App />, document.getElementById("app"));
