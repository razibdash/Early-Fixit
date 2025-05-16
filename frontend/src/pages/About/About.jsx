import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>About</div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-center max-w-2xl">
          Welcome to our website! We are dedicated to providing you with the
          best service possible. Our team is committed to ensuring your
          satisfaction and delivering high-quality results.
        </p>
      </div>
    </div>
  );
};

export default About;
