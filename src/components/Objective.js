import { Droplets, GraduationCap, HandPlatter, HeartPulse } from "lucide-react";
import React from "react";

export default function Objective() {
  return (
    <div className="text-center flex flex-col gap-5 m-3">
      <h2 className="text-green-600 text-lg ">What we Do?</h2>
      <h1 className="text-3xl font-bold leading-relaxed">
        We Are In A Mission To Help <br />
        The Helpless
      </h1>
      <div className="mt-10 flex flex-wrap gap-5 justify-center px-20">
        <div className="flex flex-col items-center justify-evenly  border-t-8 border-green-500 rounded-r-lg shadow-lg  max-w-[15rem] h-[20rem] hover:scale-110 transition-all hover:bg-green-300 ">
          <GraduationCap size={"80px"} />
          <p>
            Lor em ipsum dolor amet cosectetur adipiscing, sed do eiusmo em
            ipsum dolor amet cosectetur adipiscing, sed do eiusmod.
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly  border-t-8 border-green-500 rounded-r-lg shadow-lg  max-w-[15rem] h-[20rem] hover:scale-110 transition-all hover:bg-green-300 ">
          <HandPlatter className="text-xl" size={"80px"} />
          <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
        </div>
        <div className="flex flex-col items-center justify-evenly  border-t-8 border-green-500 rounded-r-lg shadow-lg  max-w-[15rem] h-[20rem] hover:scale-110 transition-all hover:bg-green-300 ">
          <HeartPulse size={"80px"} />
          <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
        </div>
        <div className="flex flex-col items-center justify-evenly  border-t-8 border-green-500 rounded-r-lg shadow-lg  max-w-[15rem] h-[20rem] hover:scale-110 transition-all hover:bg-green-300 ">
          <Droplets size={"80px"} />
          <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
        </div>
      </div>
    </div>
  );
}
