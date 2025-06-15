import React from "react";
import bg from "../assets/bg.png";
import mbg from "../assets/mbg.png";
import imgs from "../assets/assets/home/desktop/imgs.jpg";
import sm from "../assets/assets/home/mobile/sm.jpg";
import speaker from "../assets/assets/home/desktop/speaker.png";
import tab from "../assets/assets/home/tablet/tabSpeaker.jpg";
import SeeProductButton from "./SeeProduct";

const SubHome = () => {
  return (
    <div>
      <div className="relative w-full">
        {/* Background image */}
        <img src={bg} alt="Background" className="w-full hidden md:block " />
        <img
          src={mbg}
          alt="Background"
          className="w-full h-[600px] block  md:hidden "
        />

        <div className="absolute inset-0 flex flex-col items-center px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-50 px-4 md:px-20">
            <img
              src={speaker}
              alt="ZX9 Speaker"
              className="md:w-[410px] md:h-[493px] w-[172px] h-[207px] md:mt-38 mt-20 mx-auto md:mx-0"
            />

            <div className="mt-6 md:mt-10 flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-white text-4xl lg:text-[56px] font-bold font-Manrope">
                ZX9
                <br />
                SPEAKER
              </h1>

              <p className="mt-4 text-[#f5dfd2] text-[15px] font-medium font-Manrope">
                <span className="block md:hidden">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </span>
                <span className="hidden md:block">
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
    </div>
  );
};

export default SubHome;
