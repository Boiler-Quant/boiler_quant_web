import { useTheme } from "../theme-context";
import Timeline from "./Timeline";

const JoinUs = () => {
  const theme = useTheme();
  return (
    <section className={`pt-24 ${theme.background} text-white flex flex-col`}>
      <div className="flex flex-col items-center justify-center space-y-8 py-12">
        <h3 className="py-10 text-5xl font-semibold font-frank mb-6 text-center">
          Application Opening Soon on January 19th, 2025!
        </h3>
      </div>
      <h2 className="text-5xl font-bold font-frank mb-10 text-center">
        Spring 2025 Recruitment Timeline
      </h2>
      <div className="pb-10">
        <Timeline />
      </div>
      {/* <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/recruitment.jpg')`, // Main hero image
        }}
      /> */}

      {/* Apply Now Button
      <button
        className={`${theme.highlight} text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-0`}
        onClick={() =>
          window.open("https://your-google-form-link.com", "_blank")
        }
      >
        Apply
      </button> */}
    </section>
  );
};

export default JoinUs;
