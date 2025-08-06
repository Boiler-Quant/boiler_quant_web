import { useEffect } from "react";
import { useTheme } from "../../theme-context";
import ExecutiveCard from "./ExecutiveCard";

const SmallExecutiveBoard = ({ data }) => {
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
    <div className={`section-container-sm bg-gray-200 ${theme.text_black}`}>
      <h2 className="section-title font-catchy">2025 Executive Board</h2>
      <div className="grid grid-cols-2 gap-responsive py-3 px-2 justify-items-center">
        {data.map((exec, index) => (
          <div key={index} className="flex flex-col w-full max-w-72">
            <ExecutiveCard exec={exec} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallExecutiveBoard;
