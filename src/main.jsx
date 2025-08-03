//! JS WAY
// const rootElement = document.getElementById("root");
// const h1 = document.createElement("h1");
// h1.textContent = "Hello React";
// rootElement.append(h1);

//! REACT WAY
import { createRoot } from "react-dom/client";
import App from "./App";

const div = document.getElementById("root");
createRoot(div).render(<App></App>);