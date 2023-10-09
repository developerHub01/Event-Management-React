import React, { useState } from "react";
import Service from "../Components/Services/Service";
import useGetSetLocalStorage from "../CustomHook/useGetSetLocalStorage";

const EventPage = () => {
  const { getEventList } = useGetSetLocalStorage();
  return (
    <div className="w-[90%] max-w-6xl mx-auto min-h-screen py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {getEventList("purchaseEventList").map((item) => (
        <Service key={item.id} {...item} />
      ))}
    </div>
  );
};

export default EventPage;
