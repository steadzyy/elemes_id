import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto px-4 mb-20 ">
        <div className="flex flex-wrap items-center justify-center lg:justify-between text-left lg:text-left">
          {/* Kiri */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="font-[oswald] text-5xl  md:text-7xl lg:text-8xl text-slate-900 leading-normal text-green">
              Good Food Us
              <br />
              Good Mood
            </h1>

            <p className="font-light text-md lg:text-lg mb-10 leading-relaxed">
              I would think that conserving our natural resources
              <br />
              should be a conservative position: Not to waste food, and
              <br /> not to throw away a lot of the food that we buy.
            </p>
            <div className="mt-6 flex flex-row justify-between gap-x-2 sm:justify-between lg:justify-start">
              <button className="w-1/2 lg:w-auto text-sm lg:text-base font-semibold text-white custom-green py-2 lg:py-3 px-2 lg:px-6 rounded-full shadow-lg hover:shadow-2xl">
                Daftar Sekarang
              </button>
              <button className="w-1/2 lg:w-auto text-sm lg:text-base font-semibold text-black py-2 lg:py-3 px-2 lg:px-6 rounded-full shadow-lg hover:shadow-2xl">
                About
              </button>
            </div>
          </div>

          {/* Kanan */}
          <div className="w-full relative self-end lg:w-1/2 px-4 flex justify-center lg:justify-end scale-95 md:scale-100">
            <div className="relative mt-16 lg:mt-0">
              <img
                src="../salad.png"
                alt="salad"
                className="w-auto h-auto mx-auto lg:w-lg lg:mr-28"
              />
              <span className="absolute -bottom-4 -left-60 translate-x-1/2 z-10 scale-75 md:scale-95">
                <div className="flex items-center relative bg-white opacity-90 rounded-xl shadow-md p-4 space-x-4 left-1/2 transform sm:-translate-x-1/2">
                  <img
                    src="../salad.png"
                    alt="salad"
                    className="w-16 h-16 md:w-16 md:h-16 object-cover rounded-full"
                  />
                  <div>
                    <h1 className="font-bold text-lg">Green Salad Tomato</h1>
                    <p className="text-sm text-gray-500">Tomato</p>
                    <div className="flex mt-1">
                      <span className="text-orange-400 text-sm">★</span>
                      <span className="text-orange-400 text-sm">★</span>
                      <span className="text-orange-400 text-sm">★</span>
                      <span className="text-orange-400 text-sm">★</span>
                      <span className="text-gray-300 text-sm">★</span>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
