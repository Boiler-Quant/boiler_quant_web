import React, { useEffect, useState } from "react";
import { useTheme } from "../theme-context";
import { fetchAirtableData } from "../utils/airtableService";

const About = ({ data }) => {
  const theme = useTheme();

  return (
    <div>
      {/* Top Banner */}
      <div className="relative aspect-[2/1] flex flex-col items-center justify-center bg-black text-white">
        {/* Image */}
        <img className="w-1/4" src="bq_logo_white.png" />
        {/* Caption */}
        <p className="mt-4 text-3xl font-semibold font-catchy">
          Your Companion to Quant Finance
        </p>
      </div>

      <div className={`py-24 px-10 ${theme.background} ${theme.text}`}>
        <section className="pb-24 w-full">
          <h2 className="text-5xl font-bold font-frank mb-10 mt-3">
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

        <h2 className="text-4xl sm:text-6xl font-bold font-catchy mb-10 mt-3 text-center">
          2025 Executive Board
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-8 px-24 items-center">
          {data.map((exec, index) => (
            <Card2 exec={exec} index={index} />
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

const Card1 = ({ exec, index }) => {
  return (
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
            backgroundImage: `url(${exec["fields"]["Photo"][0]["url"]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 font-frank">
            {exec["fields"]["Full Name"]}
          </h3>
          <p className="text-white mb-2">{exec["fields"]["Role"]}</p>
          <p className="text-white mb-2">{exec["fields"]["Major"]}</p>
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-4">
        <p className="text-white">: {exec["fields"]["Interests"]}</p>
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
  );
};

const Card2 = ({ exec, index }) => {
  return (
    <div
      key={index}
      className={`${
        index < 2 ? "col-span-3" : "col-span-2"
      } p-10 flex flex-col max-w-lg w-full mx-auto`}
    >
      {/* Name and Position */}
      <div>
        <h3 className="text-3xl font-bold font-frank pb-3">
          {exec["fields"]["Full Name"]}
        </h3>
        <p className="text-xl text-white">{exec["fields"]["Role"]}</p>
      </div>

      <hr className="my-5 border-gray-300 opacity-30" />

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
        <p className="text-2xl font-semibold text-white mb-3">
          {exec["fields"]["Major"]}
        </p>
        <p className="text-white mb-3 text-xl">
          Interests: {exec["fields"]["Interests"]}
        </p>
        <a
          href={exec["fields"]["LinkedIn"]}
          className="text-blue-400 hover:underline text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};
