import Objective from "@/components/Objective";
import { User } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="m-5 mt-5 flex flex-col gap-5">
      <div className="flex gap-3 flex-col max-w-3xl justify-center items-center mx-auto">
        <h1 className="text-xl font-bold">
          About <span className="text-green-500">CareShare</span>
        </h1>
        <p className="text-md text-gray-500">
          Welcome to CareShare, where every act of kindness creates a ripple
          effect of change. At CareShare, we believe that every individual
          deserves access to basic necessities such as education, medical care,
          clean water, and food. Our mission is to provide support and
          assistance to those in need, empowering them to lead healthier,
          happier lives.
        </p>
        <p className="text-md text-gray-500">
          CareShare is dedicated to making a positive impact on the lives of
          individuals and communities in need. Through our various programs and
          initiatives, we strive to address key areas of concern, including:
        </p>
      </div>
      <div className="flex gap-3 flex-col  justify-center items-center mx-auto">
        <Objective />
      </div>
      <div className="flex gap-3 flex-col max-w-3xl justify-center items-center mx-auto">
        <p>
          <span className="text-green-500">
            Are you passionate about making a difference in the world?
          </span>
          Do you want to be part of a team dedicated to helping others and
          creating positive change?
        </p>
        <p>
          {" "}
          Consider{" "}
          <span className="text-green-500 font-bold">
            volunteering with CareShare!
          </span>{" "}
          As a volunteer, you'll have the opportunity to directly impact the
          lives of those in need.
        </p>
        <p>
          Whether you're interested in organizing fundraising events,
          participating in community outreach programs, or lending your skills
          to support our initiatives, there's a place for you at CareShare. Join
          our team of dedicated volunteers and help us spread compassion, hope,
          and support to individuals and communities around the world. Together,
          we can make a difference. Get involved with CareShare today and be a
          part of something meaningful.
        </p>
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
    </div>
  );
}
