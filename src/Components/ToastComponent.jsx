import React from "react";

import { AiFillCheckCircle } from "react-icons/ai";
import { IoMdAlert } from "react-icons/io";

const ToastComponent = ({ successOrError, message }) => {
  return (
    <div className="flex gap-3 justify-start items-center">
      <span className="flex-shrink-0">
        {successOrError ? (
          <AiFillCheckCircle className="w-6 h-6 text-green-600" />
        ) : (
          <IoMdAlert className="w-6 h-6 text-red-600" />
        )}
      </span>
      <p className={`${successOrError ? "text-green-600" : "text-red-600"}`}>
        {message}
      </p>
    </div>
  );
};

export default ToastComponent;
