import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./index.css";
import { Blog, Home } from "./pages";

export const App = ({ basePath }) => {
  return (
    <div className="container">
      <div>Hello from React example</div>
      <BrowserRouter basename={basePath}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
