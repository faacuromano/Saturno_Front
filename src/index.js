import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoginProvider } from "./Contexts/ThemeContext/LoginContext";
import { ThemeProvider } from "./Contexts/ThemeContext/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LoginProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LoginProvider>
);
