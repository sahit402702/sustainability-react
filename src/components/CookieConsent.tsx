import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import { initGA } from "@/utils/analytics";

// Feature flag to enable/disable cookie banner
// Set to false to hide the banner, true to show it
const ENABLE_COOKIE_BANNER = true;

const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only show banner if feature is enabled
    if (!ENABLE_COOKIE_BANNER) return;

    // Show banner after a short delay for better UX
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    // Initialize Google Analytics when user accepts
    initGA();
    console.log("Analytics enabled");
  };

  const handleDecline = () => {
    // User declined - don't initialize analytics
    console.log("Analytics declined");
  };

  if (!ENABLE_COOKIE_BANNER || !showBanner) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept analytics cookies"
      declineButtonText="Reject analytics cookies"
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      cookieName="userCookieConsent"
      containerClasses="cookie-consent-banner"
      buttonWrapperClasses="cookie-banner-buttons"
      expires={365}
    >
      <div className="cookie-content-wrapper">
        <h2>Cookies on this website</h2>
        <p>We use some essential cookies to make this website work.</p>
        <p>
          We'd like to set additional cookies to understand how you use this
          website. We use Google Analytics to measure how you use the website so
          we can improve it based on user needs. We do not allow Google to use
          or share the data about how you use this site.
        </p>
        <details>
          <summary>Find out more about cookies on this website</summary>
          <div className="details-content">
            <p>
              For more information, see our{" "}
              <Link to="/privacy-policy">privacy policy</Link>,{" "}
              <Link to="/cookie-policy">cookie policy</Link>, and{" "}
              <Link to="/terms-of-service">terms of service</Link>.
            </p>
          </div>
        </details>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
