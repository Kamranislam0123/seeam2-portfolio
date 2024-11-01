"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import heroImage from "@/public/images/hero.png";
import gsap from "gsap";

const Hero = () => {
  // Add refs for the elements we want to animate
  const imageRef = useRef(null);
  const helloRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Initial setup - hide elements
    gsap.set([helloRef.current, nameRef.current, titleRef.current], {
      opacity: 0,
      y: 50
    });
    
    gsap.set(imageRef.current, {
      opacity: 0,
      scale: 1.1
    });

    // Create animation timeline
    const tl = gsap.timeline();

    tl.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    })
      .to(helloRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4");
  }, []);

  return (
    <div className="bg-black text-beige py-8 sm:py-12 md:py-16 flex justify-center items-center">
      <div className="relative w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <Image
          ref={imageRef}
          src={heroImage}
          alt="hero"
          width={1000}
          height={1000}
          loading="lazy"
          className="object-contain max-w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-2 sm:pb-12 md:pb-16">
          <div className="w-full max-w-4xl">
            <div ref={helloRef} className="text-xl text-left pl-8 sm:text-2xl font-normal text-[#DAC5A7] mb-2 sm:mb-4">
              HELLO !
            </div>
            <h1 ref={nameRef} className="text-4xl sm:text-6xl lg:text-8xl font-solenoidal font-normal text-[#DAC5A7] mb-2 sm:mb-4">
              I&apos;M SEEAM AHMOD
            </h1>
            <div ref={titleRef} className="text-lg sm:text-xl font-italic text-[#DAC5A7]">
              Professional product designer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
