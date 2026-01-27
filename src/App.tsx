import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./pages/Landing";
import FAQs from "./pages/FAQs";
import Sustainability from "./pages/Sustainability";
import Reporting from "./pages/Reporting";
import CarbonCalculator from "./pages/CarbonCalculator";
import SustainabilityCheck from "./pages/SustainabilityCheck";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfService from "./pages/TermsOfService";
import CookieConsent from "./components/CookieConsent";
import { logPageView } from "./utils/analytics";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views when route changes
    logPageView(location.pathname + location.search);
  }, [location]);

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
          <Route
            path="/sustainability-check"
            element={<SustainabilityCheck />}
          />
          <Route path="/carbon-calculator" element={<CarbonCalculator />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;
