import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/home/Home.jsx"
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
 
      <div className="dark:bg-slate-900 dark:text-white">
        <Home />
      </div>
   
  </BrowserRouter>
);
