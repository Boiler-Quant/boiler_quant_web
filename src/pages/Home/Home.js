import React from "react";
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
        <p className="text-r-sm-3xl mb-r-3">
          The application for Spring 2025 is open!
        </p>
        <Link
          to="/join-us"
          className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-r-sm font-semibold py-r-1 px-r-2 rounded-lg transition-colors`}
        >
          Join Us Now
        </Link>
      </section>
    </div>
  );
};

export default Main;
