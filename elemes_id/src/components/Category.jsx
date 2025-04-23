import React from "react";
import Carousel from "./Carousel";

const Category = () => {
  return (
    <>
      <div className="container mx-auto px-4 mb-12">
        <div className="w-full self-center px-4 lg:w-1/2 mb-8">
          <h1 className="font-bold text-3xl">Browse Our Category</h1>
          <h1 className="font-bold text-3xl text-green">Receipt</h1>
        </div>
        <Carousel />
      </div>
      <div className="container mx-auto flex justify-end gap-4">
        <button className="custom-green text-white px-6 py-3 rounded-full flex items-center space-x-2">
          <img src="/arrow.svg" alt="prev" className="h-5 w-6 rotate-180 bg-white rounded-full p-1" />
          <span>PREV</span>
        </button>
        <button className="custom-green text-white px-6 py-3 rounded-full flex items-center space-x-2">
          <span>NEXT</span>
          <img src="/arrow.svg" alt="next" className="h-5 w-6 bg-white rounded-full p-1" />
        </button>
      </div>
    </>
  );
};

export default Category;
