import React from "react";
import data from "../data/category.json";

const Carousel = () => {
  let colorCard = (category) => {
    switch (category) {
      case "Pizza":
        return "card-pizza";
      case "Kebab":
        return "card-kebab";
      case "Salmon":
        return "card-salmon";
      case "Doughnut":
        return "card-doughnut";
      case "Cupcake":
        return "card-cupcake";
      default:
        return "custom-green";
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4 mb-6">
        {data.map((data, i) => (
          <div
            key={i}
            className={`${colorCard(
              data.Category
            )} rounded-xl text-center p-4 transform transition-all duration-300 hover:scale-110 hover:z-10`}
          >
            <img
              src={data.img}
              alt={data.name}
              className="mx-auto mb-2 w-10 h-10"
            />
            <h4 className="font-bold text-md md:text-lg">{data.Category}</h4>
            <p className="text-sm text-gray-600">{data.Items} Items</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
