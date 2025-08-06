import { useState } from "react";
import { useTheme } from "../../theme-context";
import ProjectCard from "./ProjectCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CircularProgress } from "@mui/material";

const Projects = ({ projects }) => {
  const [showFall24, setShowFall24] = useState(false);

  const theme = useTheme();

  return (
    <div
      className={`section-container ${theme.background} ${theme.text_white}`}
    >
      {/* Banner Section */}
      <div
        className={`${theme.background} ${theme.text_white} py-8 flex flex-row items-center justify-center`}
      >
        <a
          href="https://www.github.com/Boiler-Quant"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-responsive-sm"
          tabIndex="0"
        >
          <GitHubIcon
            className="!size-12 !sm:size-16 !md:size-20 !lg:size-24"
            sx={{ color: "white" }}
          />
          <h2 className="text-heading-lg font-catchy">
            Check our Github Page!
          </h2>
        </a>
      </div>

      {/* Projects Section with Loading State */}
      {!projects || projects.length === 0 ? (
        <div className="container-responsive flex flex-col items-center justify-center py-20">
          <CircularProgress
            size={80}
            thickness={4}
            sx={{ color: "white", marginBottom: 3 }}
          />
          <p className="text-body-lg font-catchy text-white">
            Fetching project data...
          </p>
        </div>
      ) : (
        <>
          <div className="container-responsive">
            <h2 className="text-heading-md font-bold font-catchy mb-section-sm">
              Spring `25 Projects
            </h2>

            <div className="space-y-4">
              {projects
                .filter((project) => project.fields.Semester === "Spring 2025")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </div>

          <hr className="section-margin border-t border-white/30" />

          <div className="container-responsive">
            <button
              className="w-full text-left text-heading-md font-bold font-catchy mb-section-sm"
              onClick={() => setShowFall24((prev) => !prev)}
            >
              {showFall24 ? "▼ Fall `24 Projects" : "▶ Fall `24 Projects"}
            </button>

            {showFall24 && (
              <div className="space-y-4">
                {projects
                  .filter((project) => project.fields.Semester === "Fall 2024")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
