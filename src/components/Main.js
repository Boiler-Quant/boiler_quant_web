import React from "react";

const Main = () => {
  return (
    <div>
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
            Join us to explore the future of finance at Purdue.
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
    </div>
  );
};

export default Main;
