import React from "react";
import { useLocation } from "react-router-dom";

import j from "../../assets/logo.png";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import dhu from "../../assets/dhu.png";

import hu from "../../assets/hu.png";
import shu from "../../assets/shu.png";

const Footer = () => {
  const location = useLocation();
  const isCheckout = location.pathname === "/checkout";

  return (
    <div>
      {!isCheckout && (
        <div className="mt-30">
          {/* Tablet Image */}
          <img
            src={hu}
            alt="tablet"
            className="w-full hidden md:block lg:hidden"
          />

          <img src={shu} alt="mobile" className="w-full block md:hidden" />

          <h1 className="text-[32px] md:text-[40px] font-bold text-center font-Manrope text-custom5 block lg:hidden mt-6">
            BRINGING YOU THE <span className="text-primary">BEST</span> AUDIO
            GEAR
          </h1>

          <p className="text-[15px]  font-medium font-Manrope text-[#919191] text-center mt-4 px-4 block lg:hidden">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>

          <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto px-6">
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
                <br /> experience a wide range of our products. Stop by our
                store to <br />
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
      )}

      {/* foofter */}
      <footer className="bg-custom5 text-white w-full h-auto mt-30 px-6 py-10">
        {/* Tablet and Web: Structured Layout */}
        <div className="hidden md:flex flex-col md:items-start lg:flex-row lg:justify-between pb-8 relative">
          {/* Top Row for Tablet */}
          <div className="w-full flex flex-col md:flex-col md:items-start md:text-left ">
            {/* Logo and Nav on same line for tablet */}
            <div className="w-full flex flex-col md:flex-row md:justify-between ">
              {/* Logo */}
              <img
                src={j}
                alt="Logo"
                className=" h-[25px] w-[143px] mb-6 md:mb-0" // Removed mx-auto
              />

              {/* Nav */}
              <nav className="space-x-6 text-[13px] font-bold font-Manrope  md:text-left">
                <a href="#" className="hover:text-[#D87D4A]">
                  HOME
                </a>
                <a href="#" className="hover:text-[#D87D4A]">
                  HEADPHONES
                </a>
                <a href="#" className="hover:text-[#D87D4A]">
                  SPEAKERS
                </a>
                <a href="#" className="hover:text-[#D87D4A]">
                  EARPHONES
                </a>
              </nav>
            </div>

            {/* Paragraph below Logo (Tablet) */}
            <p className="text-[15px] text-[#474747] font-medium font-Manrope mt-6 md:max-w-2xl">
              Audiophile is an all-in-one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility – we’re open 7 days a week.
            </p>

            {/* Copyright */}

            <div className="w-full flex justify-between items-center md:mt-12 mt-6 px-0 md:px-4 lg:px-0">
              {/* Copyright Text */}
              <p className="text-[15px] text-[#7f7f7f] font-medium font-Manrope">
                Copyright 2021. All Rights Reserved
              </p>

              {/* Social Icons */}
              <div className="flex space-x-6 text-xl lg:-mt-20">
                <a href="#" className="hover:text-[#D87D4A]">
                  <IoLogoFacebook />
                </a>
                <a href="#" className="hover:text-[#D87D4A]">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-[#D87D4A]">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* mobile screen */}
        <div className="block md:hidden">
          <footer className="bg-custom5 text-white w-full py-10 px-6 block md:hidden">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img src={j} alt="Logo" className="h-6" />
            </div>

            {/* Nav */}
            <nav className="flex flex-col items-center space-y-4 font-bold font-Manrope text-[13px]">
              <a href="#" className="hover:text-[#D87D4A]">
                HOME
              </a>
              <a href="#" className="hover:text-[#D87D4A]">
                HEADPHONES
              </a>
              <a href="#" className="hover:text-[#D87D4A]">
                SPEAKERS
              </a>
              <a href="#" className="hover:text-[#D87D4A]">
                EARPHONES
              </a>
            </nav>

            {/* Description Text */}
            <p className="text-[15px] text-[#474747] font-medium font-Manrope text-center mt-6">
              Audiophile is an all-in-one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility – we’re open 7 days a week.
            </p>

            {/* Copyright */}
            <p className="text-[15px] text-[#7f7f7f] font-medium font-Manrope text-center mt-6">
              Copyright 2021. All Rights Reserved
            </p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 text-xl mt-6">
              <a href="#" className="hover:text-[#D87D4A]">
                <IoLogoFacebook />
              </a>
              <a href="#" className="hover:text-[#D87D4A]">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#D87D4A]">
                <FaInstagram />
              </a>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
