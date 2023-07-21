import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextApiHook from "./hooks/ContextApiHook.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextApiHook>
        <App />
      </ContextApiHook>
    </BrowserRouter>
  </React.StrictMode>
);
