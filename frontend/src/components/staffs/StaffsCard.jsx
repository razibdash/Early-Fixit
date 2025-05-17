import React from "react";

export const StaffsCard = ({ staff }) => {
  return (
    <>
      <div className="bg-white shadow rounded-lg p-4  hover:shadow-lg transition-shadow duration-300">
        <img
          src={staff.img}
          alt={"Staff Image"}
          className="w-40 h-40  object-cover rounded-full mx-auto"
        />
        <h2 className="text-xl text-center font-bold mt-2">{staff.name}</h2>
        <p className="text-gray-600 text-center">{staff.position}</p>
        <p className="text-gray-600 mt-2 text-center">Taka: {staff.salary}</p>
        <div className="flex justify-center mt-2">
          <button className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600">
            Book now
          </button>
          <button className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-600 ml-2">
            view profile
          </button>
        </div>
        <ul className="mt-2">
          <h3 className="text-lg  text-stone-500">Services:</h3>
          {staff.services.map((service, index) => (
            <li key={index} className="text-gray-700 list-disc list-inside">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
