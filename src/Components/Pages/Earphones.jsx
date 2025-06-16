import React from "react";
import { Link } from "react-router-dom";
import data from "../Pages/data.json";
import SeeProductButton from "../SeeProduct";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import Shop from "../Shop";
import { useNavigate } from "react-router-dom";

import r3 from "../../assets/r3.png";

const Earphones = () => {
  const navigate = useNavigate();

  const earphones = data.filter((item) => item.category === "earphones");

  return (
    <div>
      {/* Banner */}
      <div className="bg-custom5 w-full h-[216px] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white font-Manrope text-center uppercase tracking-widest">
          Earphones
        </h1>
      </div>

      {/* Main Earphone Card */}
      <div className="mt-20 px-6">
        {earphones.map((item) => (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto"
          >
            {/* Product Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={item.image.desktop.replace("./", "/")}
                alt={item.name}
                className="w-full rounded-md"
              />
            </div>

            {/* Product Text */}
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
      <div className="bg-[#fafafa] p-8 px-4">
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
    </div>
  );
};

export default Earphones;
