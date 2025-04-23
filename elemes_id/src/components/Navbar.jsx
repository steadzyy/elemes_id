import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Navbar Wrapper */}
      <div className="lg:relative fixed bottom-0 w-full bg-white z-50 border-t border-slate-200 shadow-md lg:shadow-none">
        <div className="flex items-center justify-between px-4 py-2 lg:py-6">
          {/* Kiri */}
          <div className="hidden lg:block">
            <a href="#" className="font-bold text-lg text-teal-500 block">
              <img src="../logo.png" alt="logo" />
            </a>
          </div>

          {/* Tengah */}
          <div className="flex-grow">
            <nav className="w-full">
              <ul className="flex justify-around items-center lg:justify-center lg:space-x-8">
                <li>
                  <a href="#" className="text-sm text-black green">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-black green">
                    About
                  </a>
                </li>
                <li className="relative">
                  <a href="#" className="text-sm text-black green">
                    Promotions
                  </a>
                  <div className="absolute -top-2 -right-8 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="bg-red-500 rounded-full text-white text-xxs px-2 py-1">
                      HOT
                    </button>
                  </div>
                </li>

                <li>
                  <a href="#" className="text-sm text-black green">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-black green">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Kanan */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-white text-black font-semibold py-2 rounded">
              Masuk
            </button>
            <button className="custom-green text-white font-semibold py-2 px-4 rounded-full">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
