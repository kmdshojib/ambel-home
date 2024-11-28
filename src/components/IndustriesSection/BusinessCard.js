import React, { useState } from "react";
import link from "../../../assets/link.svg";
import { data } from "../../constants/bussinessCardData";

const BusinessCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0); // Set initial hovered index to 0 to activate the first card

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set hovered card index
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hovered card index to null when mouse leaves
  };

  return (
    <div className="flex space-x-4 overflow-x-auto my-10 px-4">
      {data.map((item, index) => (
        <div
          key={item.id}
          onMouseEnter={() => handleMouseEnter(index)} // Handle hover
          onMouseLeave={handleMouseLeave} // Reset hover
          className={`relative rounded-lg overflow-hidden shadow-md transition-all duration-300 h-60 ${hoveredIndex === index
            ? "w-72 md:w-[50rem]" // Expanded width on hover
            : "w-40 md:w-48" // Default width
            }`}
        >
          {hoveredIndex === index ? (
            <div className="flex flex-col md:flex-row w-full h-full bg-[#25646C]">
              {/* Details Section */}
              <div className="md:w-8/12 bg-[#25646C] text-white p-4 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-2">
                  <span className="bg-white text-black text-xs font-semibold uppercase px-2 py-1 rounded-full">
                    {item.title}
                  </span>
                </h3>
                <p className="text-sm">
                  {item.description.length > 100
                    ? `${item.description.slice(0, 100)}...`
                    : item.description}
                </p>
                <div>
                  <a
                    href="#"
                    className="text-sm underline mt-2 flex items-center"
                  >
                    Learn more
                    <img
                      src={link}
                      alt="Link Icon"
                      className="ml-2 w-4 h-4"
                    />
                  </a>
                </div>
              </div>
              {/* Image Section */}
              <div className="md:w-4/12 m-2">
                <img
                  src={item.image}
                  alt={item.title || "Image"}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ) : (
            <div className="flex row">
              <img
                src={item.image}
                alt={item.title || "Image"}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BusinessCard;
