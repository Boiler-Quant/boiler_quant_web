import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

const Main = () => {
  const theme = useTheme();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/purdue_image.jpg')`, // Main hero image
        }}
      >
        <div className="absolute bottom-16 left-10 sm:left-20 right-10 sm:right-20 text-white font-catchy">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Empowering Tomorrow's Financial Leaders
          </h1>
          <p className="mt-4 text-lg sm:text-2xl">
            Join us to explore the future quant at Purdue.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce mt-2">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-40 px-20 bg-gray-100 flex flex-col items-center w-full">
        <h2 className="text-5xl font-bold mb-12 font-frank">What We Do</h2>
        <div className="container space-y-16">
          <hr className="my-12 border-gray-800" />
          {/* Section 1 */}
          <Section
            title="Networking Opportunities"
            content="We connect Purdue students with top quant firms and industry leaders through speaker series and company visits."
            animation="slideInLeft"
          />

          {/* Horizontal Line */}
          <hr className="my-12 border-gray-800" />

          {/* Section 2 */}
          <Section
            title="Interview Preparation"
            content="Participate in workshops and weekly meetings to practice quant interviews, focusing on probabilities, math, and programming."
            animation="slideInRight"
          />

          {/* Horizontal Line */}
          <hr className="my-12 border-gray-800" />

          {/* Section 3 */}
          <Section
            title="Community Building"
            content="Join a community of like-minded students passionate about quant, and collaborate on impactful projects."
            animation="slideInLeft"
          />
        </div>
      </section>

      {/* Club Highlights Section */}
      <section className="py-40 px-20 flex flex-col items-center bg-white">
        <h2 className="text-5xl font-bold mb-12 font-frank">
          Fall `24 Highlights
        </h2>
        <div className="container space-y-16">
          <Highlight
            image="/purdue_image.jpg"
            title="Exclusive Speaker Sessions"
            content="Gain insights from industry leaders who share their journeys and advice for aspiring financial professionals."
          />
          {/* Highlight 2 */}
          <Highlight
            image="/purdue_image.jpg"
            title="Case Competitions"
            content="Showcase your analytical and problem-solving skills by participating in high-stakes competitions."
            reverse
          />
          {/* Highlight 3 */}
          <Highlight
            image="/purdue_image.jpg"
            title="Social Events"
            content="Build connections and unwind at our fun and engaging social events designed for all members."
          />{" "}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-40 px-20 bg-gray-100 text-center">
        <h2 className="text-5xl font-bold mb-8 font-catchy">Join Us</h2>
        <p className="text-2xl mb-12">
          The application for 2025 Spring will be open on Jan. 19th, 2025!
        </p>
        <Link
          to="/join-us"
          className={`inline-block ${theme.highlight} text-white text-lg font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors`}
        >
          Learn More
        </Link>
      </section>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-50%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(50%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-50%);
            opacity: 0;
          }
        }
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(50%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

const Section = ({ title, content, animation }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const animationStyle = inView
    ? {
        animation: `${animation} 0.7s ease-out forwards`,
      }
    : {
        animation: `${
          animation.includes("Left") ? "slideOutLeft" : "slideOutRight"
        } 0.7s ease-out forwards`,
      };

  return (
    <div
      ref={ref}
      className="flex items-center"
      style={{
        opacity: inView ? 1 : 0,
        ...animationStyle,
      }}
    >
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold font-frank">{title}</h3>
        <p className="text-2xl font-serif">{content}</p>
      </div>
    </div>
  );
};

const Highlight = ({ image, title, content, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8`}
    >
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="highlight-image rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 space-y-4">
        <h3 className="text-3xl font-semibold font-frank">{title}</h3>
        <p className="text-2xl font-serif">{content}</p>
      </div>
    </div>
  );
};

export default Main;
