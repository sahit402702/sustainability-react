import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./pages/Landing";
import FAQs from "./pages/FAQs";
import Sustainability from "./pages/Sustainability";
import Reporting from "./pages/Reporting";
import CaseStudy from "./pages/CaseStudy";
import CarbonCalculator from "./pages/CarbonCalculator";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/case-studies" element={<CaseStudy />} />
          <Route path="/carbon-calculator" element={<CarbonCalculator />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
