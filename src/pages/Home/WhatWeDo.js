import { useInView } from "react-intersection-observer";

const WhatWeDo = () => {
  return (
    <section className="py-r-10 px-r-5 bg-gray-100 flex flex-col items-center w-full">
      <h2 className="text-r-lg font-bold mb-r-3 font-frank">What We Do</h2>
      <div className="container space-r-y-4">
        <hr className="my-r-3 border-gray-800" />
        {/* Section 1 */}
        <Section
          title="Networking Opportunities"
          content="We connect Purdue students with top quant firms and industry leaders through speaker series and company visits."
          animation="slideInLeft"
        />

        {/* Horizontal Line */}
        <hr className="my-r-3 border-gray-800" />

        {/* Section 2 */}
        <Section
          title="Interview Preparation"
          content="Participate in workshops and weekly meetings to practice quant interviews, focusing on probabilities, math, and programming."
          animation="slideInRight"
        />

        {/* Horizontal Line */}
        <hr className="my-r-3 border-gray-800" />

        {/* Section 3 */}
        <Section
          title="Community Building"
          content="Join a community of like-minded students passionate about quant, and collaborate on impactful projects."
          animation="slideInLeft"
        />
      </div>
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
    </section>
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
      <div className="space-r-y-4">
        <h3 className="text-r-base font-semibold font-frank">{title}</h3>
        <p className="text-r-sm font-serif">{content}</p>
      </div>
    </div>
  );
};

export default WhatWeDo;
