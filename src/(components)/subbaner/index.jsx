import React from "react";
import Image from "next/image";
import bdcalling from "@/public/images/bdCalling 1.png";
import backbencher from "@/public/images/backbencher-studio 1.png";
import quilcraft from "@/public/images/Quilcraft1.png";
import aubtech from "@/public/images/Aubtech.png";
import neuro from "@/public/images/neuro1.png";

const imageData = [
  { src: bdcalling, alt: "BD Calling", width: 208, height: 45 },
  { src: backbencher, alt: "Backbencher Studio", width: 208, height: 63 },
  { src: quilcraft, alt: "Quilcraft", width: 177, height: 58 },
  { src: aubtech, alt: "Aubtech", width: 188, height: 61 },
  { src: neuro, alt: "Neuro", width: 135, height: 75 },
];

const Subbaner = () => {
  return (
    <section className="box-border py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-center items-center gap-8 sm:gap-12">
          {imageData.map((image, index) => (
            <div
              key={index}
              className="relative w-1/2 sm:w-1/3 md:w-1/5 h-16 sm:h-20"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subbaner;
