import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { LoadingContext } from "./Context/LoadingProvider";
import Loader from "./Components/Loader";
import Navigation from "./Components/Navigation/Navigation";

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
