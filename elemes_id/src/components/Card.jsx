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

    const ratings = (rating) => {
      let stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars.push(
            <span key={i} className="text-orange-500">★</span> 
          );
        } else {
          stars.push(
            <span key={i} className="text-gray-400">☆</span>
          );
        }
      }
      return stars;
    };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4">
        {food.map((item, i) => (
          <div
            key={i}
            className={`${getColorByCategory(item.Category)} rounded-xl p-4`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="mb-4 rounded-md w-20 h-20 object-cover"
            />
            <h4 className="font-bold text-lg">{item.name}</h4>
            <p className="text-sm text-gray-600 text-green">{item.Category}</p>
            <p className="text-sm text-gray-600">{ratings(item.Rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
