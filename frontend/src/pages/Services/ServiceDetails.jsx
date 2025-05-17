import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { StaffsCard } from "../../components/staffs/StaffsCard";

const ServiceDetails = () => {
  const services = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.jpg?s=612x612&w=0&k=20&c=ZMQMHaywhO3UBZ0NA-bYWqlvGx2QJPCTXFlMK6Kch9I=",
      title: "tv services ",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Electrical",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.jpg?s=612x612&w=0&k=20&c=ZMQMHaywhO3UBZ0NA-bYWqlvGx2QJPCTXFlMK6Kch9I=",
      title: "Service 2",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Plumbing",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.jpg?s=612x612&w=0&k=20&c=ZMQMHaywhO3UBZ0NA-bYWqlvGx2QJPCTXFlMK6Kch9I=",
      title: "Service 3",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Carpentry",
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.jpg?s=612x612&w=0&k=20&c=ZMQMHaywhO3UBZ0NA-bYWqlvGx2QJPCTXFlMK6Kch9I=",
      title: "Service 4",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Cleaning",
    },
    {
      id: 5,
      img: "https://media.istockphoto.com/id/511990814/photo/industrial-electric-panel-repair.jpg?s=612x612&w=0&k=20&c=ZMQMHaywhO3UBZ0NA-bYWqlvGx2QJPCTXFlMK6Kch9I=",
      title: "Service 5",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Electrical",
    },
  ];
  const staffs = [
    {
      id: 1,
      name: "John Doe",
      position: "Electrician",
      img: "https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=DUKuRxK9OINHXt3_4m-GxraeoDDlhNuCbA9hp6FotFE=",
      services: ["tv services", "Service 2"],
      salary: 5000,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Plumber",
      img: "https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=DUKuRxK9OINHXt3_4m-GxraeoDDlhNuCbA9hp6FotFE=",
      services: ["Service 1", "Service 3"],
      salary: 6000,
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Carpenter",
      img: "https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=DUKuRxK9OINHXt3_4m-GxraeoDDlhNuCbA9hp6FotFE=",
      services: ["Service 2", "Service 4"],
      salary: 7000,
    },
  ];
  const { id } = useParams();
  const service = services.find((service) => service.id === parseInt(id));
  return (
    <div>
      <Navbar />
      <div className="container mx-auto h-screen">
        <h1 className="xl:text-3xl my-10 mx-10 sm:text-2xl md:text-2xl bg-amber-500 py-2 px-3 rounded uppercase  font-bold mb-4 text-stone-100">
          {service.title}
        </h1>

        <div className="grid  md:grid-cols-2 sm:grid-cols-1 m-10 gap-4">
          <div className="flex flex-col items-left box-border order-last lg:order-first p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="py-4">
              <h2 className="text-2xl font-bold mt-4">{service.title}</h2>
              <p className="text-gray-600 mt-2 text-justify">
                {service.description}
              </p>
            </div>
          </div>

          <div className="p-5">
            <h1 className="text-2xl font-extrabold bg-amber-500 text-stone-50 p-2 rounded-lg">
              Service Provider
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-2 mt-4">
              {/* Filter and map through staffs based on the selected service */}
              {staffs
                .filter((staff) => staff.services.includes(service.title))
                .map((staff) => (
                  <StaffsCard key={staff.id} staff={staff} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
