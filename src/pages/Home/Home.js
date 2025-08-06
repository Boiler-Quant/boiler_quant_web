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
      <div className={`-mx-6 lg:-mx-10 bg-gray-100 text-black py-12`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold font-frank text-center mb-8">
            Sponsors
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
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
        <section className="py-r-10 px-r-5 bg-white text-center w-full max-w-7xl">
          <h2 className="text-r-lg font-bold mb-r-2 font-catchy">Join Us</h2>
          {/* <p className="text-r-sm-3xl mb-r-3 font-semibold">
            Applications for Spring 2025 Are Now Closed.
          </p> */}
          {/* <h2 className="text-r-sm-3xl mb-1 lg:mb-3 font-semibold">
            What's Next?
          </h2>
          <p className="text-r-xs-2xl mb-2 lg:mb-4">
            Our team is currently reviewing all applications, and we’ll be
            reaching out to applicants shortly. <br></br>
            For a detailed timeline, please visit our "Join Us" page.
          </p>
          <Link
            to="/join-us"
            className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-r-sm font-semibold py-r-1 px-r-2 rounded-lg transition-colors mb-r-3`}
          >
            Join Us Page
          </Link> */}
          {/* <p className="text-r-sm-3xl lg:mb-3 font-semibold">
            Missed the Deadline?
          </p>
          <p className="text-r-xs-2xl mb-r-3">
            While applications for this cycle are closed, we’d love for you to
            consider applying next semester. <br></br> Be sure to check back
            here or follow us on Instagram and LinkedIn for updates!
          </p> */}

          <p className="text-r-sm-3xl lg:mb-3 font-semibold">
            Fall 2025 Recruitment Coming Soon!
          </p>
          <p className="text-r-xs-2xl mb-r-3">
            We’ll be announcing our Fall 2025 recruitment timeline shortly. Stay
            tuned for updates and follow us on Instagram and LinkedIn to be the
            first to know when applications open!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Main;
