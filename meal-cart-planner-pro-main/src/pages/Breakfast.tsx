import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const breakfastItems = [
  { name: "Idli", img:  "images/Breakfast/idly.jpg" }, // Note: filename is 'idly' not 'idli'
  { name: "Dosa", img: "images/Breakfast/dosa.jpg" },
  { name: "Bread & Butter", img: "images/Breakfast/bread.jpg" },
  { name: "Omelet", img: "images/Breakfast/omlet.jpg" }, // Note: filename is 'omlet' not 'omelet'
  { name: "Upma", img: "images/Breakfast/mpaa.jpg" }, // Note: filename is 'mpaa' not 'upma'
  { name: "Poha", img: "images/Breakfast/poha.jpg" },
];

// OR if you want to use the existing images in your /images/ folder:
// const breakfastItems = [
//   { name: "Idli", img: "/images/placeholder.svg" }, // temporary placeholder
//   { name: "Dosa", img: "/images/placeholder.svg" },
//   { name: "Bread & Butter", img: "/images/placeholder.svg" },
//   { name: "Omelet", img: "/images/placeholder.svg" },
//   { name: "Upma", img: "/images/placeholder.svg" },
//   { name: "Poha", img: "/images/placeholder.svg" },
// ];

const Breakfast = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 text-center mb-4">
          Select Breakfast Items
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Choose your favorite breakfast options
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {breakfastItems.map((item) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={item.name}
              className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center cursor-pointer"
            >
              <img
                src={"images/Breakfast/idly.jpg"}
                alt={"test"}
                className="w-full h-auto max-w-[150px] mb-3"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.src = "/images/placeholder.svg";
                }}
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between mt-10">
          <button
            onClick={() => navigate("/meals")}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Back to Meals
          </button>
          <button
            onClick={() => navigate("/lunch")}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
          >
            Continue to Frequencies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;