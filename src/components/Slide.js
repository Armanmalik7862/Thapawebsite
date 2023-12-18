// Slide.js
import Image from "next/image";
import React from "react";

const Slide = ({ img, title, mainTitle, price }) => {
  return (
    <div className="w-full h-screen sm:max-h-[400px] relative overflow-hidden">
      <div className="absolute left-4 top-[25%] md:left-8 max-w-full md:max-w-[350px] md:top-[50%] -translate-y-1/2 space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-accent text-[20px] md:text-[28px]">{title}</h3>
        <h2 className="text-blackish text-[20px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>
        <h3 className="text-[15px] md:text-[24px] text-gray-500">
          starting at
          <b className="text-[15px] md:text-[24px] lg:text-[30px]">{price}</b>
          .00
        </h3>
        <div className="bg-accent text-black text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
      </div>

      <Image
        className="rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={1200}
        height={1200}
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </div>
  );
};

export default Slide;
