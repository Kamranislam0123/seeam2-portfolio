import React from "react";
import Image from "next/image";
import bdcalling from "@/public/images/bdCalling 1.png";
import backbencher from "@/public/images/backbencher-studio 1.png";
import quilcraft from "@/public/images/Quilcraft1.png";
import aubtech from "@/public/images/Aubtech.png";
import neuro from "@/public/images/neuro1.png";

const imageData = [
  { src: bdcalling, alt: "BD Calling", width: "207.97px", height: "45.06px" },
  { src: backbencher, alt: "Backbencher Studio", width: "207.97px", height: "62.65px" },
  { src: quilcraft, alt: "Quilcraft", width: "176.77px", height: "58.06px" },
  { src: aubtech, alt: "Aubtech", width: "188.21px", height: "60.78px" },
  { src: neuro, alt: "Neuro", width: "135.18px", height: "74.52px" },
];

const Subbaner = () => {
  return (
    <section className="box-border py-12">
      <div className="container mx-auto">
        <div className="flex flex-row justify-center items-center py-8 space-x-12">
          {imageData.map((image, index) => (
            <div
              key={index}
              className="relative"
              style={{ width: image.width, height: image.height }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
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
