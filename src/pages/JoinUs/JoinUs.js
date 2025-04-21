import { useTheme } from "../../theme-context";
import Timeline from "./Timeline";
import { Link } from "react-router-dom";

const JoinUs = () => {
  const theme = useTheme();
  return (
    <section
      className={`py-r-10 ${theme.background} ${theme.text_white} flex flex-col items-center space-r-y-4`}
    >
      <h3 className="text-r-lg font-semibold font-frank text-center">
        Applications for Spring 2025 Are Now Closed.
      </h3>
      <h3 className="text-r-lg font-semibold font-frank text-center">
        Applications for Fall 2025 Will Open in September.
      </h3>

      <h4 className="text-r-lg font-semibold font-frank text-center">
        Stay Connected!
      </h4>
      <div className="flex flex-col items-center justify-center w-1/2 space-r-y-1 text-white">
        <a
          href="https://www.instagram.com/boilerquant/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center hover:opacity-70">
            <img
              src="/instagram-logo.png"
              alt="Instagram"
              className="h-r-3 w-r-3 brightness-0 invert"
            />
            <p className="text-r-xs ml-r-0-5">Follow us on Instagram</p>
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
              className="h-r-3 w-r-3 brightness-0 invert"
            />
            <p className="text-r-xs ml-r-0-5">Connect with us on LinkedIn</p>
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
              className="h-r-3 w-r-3 brightness-0 invert"
            />
            <p className="text-r-xs ml-r-0-5">boilerquant@gmail.com</p>
          </div>
        </a>
      </div>

      {/* <h2 className="text-r-sm-3xl mb-1 lg:mb- font-semibold text-center">
        What's Next?
      </h2>
      <p className="text-r-xs-2xl mb-2 lg:mb-3 text-center">
        Our team is currently reviewing all applications, and we’ll be reaching
        out to applicants shortly.
      </p> */}
      {/* <h2 className="text-r-lg font-bold font-frank text-center">
        Spring 2025 Recruitment Timeline
      </h2> */}
      {/* <Timeline /> */}
    </section>
  );
};

export default JoinUs;
