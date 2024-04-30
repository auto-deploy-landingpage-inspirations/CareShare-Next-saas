import Causes from "@/components/Causes";
import Hero from "@/components/Hero";
import Objective from "@/components/Objective";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Objective />
      <Causes />
    </div>
  );
}
