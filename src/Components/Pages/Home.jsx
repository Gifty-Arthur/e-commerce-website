import React from "react";
import hero from "../../assets/Bitmap.png";
import header from "../../assets/assets/home/mobile/image-header.jpg";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";

import r3 from "../../assets/r3.png";

import { IoChevronForwardOutline } from "react-icons/io5";
import SeeProductButton from "../SeeProduct";
import Shop from "../Shop";
import SubHome from "../SubHome";

const Home = () => {
  return (
    <div>
      <div className="hidden md:block w-full bg-[#141414] h-full px-4">
        <div className="flex  flex-row items-center justify-between">
          {/* Text Section */}
          <div className="flex flex-col space-y-4 md:space-y-6 mt-10 md:mt-0">
            <p className="text-[#5d5d5d] font-Manrope font-normal text-[14px] tracking-[0.8em] uppercase">
              NEW PRODUCT
            </p>

            <h1 className="text-[36px] md:text-[56px] leading-tight text-custom2 font-Manrope font-bold">
              XX99 Mark II
              <br /> Headphones
            </h1>

            <p className="text-[15px] text-[#aeaeaeae] font-medium font-Manrope">
              Experience natural, lifelike audio and exceptional <br />
              build quality made for the passionate music <br />
              enthusiast.
            </p>

            <SeeProductButton className="bg-primary hover:bg-custom3" />
          </div>

          {/* Image Section */}
          <img src={hero} alt="Hero" className="mt-10  max-w-xs md:max-w-md" />
        </div>
      </div>

      {/* mobile only */}
      <div className="block md:hidden w-full ">
        <div>
          <img src={header} alt="" />
          <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-[#5d5d5d] font-Manrope font-normal text-[14px] tracking-[0.8em] uppercase text-center">
              NEW PRODUCT
            </p>

            <h1 className="text-[56px] leading-tight text-custom2 font-Manrope font-bold">
              XX99 Mark II
              <br /> Headphones
            </h1>

            <p className="text-[15px] text-[#aeaeaeae] font-medium font-Manrope text-center mt-2">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <SeeProductButton className="bg-primary hover:bg-custom3  ml-20 mt-4" />
          </div>
        </div>
      </div>
      {/* sub-hero */}

      <div className="bg-[#fafafa] p-35 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-24 md:gap-y-0 ">
          {/* 1st  */}
          <div
            className="w-[350px] h-[204px] bg-tertiary rounded-[8px] relative pt-16 flex flex-col items-center justify-end
              transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            {/* Overlapping image */}
            <img
              src={r1}
              alt="Headphone"
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[120px] h-auto"
            />
            {/* Text and Button */}
            <p className="font-bold font-Manrope text-custom5 text-[18px]">
              HEADPHONES
            </p>
            <Shop className="mb-2" />
          </div>

          {/* 2nd */}
          <div
            className=" w-[350px] h-[204px] bg-tertiary rounded-[8px] relative pt-16 flex flex-col items-center justify-end
              transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            {/* Overlapping image */}
            <img
              src={r2}
              alt="Headphone"
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[120px] h-auto"
            />
            {/* Text and Button */}
            <p className="font-bold font-Manrope text-custom5 text-[18px]">
              SPEAKERS
            </p>
            <Shop className="mb-2" />
          </div>
          {/* 3rd */}
          <div
            className="w-[350px] h-[204px] bg-tertiary rounded-[8px] relative pt-16 flex flex-col items-center justify-end
              transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            {/* Overlapping image */}
            <img
              src={r3}
              alt="Headphone"
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[120px] h-auto"
            />
            {/* Text and Button */}
            <p className="font-bold font-Manrope text-custom5 text-[18px]">
              EARPHONES
            </p>
            <Shop className="mb-2" />
          </div>
        </div>
      </div>
      <SubHome />
    </div>
  );
};

export default Home;
