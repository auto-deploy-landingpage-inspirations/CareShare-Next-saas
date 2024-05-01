"use client";
import { Carousel } from "flowbite-react";
import React from "react";
import Image from "next/image";
import { Instagram, InstagramIcon, Twitter, User } from "lucide-react";

export default function Causes() {
  return (
    <>
      <div className="mt-10 flex flex-col gap-5">
        <h1 className="text-3xl text-center font-bold leading-relaxed">
          Popular Causes that <br /> you should know
        </h1>
        <div>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <Image
                src="/slid3.png"
                alt="img-banner"
                width={800}
                height={400}
              />
              <Image
                src="/support.png"
                alt="img-banner"
                width={800}
                height={400}
              />
              <Image
                src="/slid1.png"
                alt="img-banner"
                width={800}
                height={400}
              />
              <Image
                src="/slid2.png"
                alt="img-banner"
                width={800}
                height={400}
              />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-10 text-center justify-center">
        <h1 className="text-3xl font-bold leading-relaxed">
          Meet Our Volunteers
        </h1>
        <div className="flex flex-wrap mx-2 gap-5 items-center justify-center">
          <div
            className="h-[18rem] max-w-64 flex flex-col gap-3 border-b-8 border-green-600 rounded-r-md p-2 hover:bg-green-300
          hover:scale-110 transition-all bg-slate-200"
          >
            <Image src="/v1.jpg" alt="volunteer" width={300} height={300} />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Abhimanyu veer</h3>
              <p className="text-sm text-gray-700">Chief of Operations</p>
              <div className="flex justify-center items-center gap-4 pt-2">
                <Twitter /> <InstagramIcon />
              </div>
            </div>
          </div>
          <div
            className="h-[18rem] max-w-64 flex flex-col gap-3 border-b-8 border-green-600 rounded-r-md p-2 hover:bg-green-300
          hover:scale-110 transition-all bg-slate-200"
          >
            <Image
              src="/v3.jpg"
              alt="volunteer"
              width={300}
              height={100}
              className="overflow-hidden"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Skylar White</h3>
              <p className="text-sm text-gray-700">Volunteer</p>
              <div className="flex justify-center items-center gap-4 pt-2">
                <Twitter /> <InstagramIcon />
              </div>
            </div>
          </div>
          <div
            className="h-[18rem] max-w-64 flex flex-col gap-3 border-b-8 border-green-600 rounded-r-md p-2 hover:bg-green-300
          hover:scale-110 transition-all bg-slate-200"
          >
            <Image src="/v3.jpg" alt="volunteer" width={300} height={300} />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Jesse Pinkman</h3>
              <p className="text-sm text-gray-700">Volunteer</p>
              <div className="flex justify-center items-center gap-4 pt-2">
                <Twitter /> <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10 ">
        <div className="bg-gradient-to-tr from-green-400 to-green-800 p-10 flex flex-col md:flex-row items-center justify-between rounded-lg bg-opacity-85">
          <h1 className="text-2xl font-bold leading-relaxed text-white">
            Lets Change The World <br />
            With Humanity
          </h1>
          <button className="flex gap-5 items-center bg-white px-4 py-2 rounded-lg">
            <User className="text-blue-600" />
            <h3 className="text-sm font-bold">Become a member Today</h3>
          </button>
        </div>
      </div>
    </>
  );
}
