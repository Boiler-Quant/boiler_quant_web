import React from "react";
import { useTheme } from "../theme-context";

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
          src="submark_white_transparent.png"
          alt="boiler quant logo"
        />
        {/* Caption */}
        <p className="mt-4 text-3xl font-semibold font-frank">
          PURDUE'S LEADING QUANT FINANCE COMMUNITY
        </p>
      </div>

      <div className={`py-14 px-10 bg-gray-100 ${theme.text_black}`}>
        <section className="w-full">
          <h2 className="text-5xl font-bold font-frank pt-5 pb-6">
            Our Mission
          </h2>
          <p className="text-2xl font-serif py-3">
            At Boiler Quant, we are driven by a shared passion for exploring
            quantitative finance.
          </p>
          <p className="text-2xl font-serif py-3">
            We bring together enthusiastic students who are eager to dive into
            the exciting intersection of finance, mathematics, and data science.
          </p>
          <p className="text-2xl font-serif py-3">
            Our projects go beyond theory, immersing members in STEM-driven
            research and projects that replicate real-world challenges. We
            believe in the power of hands-on experience to transform knowledge
            into expertise, and our members are the ones to make it happen.
          </p>
          <p className="text-2xl font-serif py-3">
            Beyond projects, Boiler Quant is committed to education and career
            development. We strive to enlighten and inspire the next generation
            of quants.
          </p>
        </section>
      </div>

      <div className={`py-14 px-10 bg-gray-200 ${theme.text_black}`}>
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
      </div>

      <div className={`py-14 px-10 bg-gray-100 ${theme.text_black}`}>
        <h2 className="text-4xl sm:text-6xl font-bold font-catchy mb-10 text-center">
          2025 Executive Board
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-5 xl:grid-rows-1 gap-12 px-8 items-stretch">
          {data.map((exec, index) => (
            <div
              key={index}
              className={`flex flex-col max-w-lg w-full mx-auto `}
            >
              <Card2 exec={exec} index={index} />
            </div>
          ))}
        </div>
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

const Card2 = ({ exec, index }) => {
  return (
    <div key={index} className={`flex flex-col max-w-lg w-full mx-auto`}>
      {/* Name and Position */}
      <div>
        <h3 className="text-3xl font-bold font-frank pb-2">
          {exec["fields"]["Full Name"]}
        </h3>
        <p className="text-xl font-semibold font-serif">
          {exec["fields"]["Role"]}
        </p>
      </div>

      <hr className="my-5 border-gray-900 opacity-30" />

      {/* Image */}
      <div
        className="mx-auto mb-4 px-4 w-full"
        style={{
          aspectRatio: "1/1", // Maintain aspect ratio
          backgroundImage: `url(${exec["fields"]["Photo"][0]["url"]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Description */}
      <div>
        <p className="text-2xl font-semibold mb-3 font-serif">
          {exec["fields"]["Major"]}
        </p>
        <p className=" mb-3 text-xl font-serif">
          Interests: {exec["fields"]["Interests"]}
        </p>
        <a
          href={exec["fields"]["LinkedIn"]}
          className="text-blue-400 hover:underline text-xl cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};
