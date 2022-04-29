import { registerApplication, start } from 'single-spa';
import React from 'react'
import ReactDOM from "react-dom"
import { App } from './App'

registerApplication(
  'header',
  () => import('remote/HeaderSSPA'),
  location => location.pathname.startsWith('/'),
  {
    title: "Test"
  }
);

start();

ReactDOM.render(<App />, document.getElementById("app"));
