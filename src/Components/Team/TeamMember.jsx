import React from "react";

const TeamMember = ({ id, imgLink, name, designation }) => {
  return (
    <figure className="w-full h-full flex flex-col shadow-2xl rounded-xl overflow-hidden cursor-pointer">
      <div className="w-full">
        <img src={imgLink} alt={name} className="w-full h-full object-cover" />
      </div>
      <figcaption className="w-full p-5 text-center flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        <p className="text-base text-slate-700">{designation}</p>
      </figcaption>
    </figure>
  );
};

export default TeamMember;
