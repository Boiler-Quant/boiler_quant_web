import { useTheme } from "../../theme-context";
import Timeline from "./Timeline";
import { Link } from "react-router-dom";

const JoinUs = () => {
  const theme = useTheme();
  return (
    <section
      className={`section-container ${theme.background} ${theme.text_white} flex flex-col items-center space-y-responsive`}
    >
      <h3 className="text-heading-md font-semibold font-frank text-center">
        Applications for Spring 2025 Are Now Closed.
      </h3>
      <h3 className="text-heading-md font-semibold font-frank text-center">
        Applications for Fall 2025 Will Open in September.
      </h3>

      <h4 className="text-heading-md font-semibold font-frank text-center">
        Stay Connected!
      </h4>
      <div className="flex flex-col items-center justify-center w-1/2 space-y-responsive-sm text-white">
        <a
          href="https://www.instagram.com/boilerquant/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center hover:opacity-70">
            <img
              src="/instagram-logo.png"
              alt="Instagram"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 brightness-0 invert"
            />
            <p className="text-body-xs ml-2 sm:ml-3">Follow us on Instagram</p>
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
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 brightness-0 invert"
            />
            <p className="text-body-xs ml-2 sm:ml-3">
              Connect with us on LinkedIn
            </p>
          </div>
        </a>

        <a
          href="mailto:boilerquant@purdue.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center hover:opacity-70">
            <img
              src="/mail-logo.png"
              alt="Email"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 brightness-0 invert"
            />
            <p className="text-body-xs ml-2 sm:ml-3">boilerquant@gmail.com</p>
          </div>
        </a>
      </div>

      {/* <h2 className="text-body-lg mb-section-sm font-semibold text-center">
        What's Next?
      </h2>
      <p className="text-body-md mb-section-sm text-center">
        Our team is currently reviewing all applications, and we'll be reaching
        out to applicants shortly.
      </p> */}
      {/* <h2 className="text-heading-md font-bold font-frank text-center">
        Spring 2025 Recruitment Timeline
      </h2> */}
      {/* <Timeline /> */}
    </section>
  );
};

export default JoinUs;
