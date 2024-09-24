import React from "react";
import ReactDOM from "react-dom/client";
import { Page1, Page2 } from "./screens/Page"; // Import Page1 and Page2 from index.js
import "./style.css"; // Global styles import

const app = document.getElementById("app");

if (app) {
  const root = ReactDOM.createRoot(app);
  root.render(<Page1 />); // Or you can render Page2 if needed
} else {
  console.error("Root element not found");
}