import React from "react";

import reactDom from "react-dom";
import App from "./App.tsx";
import "./index.css";

reactDom.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
