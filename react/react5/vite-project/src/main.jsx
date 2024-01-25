import React from "react";
import ReactDOM from "react-dom/client";
import { UserApp } from "./UserApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserApp />
  </React.StrictMode>
);

//npm run build
//generará un carpeta dist
//upload dist a Netlify
