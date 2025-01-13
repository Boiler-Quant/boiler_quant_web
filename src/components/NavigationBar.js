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
      className={`flex fixed top-0 left-0 w-screen p-r-3 z-50 justify-between transition-all duration-300 ${navBackground}`}
      style={{ boxSizing: "border-box" }}
    >
      <div className="flex">
        <Link to="/">
          <img
            src="/submark_white_transparent.png"
            alt="Quant Club Logo"
            className="h-r-6"
          />
        </Link>
      </div>
      <div
        className={`flex items-center space-r-x-3 text-r-menu font-frank ${theme.text_white}`}
      >
        <Link
          to="/"
          className={`hover:underline ${isActive("/") ? "underline" : ""}`}
        >
          Home
        </Link>

        <Link
          to="/about-us"
          className={`hover:underline ${
            isActive("/about-us") ? "underline" : ""
          }`}
        >
          About Us
        </Link>
        <Link
          to="/projects"
          className={`hover:underline ${
            isActive("/projects") ? "underline" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to="/quizzes"
          className={`hover:underline ${
            isActive("/quizzes") ? "underline" : ""
          }`}
        >
          Quizzes
        </Link>
        <Link
          to="/join-us"
          className={`hover:underline ${
            isActive("/join-us") ? "underline" : ""
          }`}
        >
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
