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
        The application for Spring 2025 is open!
      </h3>
      <Link
        to="https://docs.google.com/forms/d/e/1FAIpQLSeNhEXHysQK5NW-FYsYjXINs-wC3tPNCSJqgQpjE6OmAgwQlQ/viewform"
        className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-r-sm font-semibold py-r-1 px-r-2 rounded-lg transition-colors`}
      >
        Join Us Now
      </Link>
      <h2 className="text-r-lg font-bold font-frank text-center">
        Spring 2025 Recruitment Timeline
      </h2>
      <Timeline />
    </section>
  );
};

export default JoinUs;
