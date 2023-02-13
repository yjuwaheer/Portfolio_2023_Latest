import React, { useContext } from "react";
import "./App.css";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Error from "./pages/Error";
// Context
import { GlobalContext, IGlobalContext } from "./contexts/GlobalContext";

function App() {
  // Context
  const { darkMode } = useContext<IGlobalContext>(GlobalContext);

  return (
    <div className={`flex justify-center ${darkMode ? "bg-[#242424]" : ""}`}>
      <div className="lg:w-[1200px] min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
