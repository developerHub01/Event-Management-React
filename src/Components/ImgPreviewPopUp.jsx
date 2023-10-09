import React, { useContext } from "react";
import { GalleryImgContext } from "../Context/GalleryImgProvider";

import { FaXmark } from "react-icons/fa6";

const ImgPreviewPopUp = () => {
  const { galleryImg, setGalleryImg } = useContext(GalleryImgContext);
  const closeImgPopUp = () => {
    setGalleryImg((prev) => "");
    
  };
  const handlePreviewPopEvent = (e) => {
    if (e.target.tagName.toLowerCase() === "img") return;
    setGalleryImg((prev) => "");
  };
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black/90 overflow-hidden grid place-items-center p-6 z-50"
      onClick={handlePreviewPopEvent}
    >
      <FaXmark
        className="text-white text-3xl absolute top-5 right-10 cursor-pointer"
        onClick={closeImgPopUp}
      />
      <figure>
        <img
          src={galleryImg}
          alt=""
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto border-8 border-white object-contain  select-none cursor-pointer"
        />
      </figure>
    </div>
  );
};

export default ImgPreviewPopUp;
