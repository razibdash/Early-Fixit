import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

function Service() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto h-screen">
        <h1 className="text-4xl m-5 font-bold mb-4 text-stone-600">
          All Services
        </h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
            <NavLink
              to="/service/1"
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img src="https://via.placeholder.com/150" alt="Service 1" />
              <h2 className="text-xl font-bold mb-2">Service 1</h2>
              <p className="text-gray-700">
                Description of Service 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </NavLink>
            <NavLink
              to="/service/2"
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img src="https://via.placeholder.com/150" alt="Service 2" />
              <h2 className="text-xl font-bold mb-2">Service 2</h2>
              <p className="text-gray-700">
                Description of Service 2. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </NavLink>
            <NavLink
              to="/service/3"
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img src="https://via.placeholder.com/150" alt="Service 3" />
              <h2 className="text-xl font-bold mb-2">Service 3</h2>
              <p className="text-gray-700">
                Description of Service 3. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </NavLink>
            <NavLink
              to="/service/4"
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img src="https://via.placeholder.com/150" alt="Service 4" />
              <h2 className="text-xl font-bold mb-2">Service 4</h2>
              <p className="text-gray-700">
                Description of Service 4. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </NavLink>
            <NavLink
              to="/service/5"
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img src="https://via.placeholder.com/150" alt="Service 5" />
              <h2 className="text-xl font-bold mb-2">Service 5</h2>
              <p className="text-gray-700">
                Description of Service 5. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </NavLink>
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-700">
              We are committed to providing the best services to our clients.
              Our team of experts is dedicated to ensuring your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
