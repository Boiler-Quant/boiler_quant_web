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
          {/* <p className="text-body-lg mb-section-sm font-semibold">
            Applications for Spring 2025 Are Now Closed.
          </p> */}
          {/* <h2 className="text-body-lg mb-1 lg:mb-3 font-semibold">
            What's Next?
          </h2>
          <p className="text-body-md mb-2 lg:mb-4">
            Our team is currently reviewing all applications, and we'll be
            reaching out to applicants shortly. <br></br>
            For a detailed timeline, please visit our "Join Us" page.
          </p>
          <Link
            to="/join-us"
            className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-body-sm font-semibold py-2 px-4 rounded-lg transition-colors mb-section-sm`}
          >
            Join Us Page
          </Link> */}
          {/* <p className="text-body-lg lg:mb-3 font-semibold">
            Missed the Deadline?
          </p>
          <p className="text-body-md mb-section-sm">
            While applications for this cycle are closed, we'd love for you to
            consider applying next semester. <br></br> Be sure to check back
            here or follow us on Instagram and LinkedIn for updates!
          </p> */}

          <p className="text-body-lg lg:mb-3 font-semibold">
            Fall 2025 Recruitment Coming Soon!
          </p>
          <p className="text-body-md mb-section-sm">
            We'll be announcing our Fall 2025 recruitment timeline shortly. Stay
            tuned for updates and follow us on Instagram and LinkedIn to be the
            first to know when applications open!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Main;
