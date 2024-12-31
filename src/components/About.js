import React, { useEffect, useState } from "react";
import { useTheme } from "../theme-context";
import { fetchAirtableData } from "../utils/airtableService";

const About = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/fetchData?tableName=Executive"); // Use relative path
        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const result = await response.json();
        setData(result.records); // Airtable returns data in a `records` array
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    window.data = data;
  }, [data]);

  const theme = useTheme();

  return (
    <div className={`py-24 px-10 ${theme.background} ${theme.text}`}>
      <h2 className="text-2xl sm:text-4xl font-bold font-catchy mb-10 mt-3">
        2025 Executive Board
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.map((exec, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-0 shadow-lg p-6 flex flex-col border border-white"
          >
            <div className="flex">
              <div
                className="mr-6"
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
                  {exec["fields"]["Full Name"]}
                </h3>
                <p className="text-white mb-2">{exec["fields"]["Role"]}</p>
                <p className="text-white mb-2">{exec["fields"]["Major"]}</p>
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-4">
              <p className="text-white mb-3">Some Description Placeholder</p>
              <p className="text-white">
                Fun Fact: {exec["fields"]["Interests"]}
              </p>
              <a
                href={exec["fields"]["LinkedIn"]}
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
