import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { LoadingContext } from "./Context/LoadingProvider";
import Loader from "./Components/Loader";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import { GalleryImgContext } from "./Context/GalleryImgProvider";
import ImgPreviewPopUp from "./Components/ImgPreviewPopUp";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  const { isLoading } = useContext(LoadingContext);
  const { galleryImg } = useContext(GalleryImgContext);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
      {/* Non major component */}
      {galleryImg && <ImgPreviewPopUp />}
      <ToastContainer />
      {isLoading && <Loader />}
    </>
  );
};

export default App;
