import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

const theme = {
  background: "bg-[#211e1f]",
  bg_black: "bg-black",
  bg_white: "bg-white",
  text_white: "text-white",
  text_black: "text-black",
  dust: "bg-[#EBD99F]",
  hover_dust: "hover:bg-[#D4C38B]",
  aged: "bg-[#8E6F3E]",
  hover_aged: "hover:bg-[#7A5F35]",
};

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
