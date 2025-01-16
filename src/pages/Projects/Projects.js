import React, { useState } from "react";
import { useTheme } from "../../theme-context";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  const [expandedProject, setExpandedProject] = useState(null);
  const theme = useTheme();

  const toggleExpand = (id) => {
    setExpandedProject((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={`py-16 px-6 lg:py-40 lg:px-10 ${theme.background} ${theme.text_white}`}
    >
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
