import React from "react";
import "./index.css";
import reactDom from "react-dom/client";
import App from "./App.tsx";
export const context = React.createContext({ demo: 1 });
reactDom.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <context.Provider value={{ demo: 1 }}>
      <context.Provider value={{ demo: 2 }}>
        <App></App>
      </context.Provider>
    </context.Provider>
  </React.StrictMode>
);
