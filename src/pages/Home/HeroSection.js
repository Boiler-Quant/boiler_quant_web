import { useTheme } from "../../theme-context";

const HeroSection = () => {
  const theme = useTheme();
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url('/purdue_image.jpg')`, // Default image for larger screens
      }}
    >
      <div
        className="sm:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/purdue_image_mobile.jpg')`, // Image for smaller screens
        }}
      ></div>
      <div className={`hero-content ${theme.text_white}`}>
        <h1 className="hero-title">PURDUE'S LEADING QUANT FINANCE COMMUNITY</h1>
        <p className="hero-subtitle">
          Join us to explore the future of quant at Purdue.
        </p>
      </div>
      <div className="hero-scroll-indicator">
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
  );
};

export default HeroSection;
