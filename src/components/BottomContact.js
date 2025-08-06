import React from "react";
import { useTheme } from "../theme-context";

const BottomContact = () => {
  const theme = useTheme();

  return (
    <div className={`footer-container ${theme.dust} text-black`}>
      {/* Left Section: Logo and Name */}
      <div className="footer-logo-section">
        <img
          src="/submark_black.svg"
          alt="Quant Club Logo"
          className="footer-logo"
        />
        <h2 className="text-body-md font-catchy">Boiler Quant</h2>
      </div>

      {/* Right Section: Contact Links */}
      <div className="footer-links">
        <a
          href="https://www.instagram.com/boilerquant/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-link">
            <img
              src="/instagram-logo.png"
              alt="Instagram"
              className="footer-link-icon"
            />
            <p className="footer-link-text">Follow us on Instagram</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/boilerquant/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-link">
            <img
              src="/linkedin-logo.png"
              alt="LinkedIn"
              className="footer-link-icon"
            />
            <p className="footer-link-text">Connect with us on LinkedIn</p>
          </div>
        </a>

        <a
          href="mailto:boilerquant@purdue.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-link">
            <img
              src="/mail-logo.png"
              alt="Email"
              className="footer-link-icon"
            />
            <p className="footer-link-text">boilerquant@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BottomContact;
