import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Trending from "./components/Trending";

function App() {
  return (
    <>
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

      <section id="categories" className="py-12"><Category/></section>

      <section id="trending" className="py-20">
        <Trending/>
      </section>

      <footer id="footer">{/* Footer */}</footer>
    </>
  );
}

export default App;
