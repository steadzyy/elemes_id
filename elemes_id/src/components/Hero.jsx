import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left">
          {/* Kiri */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="font-[oswald] text-xl md:text-2xl lg:text-4xl text-slate-900 leading-snug text-green">
              GOOD FOOD US
              <br />
              GOOD MOOD
            </h1>

            <p className="font-medium mb-10 leading-relaxed">
              I would think that conserving our natural resources 
              <br/>
              should be a conservative position: Not to waste food, and 
              <br/> not to throw away a
              lot of the food that we buy.
            </p>
            <a
              href="#contact"
              className="text-base font-semibold text-white custom-green py-3 px-8 rounded-full hover:shadow-lg  transition duration-300 ease-in-out"
            >
              Daftar Sekarang
            </a>
            <a
              href="#contact"
              className="text-base font-semibold text-black py-3 px-8 rounded-full hover:shadow-lg  transition duration-300 ease-in-out"
            >
              About Us
            </a>
          </div>

          {/* Kanan */}
          <div className="w-full self-end lg:w-1/2 px-4 flex justify-center lg:justify-end">
            <div className="relative mt-16 lg:mt-0">
              <img
                src="../public/salad.png"
                alt="bayu"
                className="w-64 h-auto mx-auto lg:w-80 rounded-md"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 scale-110"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
