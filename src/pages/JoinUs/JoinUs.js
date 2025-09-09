import { useTheme } from "../../theme-context";

const JoinUs = () => {
  const theme = useTheme();
  return (
    <section
      className={`section-container ${theme.background} ${theme.text_white} flex flex-col items-center space-y-responsive mt-10`}
    >
      <h3 className="text-heading-md font-semibold font-frank text-center">
        Fall 2025 Applications Are Now Closed
        <br />
        If you missed the deadline, stay tuned for Spring 2026 recruitment!
      </h3>

      <div className="text-center mb-section-sm">
        <p className="text-body-md font-frank mb-6">
          Thank you to everyone who applied. We have completed our Fall 2025
          recruitment process.
        </p>
      </div>
    </section>
  );
};

export default JoinUs;
