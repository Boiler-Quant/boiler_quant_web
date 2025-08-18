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
        Applications for Fall 2025 Will Be Open Soon!
      </h3>
      <h3 className="text-heading-md font-semibold font-frank text-center">
        Join BoilerQuant and be part of our quantitative finance community.
      </h3>

      <h2 className="text-heading-md font-bold font-frank text-center">
        Fall 2025 Recruitment Timeline
      </h2>
      <Fall2025Timeline />
    </section>
  );
};

export default JoinUs;
