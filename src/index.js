import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/portfolio">
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
