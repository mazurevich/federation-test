import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./index.css";
import { Blog, Home } from "./pages";

export const App = ({ basePath }) => {
  console.log(basePath);
  return (
    <div className="container">
      <div>Hello in react example</div>
      <BrowserRouter basename={basePath}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
