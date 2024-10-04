import Image from "next/image";
import React from "react";
import heroImage from "@/public/images/hero.png";

const Hero = () => {
  return (
    <div className="bg-black text-beige h-screen flex justify-center items-center">
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src={heroImage}
          alt="hero"
          width={1000}
          height={1000}
          className="object-contain"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center pt-72">
          <div className="w-full px-56">
            <div className="text-2xl z-10 font-normal text-[#DAC5A7] ml-9">
              HELLO !
            </div>
          </div>
          <div className="text-8xl z-10 font-normal text-[#DAC5A7] ">I&apos;M SEEAM AHMOD</div>
          <div className="text-xl z-10 font-italic text-[#DAC5A7]">Professional product designer</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
