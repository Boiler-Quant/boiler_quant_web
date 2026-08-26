import { useTheme } from "../../theme-context";
import AlternateTimeline from "./Timeline";

const JoinUs = () => {
  const theme = useTheme();
  return (
    <section
      className={`section-container ${theme.background} ${theme.text_white} flex flex-col items-center space-y-responsive mt-10`}
    >
      <h3 className="text-heading-md font-semibold font-frank text-center">
        Fall 2026 Applications Are Open
    
      </h3>

      {/* Application Options */}
      <div className="text-center mb-section-sm">
        <p className="text-body-md font-frank mb-6">
          {/* They both lead to the same application form. */}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-responsive-lg">
          {/* Application Button */}
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeFy_qp4fcYELypGWhb4a-nfENiaSjxITpeOkh4V_hRGx-f6g/viewform"
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
              src="/app_qr.jpg"
              alt="Application QR Code"
              className="w-48 h-48 mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        </div>
      <div className="w-full lg:w-3/4">
        <AlternateTimeline />
      </div>
    </section>
  );
};

export default JoinUs;
