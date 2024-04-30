import { Menu } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className=" shadow-md py-4 ">
      <div className="flex justify-between px-5 items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-green-700 px-2 py-1 rounded-md text-white ">
          CareShare
        </h1>
        <div className="hidden md:inline">
          <div className="flex gap-5">
            <h2 className="text-gray-800 font-semibold hover:scale-110 hover:bg-green-500 transition-all">
              Home
            </h2>
            <h2 className="text-gray-800 font-semibold hover:scale-110 hover:bg-green-500 transition-all">
              About
            </h2>
            <h2 className="text-gray-800 font-semibold hover:scale-110 hover:bg-green-500 transition-all">
              Causes
            </h2>
            <h2 className="text-gray-800 font-semibold hover:scale-110 hover:bg-green-500 transition-all">
              Blogs
            </h2>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button className="bg-green-500 text-white  font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
            Sign In
          </button>
          <Menu className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
