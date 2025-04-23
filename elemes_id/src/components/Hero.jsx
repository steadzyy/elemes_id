import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left">
          {/* Kiri */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="font-[oswald] text-xl md:text-2xl lg:text-8xl text-slate-900 leading-normal text-green">
              Good Food Us
              <br />
              Good Mood
            </h1>

            <p className="font-light text-lg mb-10 leading-relaxed">
              I would think that conserving our natural resources
              <br />
              should be a conservative position: Not to waste food, and
              <br /> not to throw away a lot of the food that we buy.
            </p>
            <button className="text-base font-semibold text-white custom-green py-3 px-8 rounded-full hover:shadow-2xl mr-3 shadow-lg">
              Daftar Sekarang
            </button>

            <button className="text-base font-semibold text-black py-3 px-8 rounded-full hover:shadow-2xl shadow-lg">
              About Us
            </button>
          </div>

          {/* Kanan */}
          <div className="w-full self-end lg:w-1/2 px-4 flex justify-center lg:justify-end">
            <div className="relative mt-16 lg:mt-0">
              <img
                src="../salad.png"
                alt="bayu"
                className="w-80 h-auto mx-auto lg:w-lg lg:mr-28"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 scale-110">
              
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
