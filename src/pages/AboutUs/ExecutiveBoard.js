import { useTheme } from "../../theme-context";
import { useEffect } from "react";

const ExecutiveBoard = ({ data }) => {
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
      <div className="grid grid-cols-2 grid-rows-2 xl:grid-cols-5 xl:grid-rows-1 gap-r-2 px-r-2 items-stretch">
        {data.map((exec, index) => (
          <div key={index} className={`flex flex-col max-w-lg w-full mx-auto `}>
            <Card2 exec={exec} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveBoard;

const Card2 = ({ exec, index }) => {
  return (
    <div key={index} className={`flex flex-col max-w-lg w-full mx-auto`}>
      {/* Name and Position */}
      <div className="section-1">
        <h3 className="text-r-base font-bold font-frank pb-r-0-5">
          {exec["fields"]["Full Name"]}
        </h3>
        <p className="text-r-sm font-semibold font-frank">
          {exec["fields"]["Role"]}
        </p>
      </div>

      {/* Image */}
      <div className="section-2">
        <hr className="my-r-1 border-gray-900 opacity-30" />

        <div
          className="mx-auto my-r-1 px-r-1 w-full"
          style={{
            aspectRatio: "1/1", // Maintain aspect ratio
            backgroundImage: `url(${exec["fields"]["Photo"][0]["url"]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Description */}
      <div className="section-3">
        <p className="text-r-sm font-semibold font-serif mb-r-1 ">
          {exec["fields"]["Major"]}
        </p>
        <p className="text-r-sm font-serif mb-r-1">
          Interests: {exec["fields"]["Interests"]}
        </p>
        <a
          href={exec["fields"]["LinkedIn"]}
          className="text-blue-400 hover:underline text-r-sm cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};
