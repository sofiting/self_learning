import React from "react";
import ReactDOM from "react-dom/client";
import { PruebaMapApp } from "./PruebaMapApp";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PruebaMapApp value={0} />
  </React.StrictMode>
);
