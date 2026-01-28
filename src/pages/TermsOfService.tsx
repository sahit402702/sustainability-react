import React from "react";
import { Container } from "react-bootstrap";
import SEO from "@/components/SEO";
import PageHeader from "@/components/common/PageHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const TermsOfService: React.FC = () => {
  useScrollToTop();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    description: "Terms of Service for SME Sustainability Portal",
  };

  return (
    <div className="reporting-page">
      <SEO
        title="Terms of Service"
        description="Terms of Service for SME Sustainability Portal"
        keywords="terms of service, terms and conditions, legal"
        canonicalUrl="https://www.smereportingportal.org/terms-of-service"
        structuredData={structuredData}
      />

      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before using this site"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Terms of Service" },
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
              <h2>What's in These Terms</h2>
              <p>
                These terms tell you the rules for using our website{" "}
                <a href="https://www.smereportingportal.org">
                  www.smereportingportal.org
                </a>{" "}
                (our site).
              </p>
            </section>

            <section className="policy-section">
              <h2>Who We Are and How to Contact Us</h2>
              <p>
                This site is operated by Cognizant Worldwide Limited (We) in
                conjunction with Birkbeck College (Royal Charter number
                RC000048) which has its registered office at Birkbeck College,
                Malet Street, London, WC1E 7HX ("Birkbeck"). We are registered
                in England and Wales under company number 07195160 and have our
                registered office at 280 Bishopsgate, London EC2A 4ES.
              </p>
              <p>
                To contact us, please email us through the appropriate channels.
              </p>
            </section>

            <section className="policy-section">
              <h2>By Using Our Site You Accept These Terms</h2>
              <p>
                By using our site, you confirm that you accept these terms of
                service and that you agree to comply with them.
              </p>
              <p>
                If you do not agree to these terms, you must not use our site.
              </p>
              <p>
                We recommend that you print a copy of these terms for future
                reference.
              </p>
            </section>

            <section className="policy-section">
              <h2>There Are Other Terms That May Apply to You</h2>
              <p>
                These terms of service refer to the following additional terms,
                which also apply to your use of our site:
              </p>
              <ul>
                <li>
                  Our <a href="/privacy-policy">Privacy Policy</a>, which
                  explains how we collect, use and store your personal data.
                </li>
                <li>
                  Our <a href="/cookie-policy">Cookie Policy</a>, which sets out
                  information about the cookies on our site.
                </li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>We May Make Changes to These Terms</h2>
              <p>
                We amend these terms from time to time. Every time you wish to
                use our site, please check these terms to ensure you understand
                the terms that apply at that time.
              </p>
            </section>

            <section className="policy-section">
              <h2>We May Make Changes to Our Site</h2>
              <p>
                We may update and change our site from time to time to update
                the information contained on the site.
              </p>
            </section>

            <section className="policy-section">
              <h2>We May Suspend or Withdraw Our Site</h2>
              <p>Our site is made available free of charge.</p>
              <p>
                We do not guarantee that our site, or any content on it, will
                always be available or be uninterrupted. We may suspend or
                withdraw or restrict the availability of all or any part of our
                site for business and operational reasons.
              </p>
              <p>
                You are also responsible for ensuring that all persons who
                access our site through your internet connection are aware of
                these terms of service and other applicable terms, and that they
                comply with them.
              </p>
            </section>

            <section className="policy-section">
              <h2>We May Transfer This Agreement to Someone Else</h2>
              <p>
                We may transfer our rights and obligations under these terms to
                another organisation. We will update these terms if this happens
                and we will ensure that the transfer will not affect your rights
                under the contract.
              </p>
            </section>

            <section className="policy-section">
              <h2>How You May Use Material on Our Site</h2>
              <p>
                We and/or Birkbeck are the owner or the licensee of, or are
                otherwise permitted to use, all intellectual property rights in
                the site, and in the material published on it. The site contains
                public sector information licensed under the{" "}
                <a
                  href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                  target="blank"
                >
                  Open Government Licence v3.0
                </a>
                . Those works are protected by copyright laws and treaties
                around the world. All such rights are reserved.
              </p>
              <p>
                You may print off one copy, and may download extracts, of any
                page(s) from our site for your personal use and you may draw the
                attention of others within your organisation to content posted
                on our site.
              </p>
              <p>
                You must not modify the paper or digital copies of any materials
                you have printed off or downloaded in any way, and you must not
                use any illustrations, photographs, video or audio sequences or
                any graphics separately from any accompanying text.
              </p>
              <p>
                Our status and that of Birkbeck and any identified contributors
                as the authors of content on our site must always be
                acknowledged.
              </p>
              <p>
                You must not use any part of the content on our site for
                commercial purposes without obtaining a licence to do so from us
                or our licensors.
              </p>
              <p>
                If you print off, copy, download, share or repost any part of
                our site in breach of these terms of service, your right to use
                our site will cease immediately and you must, at our option,
                return or destroy any copies of the materials you have made
                (except that you are permitted to print off a copy of these
                terms of service).e permitted to print off a copy of these terms
                of service).
              </p>
            </section>

            <section className="policy-section">
              <h2>No Text or Data Mining, or Web Scraping</h2>
              <p>
                You shall not conduct, facilitate, authorise or permit any text
                or data mining or web scraping in relation to our site or any
                services provided via, or in relation to, our site for any
                purpose, including the development, training, fine-tuning or
                validation of AI systems or models. This includes using (or
                permitting, authorising or attempting the use of):
              </p>
              <ul>
                <li>
                  Any "robot", "bot", "spider", "scraper" or other automated
                  device, program, tool, algorithm, code, process or methodology
                  to access, obtain, copy, monitor or republish any portion of
                  our site or any data, content, information or services
                  accessed via the same.
                </li>
                <li>
                  Any automated analytical technique aimed at analysing text and
                  data in digital form to generate information or develop,
                  train, fine-tune or validate AI systems or models which
                  includes but is not limited to patterns, trends and
                  correlations.
                </li>
              </ul>
              <p>
                You shall not use, and we do not consent to the use of, our
                site, or any data published by, or contained in, or accessible
                via, our site or any services provided via, or in relation to,
                our site for the purposes of developing, training, fine-tuning
                or validating any AI system or model.
              </p>
            </section>

            <section className="policy-section">
              <h2>Rules About Linking to Our Site</h2>
              <p>
                You may link to our home page, provided you do so in a way that
                is fair and legal and does not damage our reputation or that of
                Birkbeck or take advantage of it.
              </p>
              <p>
                You must not establish a link in such a way as to suggest any
                form of association, approval or endorsement on our part or the
                part of Birkbeck where none exists.
              </p>
              <p>
                You must not establish a link to our site in any website that is
                not owned by you.
              </p>
              <p>
                Our site must not be framed on any other site, nor may you
                create a link to any part of our site other than the home page.
              </p>
              <p>
                We reserve the right to withdraw linking permission without
                notice.
              </p>
            </section>

            <section className="policy-section">
              <h2>Our Trade Marks Are Registered</h2>
              <p>
                You are not permitted to use any registered trade marks of
                Cognizant or Birkbeck without approval, unless they are part of
                material you are using as permitted under "How you may use
                material on our site".
              </p>
            </section>

            <section className="policy-section">
              <h2>Do Not Rely on Information on This Site</h2>
              <p>
                The content on our site is provided for general information
                only. It is not intended to amount to advice on which you should
                rely. You must obtain professional or specialist advice before
                taking, or refraining from, any action on the basis of the
                content on our site.
              </p>
              <p>
                Although we make reasonable efforts to update the information on
                our site, we make no representations, warranties or guarantees,
                whether express or implied, that the content on our site is
                accurate, complete or up to date.
              </p>
            </section>

            <section className="policy-section">
              <h2>We Are Not Responsible for Websites We Link To</h2>
              <p>
                Where our site contains links to other sites and resources
                provided by third parties, these links are provided for your
                information only. Such links should not be interpreted as
                approval by us of those linked websites or information you may
                obtain from them.
              </p>
              <p>
                We have no control over the contents of those sites or
                resources.
              </p>
            </section>

            <section className="policy-section">
              <h2>We Are Not Responsible for Viruses</h2>
              <p>
                We do not guarantee that our site will be secure or free from
                bugs or viruses.
              </p>
              <p>
                You are responsible for configuring your information technology,
                computer programs and platform to access our site. You should
                use your own virus protection software.
              </p>
            </section>

            <section className="policy-section">
              <h2>You Must Not Introduce Viruses</h2>
              <p>
                You must not misuse our site by knowingly introducing viruses,
                trojans, worms, logic bombs or other material that is malicious
                or technologically harmful. You must not attempt to gain
                unauthorised access to our site, the server on which our site is
                stored or any server, computer or database connected to our
                site. You must not attack our site via a denial-of-service
                attack or a distributed denial-of-service attack.
              </p>
              <p>
                By breaching this provision, you would commit a criminal offence
                under the Computer Misuse Act 1990. We will report any such
                breach to the relevant law enforcement authorities and we will
                co-operate with those authorities by disclosing your identity to
                them. In the event of such a breach, your right to use our site
                will cease immediately.
              </p>
            </section>

            <section className="policy-section">
              <h2>Our Responsibility for Loss or Damage Suffered by You</h2>

              <p>
                We do not exclude or limit in any way our liability to you where
                it would be unlawful to do so. This includes liability for death
                or personal injury caused by our negligence or the negligence of
                our employees, agents or subcontractors and for fraud or
                fraudulent misrepresentation.
              </p>
              <p>
                We exclude all implied conditions, warranties, representations
                or other terms that may apply to our site or any content on it.
              </p>
              <p>
                We will not be liable to you for any loss or damage, whether in
                contract, tort (including negligence), breach of statutory duty,
                or otherwise, even if foreseeable, arising under or in
                connection with:
              </p>
              <ul>
                <li>use of, or inability to use, our site; or</li>
                <li>
                  use of or reliance on any content displayed on our site.
                </li>
                <li>In particular, we will not be liable for:</li>
                <li>loss of profits, sales, business, or revenue;</li>
                <li>business interruption;</li>
                <li>loss of anticipated savings;</li>
                <li>
                  loss of business opportunity, goodwill or reputation; or
                </li>
                <li>any indirect or consequential loss or damage.</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>How We May Use Your Personal Information</h2>
              <p>
                We will only use your personal information as set out in our{" "}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </section>

            <section className="policy-section">
              <h2>Which Country's Laws Apply to a Dispute</h2>
              <p>
                If you are a consumer, please note that these terms of service,
                their subject matter and their formation, are governed by
                English law. We both agree that the courts of England and Wales
                will have exclusive jurisdiction, except that if you are a
                resident of Northern Ireland you may also bring proceedings in
                Northern Ireland, and if you are a resident of Scotland, you may
                also bring proceedings in Scotland.
              </p>
              <p>
                If you are a business, these terms of service, their subject
                matter and their formation (and any non-contractual disputes or
                claims) are governed by English law. We both agree to the
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>
          </div>
        </Container>
      </div>

      <div className="page-footer-bar"></div>
    </div>
  );
};

export default TermsOfService;
