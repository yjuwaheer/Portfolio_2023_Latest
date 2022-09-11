import React from "react";
import "./App.css";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/global/Navbar";
// Pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] min-h-screen">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
