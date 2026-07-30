import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Demo from "./Demo.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Demo />
    <App />
    <h1>Radha rani ki jay </h1>
  </>,
);
