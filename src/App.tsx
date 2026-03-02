import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/CookieConsent";
import { logPageView } from "./utils/analytics";

// Route-based code splitting with React.lazy()
const Landing = lazy(() => import("./pages/Landing"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const Reporting = lazy(() => import("./pages/Reporting"));
const CarbonCalculator = lazy(() => import("./pages/CarbonCalculator"));
const SustainabilityCheck = lazy(() => import("./pages/SustainabilityCheck"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

// Loading component with proper height to prevent CLS
const PageLoader = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    width: "100%",
  }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

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
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;
