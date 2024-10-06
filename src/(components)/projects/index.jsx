import ArrowIcon from "@/partials/arrow";
import React from "react";
import Image from "next/image";
import mockup1 from "@/public/images/Mockup 02 1.png";
import mockup2 from "@/public/images/Mockup 02.png";
import mockup3 from "@/public/images/Mockup 03.png";
import mockup4 from "@/public/images/Mockup 04.png";

const projects = [
  {
    title: "RBOTBUILDER",
    description: "UI/UX",
    src: mockup1,
  },
  {
    title: "VAPEEY",
    description: "UI/UX",
    src: mockup2,
  },
  {
    title: "LUXURY WORLD",
    description: "UI/UX",
    src: mockup3,
  },
  {
    title: "EDUFRIEND",
    description: "UI/UX",
    src: mockup4,
  },
];

const Projects = () => {
  return (
    <section className="box-border py-8 sm:py-12" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#DAC5A7] mb-4 sm:mb-0">MY PROJECTS</h1>
          <div className="flex flex-row items-center gap-2">
            <ArrowIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#DAC5A7]">
              SEE ALL PROJECTS
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative border border-solid border-[rgba(218,197,167,0.25)] bg-[rgba(218,197,167,0.05)] flex flex-col justify-evenly items-start aspect-[3/4] sm:aspect-[4/5]"
            >
              <div className="w-full h-full relative">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }} // Replace objectFit prop with inline style
                  className="rounded"
                />

                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 rounded-b flex flex-row justify-between items-center px-3 sm:px-6 py-2 border border-[rgba(218,197,167,0.25)] bg-[rgba(218,197,167,0.05)] backdrop-blur-lg">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#DAC5A7]">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-[#DAC5A7]">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
