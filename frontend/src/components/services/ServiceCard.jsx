import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <Link
      to={`/service/${service.id}`}
      className="box-border p-4 m-2 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-32 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-2">{service.title}</h2>
      <p className="text-gray-600">{service.description}</p>
    </Link>
  );
};

export default ServiceCard;
