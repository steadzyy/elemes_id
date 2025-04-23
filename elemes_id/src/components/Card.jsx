import React from "react";
import food from "../data/food.json";

const Card = () => {
    const getColorByCategory = (category) => {
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
    <div className="container mx-auto">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4">
      {food.map((item, i) => (
        <div
          key={i}
          className={`${getColorByCategory(item.Category)} rounded-xl text-center p-4`}
        >
          <img
            src={item.img}
            alt={item.name}
            className="mx-auto mb-4 rounded-md"
          />
          <h4 className="font-bold text-lg">{item.name}</h4>
          <p className="text-sm text-gray-600">{item.Category}</p>
          <p className="text-sm text-gray-600">{item.Rating}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;
