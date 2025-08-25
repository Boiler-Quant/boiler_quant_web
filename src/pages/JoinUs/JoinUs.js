import { useTheme } from "../../theme-context";
import Fall2025Timeline from "./Fall2025Timeline";
import { Link } from "react-router-dom";

const JoinUs = () => {
  const theme = useTheme();
  return (
    <section
      className={`section-container ${theme.background} ${theme.text_white} flex flex-col items-center space-y-responsive mt-10`}
    >
      <h3 className="text-heading-md font-semibold font-frank text-center">
        Fall 2025 Applications Are Now Open!
      </h3>

      {/* Application Options */}
      <div className="text-center mb-section-sm">
        <p className="text-body-md font-frank mb-6">
          They both lead to the same application form.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-responsive-lg">
          {/* Application Button */}
          <div className="text-center">
            <a
              href="https://forms.gle/ryoFRmWgvaTTg7cy5"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-body-lg font-bold py-4 px-8 rounded-lg transition-colors hover:scale-105 transform`}
            >
              Apply Now
            </a>
          </div>

          {/* QR Code */}
          <div className="text-center">
            <img
              src="/app_qr.jpeg"
              alt="Application QR Code"
              className="w-48 h-48 mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <h2 className="text-heading-md font-bold font-frank text-center">
        Fall 2025 Recruitment Timeline
      </h2>
      <Fall2025Timeline />
    </section>
  );
};

export default JoinUs;
