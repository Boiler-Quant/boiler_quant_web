import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useTheme } from "../../theme-context";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import HighlightGroup from "./HighlightGroup";

const Main = () => {
  const theme = useTheme();

  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* About Us Section */}
      <WhatWeDo />

      {/* Club Highlights Section */}
      <HighlightGroup />

      {/* Join Us Section */}
      <section className="py-r-10 px-r-5 bg-gray-100 text-center">
        <h2 className="text-r-lg font-bold mb-r-2 font-catchy">Join Us</h2>
        <p className="text-r-sm mb-r-3">
          The application for 2025 Spring will be open on January 19th, 2025!
        </p>
        <Link
          to="/join-us"
          className={`inline-block ${theme.aged} ${theme.text_black} text-r-sm font-semibold py-r-1 px-r-2 rounded-lg hover:bg-blue-700 transition-colors`}
        >
          Learn More
        </Link>
      </section>
    </div>
  );
};

export default Main;
