// React and Tailwind CSS setup for the Purdue Quantitative Finance Club Website

import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./fonts.css";
import "./App.css";

const theme = {
  background: "bg-[#212321]",
  background_light: "bg-[#F9F7F3]",
  text: "text-[#FFFFFF]",
  primary: "bg-[#594B36]",
  secondary: "bg-[#7F8E79]",
  highligth: "bg-[7F8E79]",
};

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBackground =
    scrollY > 300
      ? "bg-black"
      : `bg-gradient-to-b from-black to-transparent opacity-${Math.min(
          Math.floor(scrollY / 3),
          100
        )}`;

  return (
    <div className={`font-sans ${theme.background} ${theme.text} min-h-screen`}>
      {/* Top Navigation Bar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 p-5 flex justify-between items-center transition-all duration-300 ${navBackground}`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src="/bq_logo_white.png"
              alt="Boiler Quant Logo"
              className="h-24 sm:h-28"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg font-bold font-custom sm:text-2xl">
          <a href="#about-us" className="hover:underline">
            About Us
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#quizzes" className="hover:underline">
            Quizzes
          </a>
          <a href="#archive" className="hover:underline">
            Archive
          </a>
          <a href="#join-us" className="hover:underline">
            Join Us
          </a>
        </div>
      </div>
      {/* Main Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/purdue_image.jpg')`, // Replace with your image path
        }}
      >
        {/* Our cool Caption */}
        <div className="absolute bottom-20 left-10 sm:left-20 text-white font-custom">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Empowering Tomorrow's Financial Leaders
          </h1>
          <p className="mt-4 text-lg sm:text-2xl">
            Join us to explore the future of finance at Purdue.
          </p>
        </div>

        {/* Scroll Down Section */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce mt-2">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Club Information Section */}
      <div className="py-20 px-10 bg-gray-800">
        <h2 className="text-4xl font-semibold text-center mb-8">
          About the Quantitative Finance Club
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          Welcome to Purdue University’s Quantitative Finance Club! We focus on
          building knowledge and skills in quantitative analysis, financial
          modeling, and trading. Through workshops, guest speakers, and
          competitions, our members gain exposure to real-world finance
          applications.
        </p>
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default App;
