import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between relative">
        {/* kiri */}
        <div className="px-4">
          <a href="#" className="font-bold text-lg text-teal-500 block py-6">
            <img src="../public/logo.png" alt="logo_elemesGroup" />
          </a>
        </div>
        {/* tengah */}
        <div className="flex items-center px-4 flex-grow justify-center">
          <nav
            id="nav-menu"
            className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
          >
            <ul className="flex justify-center lg:flex">
              <li className="group">
                <a
                  href="#home"
                  className="text-base text-black py-2 mx-8 flex green"
                >
                  Home
                </a>
              </li>
              <li className="group">
                <a
                  href="#about"
                  className="text-base text-black py-2 mx-8 flex green"
                >
                  About
                </a>
              </li>
              <li className="group">
                <a
                  href="#portofolio"
                  className="text-base text-black py-2 mx-8 flex green"
                >
                  Promotions
                </a>
              </li>
              <li className="group">
                <a
                  href="#blog"
                  className="text-base text-black py-2 mx-8 flex green"
                >
                  Blogs
                </a>
              </li>
              <li className="group">
                <a
                  href="#contact"
                  className="text-base text-black py-2 mx-8 flex green"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* kanan */}
        <div className="flex items-center px-4">
          <button className="hidden lg:block bg-white text-black font-semibold py-2 mr-4 rounded ">
            Masuk
          </button>
          <button className="hidden lg:block custom-green text-white font-semibold py-2 px-4 rounded-full ">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </>
  );

};

export default Navbar;
