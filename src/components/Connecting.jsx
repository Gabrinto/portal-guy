import React from "react";

const Connecting = () => {
  return (
    <div
      className="absolute w-[250px] h-[90px] right-0 left-0 
      bottom-0 top-[23rem] mx-auto flex 
    items-center justify-center shadow-xl bg-gray-100 text-gray-600 z-50"
    >
      <svg
        className=" bg-indigo-500 animate-spin h-5 w-5 mr-3 rounded-md ..."
        viewBox="0 0 24 24"
      ></svg>
      <p className=" flex items-center justify-center py-5">Connecting...</p>
    </div>
  );
};

export default Connecting;
