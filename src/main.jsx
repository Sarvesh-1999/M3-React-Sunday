//! JS WAY
// const div = document.getElementById("root");
// const h1 = document.createElement("h1");
// h1.innerText = "Welcome to React JS";
// div.append(h1);


//! REACT WAY  
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style/global.css"

const div = document.getElementById("root");
createRoot(div).render(<App></App>)