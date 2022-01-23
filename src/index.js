import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/style.scss";

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
