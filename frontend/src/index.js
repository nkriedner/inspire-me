// IMPORT MODULES
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// IMPORT CSS
import "./index.css";

// IMPORT COMPONENTS
import App from "./App";

// INITIALIZE REACT ROOT ELEMENT
const root = ReactDOM.createRoot(document.getElementById("root"));

// RENDER APPLICATION
root.render(
    // Use StrictMode for Development
    <React.StrictMode>
        {/* Wrap app in BrowserRouter */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
