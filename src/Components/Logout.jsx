import React, { useContext, useState } from "react";

import avatar from "../assets/avatar1.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import ToastComponent from "./ToastComponent";

const Logout = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = (e) => {
    signOutUser()
      .then(() => {
        toast(
          <ToastComponent successOrError={true} message="Logout successful" />
        );
      })
      .catch((error) => {
        toast(
          <ToastComponent successOrError={false} message={error.message} />
        );
      });
  };

  return (
    <div className="flex justify-center items-center gap-2 flex-shrink-0">
      <Link to="/" className="flex-shrink-0">
        {user && (
          <Link
            to="/profile"
            className="block w-12 h-12 rounded-full overflow-hidden border-0 hover:border-2 hover:border-pink-700 transition-all duration-75"
            style={{
              background: `url('${avatar}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <img
              src={user.photoURL}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
        )}
      </Link>
      <button
        className="bg-pink-700 text-white rounded-md py-3 px-5"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
