"use client";
import { Carousel } from "flowbite-react";
import React from "react";

export default function Causes() {
  return (
    <div className="mt-10 flex flex-col gap-5">
      <h1 className="text-3xl text-center font-bold leading-relaxed">
        Popular Causes that <br /> you should know
      </h1>
      <div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
