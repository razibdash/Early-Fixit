import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { SliderHero } from "../../components/Slider/SliderHero";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200  h-full ">
        <SliderHero />
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4">This is the home page content.</p>
      </div>
    </>
  );
}

export default Home;
