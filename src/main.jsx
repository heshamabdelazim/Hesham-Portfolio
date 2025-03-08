import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.1";
import "./index.css";
import ProvidingData, { MyContext } from "./context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProvidingData>
      <App />
    </ProvidingData>
  </React.StrictMode>
);
