// React and Tailwind CSS setup for the Purdue Quantitative Finance Club Website

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";
import About from "./components/About";
import BottomContact from "./components/BottomContact";
import Projects from "./components/Projects";

import { ThemeProvider, useTheme } from "./theme-context";
import "./fonts.css";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="font-sans">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
      <BottomContact />
    </ThemeProvider>
  );
};

export default App;
