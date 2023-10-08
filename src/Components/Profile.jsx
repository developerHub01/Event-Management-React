import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-[90%] max-w-md px-6 py-10 flex flex-col justify-center items-center shadow-2xl rounded-xl">
      <figure className="w-full flex flex-col gap-4 justify-center items-center">
        <div className="w-full max-w-[250px] aspect-square overflow-hidden rounded-full border-8 border-pink-700 cursor-pointer hover:scale-90 transition-all duration-100 shadow-xl">
          <img src={user.photoURL} alt="" className="w-full h-full" />
        </div>
        <figcaption className="flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="text-2xl font-bold text-pink-600">
            {user.displayName}
          </h3>
          <h4 className="text-lg">{user.email}</h4>
        </figcaption>
      </figure>
    </div>
  );
};

export default Profile;
