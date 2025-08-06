import React, { useEffect } from "react";
import { useTheme } from "../../theme-context";
import LargeExecutiveBoard from "./LargeExecutiveBoard";
import SmallExecutiveBoard from "./SmallExecutiveBoard";
import { CircularProgress } from "@mui/material";

const About = ({ data }) => {
  const theme = useTheme();

  return (
    <div>
      {/* Top Banner */}
      <div
        className={`relative aspect-[2/1] flex flex-col items-center justify-center ${theme.background} ${theme.text_white}`}
      >
        {/* Image */}
        <img
          className="w-1/4"
          src="submark_white.svg"
          alt="boiler quant logo"
        />
        {/* Caption */}
        <p className="mt-4 text-body-md font-semibold font-frank">
          PURDUE'S LEADING QUANT FINANCE COMMUNITY
        </p>
      </div>

      <div className={`section-container-sm bg-gray-100 ${theme.text_black}`}>
        <section className="w-full max-w-4xl mx-auto">
          <h2 className="text-heading-md font-bold font-frank mb-section-sm">
            Our Mission
          </h2>
          <div className="space-y-responsive-sm">
            <p className="text-body-md font-serif">
              At Boiler Quant, we are driven by a shared passion for exploring
              quantitative finance.
            </p>
            <p className="text-body-md font-serif">
              We bring together enthusiastic students who are eager to dive into
              the exciting intersection of finance, mathematics, and data
              science.
            </p>
            <p className="text-body-md font-serif">
              Our projects go beyond theory, immersing members in STEM-driven
              research and projects that replicate real-world challenges. We
              believe in the power of hands-on experience to transform knowledge
              into expertise, and our members are the ones to make it happen.
            </p>
            <p className="text-body-md font-serif">
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
    </div>
  );
};

export default About;

const Section = ({ title, content }) => {
  return (
    <div className="grid grid-rows-[80px_auto]">
      <h3 className="text-heading-sm font-frank leading-none">{title}</h3>
      <p className="text-body-md font-serif">{content}</p>
    </div>
  );
};
