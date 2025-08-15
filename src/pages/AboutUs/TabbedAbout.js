import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../theme-context";
import LargeExecutiveBoard from "./LargeExecutiveBoard";
import SmallExecutiveBoard from "./SmallExecutiveBoard";
import { CircularProgress } from "@mui/material";

const TabbedAbout = ({ data }) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      {/* Top Banner */}
      <div
        className={`relative aspect-[2/1] flex flex-col items-center justify-center ${theme.background} ${theme.text_white}`}
      >
        {/* Image */}
        <img
          className="w-1/5 xl:w-1/6"
          src="submark_white.svg"
          alt="boiler quant logo"
        />
        {/* Caption */}
        <p className="mt-4 text-body-sm xl:text-body-md font-semibold font-frank">
          PURDUE'S LEADING QUANT FINANCE COMMUNITY
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="w-full bg-gray-100 border-b border-gray-200">
        <div className="max-w-5xl xl:max-w-4xl mx-auto px-8 xl:px-12">
          <div className="flex">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex-1 py-3 xl:py-4 px-4 xl:px-6 text-center font-frank font-semibold text-sm xl:text-base transition-all duration-200 ${
                activeTab === "overview"
                  ? `${theme.background} ${theme.text_white}`
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("past-semesters")}
              className={`flex-1 py-3 xl:py-4 px-4 xl:px-6 text-center font-frank font-semibold text-sm xl:text-base transition-all duration-200 ${
                activeTab === "past-semesters"
                  ? `${theme.background} ${theme.text_white}`
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
              }`}
            >
              Past Semesters
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-screen">
        {activeTab === "overview" && <OverviewTab data={data} />}
        {activeTab === "past-semesters" && <PastSemestersTab />}
      </div>
    </div>
  );
};

// Overview Tab Component
const OverviewTab = ({ data }) => {
  const theme = useTheme();

  return (
    <>
      <div className={`section-container-sm bg-gray-100 ${theme.text_black}`}>
        <section className="w-full max-w-5xl xl:max-w-4xl mx-auto px-8 xl:px-12">
          <h2 className="text-heading-sm xl:text-heading-md font-bold font-frank mb-section-sm">
            Our Mission
          </h2>
          <div className="space-y-responsive-sm">
            <p className="text-body-sm xl:text-body-md font-serif">
              At Boiler Quant, we are driven by a shared passion for exploring
              quantitative finance.
            </p>
            <p className="text-body-sm xl:text-body-md font-serif">
              We bring together enthusiastic students who are eager to dive into
              the exciting intersection of finance, mathematics, and data
              science.
            </p>
            <p className="text-body-sm xl:text-body-md font-serif">
              Our projects go beyond theory, immersing members in STEM-driven
              research and projects that replicate real-world challenges. We
              believe in the power of hands-on experience to transform knowledge
              into expertise, and our members are the ones to make it happen.
            </p>
            <p className="text-body-sm xl:text-body-md font-serif">
              Beyond projects, Boiler Quant is committed to education and career
              development. We strive to enlighten and inspire the next
              generation of quants.
            </p>
          </div>
        </section>
      </div>

      {/* Executive Board Section with Loading State */}
      {!data || data.length === 0 ? (
        <div className="section-container-sm bg-gray-200 flex flex-col items-center justify-center">
          <CircularProgress
            size={60}
            thickness={4}
            sx={{ color: "#1f2937", marginBottom: 2 }}
          />
          <p className="text-body-md font-catchy text-gray-700">
            Fetching executive board data...
          </p>
        </div>
      ) : (
        <>
          <div className="block md:hidden">
            <SmallExecutiveBoard data={data} />
          </div>
          <div className="hidden md:block">
            <LargeExecutiveBoard data={data} />
          </div>
        </>
      )}
    </>
  );
};

// Past Semesters Tab Component
const PastSemestersTab = () => {
  const theme = useTheme();

  return (
    <>
      {/* Fall 2024 Highlights Section */}
      <div className="py-12 xl:py-16 px-4 xl:px-6 bg-white">
        <div className="max-w-6xl xl:max-w-5xl mx-auto px-8 xl:px-12">
          <h2 className="text-heading-sm xl:text-heading-md font-bold mb-6 xl:mb-8 sm:mb-8 xl:sm:mb-12 md:mb-12 xl:md:mb-16 lg:mb-16 xl:lg:mb-20 font-frank text-center">
            Fall 2024 Highlights
          </h2>
          <div className="space-y-12 xl:space-y-16">
            <Highlight
              theme={theme}
              image="/2024_fall/project_presentation_day.jpg"
              title="Project Presentation Day"
              content="This past semester we had 6 total projects, see more information below."
              button
            />
            {/* Highlight 2 */}
            <Highlight
              theme={theme}
              image="/2024_fall/chicago_office_tours.jpg"
              title="Chicago Office Tours"
              content="On our Chicago Trek, we were fortunate to visit Old Mission, WH Trading, Belvedere, and Akuna Capital."
              reverse
            />
            {/* Highlight 3 */}
            <Highlight
              theme={theme}
              image="/2024_fall/competitive_games.jpg"
              title="Competitive Games"
              content="Throughout the semester, we played various games to improve probabilistic thinking and decision making under uncertainty."
            />
          </div>
        </div>
      </div>

      {/* Future semesters can be added here */}
      <div className="w-full bg-gray-100 py-12 xl:py-16">
        <div className="max-w-5xl xl:max-w-4xl mx-auto text-center px-8 xl:px-12">
          <h2 className="text-heading-sm xl:text-heading-md font-bold font-frank mb-section-sm">
            More Semesters Coming Soon
          </h2>
          <p className="text-body-sm xl:text-body-md font-serif text-gray-600">
            We'll be adding highlights from previous semesters as we continue to
            document our journey.
          </p>
        </div>
      </div>
    </>
  );
};

// Highlight Component (reused from PastSemesters)
const Highlight = ({ theme, image, title, content, reverse, button }) => {
  return (
    <div
      className={`card-container ${
        reverse ? "flex-responsive-reverse" : "flex-responsive"
      }`}
    >
      <div className="flex-1">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        {button && (
          <div className="flex justify-center">
            <Link
              to="/projects"
              className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-body-xs xl:text-body-sm font-semibold py-1.5 xl:py-2 px-3 xl:px-4 rounded-lg transition-colors`}
            >
              Learn More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedAbout;
