import React from "react";
import Image from 'next/image';
import quillogo from "@/public/images/quillogo.png";
import backbencherlogo from "@/public/images/backbencher-studio-logo.png";
import torklogo from "@/public/images/tork.png";
import neuroshade from "@/public/images/nuro.png";
import aublogo from "@/public/images/aub.png";

const experiences = [
    {
        date: "JULY 2023 - PRESENT",
        company: "QUILCRAFT AGENCY",
        description:
            "Quilcraft - A leading software agency specializing in digital excellence and enhancing user experiences",
        icon: <Image src={quillogo} alt="QUILCRAFT AGENCY" />
    },
    {
        date: "JULY 2024 - PRESENT",
        company: "BACKBENCEHER STUDIO",
        description:
            "Backbencher Studio is a digital design agency that is also known as a part of bdCalling IT that specializes in UX design, UI design, product design, website design, branding, and SaaS.",
        icon: <Image src={backbencherlogo} alt="BACKBENCEHER STUDIO" />
    },
    {
        date: "MAY 2024 - JULY 2024",
        company: "The Tork Inc.",
        description:
            "The Tork, where we redefine software essence. Not typical; architects of innovation, elevating standards. Excellence: commitment, not just goal.",
        icon: <Image src={torklogo} alt="TORK" />
    },
    {
        date: "February 2023",
        company: "NEUROSHADE LTD",
        description:
            "Navigating professional support for your child’s special needs? You’re not alone. Help is available from therapists, educators, and specialists. Let’s find the perfect fit for your child’s journey.",
        icon: <Image src={neuroshade} alt="NEUROSHADE LTD" />
    },
    {
        date: "November 2023 - April 2024",
        company: "The Aubtect",
        description:
            "AubTech – where technology meets creativity. Our profile picture symbolizes our commitment to cutting-edge solutions and a futuristic vision. Join us on the journey of transforming possibilities into realities",
        icon: <Image src={aublogo} alt="AUBTECH" />
    },
];

const Experience = () => {
    return (
        <section className="box-border py-8 sm:py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-between items-center w-full mb-8">
                    <div>
                        <p className="text-lg sm:text-xl text-[#DAC5A7] mb-2">JOURNEY TILL NOW</p>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center text-[#DAC5A7]">MY EXPERIENCE</h1>
                </div>
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-11">
                <div className="absolute w-1 bg-[#DAC5A7] h-full left-4 sm:left-1/2 transform sm:-translate-x-1/2"></div>
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                            } items-start sm:items-center w-full mb-8 sm:mb-0 sm:px-11`}
                    >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#d7bea8] rounded-full flex items-center justify-center text-black font-bold text-base sm:text-lg absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 mt-1 sm:mt-0">
                            {index + 1}
                        </div>
                        <div
                            className={`bg-[#181716] text-[#DAC5A7] px-6 sm:px-9 py-6 sm:py-9 border border-solid border-[rgba(218,197,167,0.25)] w-full sm:w-[450px] ml-12 sm:ml-0 ${index % 2 === 0 ? "sm:mr-4" : "sm:ml-4"
                                } flex flex-col justify-center items-start `}
                        >
                            <div className="flex flex-row items-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 mr-2">
                                    <Image src={exp.icon.props.src} alt={exp.company} width={50} height={50} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-sm sm:text-base">{exp.date}</p>
                                    <h3 className="text-base sm:text-lg font-light mt-1">{exp.company}</h3>
                                </div>
                            </div>
                            <p className="mt-2 text-sm sm:text-base font-light">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
