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
      <h2 className="text-r-sm-3xl mb-1 lg:mb- font-semibold text-center">
        What's Next?
      </h2>
      <p className="text-r-xs-2xl mb-2 lg:mb-3 text-center">
        Our team is currently reviewing all applications, and we’ll be reaching
        out to applicants shortly.
      </p>
      <h2 className="text-r-lg font-bold font-frank text-center">
        Spring 2025 Recruitment Timeline
      </h2>
      <Timeline />
    </section>
  );
};

export default JoinUs;
