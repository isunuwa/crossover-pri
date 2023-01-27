import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="ap-wide">
      <Header />
      <Routes>
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path={process.env.PUBLIC_URL} element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
