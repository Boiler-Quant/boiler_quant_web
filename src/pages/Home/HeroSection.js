import { useTheme } from "../../theme-context";

const HeroSection = () => {
  const theme = useTheme();
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/purdue_image.jpg')`, // Main hero image
      }}
    >
      <div
        className={`absolute bottom-r-4 px-r-5 ${theme.text_white} font-frank`}
      >
        <h1 className="text-r-lg font-bold">
          PURDUE'S LEADING QUANT FINANCE COMMUNITY
        </h1>
        <p className="text-r-sm">
          Join us to explore the future of quant at Purdue.
        </p>
      </div>

      <div className="absolute bottom-r-1 left-1/2 transform -translate-x-1/2">
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
