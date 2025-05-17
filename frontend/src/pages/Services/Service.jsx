import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import ServiceCard from "../../components/services/ServiceCard";

function Service() {
  const services = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.jpg?s=612x612&w=0&k=20&c=ZMQMHaywhO3UBZ0NA-bYWqlvGx2QJPCTXFlMK6Kch9I=",
      title: "Service 1",
      description: "Description of Service 1",
      category: "Electrical",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.jpg?s=612x612&w=0&k=20&c=ZMQMHaywhO3UBZ0NA-bYWqlvGx2QJPCTXFlMK6Kch9I=",
      title: "Service 2",
      description: "Description of Service 2",
      category: "Plumbing",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.jpg?s=612x612&w=0&k=20&c=ZMQMHaywhO3UBZ0NA-bYWqlvGx2QJPCTXFlMK6Kch9I=",
      title: "Service 3",
      description: "Description of Service 3",
      category: "Carpentry",
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.jpg?s=612x612&w=0&k=20&c=ZMQMHaywhO3UBZ0NA-bYWqlvGx2QJPCTXFlMK6Kch9I=",
      title: "Service 4",
      description: "Description of Service 4",
      category: "Cleaning",
    },
    {
      id: 5,
      img: "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.jpg?s=612x612&w=0&k=20&c=ZMQMHaywhO3UBZ0NA-bYWqlvGx2QJPCTXFlMK6Kch9I=",
      title: "Service 5",
      description: "Description of Service 5",
      category: "Electrical",
    },
  ];
  // Sample data for services
  const categories = [
    { id: 1, name: "Electrical" },
    { id: 2, name: "Plumbing" },
    { id: 3, name: "Carpentry" },
    { id: 4, name: "Cleaning" },
    { id: 5, name: "Gardening" },
  ];
  return (
    <div>
      <Navbar />
      <div className="container mx-auto h-screen">
        <h1 className="xl:text-4xl sm:text-2xl md:text-2xl m-5 font-bold mb-4 text-stone-600">
          All Services
        </h1>
        <div>
          <div className="">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white  rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl m-5 bg-amber-500 px-2 py-1 rounded text-stone-100 font-semibold mt-2">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
                  {services
                    .filter((service) => service.category === category.name)
                    .map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
              </div>
            ))}
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
