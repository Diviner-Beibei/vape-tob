"use client";

import { useState } from "react";
import Image from "next/image";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import SliderButton from "@/components/hero/slider-button";

import hero1 from "/public/images/hero1.avif";
import hero2 from "/public/images/hero2.avif";
import hero3 from "/public/images/hero3.avif";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return (
    <section className="h-dvh group">
      <div className="relative h-full">
        <Image
          src={images[currentIndex]}
          alt="hero 1"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
          className="h-full"
        />
        <div className="hidden group-hover:flex justify-between w-full px-8 absolute left-0 top-1/2 transform -translate-y-1/2">
          <SliderButton icon={faAngleLeft} handleClick={handlePrev} />
          <SliderButton icon={faAngleRight} handleClick={handleNext} />
        </div>
        <div className="w-full absolute bottom-3 left-1/2 -translate-x-1/2">
          <div className="flex justify-center">
            {images.map((_, index) => (
              <div
                key={index}
                className={` w-2 h-2 rounded-full mx-1 transition-all duration-[360ms] ease-in-out ${
                  index === currentIndex ? "bg-[#7F8080]" : "bg-[#E6E5E6]"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
