import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

import { GiCheckMark, GiCrossMark } from "react-icons/gi";

import avatar from "../assets/avatar1.png";

const VerifiedCompo = ({ verified }) => {
  return (
    <>
      {verified ? (
        <div className="rounded-full py-3 px-10 flex justify-center items-center gap-2 bg-pink-700 text-white select-none text-xl capitalize">
          <GiCheckMark className="text-xl" />{" "}
          <span className="select-none">Verified</span>
        </div>
      ) : (
        <div className="rounded-full py-3 px-10 flex justify-center items-center gap-2 bg-slate-700 text-white capitalize">
          <GiCrossMark className="text-xl" />{" "}
          <span className="select-none">Not Varified</span>
        </div>
      )}
    </>
  );
};

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      data-aos="zoom-in"
      data-aos-once
      className="w-[90%] max-w-md px-6 py-10 flex flex-col justify-center items-center shadow-2xl rounded-xl"
    >
      <figure className="w-full flex flex-col gap-4 justify-center items-center">
        <div className="w-full max-w-[250px] aspect-square overflow-hidden rounded-full border-8 border-pink-700 cursor-pointer hover:scale-90 transition-all duration-100 shadow-xl">
          <img
            src={user?.photoURL}
            alt=""
            className="w-full h-full object-cover"
            style={{
              background: `url('${avatar}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <figcaption className="flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="text-2xl font-bold text-pink-600">
            {user.displayName}
          </h3>
          <h4 className="text-lg">{user.email}</h4>
          <VerifiedCompo verified={user.emailVerified} />
        </figcaption>
      </figure>
    </div>
  );
};

export default Profile;
