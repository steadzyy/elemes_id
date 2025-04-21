import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <header id="header" className="relative">
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
