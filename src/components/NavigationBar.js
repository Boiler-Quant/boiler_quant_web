import React, { useEffect, useState } from "react";
import { useTheme } from "../theme-context";
import { Link, useLocation } from "react-router-dom";
import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
      className={`nav-container ${navBackground}`}
      style={{ boxSizing: "border-box" }}
    >
      <div className="flex">
        <Link to="/">
          <img
            src="/submark_white.svg"
            alt="Quant Club Logo"
            className="nav-logo"
          />
        </Link>
      </div>

      {/* Hamburger Menu For Mobile */}
      <button
        className="nav-mobile-button"
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
        <div className={`nav-drawer ${theme.background} ${theme.text_white}`}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            className="self-end !text-white p-1"
          >
            <CloseIcon />
          </IconButton>

          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "underline" : ""}`}
            onClick={() => setDrawerOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`nav-link ${isActive("/about-us") ? "underline" : ""}`}
            onClick={() => setDrawerOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/projects"
            className={`nav-link ${isActive("/projects") ? "underline" : ""}`}
            onClick={() => setDrawerOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/sponsors"
            className={`nav-link ${isActive("/sponsors") ? "underline" : ""}`}
            onClick={() => setDrawerOpen(false)}
          >
            Sponsors
          </Link>
          <Link
            to="/join-us"
            className={`nav-link ${isActive("/join-us") ? "underline" : ""}`}
            onClick={() => setDrawerOpen(false)}
          >
            Join Us
          </Link>
        </div>
      </Drawer>

      {/* Navigation Bar */}
      <div className={`nav-links ${theme.text_white}`}>
        <Link to="/" className={`nav-link ${isActive("/") ? "underline" : ""}`}>
          Home
        </Link>

        <Link
          to="/about-us"
          className={`nav-link ${isActive("/about-us") ? "underline" : ""}`}
        >
          About Us
        </Link>
        <Link
          to="/projects"
          className={`nav-link ${isActive("/projects") ? "underline" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/sponsors"
          className={`nav-link ${isActive("/sponsors") ? "underline" : ""}`}
        >
          Sponsors
        </Link>
        <Link
          to="/join-us"
          className={`nav-link ${isActive("/join-us") ? "underline" : ""}`}
        >
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
