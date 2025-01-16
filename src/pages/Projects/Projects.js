import { useTheme } from "../../theme-context";
import ProjectCard from "./ProjectCard";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = ({ projects }) => {
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

      <h2 className="text-2xl py-4 lg:text-4xl font-bold font-catchy">
        Fall `24 Projects
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
