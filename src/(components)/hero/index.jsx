import Image from "next/image";
import React from "react";
import heroImage from "@/public/images/hero.png";

const Hero = () => {
  return (
    <div className="bg-black text-beige py-8 sm:py-12 md:py-16 flex justify-center items-center">
      <div className="relative w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <Image
          src={heroImage}
          alt="hero"
          width={1000}
          height={1000}
          className="object-contain max-w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-2 sm:pb-12 md:pb-16">
          <div className="w-full max-w-4xl">
            <div className="text-xl sm:text-2xl font-normal text-[#DAC5A7] mb-2 sm:mb-4">
              HELLO !
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-normal text-[#DAC5A7] mb-2 sm:mb-4">
              I&apos;M SEEAM AHMOD
            </h1>
            <div className="text-lg sm:text-xl font-italic text-[#DAC5A7]">
              Professional product designer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
