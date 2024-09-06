import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

// Vite
if (import.meta.env.DEV) {
  studio.initialize();
  studio.extend(extension);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
