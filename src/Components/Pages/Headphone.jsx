import React from "react";
import { Link } from "react-router-dom";
import data from "../Pages/data.json";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import Shop from "../Shop";
import SeeProductButton from "../SeeProduct";
import { useNavigate } from "react-router-dom";

import r3 from "../../assets/r3.png";

const Headphone = () => {
  const navigate = useNavigate();

  // Filter only headphones category
  const headphones = data.filter(
    (product) => product.category === "headphones"
  );

  return (
    <div className="">
      {/* Page Title */}
      <div className="bg-custom5 w-full h-[216px] flex items-center justify-center">
        <h1 className="text-3xl font-Manrope font-bold text-white text-center uppercase tracking-widest">
          HEADPHONES
        </h1>
      </div>

      {/* Loop through Headphones */}
      <div className="mt-20">
        {[...headphones].reverse().map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row px-6 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } items-center gap-10 ${index !== 0 ? "mt-20" : ""}`}
          >
            {/* Product Image (clickable) */}
            <Link to={`/product/${item.slug}`} className="w-full lg:w-1/2">
              <img
                src={item.image.desktop.replace("./", "/")}
                alt={item.name}
                className="w-full"
              />
            </Link>

            {/* Product Info */}
            <div className="w-[540px] lg:w-1/2 text-center lg:text-left space-y-4">
              {item.new && (
                <p className="tracking-widest text-sm text-orange-500">
                  NEW PRODUCT
                </p>
              )}
              <h2 className="text-2xl font-bold uppercase">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <SeeProductButton
                onClick={() => navigate(`/product/${item.slug}`)}
                className="bg-primary hover:bg-custom3 text-white"
              />
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

export default Headphone;
