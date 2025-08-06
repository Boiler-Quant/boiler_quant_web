import { useInView } from "react-intersection-observer";

const WhatWeDo = () => {
  return (
    <section className="section-container bg-gray-100">
      <h2 className="section-title">What We Do</h2>
      <div className="section-content">
        <hr className="section-margin-sm border-gray-800" />
        {/* Section 1 */}
        <Section
          title="Project Work"
          content="We provide hands-on opportunities to work on real-world quantitative finance projects, gaining valuable experience and practical skills."
          animation="slideInLeft"
        />

        {/* Horizontal Line */}
        <hr className="section-margin-sm border-gray-800" />

        {/* Section 2 */}
        <Section
          title="Networking Opportunities"
          content="We connect Purdue students with top quant firms and industry leaders through speaker series and company visits."
          animation="slideInRight"
        />

        {/* Horizontal Line */}
        <hr className="section-margin-sm border-gray-800" />

        {/* Section 3 */}
        <Section
          title="Interview Preparation"
          content="Participate in workshops and weekly meetings to practice quant interviews, focusing on probabilities, math, and programming."
          animation="slideInLeft"
        />

        {/* Horizontal Line */}
        <hr className="section-margin-sm border-gray-800" />

        {/* Section 4 */}
        <Section
          title="Community Building"
          content="Join a community of like-minded students passionate about quant, and collaborate on impactful projects."
          animation="slideInRight"
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
      <div className="space-y-responsive-sm">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default WhatWeDo;
