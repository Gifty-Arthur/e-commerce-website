import React from "react";
import bg from "../assets/bg.png";
import mbg from "../assets/mbg.png";
import imgs from "../assets/assets/home/desktop/imgs.jpg";
import sm from "../assets/assets/home/mobile/sm.jpg";
import speaker from "../assets/assets/home/desktop/speaker.png";
import tab from "../assets/assets/home/tablet/tabSpeaker.jpg";

import SeeProductButton from "./SeeProduct";
import ear from "../assets/assets/home/desktop/ear.jpg";

const SubHome = () => {
  return (
    <div>
      <div className="relative w-full">
        {/* Background image */}
        <img src={bg} alt="Background" className="w-full hidden lg:block " />
        <img
          src={mbg}
          alt="Background"
          className="w-full h-[600px] block lg:hidden"
        />

        <div className="absolute inset-0 flex flex-col lg:flex-row items-center lg:items-end px-4">
          {/* For mobile and tablet: stack vertically. For desktop (lg+): side by side */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-50 px-4 lg:px-20">
            {/* Speaker Image */}
            <img
              src={speaker}
              alt="ZX9 Speaker"
              className="lg:w-[410px] lg:h-[493px] w-[172px] h-[207px] mt-20 mx-auto lg:mx-0"
            />

            {/* Text Section */}
            <div className="mt-6 lg:mt-10 flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="text-white text-4xl lg:text-[56px] font-bold font-Manrope">
                ZX9
                <br />
                SPEAKER
              </h1>

              <p className="mt-4 text-[#f5dfd2] text-[15px] font-medium font-Manrope">
                <span className="block lg:hidden text-center">
                  Upgrade to premium speakers that are
                  <br /> phenomenally built to deliver truly remarkable <br />
                  sound.
                </span>
                <span className="hidden lg:block">
                  Upgrade to premium speakers that are <br />
                  phenomenally built to deliver truly remarkable <br />
                  sound.
                </span>
              </p>

              <SeeProductButton className="bg-custom5 hover:bg-[#4c4c4c] text-white mt-4" />
            </div>
          </div>
        </div>
      </div>

      {/* speaker zx7 */}
      <div className="mt-20">
        <div className="relative">
          {/* Desktop Image */}
          <img src={imgs} alt="desktop" className="w-full hidden lg:block" />

          {/* Tablet Image */}
          <img
            src={tab}
            alt="tablet"
            className="w-full hidden md:block lg:hidden"
          />

          {/* Mobile Image */}
          <img src={sm} alt="mobile" className="w-full block md:hidden" />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-between lg:px-20 px-10">
            <div>
              <h1 className="text-[28px] font-bold font-Manrope text-custom5">
                ZX7 SPEAKER
              </h1>

              {/* Desktop/Tablet Button */}
              <SeeProductButton className="bg-custom5 hover:bg-[#4c4c4c] text-white mt-4 hidden md:block" />

              {/* Mobile Button */}
              <SeeProductButton className="bg-transparent border-2 border-black text-black hover:text-white hover:bg-custom5 mt-4 block md:hidden" />
            </div>
          </div>
        </div>
      </div>
      {/* Earphone */}

      <div className="px-4 mt-20">
        <div className="w-full px-4 md:px-8 lg:px-0 mt-20">
          {/* Desktop & Tablet View */}
          <div className="hidden md:flex items-center justify-center md:gap-6 lg:space-x-18">
            <img
              src={ear}
              alt=""
              className="rounded-lg w-full md:w-1/2  h-[320px]"
            />
            <div className="w-full md:w-1/2 lg:w-[540px] h-[320px] md:[540px] bg-[#f1f1f1f1] rounded-lg flex items-center justify-center">
              <div className="">
                <h1 className="text-[28px] font-bold font-Manrope text-custom5">
                  YX1 EARPHONES
                </h1>
                <SeeProductButton className="bg-custom5 hover:bg-[#4c4c4c] text-white mt-4" />
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden space-y-4">
            <img src={ear} alt="" className="rounded-lg w-full" />
            <div className="w-full bg-[#f1f1f1f1] rounded-lg py-10 flex justify-center">
              <div>
                <h1 className="text-[28px] font-bold font-Manrope text-custom5 text-center">
                  YX1 EARPHONES
                </h1>
                <div className="flex justify-center">
                  <SeeProductButton className="bg-transparent border-2 border-black text-black hover:text-white hover:bg-custom5 mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AUDIO  */}
    </div>
  );
};

export default SubHome;
