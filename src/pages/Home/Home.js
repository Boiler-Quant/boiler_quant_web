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

      {/* Sponsors */}
      <div className={`-mx-6 lg:-mx-10 bg-gray-100 text-black py-section-sm`}>
        <div className="container-responsive">
          <h2 className="section-title">Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-responsive">
            <img
              src="/old_mission_logo.png"
              alt="Old Mission"
              className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto mx-auto object-contain"
            />
            <img
              src="/peak6_logo.png"
              alt="Peak 6"
              className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto mx-auto object-contain"
            />
            {/* Add more logos as needed */}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-white flex flex-row justify-center">
        <section className="section-container-sm bg-white text-center w-full max-w-7xl">
          <h2 className="text-heading-md font-bold mb-section-sm font-catchy">
            Join Us
          </h2>

          <p className="text-body-lg lg:mb-3 font-semibold">
            Fall 2025 Applications Are Now Open!
          </p>
          <p className="text-body-md mb-section-sm">
            Applications for Fall 2025 are now open. Apply today to join our
            quantitative finance community!
          </p>
          <Link
            to="/join-us"
            className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-body-sm font-semibold py-2 px-4 rounded-lg transition-colors mb-section-sm`}
          >
            Apply Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Main;
