import React from "react";

const Loader = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 grid place-items-center bg-white/75 z-50">
      <span className="w-28 h-28 rounded-full border-t-8 border-r-8 border-l-8 border-b-8 border-pink-700 border-b-transparent animate-spin duration-75 grid place-items-center">
        <span className="block w-16 h-16 rounded-full border-t-8 border-r-8 border-l-8 border-b-8 border-pink-700 border-b-transparent animate-spin duration-75"></span>
      </span>
    </div>
  );
};

export default Loader;
