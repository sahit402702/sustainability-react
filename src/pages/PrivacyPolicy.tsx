import React from "react";
import { Container } from "react-bootstrap";
import SEO from "@/components/SEO";
import PageHeader from "@/components/common/PageHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const PrivacyPolicy: React.FC = () => {
  useScrollToTop();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description: "Privacy Policy for SME Sustainability Portal",
  };

  return (
    <div className="reporting-page">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for SME Sustainability Portal"
        keywords="privacy policy, data protection, GDPR"
        canonicalUrl="https://www.smereportingportal.org/privacy-policy"
        structuredData={structuredData}
      />

      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Privacy Policy" },
        ]}
        showLogos={false}
      />

      <div className="reporting-content">
        <Container fluid>
          <div className="policy-content">
            <p className="intro-text">
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>

            <section className="policy-section">
              <h2>Important Information and Who We Are</h2>

              <h3>Privacy Policy</h3>
              <p>
                This privacy policy gives you information about how Cognizant
                collects and uses your personal data through your use of this
                website.
              </p>
              <p>
                This website is not intended for children and we do not
                knowingly collect data relating to children.
              </p>

              <h3>Controller</h3>
              <p>
                Cognizant is the controller and responsible for your personal
                data (collectively referred to as "we", "us" or "our" in this
                privacy policy).
              </p>
              <p>
                If you have any questions about this privacy policy, including
                any requests to exercise your legal rights, please contact us
                using the information set out in the contact details section
                below.
              </p>
            </section>

            <section className="policy-section">
              <h2>The Types of Personal Data We Collect About You</h2>
              <p>
                Personal data means any information about an individual from
                which that person can be identified.
              </p>
              <p>
                We may collect, use, store and transfer different kinds of
                personal data about you which we have grouped together as
                follows:
              </p>

              <ul>
                <li>
                  <strong>Technical Data</strong> includes anonymized internet
                  protocol (IP) address, browser type and version, time zone
                  setting, operating system and platform on the devices you use
                  to access this website. We anonymize IP addresses for GDPR
                  compliance.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you
                  interact with and use our website, such as pages visited and
                  time spent on each page.
                </li>
              </ul>
              <p>
                <strong>Note:</strong> We do not collect any personal contact
                information, names, email addresses, or marketing preferences
                through this website.
              </p>

              <p>
                We also collect, use and share aggregated data such as
                statistical or demographic data which is not personal data as it
                does not directly (or indirectly) reveal your identity. For
                example, we may aggregate individuals' Usage Data to calculate
                the percentage of users accessing a specific website feature in
                order to analyse general trends in how users are interacting
                with our website to help improve the website and our service
                offering.
              </p>
            </section>

            <section className="policy-section">
              <h2>How Is Your Personal Data Collected?</h2>
              <p>
                We collect data from and about you through automated
                technologies only:
              </p>

              <h3>Automated technologies or interactions</h3>
              <p>
                As you interact with our website, we will automatically collect
                Technical Data about your equipment, browsing actions and
                patterns if you have accepted analytics cookies. We collect this
                data by using cookies. Please see our{" "}
                <a href="/cookie-policy">cookie policy</a> for further details.
              </p>

              <h3>Third parties</h3>
              <p>
                We receive anonymized Technical Data from Google Analytics,
                based outside the UK, only when you have consented to analytics
                cookies.
              </p>
            </section>

            <section className="policy-section">
              <h2>How We Use Your Personal Data</h2>

              <h3>Legal Basis</h3>
              <p>
                The law requires us to have a legal basis for collecting and
                using your personal data. We rely on one or more of the
                following legal bases:
              </p>
              <ul>
                <li>
                  <strong>Legitimate interests:</strong> We may use your
                  personal data where it is necessary to conduct our business
                  and pursue our legitimate interests, for example to prevent
                  fraud and enable us to give you the best and most secure user
                  experience.
                </li>
                <li>
                  <strong>Legal obligation:</strong> We may use your personal
                  data where it is necessary for compliance with a legal
                  obligation that we are subject to.
                </li>
                <li>
                  <strong>Consent:</strong> We rely on consent only where we
                  have obtained your active agreement to use your personal data
                  for a specified purpose, for example if you accept analytics
                  cookies.
                </li>
              </ul>

              <h3>Purposes for Which We Will Use Your Personal Data</h3>
              <p>We have set out below the ways we use your personal data:</p>

              <div className="table-responsive mt-3">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Purpose/Use</th>
                      <th>Type of Data</th>
                      <th>Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        To administer and protect our business and this website
                        (including troubleshooting, data analysis, testing,
                        system maintenance, support, reporting and hosting of
                        data)
                      </td>
                      <td>Technical Data</td>
                      <td>
                        Necessary for our legitimate interests (for running our
                        business, provision of IT services, network security, to
                        prevent fraud)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        To use data analytics to improve our website,
                        products/services and user experiences
                      </td>
                      <td>
                        (a) Technical Data
                        <br />
                        (b) Usage Data
                      </td>
                      <td>
                        Necessary for our legitimate interests (to keep our
                        website updated and relevant, to develop our business)
                        OR Consent (where you have accepted analytics cookies)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="policy-section">
              <h2>Direct Marketing</h2>
              <p>
                We do not currently send marketing communications. If this
                changes in the future, we will only do so with your express
                consent.
              </p>

              <h3>Third-party Marketing</h3>
              <p>
                We will get your express consent before we share your personal
                data with any third party for their own direct marketing
                purposes.
              </p>
            </section>

            <section className="policy-section">
              <h2>Cookies</h2>
              <p>
                For more information about the cookies we use and how to change
                your cookie preferences, please see our{" "}
                <a href="/cookie-policy">cookie policy</a>.
              </p>
            </section>

            <section className="policy-section">
              <h2>Disclosures of Your Personal Data</h2>
              <p>
                We may share your personal data where necessary with third
                parties for the purposes set out in this privacy policy.
              </p>
              <p>
                We require all third parties to respect the security of your
                personal data and to treat it in accordance with the law. We do
                not allow our third-party service providers to use your personal
                data for their own purposes and only permit them to process your
                personal data for specified purposes and in accordance with our
                instructions.
              </p>
            </section>

            <section className="policy-section">
              <h2>International Transfers</h2>
              <p>
                We may transfer your personal data to service providers that
                carry out certain functions on our behalf, such as Google
                Analytics. This may involve transferring personal data outside
                the UK to countries which have laws that do not provide the same
                level of data protection as UK law.
              </p>
              <p>
                Whenever we transfer your personal data out of the UK to service
                providers, we ensure a similar degree of protection is afforded
                to it by using appropriate safeguards.
              </p>
            </section>

            <section className="policy-section">
              <h2>Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorised way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know.
              </p>
              <p>
                We have put in place procedures to deal with any suspected
                personal data breach and will notify you and any applicable
                regulator of a breach where we are legally required to do so.
              </p>
            </section>

            <section className="policy-section">
              <h2>Data Retention</h2>
              <h3>How long will you use my personal data for?</h3>
              <p>
                We will only retain your personal data for as long as reasonably
                necessary to fulfil the purposes we collected it for, including
                for the purposes of satisfying any legal, regulatory, tax,
                accounting or reporting requirements.
              </p>
              <p>
                To determine the appropriate retention period for personal data,
                we consider the amount, nature and sensitivity of the personal
                data, the potential risk of harm from unauthorised use or
                disclosure of your personal data, the purposes for which we
                process your personal data and whether we can achieve those
                purposes through other means, and the applicable legal
                requirements.
              </p>
              <p>
                In some circumstances we may anonymise your personal data (so
                that it can no longer be associated with you) for research or
                statistical purposes, in which case we may use this information
                indefinitely without further notice to you.
              </p>
            </section>

            <section className="policy-section">
              <h2>Your Legal Rights</h2>
              <p>
                You have a number of rights under data protection laws in
                relation to your personal data.
              </p>

              <p>You have the right to:</p>
              <ul>
                <li>
                  <strong>Request access</strong> to your personal data
                  (commonly known as a "subject access request").
                </li>
                <li>
                  <strong>Request correction</strong> of the personal data that
                  we hold about you.
                </li>
                <li>
                  <strong>Request erasure</strong> of your personal data in
                  certain circumstances.
                </li>
                <li>
                  <strong>Object to processing</strong> of your personal data
                  where we are relying on a legitimate interest.
                </li>
                <li>
                  <strong>Request the transfer</strong> of your personal data to
                  you or to a third party.
                </li>
                <li>
                  <strong>Withdraw consent</strong> at any time where we are
                  relying on consent to process your personal data.
                </li>
                <li>
                  <strong>Request restriction</strong> of processing of your
                  personal data.
                </li>
              </ul>

              <p>
                If you wish to exercise any of the rights set out above, please
                contact us using the contact details below.
              </p>

              <h3>No fee usually required</h3>
              <p>
                You will not have to pay a fee to access your personal data (or
                to exercise any of the other rights). However, we may charge a
                reasonable fee if your request is clearly unfounded, repetitive
                or excessive.
              </p>

              <h3>Time limit to respond</h3>
              <p>
                We try to respond to all legitimate requests within one month.
                Occasionally it could take us longer than a month if your
                request is particularly complex or you have made a number of
                requests.
              </p>
            </section>

            <section className="policy-section">
              <h2>Contact Details</h2>
              <p>
                If you have any questions about this privacy policy or about the
                use of your personal data or you want to exercise your privacy
                rights, please contact us through the website.
              </p>
            </section>

            <section className="policy-section">
              <h2>Complaints</h2>
              <p>
                You have the right to make a complaint to the Information
                Commissioner's Office (ICO), the UK regulator for data
                protection issues (
                <a
                  href="https://www.ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ico.org.uk
                </a>
                ). However, before doing so please make sure you have first made
                your complaint to us or asked us for clarification if there is
                something you do not understand. The ICO will expect you to have
                done this before reviewing your complaint.
              </p>
            </section>

            <section className="policy-section">
              <h2>Changes to the Privacy Policy</h2>
              <p>
                We keep our privacy policy under regular review. It is important
                that the personal data we hold about you is accurate and
                current. Please keep us informed if your personal data changes
                during your relationship with us.
              </p>
            </section>

            <section className="policy-section">
              <h2>Third-party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins
                and applications. Clicking on those links or enabling those
                connections may allow third parties to collect or share data
                about you. We do not control these third-party websites and are
                not responsible for their privacy statements. When you leave our
                website, we encourage you to read the privacy policy of every
                website you visit.
              </p>
            </section>
          </div>
        </Container>
      </div>

      <div className="page-footer-bar"></div>
    </div>
  );
};

export default PrivacyPolicy;
