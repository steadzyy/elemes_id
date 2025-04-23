import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-[Rubik]">
        <header id="header" className="relative">
          <div>
            <img
              src="/bg.png"
              alt="background"
              className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-5"
            />
          </div>
          <div className="mb-4">
            <Navbar />
          </div>
          <div>
            <Hero />
          </div>
        </header>

        <section id="categories" className="py-10">
          <Category />
        </section>

        <section id="trending" className="py-20">
          <Trending />
        </section>

        <footer id="footer" className="hidden sm:flex justify-center w-full mb-5">
          <Footer />
        </footer>
        <div className="bottom text-slate-400 font-light text-center justify-center mb-10 hidden sm:flex">
        © 2021 Elemes id. All rights reserved
        </div>
      </div>
    </>
  );
}

export default App;
