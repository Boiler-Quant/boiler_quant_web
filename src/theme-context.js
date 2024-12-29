import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

const theme = {
  background: "bg-[#2a2321]",
  background_light: "bg-[#F9F7F3]",
  text: "text-[#FFFFFF]",
  primary: "bg-[#594B36]",
  secondary: "bg-[#7F8E79]",
  highlight: "bg-[#7F8E79]",
  highlightText: "text-[#7F8E79]",
};

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
