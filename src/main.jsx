import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes/Routes.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import LoadingProvider from "./Context/LoadingProvider";
import GalleryImgProvider from "./Context/GalleryImgProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GalleryImgProvider>
      <LoadingProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LoadingProvider>
    </GalleryImgProvider>
  </React.StrictMode>
);
