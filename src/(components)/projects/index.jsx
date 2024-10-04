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
    <section className="box-border py-12" id="projects">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center w-full mb-8">
          <h1 className="text-[36px] font-bold text-[#DAC5A7]">MY PROJECTS</h1>
          <div className="flex flex-row items-center gap-2">
            <ArrowIcon />
            <div className="text-[24px] font-bold text-[#DAC5A7]">
              SEE ALL PROJECTS
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-9 py-9">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative border border-solid border-[rgba(218,197,167,0.25)] bg-[rgba(218,197,167,0.05)] flex w-full md:w-[47%] h-[584px] flex-col justify-evenly items-start"
            >
              <div className="w-full h-full relative">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }} // Replace objectFit prop with inline style
                  className="rounded"
                />

                <div className="absolute bottom-4 left-4 right-4 rounded-b flex flex-row justify-between items-center px-6 py-2 border border-[rgba(218,197,167,0.25)] bg-[rgba(218,197,167,0.05)] backdrop-blur-lg">
                  <h2 className="text-2xl font-semibold text-[#DAC5A7]">
                    {project.title}
                  </h2>
                  <p className="text-lg text-[#DAC5A7]">{project.description}</p>
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
