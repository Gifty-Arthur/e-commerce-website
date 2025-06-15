import React from "react";
import hero from "../../assets/Bitmap.png";
import header from "../../assets/assets/home/mobile/image-header.jpg";

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

            <button className="mt-2 w-[160px] h-[48px] font-bold font-Manrope text-[13px] bg-primary text-white hover:bg-custom3">
              SEE PRODUCT
            </button>
          </div>

          {/* Image Section */}
          <img src={hero} alt="Hero" className="mt-10  max-w-xs md:max-w-md" />
        </div>
      </div>
      <div className="block md:hidden w-full ">
        <div>
          <img src={header} alt="" />
          <h1>j</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
