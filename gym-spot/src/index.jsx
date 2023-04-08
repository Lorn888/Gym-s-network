import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GRIContextProvider } from "./context/GRIContext";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GRIContextProvider>
        <App />
      </GRIContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
