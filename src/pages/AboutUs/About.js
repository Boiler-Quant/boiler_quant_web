import React, { useEffect } from "react";
import { useTheme } from "../../theme-context";
import ExecutiveBoard from "./ExecutiveBoard";

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

      {/* <div className={`py-14 px-10 bg-gray-200 ${theme.text_black}`}>
        <section className="w-full">
          <h2 className="text-5xl font-bold font-frank pb-10 pt-3">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-center">
            <Section
              title="Networking Opportunities"
              content="We connect Purdue students with top quant firms and industry leaders through speaker series and company visits."
            />

            <Section
              title="Interview Preparation"
              content="Participate in workshops and weekly meetings to practice quant interviews, focusing on probabilities, math, and programming."
            />

            <Section
              title="Community Building"
              content="Join a community of like-minded students passionate about quant, and collaborate on impactful projects."
            />
          </div>
        </section>
      </div> */}

      <ExecutiveBoard data={data} />
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
