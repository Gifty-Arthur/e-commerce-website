import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../Pages/data.json";

import hero from "../../assets/Bitmap.png";
import header from "../../assets/assets/home/mobile/image-header.jpg";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";

import SeeProductButton from "../SeeProduct";
import Shop from "../Shop";
import SubHome from "../SubHome";

const Home = () => {
  const navigate = useNavigate();
  const product = data.find((item) => item.name === "XX99 Mark II Headphones");

  return (
    <div>
      {/* Desktop Hero Section */}
      <div className="hidden md:block w-full bg-[#141414] h-full px-4">
        <div className="flex flex-row items-center justify-between">
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

            <SeeProductButton
              className="bg-primary hover:bg-custom3"
              onClick={() => navigate(`/product/${product.slug}`)}
            />
          </div>

          {/* Image Section */}
          <img src={hero} alt="Hero" className="mt-10 max-w-xs md:max-w-md" />
        </div>
      </div>

      {/* Mobile Hero Section */}
      <div className="block md:hidden w-full relative">
        <img src={header} alt="Mobile Header" className="w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center">
          <p className="text-[#5d5d5d] font-Manrope font-normal text-[14px] tracking-[0.8em] uppercase">
            NEW PRODUCT
          </p>

          <h1 className="text-[32px] leading-tight text-custom2 font-Manrope font-bold">
            XX99 Mark II
            <br /> Headphones
          </h1>

          <p className="text-[15px] text-[#aeaeaeae] font-medium font-Manrope mt-2">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <SeeProductButton
            className="bg-primary hover:bg-custom3 mt-4 text-white"
            onClick={() => navigate("/product/xx99-mark-two-headphones")}
          />
        </div>
      </div>

      {/* Sub-Categories */}
      <div className="bg-[#fafafa] p-8 px-4 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-24 md:gap-y-0">
          {/* HEADPHONES */}
          <div
            className="w-[350px] h-[204px] bg-tertiary rounded-[8px] relative pt-16 flex flex-col items-center justify-end
              transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <img
              src={r1}
              alt="Headphone"
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[120px] h-auto"
            />
            <p className="font-bold font-Manrope text-custom5 text-[18px]">
              HEADPHONES
            </p>
            <Shop className="mb-2" onClick={() => navigate("/headphones")} />
          </div>

          {/* SPEAKERS */}
          <div
            className="w-[350px] h-[204px] bg-tertiary rounded-[8px] relative pt-16 flex flex-col items-center justify-end
              transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <img
              src={r2}
              alt="Speaker"
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[120px] h-auto"
            />
            <p className="font-bold font-Manrope text-custom5 text-[18px]">
              SPEAKERS
            </p>
            <Shop className="mb-2" onClick={() => navigate("/speakers")} />
          </div>

          {/* EARPHONES */}
          <div
            className="w-[350px] h-[204px] bg-tertiary rounded-[8px] relative pt-16 flex flex-col items-center justify-end
              transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <img
              src={r3}
              alt="Earphone"
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[120px] h-auto"
            />
            <p className="font-bold font-Manrope text-custom5 text-[18px]">
              EARPHONES
            </p>
            <Shop className="mb-2" onClick={() => navigate("/earphones")} />
          </div>
        </div>
      </div>

      {/* Additional Home Content */}
      <SubHome />
    </div>
  );
};

export default Home;
