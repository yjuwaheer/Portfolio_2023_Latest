import React from "react";
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

function App() {
  return (
    <div className="flex justify-center">
      <div className="lg:w-[1200px] min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center text-4xl">
                  404
                </div>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
