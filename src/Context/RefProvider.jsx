import React, { createContext, useRef } from "react";

export const RefContext = createContext(null);

const RefProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const moveToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const refData = {
    aboutRef,
    servicesRef,
    moveToAbout,
    moveToServices,
  };
  return <RefContext.Provider value={refData}>{children}</RefContext.Provider>;
};

export default RefProvider;
