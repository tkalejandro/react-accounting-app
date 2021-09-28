import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"


export const root = document.querySelector("#root")
const body = document.querySelector("body")

root.classList.add("rootWelcome")

ReactDOM.render(<App />, root)