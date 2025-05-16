import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Service() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-lg text-center max-w-2xl">
          Welcome to our services page! We offer a wide range of services to
          meet your needs. Our team is dedicated to providing you with the best
          possible experience.
        </p>
      </div>
    </div>
  );
}

export default Service;
