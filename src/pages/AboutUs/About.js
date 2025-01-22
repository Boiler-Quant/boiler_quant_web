import React, { useEffect } from "react";
import { useTheme } from "../../theme-context";
import LargeExecutiveBoard from "./LargeExecutiveBoard";
import SmallExecutiveBoard from "./SmallExecutiveBoard";

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
        <p className="mt-r-1 text-r-sm font-semibold font-frank">
          PURDUE'S LEADING QUANT FINANCE COMMUNITY
        </p>
      </div>

      <div className={`py-r-5 px-r-3 bg-gray-100 ${theme.text_black}`}>
        <section className="w-full">
          <h2 className="text-r-lg font-bold font-frank py-r-1">Our Mission</h2>
          <p className="text-r-sm font-serif py-r-0-5">
            At Boiler Quant, we are driven by a shared passion for exploring
            quantitative finance.
          </p>
          <p className="text-r-sm font-serif py-r-0-5">
            We bring together enthusiastic students who are eager to dive into
            the exciting intersection of finance, mathematics, and data science.
          </p>
          <p className="text-r-sm font-serif py-r-0-5">
            Our projects go beyond theory, immersing members in STEM-driven
            research and projects that replicate real-world challenges. We
            believe in the power of hands-on experience to transform knowledge
            into expertise, and our members are the ones to make it happen.
          </p>
          <p className="text-r-sm font-serif py-r-0-5">
            Beyond projects, Boiler Quant is committed to education and career
            development. We strive to enlighten and inspire the next generation
            of quants.
          </p>
        </section>
      </div>

      <div className="block md:hidden">
        <SmallExecutiveBoard data={data} />
      </div>
      <div className="hidden md:block">
        <LargeExecutiveBoard data={data} />
      </div>
    </div>
  );
};

export default About;

const Section = ({ title, content }) => {
  return (
    <div className="grid grid-rows-[80px_auto]">
      {/* <div className="space-y-4"> */}
      <h3 className="text-3xl font-frank leading-none">{title}</h3>
      <p className="text-2xl font-serif">{content}</p>
      {/* </div> */}
    </div>
  );
};
