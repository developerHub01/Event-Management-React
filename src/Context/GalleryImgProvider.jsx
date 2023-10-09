import React, { createContext, useState } from "react";

export const GalleryImgContext = createContext(null);

const GalleryImgProvider = ({ children }) => {
  const [galleryImg, setGalleryImg] = useState("");

  const galleryImgData = {
    galleryImg,
    setGalleryImg,
  };
  return (
    <GalleryImgContext.Provider value={galleryImgData}>
      {children}
    </GalleryImgContext.Provider>
  );
};

export default GalleryImgProvider;
