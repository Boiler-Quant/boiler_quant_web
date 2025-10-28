import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home/Home";
import TabbedAbout from "./pages/AboutUs/TabbedAbout";
import BottomContact from "./components/BottomContact";
import Projects from "./pages/Projects/Projects";
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
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <ScrollToTop />
          <NavigationBar />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<TabbedAbout />} />
              <Route path="/projects" element={<Projects />} />
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
