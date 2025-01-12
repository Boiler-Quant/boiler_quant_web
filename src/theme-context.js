import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

const theme = {
  background: "bg-[#211e1f]",
  bg_black: "bg-black",
  bg_white: "bg-white",
  text_white: "text-white",
  text_black: "text-black",
  dust: "bg-[#EBD99F]",
  aged: "bg-[#8E6F3E]",
};

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
