import React from "react";
import { useTheme } from "../theme-context";

const BottomContact = () => {
  const theme = useTheme();

  return (
    <div className={`py-20 px-10 ${theme.secondary} flex text-black`}>
      {/* Left Section: Logo and Name */}
      <div className="flex flex-col items-center justify-center w-1/2 space-y-2">
        <img
          src="/bq_logo_black.png"
          alt="Quant Club Logo"
          className="h-24 w-24"
        />
        <h2 className="text-3xl font-catchy">Boiler Quant</h2>
      </div>

      {/* Right Section: Contact Links */}
      <div className="flex flex-col items-center justify-center w-1/2 space-y-4 text-black">
        <a
          href="https://www.instagram.com/boilerquant/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center hover:opacity-70">
            <img
              src="/instagram-logo.png"
              alt="Instagram"
              className="h-10 w-10"
            />
            <p className="text-lg ml-2">@boilerquant</p>
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
              className="h-10 w-10"
            />
            <p className="text-lg ml-2">Follow us on LinkedIn</p>
          </div>
        </a>

        <a
          href="mailto:boilerquant@purdue.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center hover:opacity-70">
            <img src="/mail-logo.png" alt="Email" className="h-10 w-10" />
            <p className="text-lg ml-2">boilerquant@purdue.edu</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BottomContact;
