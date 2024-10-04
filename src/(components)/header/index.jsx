"use client"

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/images/logo.svg";
import { FiMenu, FiX } from "react-icons/fi";
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
            
            {/* Mobile Menu Icon */}
            <button onClick={toggleMenu} className="text-[#DAC5A7] focus:outline-none">
              {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
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
