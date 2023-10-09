import React, { useContext } from "react";
import useFetch from "../CustomHook/useFetch";
import { GalleryImgContext } from "../Context/GalleryImgProvider";

const url =
  "https://raw.githubusercontent.com/developerHub01/Event-managemenet-fake-data/main/gallery-img-list.json";

const Gallery = () => {
  const { data, isLoading, getError } = useFetch(url);
  const { setGalleryImg } = useContext(GalleryImgContext);
  const handleGalleryImgPopUp = (e) => {
    setGalleryImg((prev) => e.target.src);
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {isLoading ||
        (data &&
          data.map((item) => (
            <figure
              key={item.id}
              className="h-full w-full aspect-square overflow-hidden rounded-lg shadow-xl cursor-pointer"
            >
              <img
                src={item.imgLink}
                alt=""
                className="w-full h-full object-cover transition-all duration-100 ease-in-out hover:scale-125 select-none"
                onClick={handleGalleryImgPopUp}
              />
            </figure>
          )))}
    </div>
  );
};

export default Gallery;
