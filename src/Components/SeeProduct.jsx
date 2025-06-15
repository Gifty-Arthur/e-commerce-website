import React from "react";

const SeeProductButton = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[160px] h-[48px] cursor-pointer font-bold font-Manrope text-[13px]  transition duration-300 ${className}`}
    >
      SEE PRODUCT
    </button>
  );
};

export default SeeProductButton;
