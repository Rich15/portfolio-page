import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
// Global Styles
import GlobalStyles from "./GlobalStyles";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/projects" element={<h1>Projects</h1>} />
      <Route path="/about" element={<h1>About Me</h1>} />
    </Routes>
    <Footer />
    <GlobalStyles />
  </Router>
);

export default App;
