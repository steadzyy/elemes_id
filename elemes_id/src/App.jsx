import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <header id="header" className="relative">
        <div>
        <img src="/bg.png" alt="background" className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-5" />
        </div>
        <div className="mb-4">
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
      </header>

      <section id="categories">{/* Category Section */}</section>

      <section id="trending">{/* Trending Section */}</section>

      <footer id="footer">{/* Footer */}</footer>
    </>
  );
}

export default App;
