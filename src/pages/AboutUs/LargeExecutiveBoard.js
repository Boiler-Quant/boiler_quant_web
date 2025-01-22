import { useEffect } from "react";
import { useTheme } from "../../theme-context";
import ExecutiveCard from "./ExecutiveCard";

const LargeExecutiveBoard = ({ data }) => {
  useEffect(() => {
    const syncSectionHeights = () => {
      const sectionGroups = ["section-1", "section-2", "section-3"];

      sectionGroups.forEach((group) => {
        const elements = document.querySelectorAll(`.${group}`);
        let maxHeight = 0;

        // Reset height to auto to recalculate
        elements.forEach((el) => (el.style.height = "auto"));

        // Find the tallest element
        elements.forEach((el) => {
          const height = el.offsetHeight;
          if (height > maxHeight) maxHeight = height;
        });

        // Set all elements to the tallest height
        elements.forEach((el) => (el.style.height = `${maxHeight}px`));
      });
    };

    // Sync heights on load and resize
    syncSectionHeights();
    window.addEventListener("resize", syncSectionHeights);

    return () => window.removeEventListener("resize", syncSectionHeights);
  }, []);
  const theme = useTheme();

  return (
    <div className={`py-r-5 px-r-2 bg-gray-200 ${theme.text_black}`}>
      <h2 className="text-r-lg font-bold font-catchy mb-r-2 text-center">
        2025 Executive Board
      </h2>
      <div className="flex flex-row justify-center gap-x-8 xl:gap-x-40 py-3">
        {data.slice(0, 2).map((exec, index) => (
          <div key={index} className="flex flex-col w-64 xl:w-96">
            <ExecutiveCard exec={exec} index={index} />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center gap-x-8 xl:gap-x-24 py-3">
        {data.slice(2, 5).map((exec, index) => (
          <div key={index} className="flex flex-col w-64 xl:w-96">
            <ExecutiveCard exec={exec} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LargeExecutiveBoard;
