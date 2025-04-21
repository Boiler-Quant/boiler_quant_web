// React and Tailwind CSS setup for the Purdue Quantitative Finance Club Website

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import BottomContact from "./components/BottomContact";
import Projects from "./pages/Projects/Projects";
import InProgressPage from "./components/InProgressPage";
import Sponsors from "./pages/Sponsors/Sponsors";

import { ThemeProvider } from "./theme-context";
import "./fonts.css";
import "./App.css";
import JoinUs from "./pages/JoinUs/JoinUs";
import "./styles.css";

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
  const [executiveData, setExecutiveData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const executiveResponse = await fetch(
          "/api/fetchData?tableName=Executive"
        ); // Use relative path
        if (!executiveResponse.ok) {
          throw new Error("Error fetching data");
        }

        const executiveResult = await executiveResponse.json();
        setExecutiveData(executiveResult.records);

        const projectResponse = await fetch(
          "/api/fetchData?tableName=Projects"
        ); // Use relative path
        if (!projectResponse.ok) {
          throw new Error("Error fetching data");
        }

        const projectResult = await projectResponse.json();
        setProjectData(projectResult.records);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <ScrollToTop />
          <NavigationBar />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/about-us"
                element={<About data={executiveData} />}
              />
              <Route
                path="/projects"
                element={<Projects projects={projectData} />}
              />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/join-us" element={<JoinUs />} />
            </Routes>
          </div>
          <BottomContact />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
