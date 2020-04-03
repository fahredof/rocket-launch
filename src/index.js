import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/error-boundary";
import App from "./components/app/App";

ReactDOM.render(
    <ErrorBoundary>
        <App/>
    </ErrorBoundary>,
    document.getElementById("root")
);