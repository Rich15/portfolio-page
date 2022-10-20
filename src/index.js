import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProvider from "./context";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
