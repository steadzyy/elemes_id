import React from "react";
import Card from "./Card";

const Trending = () => {
  return (
    <>
      <div className="container mx-auto px-4 mb-12">
        <div className="w-full self-center px-4 lg:w-1/2 mb-8">
          <h1 className="font-bold text-3xl">Browse Our Trending</h1>
          <h1 className="font-bold text-3xl text-green">Receipt</h1>
        </div>
      </div>

      <div className="mb-9">
        <Card/>
      </div>

      <div className="container mx-auto justify-center text-center hidden sm:flex">
        <button className="custom-green text-white px-6 py-3 rounded-full space-x-3">
            ALL Receipt
        </button>
      </div>
    </>
  );
};

export default Trending;
