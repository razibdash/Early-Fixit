import React from "react";

export const SliderHero = () => {
  return (
    <>
      <div className="bg-[url(https://images.pexels.com/photos/2635595/pexels-photo-2635595.jpeg?auto=compress&cs=tinysrgb&w=1600)] bg-cover bg-center h-[600px]  text-white flex flex-col  justify-center items-center ">
        <div className="text-center  p-4 rounded-lg shadow-lg backdrop-blur-sm bg-white/30">
          <h2 className=" sm:text-3xl md:text-3xl font-extrabold">
            Hero Slider
          </h2>
          <p className="text-white-600">
            This is a simple hero slider component built with React.lorem100
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </p>
          <input
            type="text"
            placeholder="search"
            className="mt-4 p-2 rounded bg-amber-50 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent w-full max-w-md"
          />
        </div>
      </div>
    </>
  );
};
