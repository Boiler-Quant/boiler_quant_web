import React from "react";
import { useTheme } from "../theme-context";

const About = () => {
  const theme = useTheme();
  const executives = [
    {
      name: "John Doe",
      position: "President",
      major: "Finance",
      fact: "Loves hiking",
      image: "/john_doe.jpg",
      linkedin: "https://www.linkedin.com/in/segyul-park-95024b216/",
    },
    {
      name: "Jane Smith",
      position: "Vice President",
      major: "Computer Science",
      fact: "Enjoys coding",
      image: "/jane_smith.jpg",
      linkedin: "https://www.linkedin.com/in/segyul-park-95024b216/",
    },
    {
      name: "Alice Johnson",
      position: "Treasurer",
      major: "Accounting",
      fact: "Avid reader",
      image: "/alice_johnson.jpg",
      linkedin: "https://www.linkedin.com/in/segyul-park-95024b216/",
    },
  ];

  return (
    <div className={`py-24 px-10 ${theme.background} ${theme.text}`}>
      <div className="flex items-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold font-catchy">
          2025 Executive Board
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {executives.map((exec, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-0 shadow-lg p-6 flex flex-col border border-white"
          >
            <div className="sm:flex">
              <div
                className="mb-4 sm:mb-0 sm:mr-6"
                style={{
                  flex: "0 0 40%",
                  aspectRatio: "3/4",
                  backgroundImage: `url(/exec_img.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 font-catchy">
                  {exec.name}
                </h3>
                <p className="text-white mb-2">{exec.position}</p>
                <p className="text-white mb-2">{exec.major}</p>
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-4">
              <p className="text-white mb-3">{exec.description}</p>
              <p className="text-white">Fun Fact: {exec.fact}</p>
              <a
                href={exec.linkedin}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
