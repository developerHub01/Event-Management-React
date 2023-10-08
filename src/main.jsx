import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes/Routes.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import LoadingProvider from "./Context/LoadingProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadingProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </LoadingProvider>
  </React.StrictMode>
);
