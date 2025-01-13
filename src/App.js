// React and Tailwind CSS setup for the Purdue Quantitative Finance Club Website

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";
import About from "./components/About";
import BottomContact from "./components/BottomContact";
import Projects from "./components/Projects";
import InProgressPage from "./components/InProgressPage";

import { ThemeProvider, useTheme } from "./theme-context";
import "./fonts.css";
import "./App.css";
import JoinUs from "./components/JoinUs";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/fetchData?tableName=Executive"); // Use relative path
        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const result = await response.json();
        setData(result.records); // Airtable returns data in a `records` array
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    window.data = data;
  }, [data]);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="font-sans">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<About data={data} />} />
            <Route path="/projects" element={<InProgressPage />} />
            <Route path="/quizzes" element={<InProgressPage />} />
            <Route path="/join-us" element={<JoinUs />} />
          </Routes>
        </div>
      </Router>
      <BottomContact />
    </ThemeProvider>
  );
};

export default App;
