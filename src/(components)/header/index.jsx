"use client"

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/images/logo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="text-black p-4 sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-center items-center">
        <div className="bg-[#181716]/70 backdrop-filter backdrop-blur-md border border-[#DAC5A740] px-5 py-4 w-full md:w-auto ">
          <div className="flex justify-between items-center md:hidden">
            {/* Logo for mobile */}
            <Image priority src={logo} alt="logo" className="w-10 h-10" />
            {/* <div className=" flex flex-row justify-center items-center gap-4">
              <div className="text-[18px] text-[#DAC5A7] ">
                <p>SEEAM </p>
              </div>
              <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=hello@seeamahmod.info" className="bg-[#DAC5A7] text-black px-4 py-2 hover:bg-opacity-80 transition-all text-sm inline-block">
                LET&apos;S TALK
              </a>

            </div> */}

            {/* Mobile Menu Icon */}
            <button onClick={toggleMenu} className="text-[#DAC5A7] focus:outline-none">
              {isOpen ? <FiX size={30} /> : <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 6H15.5C15.6326 6 15.7598 5.94732 15.8536 5.85355C15.9473 5.75979 16 5.63261 16 5.5C16 5.36739 15.9473 5.24021 15.8536 5.14645C15.7598 5.05268 15.6326 5 15.5 5H2.5C2.36739 5 2.24021 5.05268 2.14645 5.14645C2.05268 5.24021 2 5.36739 2 5.5C2 5.63261 2.05268 5.75979 2.14645 5.85355C2.24021 5.94732 2.36739 6 2.5 6ZM22.5 12H2.5C2.36739 12 2.24021 12.0527 2.14645 12.1464C2.05268 12.2402 2 12.3674 2 12.5C2 12.6326 2.05268 12.7598 2.14645 12.8536C2.24021 12.9473 2.36739 13 2.5 13H22.5C22.6326 13 22.7598 12.9473 22.8536 12.8536C22.9473 12.7598 23 12.6326 23 12.5C23 12.3674 22.9473 12.2402 22.8536 12.1464C22.7598 12.0527 22.6326 12 22.5 12ZM22.5 19H9.5C9.36739 19 9.24021 19.0527 9.14645 19.1464C9.05268 19.2402 9 19.3674 9 19.5C9 19.6326 9.05268 19.7598 9.14645 19.8536C9.24021 19.9473 9.36739 20 9.5 20H22.5C22.6326 20 22.7598 19.9473 22.8536 19.8536C22.9473 19.7598 23 19.6326 23 19.5C23 19.3674 22.9473 19.2402 22.8536 19.1464C22.7598 19.0527 22.6326 19 22.5 19Z" fill="#DAC5A7"/>
</svg>
}
              
            </button>
          </div>

          {/* Links (Desktop) */}
          <div className="hidden md:flex flex-row space-y-4 md:space-y-0 md:space-x-8 text-[16px] text-[#DAC5A7] items-center justify-start">
            <Image priority src={logo} alt="logo" className="w-auto h-auto m-1" />
            <a href="#service" onClick={() => scrollToSection('service')} className="hover:text-white m-4 cursor-pointer">
              SERVICE
            </a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className="hover:text-white m-4 cursor-pointer">
              PROJECTS
            </a>
            <a href="#prosection" onClick={() => scrollToSection('prosection')} className="hover:text-white m-4 cursor-pointer">
              ABOUT
            </a>

            {/* Button */}
            <div className="m-4">
              <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=hello@seeamahmod.info" className="bg-[#DAC5A7] text-black px-4 py-2 hover:bg-opacity-80 transition-all text-sm inline-block">
                LET&apos;S TALK
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden flex flex-col items-center text-[#DAC5A7] w-full space-y-4 py-4 mt-4">
              <a href="#service" onClick={() => scrollToSection('service')} className="hover:text-white">SERVICE</a>
              <a href="#projects" onClick={() => scrollToSection('projects')} className="hover:text-white">PROJECTS</a>
              <a href="#about" onClick={() => scrollToSection('about')} className="hover:text-white">ABOUT</a>
              <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=hello@seeamahmod.info" className="bg-[#DAC5A7] text-black px-4 py-2 hover:bg-opacity-80 transition-all text-[16px]">
                LET&apos;S TALK
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
