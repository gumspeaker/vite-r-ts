import React from "react";
import "./index.css";
import reactDom from "react-dom/client";
import App from "./App.tsx";
export const context = React.createContext({ demo: 1 });
reactDom.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <App demo={1}></App>
  // </React.StrictMode>
);
