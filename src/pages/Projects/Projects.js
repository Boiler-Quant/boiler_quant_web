import { useState, useEffect } from "react";
import { useTheme } from "../../theme-context";
import ProjectCard from "./ProjectCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CircularProgress } from "@mui/material";

const Projects = () => {
  const [showFall25, setShowFall25] = useState(false);
  const [showSpring25, setShowSpring25] = useState(false);
  const [showFall24, setShowFall24] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/jsons/projects.json")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  const theme = useTheme();

  return (
    <div className={`section-container ${theme.background} ${theme.text_white}`}>
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
          {/* Spring 2026 - Default visible projects */}
          <div className="container-responsive">
            <h2 className="text-heading-md font-bold font-catchy mb-section-sm">
              Spring `26 Projects
            </h2>
            <div className="space-y-4">
              {projects
                .filter((project) => project.Semester === "Spring 2026")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </div>

          <hr className="section-margin border-t border-white/30" />

          {/* Fall 2025 - Collapsible */}
          <div className="container-responsive my-4">
            <button
              className="w-full text-left text-heading-md font-bold font-catchy mb-section-sm"
              onClick={() => setShowFall25((prev) => !prev)}
            >
              {showFall25 ? "▼ Fall `25 Projects" : "▶ Fall `25 Projects"}
            </button>

            {showFall25 && (
              <div className="space-y-4">
                {projects
                  .filter((project) => project.Semester === "Fall 2025")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            )}
          </div>

          {/* Spring 2025 */}
          <div className="container-responsive my-4">
            <button
              className="w-full text-left text-heading-md font-bold font-catchy mb-section-sm"
              onClick={() => setShowSpring25((prev) => !prev)}
            >
              {showSpring25 ? "▼ Spring `25 Projects" : "▶ Spring `25 Projects"}
            </button>

            {showSpring25 && (
              <div className="space-y-4">
                {projects
                  .filter((project) => project.Semester === "Spring 2025")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            )}
          </div>

          {/* Fall 2024 */}
          <div className="container-responsive my-4">
            <button
              className="w-full text-left text-heading-md font-bold font-catchy mb-section-sm"
              onClick={() => setShowFall24((prev) => !prev)}
            >
              {showFall24 ? "▼ Fall `24 Projects" : "▶ Fall `24 Projects"}
            </button>

            {showFall24 && (
              <div className="space-y-4">
                {projects
                  .filter((project) => project.Semester === "Fall 2024")
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
