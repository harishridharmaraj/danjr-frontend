import React from "react";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Review from "./components/review";
import Contact from "./components/contact";
import Menu from "./components/menu";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
