import React, { useState } from "react";
import Service from "../Components/Services/Service";
import useGetSetLocalStorage from "../CustomHook/useGetSetLocalStorage";

const MyEventPage = () => {
  const { getEventList } = useGetSetLocalStorage();
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div
        className={`w-[90%] max-w-6xl mx-auto  py-5 place-items-center grid ${
          getEventList("purchaseEventList") &&
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        } gap-5`}
      >
        {getEventList("purchaseEventList") ? (
          getEventList("purchaseEventList").map((item) => (
            <Service key={item.id} {...item} />
          ))
        ) : (
          <h2 className="text-center text-3xl text-pink-700 font-bold">
            No Event Added
          </h2>
        )}
      </div>
    </div>
  );
};

export default MyEventPage;
