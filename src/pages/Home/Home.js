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
      <div className="bg-gray-100 flex flex-row justify-center">
        <section className="py-r-10 px-r-5 bg-gray-100 text-center w-full max-w-7xl">
          <h2 className="text-r-lg font-bold mb-r-2 font-catchy">Join Us</h2>
          <p className="text-r-sm-3xl mb-r-3 font-semibold">
            Applications for Spring 2025 Are Now Closed.
          </p>
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
          <p className="text-r-sm-3xl lg:mb-3 font-semibold">
            Missed the Deadline?
          </p>
          <p className="text-r-xs-2xl mb-r-3">
            While applications for this cycle are closed, we’d love for you to
            consider applying next semester. <br></br> Be sure to check back
            here or follow us on Instagram and LinkedIn for updates!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Main;
