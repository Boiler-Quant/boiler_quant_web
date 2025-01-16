import React from "react";
import { useTheme } from "../theme-context";

const BottomContact = () => {
  const theme = useTheme();

  return (
    <div className={`py-r-5 px-r-2 ${theme.dust} flex text-black`}>
      {/* Left Section: Logo and Name */}
      <div className="flex flex-col items-center justify-center w-1/2 space-r-y-1">
        <img
          src="/submark_black.svg"
          alt="Quant Club Logo"
          className="h-8 sm:h-14 lg:h-28"
        />
        <h2 className="text-r-base font-catchy">Boiler Quant</h2>
      </div>

      {/* Right Section: Contact Links */}
      <div className="flex flex-col items-center justify-center w-1/2 space-r-y-1 text-black">
        <a
          href="https://www.instagram.com/boilerquant/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center hover:opacity-70">
            <img
              src="/instagram-logo.png"
              alt="Instagram"
              className="h-r-3 w-r-3"
            />
            <p className="text-r-xs ml-r-0-5">Follow Us on Instagram</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/boilerquant/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center hover:opacity-70">
            <img
              src="/linkedin-logo.png"
              alt="LinkedIn"
              className="h-r-3 w-r-3"
            />
            <p className="text-r-xs ml-r-0-5">Connect with Us on LinkedIn</p>
          </div>
        </a>

        <a
          href="mailto:boilerquant@purdue.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center hover:opacity-70">
            <img src="/mail-logo.png" alt="Email" className="h-r-3 w-r-3" />
            <p className="text-r-xs ml-r-0-5">boilerquant@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BottomContact;
