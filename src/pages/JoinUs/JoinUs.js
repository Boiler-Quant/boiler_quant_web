import { useTheme } from "../../theme-context";
import Timeline from "./Timeline";

const JoinUs = () => {
  const theme = useTheme();
  return (
    <section
      className={`py-r-10 ${theme.background} ${theme.text_white} flex flex-col space-r-y-4`}
    >
      <h3 className="text-r-lg font-semibold font-frank text-center">
        Application Opening Soon on January 19th, 2025!
      </h3>
      <h2 className="text-r-lg font-bold font-frank text-center">
        Spring 2025 Recruitment Timeline
      </h2>
      <Timeline />
    </section>
  );
};

export default JoinUs;
