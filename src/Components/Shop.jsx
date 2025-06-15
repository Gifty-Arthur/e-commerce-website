import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

const Shop = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[13px] text-gray-500 tracking-widest hover:text-orange-500 cursor-pointer flex items-center gap-1  ${className}`}
    >
      SHOP <IoChevronForwardOutline className="text-[16px]" />
    </button>
  );
};

export default Shop;
