import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Navbar/Home";
// import Contact from "./Navbar/Contact";
import Gallery from "./Navbar/Gallery";
import Investment from "./Navbar/Investment";
import Projects from "./Navbar/Projects";

import Footer from "./Footer/Footer";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/photo-gallery" element={<Home />} exact></Route>
          <Route path="/about" element={<About />} exact></Route>
          {/* <Route path="/contact" element={<Contact />} exact></Route> */}
          <Route path="/gallery" element={<Gallery />} exact></Route>
          <Route path="/investment" element={<Investment />} exact></Route>
          <Route path="/projects" element={<Projects />} exact></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
