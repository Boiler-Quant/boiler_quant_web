import React, { useEffect, useState } from "react";
import { useTheme } from "../theme-context";
import { Link, useLocation } from "react-router-dom";
import { Box, Drawer } from "@mui/material";

const NavigationBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
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

      {/* Hamburger Menu For Mobile */}
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={drawerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div
          className={`w-48 flex flex-col items-end ${theme.background} ${theme.text_white} h-full space-y-3 p-4`}
        >
          <Link
            to="/"
            className={`hover:underline ${isActive("/") ? "underline" : ""}`}
            onClick={() => setDrawerOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`hover:underline ${
              isActive("/about-us") ? "underline" : ""
            }`}
            onClick={() => setDrawerOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/projects"
            className={`hover:underline ${
              isActive("/projects") ? "underline" : ""
            }`}
            onClick={() => setDrawerOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/quizzes"
            className={`hover:underline ${
              isActive("/quizzes") ? "underline" : ""
            }`}
            onClick={() => setDrawerOpen(false)}
          >
            Quizzes
          </Link>
          <Link
            to="/join-us"
            className={`hover:underline ${
              isActive("/join-us") ? "underline" : ""
            }`}
            onClick={() => setDrawerOpen(false)}
          >
            Join Us
          </Link>
        </div>
      </Drawer>

      {/* Navigation Bar */}
      <div
        className={`hidden sm:flex items-center space-r-x-3 text-r-menu font-frank ${theme.text_white}`}
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
