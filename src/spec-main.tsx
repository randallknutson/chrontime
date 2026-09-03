import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SpecApp } from "./SpecApp";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpecApp />
  </StrictMode>,
);
