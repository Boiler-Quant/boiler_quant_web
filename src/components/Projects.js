import React, { useState } from "react";
import { useTheme } from "../theme-context";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const theme = useTheme();

  const projects = [
    {
      id: 1,
      title: "Quantitative Trading Algorithms",
      description: "An in-depth exploration of trading strategies.",
      details:
        "This project focuses on implementing and backtesting quantitative trading algorithms using Python and financial APIs. Members learned how to optimize strategies for better risk management and returns.",
    },
    {
      id: 2,
      title: "Portfolio Optimization",
      description: "Learn the art of balancing risk and returns.",
      details:
        "The project explored advanced portfolio optimization techniques such as the Markowitz model and Black-Litterman approach. Members applied these methods to real-world data to create efficient portfolios.",
    },
    {
      id: 3,
      title: "Financial Data Visualization",
      description: "Interactive dashboards for financial analysis.",
      details:
        "Participants built data visualization dashboards using tools like Tableau and D3.js to present financial insights effectively. The project included parsing large datasets and creating interactive charts.",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedProject((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`py-24 px-10 ${theme.background} ${theme.text}`}>
      <h2 className="text-4xl font-semibold text-center mb-10">Our Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 cursor-pointer"
            onClick={() => toggleExpand(project.id)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div>
                <span className="text-gray-500">
                  {expandedProject === project.id ? "▲" : "▼"}
                </span>
              </div>
            </div>
            {expandedProject === project.id && (
              <div className="mt-4 text-gray-700">
                <p>{project.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
