import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from "../Logout";

import { HiBars3BottomLeft, HiMiniXMark } from "react-icons/hi2";

import "./Navigation.css";
import { AuthContext } from "../../Context/AuthProvider";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [closeNavbar, setCloseNavbar] = useState(false);
  const handleCloseNevbar = () => {
    setCloseNavbar((prev) => !prev);
  };
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-6xl mx-auto py-5 flex justify-between items-center">
        <div className="flex justify-center items-center flex-shrink-0">
          <HiBars3BottomLeft
            className="block lg:hidden text-4xl mr-2 cursor-pointer"
            onClick={() => setCloseNavbar((prev) => !prev)}
          />
          <Link
            to="/"
            className="text-slate-800 text-xl sm:text-3xl font-bold select-none"
          >
            <span className="text-pink-700">Event</span>Master
          </Link>
        </div>

        <ul
          id="navbar"
          className={`lg:static lg:flex-row flex flex-col gap-y-8 gap-x-2 justify-center items-center fixed bottom-0 left-0 w-full h-full lg:w-auto z-50 lg:bg-transparent lg:opacity-100 lg:pointer-events-auto transition-all duration-200 ${
            closeNavbar
              ? "opacity-100 pointer-events-auto bg-black/90"
              : "opacity-0 pointer-events-none bg-transparent"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className="text-white lg:text-slate-800 rounded-md py-3 px-5 select-none"
              onClick={() => setCloseNavbar((prev) => !prev)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white lg:text-slate-800 rounded-md py-3 px-5 select-none"
              onClick={() => setCloseNavbar((prev) => !prev)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="text-white lg:text-slate-800 rounded-md py-3 px-5 select-none"
              onClick={() => setCloseNavbar((prev) => !prev)}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/event"
              className="text-white lg:text-slate-800 rounded-md py-3 px-5 select-none"
              onClick={() => setCloseNavbar((prev) => !prev)}
            >
              Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className="text-white lg:text-slate-800 rounded-md py-3 px-5 select-none"
              onClick={() => setCloseNavbar((prev) => !prev)}
            >
              Service
            </NavLink>
          </li>
          <li onClick={handleCloseNevbar} className="inline-block lg:hidden">
            <HiMiniXMark className="absolute top-4 right-4 text-4xl cursor-pointer text-white" />
          </li>
        </ul>
        {user ? (
          <Logout />
        ) : (
          <Link to="/login">
            <button className="bg-pink-700 text-white rounded-md py-3 px-5">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
