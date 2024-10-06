"use client";

import ArrowIcon from "@/partials/arrow";
import React, { useState } from "react";

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);

    const services = [
        { title: "PRODUCT DESIGN", description: "Creating innovative product designs that bridge user needs with business goals for a seamless experience." },
        { title: "UI DESIGN", description: "Crafting visually stunning and intuitive user interfaces that enhance engagement and provide seamless digital experiences. Every element is designed to captivate and simplify user interaction" },
        { title: "UX SOLUTION", description: "Delivering intuitive UX solutions that prioritize user satisfaction, ensuring every interaction is seamless and efficient." },
        { title: "UX RESEARCH", description: "Conducting deep, data-driven UX research to understand user behaviors and needs. We create experiences that are both user-friendly and efficient, ensuring every interaction is optimized for success." },
    ];

    return (
        <section className="box-border py-8 sm:py-12" id="service">
            <div className="container mx-auto px-4">
                <div
                    className="flex flex-row justify-center items-center space-x-2 mb-6 sm:mb-8"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <ArrowIcon direction={isHovered ? "down" : "right"} />
                    <h1 className="text-2xl sm:text-3xl font-bold">My Services</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border border-solid border-[rgba(218,197,167,0.25)] bg-[rgba(218,197,167,0.05)] flex flex-col justify-between p-6 sm:p-9 h-full"
                        >
                            <div>
                                <h2 className="text-xl sm:text-2xl text-[#DAC5A7] font-semibold pb-2">{service.title}</h2>
                                <p className="text-base sm:text-lg font-light text-[#DAC5A7]">{service.description}</p>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <ArrowIcon className="text-[#DAC5A7] w-6 h-6 sm:w-8 sm:h-8" />
                                <button className="text-[#DAC5A7] hover:underline ml-2 text-base sm:text-lg font-light">LET&apos;S TALK</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
