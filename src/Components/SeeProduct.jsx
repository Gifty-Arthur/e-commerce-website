import React from "react";

const SeeProductButton = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[160px] cursor-pointer h-[48px] font-bold font-Manrope text-[13px] bg-primary text-white hover:bg-custom3 ${className}`}
    >
      SEE PRODUCT
    </button>
  );
};

export default SeeProductButton;
