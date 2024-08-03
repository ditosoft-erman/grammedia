import React from "react";
import "./about.css";
export const Offers: React.FC = () => {
  return (
    <div className="offer-intro grid grid-cols-1 lg:grid-cols-2 bg-black">
      <div className="mx-auto flex flex-col text-center justify-center tracking-wide text-white p-24">
        <h1 className="text-4xl font-bold p-4">
          What <span className="gradient-text">Gram Media</span> offers?
        </h1>

        <p className="font-text xxxs xxxs:w-9/12 xxs:w-full  xl:text-xl lg:w-3/4 text-justify mx-auto">
          At Gram Media, unlock the power of captivating storytelling through
          expert video editing. Transforming concepts into compelling visual
          narratives is our specialty. Whether you're a brand looking to dazzle
          or a creator aiming to inspire, your vision becomes a vivid reality
          with our unmatched editing prowess.
        </p>
      </div>
      <div className="card bg-black">
        <div className="cards flex flex-wrap max-sm:flex-col max-sm:justify-center max-sm:items-center   max-tablet:flex-wrap md:w-[28rem] gap-8 m-32 xl:m-20">
          <div className="w-52 h-52 bg-viral-editing bg-cover bg-white px-16 rounded-md flex justify-center items-center"></div>
          <div className="w-52 h-52 bg-sculpting bg-cover bg-white rounded-md px-16 flex justify-center items-center"></div>
          <div className="w-52 h-52 bg-partnership bg-cover bg-white rounded-md px-16 flex justify-center items-center"></div>
          <div className="w-52 h-52 bg-specific bg-cover bg-white rounded-md px-16 flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
};
export default Offers;
