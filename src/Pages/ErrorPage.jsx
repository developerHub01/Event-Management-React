import React from "react";

import errorPageBg from "../assets/errorPage.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section
      style={{
        background: `url('${errorPageBg}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full min-h-screen flex justify-center items-center select-none py-5 px-3"
    >
      <div className="flex flex-col justify-center items-center backdrop-blur-sm px-4 py-4 shadow-2xl text-center">
        <h2 className="text-[25vw] leading-tight font-extrabold text-white text-center">
          404
        </h2>
        <p className="text-white pb-5">Page Not Found</p>
        <Link to="/">
          <button className="bg-pink-700 text-white rounded-md py-3 px-5 animate-bounce hover:scale-150">
            Go To Home Page
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
