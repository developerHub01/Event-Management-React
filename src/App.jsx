import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navigation from "./Components/Navigation";
import ContentLoader from "react-content-loader";
import { useContext } from "react";
import { LoadingContext } from "./Context/LoadingProvider";
import Loader from "./Components/Loader";

function App() {
  const { isLoading } = useContext(LoadingContext);
  return (
    <>
      <Navigation />
      <Outlet />
      <ToastContainer />
      {isLoading && <Loader />}
    </>
  );
}

export default App;
