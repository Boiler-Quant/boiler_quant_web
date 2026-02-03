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

        elements.forEach((el) => (el.style.height = "auto"));

        elements.forEach((el) => {
          const height = el.offsetHeight;
          if (height > maxHeight) maxHeight = height;
        });

        elements.forEach((el) => (el.style.height = `${maxHeight}px`));
      });
    };

    syncSectionHeights();
    window.addEventListener("resize", syncSectionHeights);
    return () => window.removeEventListener("resize", syncSectionHeights);
  }, []);

  const theme = useTheme();

  return (
    <div className={`section-container-sm bg-gray-200 ${theme.text_black}`}>
      <h2 className="section-title font-catchy">2026 Executive Board</h2>

      {/* Row 1 — 2 people */}
      <div className="flex flex-row justify-center gap-responsive py-3">
        {data.slice(0, 2).map((exec, index) => (
          <div key={index} className="flex flex-col w-64 xl:w-72">
            <ExecutiveCard exec={exec} />
          </div>
        ))}
      </div>

      {/* Row 2 — remaining 5 people in a single compact row */}
      <div className="flex flex-row flex-nowrap justify-center gap-3 xl:gap-4 py-3">
        {data.slice(2, 7).map((exec, index) => (
          <div key={index} className="flex flex-col w-40 lg:w-44 xl:w-48">
            <ExecutiveCard exec={exec} compact />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LargeExecutiveBoard;
