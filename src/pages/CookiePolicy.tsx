import React from "react";
import { Container } from "react-bootstrap";
import SEO from "@/components/SEO";
import PageHeader from "@/components/common/PageHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const CookiePolicy: React.FC = () => {
  useScrollToTop();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy",
    description: "Cookie Policy for Sustainability Portal",
  };

  return (
    <div className="reporting-page">
      <SEO
        title="Cookie Policy"
        description="Cookie Policy for Sustainability Portal"
        keywords="cookie policy, cookies, tracking"
        canonicalUrl="https://www.smereportingportal.org/cookie-policy"
        structuredData={structuredData}
      />

      <PageHeader
        title="Cookie Policy"
        subtitle="How we use cookies on our website"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Cookie Policy" }]}
        showLogos={false}
      />

      <div className="reporting-content">
        <Container fluid>
          <div className="policy-content">
            <p className="intro-text">
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>

            <section className="policy-section">
              <p>
                Our website uses cookies to distinguish you from other users of
                our website. This helps us to provide you with a good experience
                when you browse our website and also allows us to improve our
                site.
              </p>
              <p>
                A cookie is a small file of letters and numbers that we store on
                your browser or the hard drive of your computer if you agree.
                Cookies contain information that is transferred to your
                computer's hard drive.
              </p>
            </section>

            <section className="policy-section">
              <h2>Types of Cookies We Use</h2>

              <h3>Analytical or performance cookies</h3>
              <p>
                These allow us to recognise and count the number of visitors and
                to see how visitors move around our website when they are using
                it. This helps us to improve the way our website works, for
                example, by ensuring that users are finding what they are
                looking for easily.
              </p>
            </section>

            <section className="policy-section">
              <h2>Individual Cookies</h2>
              <p>
                You can find more information about the individual cookies we
                use and the purposes for which we use them in the table below:
              </p>

              <div className="table-responsive mt-3">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>More Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Cookie Consent</strong>
                        <br />
                        userCookieConsent
                      </td>
                      <td>
                        This cookie is essential for our site to remember your
                        cookie consent preferences. It stores whether you have
                        accepted or rejected analytics cookies. Expires after 1
                        year.
                      </td>
                      <td>Essential cookie</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Google Analytics</strong>
                        <br />
                        _ga, _ga_YS25EYM317
                      </td>
                      <td>
                        These cookies enable us to understand how our website is
                        used by counting visitors and tracking page views. Your
                        IP address is anonymized for GDPR compliance. We do not
                        use this data for advertising or share it with third
                        parties. Only set if you accept analytics cookies.
                        Expires after 2 years.
                      </td>
                      <td>
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Privacy Policy
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="policy-section">
              <h2>Your Cookie Choices</h2>
              <p>
                When you first visit our website, you will see a cookie consent
                banner with the following options:
              </p>
              <ul>
                <li>
                  <strong>Strictly necessary cookies:</strong> ALWAYS ACTIVE
                </li>
                <li>
                  <strong>Analytical or performance cookies:</strong> You can
                  choose to accept or reject
                </li>
              </ul>
              <p>
                You can also choose to "Reject All" cookies in the cookie
                banner.
              </p>
              <p>
                However, if you use your browser settings to block all cookies
                (including essential cookies) you may not be able to access all
                or parts of our website.
              </p>
              <p>
                Except for essential cookies, all cookies will expire after
                their specified duration (1-2 years depending on the cookie
                type).
              </p>
            </section>

            <section className="policy-section">
              <h2>Managing Cookies in Your Browser</h2>
              <p>
                Most browsers allow you to refuse or delete cookies through
                their settings. You can also install the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>{" "}
                to prevent Google Analytics from collecting data.
              </p>
            </section>

            <section className="policy-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated "Last Updated" date.
              </p>
            </section>

            <section className="policy-section">
              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about our use of cookies,
                please contact us through the website.
              </p>
            </section>
          </div>
        </Container>
      </div>

      <div className="page-footer-bar"></div>
    </div>
  );
};

export default CookiePolicy;
