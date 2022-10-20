import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Project from "./Components/Project";
// Global Styles
import GlobalStyles from "./GlobalStyles";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/projects/:projectId" element={<Project />} />
      <Route path="/about" element={<h1>About Me</h1>} />
    </Routes>
    <Footer />
    <GlobalStyles />
  </Router>
);

export default App;
