import React from "react";
import { Link } from "react-router-dom";
import data from "../Pages/data.json"; //
import SeeProductButton from "../SeeProduct";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import Shop from "../Shop";

import r3 from "../../assets/r3.png";

const Speakers = () => {
  const speakers = data.filter((item) => item.category === "speakers");

  return (
    <div>
      {/* Banner */}
      <div className="bg-custom5 w-full h-[216px] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white font-Manrope text-center uppercase tracking-widest">
          SPEAKERS
        </h1>
      </div>

      {/* Product Cards */}
      <div className="mt-20 space-y-24">
        {[...speakers].reverse().map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row px-6 items-center gap-10 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={item.image.desktop.replace("./", "/")}
                alt={item.name}
                className="w-full rounded-md"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
              {item.new && (
                <p className="tracking-widest text-sm text-orange-500">
                  NEW PRODUCT
                </p>
              )}
              <h2 className="text-3xl font-bold uppercase">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <Link to={`/product/${item.slug}`}>
                <SeeProductButton className="bg-primary hover:bg-custom3 text-white" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-30 gap-y-24 md:gap-y-0 ">
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
  );
};

export default Speakers;
