import React from "react";

import dhu from "../../assets/dhu.png";

import hu from "../../assets/hu.png";
import shu from "../../assets/shu.png";

const Footer = () => {
  return (
    <div>
      <div className="mt-30">
        {/* Tablet Image */}
        <img
          src={hu}
          alt="tablet"
          className="w-full hidden md:block lg:hidden"
        />

        {/* Mobile Image */}
        <img src={shu} alt="mobile" className="w-full block md:hidden" />

        {/* Mobile & Tablet Heading */}
        <h1 className="text-[32px] md:text-[40px] font-bold text-center font-Manrope text-custom5 block lg:hidden mt-6">
          BRINGING YOU THE <span className="text-primary">BEST</span> AUDIO GEAR
        </h1>

        {/* Mobile & Tablet Paragraph */}
        <p className="text-[15px]  font-medium font-Manrope text-[#919191] text-center mt-4 px-4 block lg:hidden">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>

        {/* Web (Desktop) Layout */}
        <div className="hidden lg:flex items-center justify-between px-10">
          <div>
            <h1 className="text-[40px] font-bold font-Manrope text-custom5">
              BRINGING YOU THE
              <br /> <span className="text-primary">BEST</span> AUDIO GEAR
            </h1>
            <p className="text-[15px] font-medium font-Manrope text-[#919191] mt-4">
              Located at the heart of New York City, Audiophile is the premier
              <br />
              store for high end headphones, earphones, speakers, and audio
              <br />
              accessories. We have a large showroom and luxury <br />
              demonstration rooms available for you to browse and
              <br /> experience a wide range of our products. Stop by our store
              to <br />
              meet some of the fantastic people who make Audiophile the
              <br /> best place to buy your portable audio equipment.
            </p>
          </div>
          <img
            src={dhu}
            alt="desktop"
            className="hidden lg:block w-[540px] h-[588px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
