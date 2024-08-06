import React from "react";

const ButtonComp = ({ buttonName }) => {
  return (
    // <button className="text-textOnPrimary text-p-md bg-primary font-semibold rounded-full px-6 py-[10px] mx-2 my-10">
    //   {buttonName}
    // </button>
    // <button className="text-white bg-primary font-semibold rounded-full px-5 py-3 mx-2">
    //   {buttonName}
    // </button>

    <button className="text-textOnPrimary bg-primary hover:bg-onBackground border border-[#c10104] hover:border hover:border-surfaceAccent font-semibold rounded-full px-6 py-[10px] mx-2">
      {buttonName}
    </button>
  );
};

export default ButtonComp;
