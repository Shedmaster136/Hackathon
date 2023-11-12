import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/teko"; // Defaults to weight 400
import "@fontsource/teko/400.css"; // Specify weight
import "./index.css";
import App from "./components/app/app"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
