import React, { useEffect, useState } from "react";
import { useTheme } from "../theme-context";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  const theme = useTheme();
  const isActive = (path) => location.pathname === path;

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
          Math.floor(scrollY / 3) + 10,
          100
        )}`;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center text-xl transition-all duration-300 ${navBackground}`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/bq_logo_white.png"
            alt="Quant Club Logo"
            className="h-12 sm:h-16"
          />
        </Link>
      </div>
      <div
        className={`flex space-x-8 text-lg sm:text-2xl font-frank ${theme.text}`}
      >
        <Link
          to="/about-us"
          className={`hover:underline ${
            isActive("/about-us") ? theme.highlightText + " underline" : ""
          }`}
        >
          About Us
        </Link>
        <Link
          to="/projects"
          className={`hover:underline ${
            isActive("/projects") ? theme.highlightText + " underline" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to="/quizzes"
          className={`hover:underline ${
            isActive("/quizzes") ? theme.highlightText + " underline" : ""
          }`}
        >
          Quizzes
        </Link>
        <Link
          to="/join-us"
          className={`hover:underline ${
            isActive("/join-us") ? theme.highlightText + " underline" : ""
          }`}
        >
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
