import React from "react";
import { useTheme } from "../theme-context";

const InProgressPage = () => {
  const theme = useTheme();
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${theme.background}`}
    >
      <p className={`text-white text-2xl font-frank pb-5`}>This page is</p>
      <h1 className={`text-white text-5xl font-frank `}>UNDER CONSTRUCTION</h1>
    </div>
  );
};

export default InProgressPage;
