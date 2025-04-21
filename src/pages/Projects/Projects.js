import { useState } from "react";
import { useTheme } from "../../theme-context";
import ProjectCard from "./ProjectCard";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = ({ projects }) => {
  const [showFall24, setShowFall24] = useState(false);

  const theme = useTheme();

  return (
    <div
      className={`py-16 px-6 lg:py-40 lg:px-10 ${theme.background} ${theme.text_white}`}
    >
      {/* Banner Section */}
      <div
        className={`${theme.background} ${theme.text_white} py-4 flex flex-row items-center justify-center`}
      >
        <a
          href="https://www.github.com/Boiler-Quant"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
          tabIndex="0"
        >
          <GitHubIcon
            className="!size-8 !sm:size-16 !lg:size-16"
            sx={{ color: "white" }}
          />
          <h2 className="text-xl lg:text-4xl font-frank">
            Check our Github Page!
          </h2>
        </a>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl py-4 lg:text-3xl font-bold font-catchy">
          Spring `25 Projects
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {projects
            .filter((project) => project.fields.Semester === "Spring 2025")
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>

      <hr className="my-12 border-t border-white/30" />

      <div className="max-w-5xl mx-auto">
        <button
          className="w-full text-left text-2xl py-4 lg:text-3xl font-bold font-catchy"
          onClick={() => setShowFall24((prev) => !prev)}
        >
          {showFall24 ? "▼ Fall `24 Projects" : "▶ Fall `24 Projects"}
        </button>

        {showFall24 && (
          <div className="space-y-4 sm:space-y-6">
            {projects
              .filter((project) => project.fields.Semester === "Fall 2024")
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
