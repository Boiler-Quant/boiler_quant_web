import { useTheme } from "../../theme-context";
import AlternateTimeline from "./Timeline";

const JoinUs = () => {
  const theme = useTheme();

  return (
    <section
      className={`section-container ${theme.background} ${theme.text_white} flex flex-col items-center space-y-responsive mt-10`}
    >
      <h3 className="text-heading-md font-semibold font-frank text-center">
        Fall 2026 Applications Are Closed. Stay Tuned for Spring 2027!
      </h3>

      <div className="w-full lg:w-3/4">
        <AlternateTimeline />
      </div>
    </section>
  );
};

export default JoinUs;