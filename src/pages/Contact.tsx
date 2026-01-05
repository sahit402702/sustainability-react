import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import PageHeader from "@/components/common/PageHeader";
import SEO from "@/components/SEO";

interface FormData {
  name: string;
  email: string;
  organization: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Replace with actual API call
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us - SME NetZero Hub",
    description:
      "Get in touch with the SME NetZero Hub team for support, inquiries, or collaboration opportunities.",
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact Us - SME NetZero Hub"
        description="Get in touch with the SME NetZero Hub team for support, inquiries, or collaboration opportunities regarding sustainability compliance and reporting."
        keywords="contact, support, sustainability help, SME assistance, NetZero inquiries"
        canonicalUrl="https://your-domain.com/contact-us"
        structuredData={structuredData}
      />

      <PageHeader
        title="Contact Us"
        subtitle="We're here to help you on your sustainability journey"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact Us" }]}
      />

      <section className="contact-content py-5">
        <Container>
          <Row className="g-4">
            {/* Contact Form */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="h3 mb-4">Send Us a Message</h2>

                  {submitStatus === "success" && (
                    <Alert
                      variant="success"
                      onClose={() => setSubmitStatus("idle")}
                      dismissible
                    >
                      <Alert.Heading>Message Sent Successfully!</Alert.Heading>
                      <p>
                        Thank you for contacting us. We'll get back to you
                        within 24-48 hours.
                      </p>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert
                      variant="danger"
                      onClose={() => setSubmitStatus("idle")}
                      dismissible
                    >
                      <Alert.Heading>Oops! Something went wrong</Alert.Heading>
                      <p>
                        We couldn't send your message. Please try again or email
                        us directly at{" "}
                        <a href="mailto:support@example.com">
                          support@example.com
                        </a>
                      </p>
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit} noValidate>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group controlId="contactName">
                          <Form.Label>
                            Name <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                            placeholder="Your full name"
                            required
                            aria-required="true"
                            aria-describedby={
                              errors.name ? "nameError" : undefined
                            }
                          />
                          <Form.Control.Feedback type="invalid" id="nameError">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="contactEmail">
                          <Form.Label>
                            Email <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                            placeholder="your.email@example.com"
                            required
                            aria-required="true"
                            aria-describedby={
                              errors.email ? "emailError" : undefined
                            }
                          />
                          <Form.Control.Feedback type="invalid" id="emailError">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="contactOrganization">
                          <Form.Label>Organization</Form.Label>
                          <Form.Control
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Your company name (optional)"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="contactPhone">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+44 (optional)"
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group controlId="contactSubject">
                          <Form.Label>
                            Subject <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            isInvalid={!!errors.subject}
                            required
                            aria-required="true"
                            aria-describedby={
                              errors.subject ? "subjectError" : undefined
                            }
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="support">Technical Support</option>
                            <option value="compliance">
                              Compliance Questions
                            </option>
                            <option value="reporting">
                              Reporting Assistance
                            </option>
                            <option value="partnership">
                              Partnership Opportunities
                            </option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                          </Form.Select>
                          <Form.Control.Feedback
                            type="invalid"
                            id="subjectError"
                          >
                            {errors.subject}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group controlId="contactMessage">
                          <Form.Label>
                            Message <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            isInvalid={!!errors.message}
                            placeholder="Please provide details about your inquiry..."
                            required
                            aria-required="true"
                            aria-describedby={
                              errors.message ? "messageError" : undefined
                            }
                          />
                          <Form.Control.Feedback
                            type="invalid"
                            id="messageError"
                          >
                            {errors.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-100 w-md-auto px-5"
                        >
                          {isSubmitting ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Information Sidebar */}
            <Col lg={4}>
              <div className="contact-info">
                <Card className="border-0 shadow-sm mb-4">
                  <Card.Body className="p-4">
                    <h3 className="h5 mb-3">Contact Information</h3>
                    <div className="mb-3">
                      <h4 className="h6 fw-bold mb-2">
                        <i className="bi bi-envelope me-2"></i>Email
                      </h4>
                      <p className="mb-0">
                        <a
                          href="mailto:support@example.com"
                          className="text-decoration-none"
                        >
                          support@example.com
                        </a>
                      </p>
                      <p className="text-muted small mb-0">General inquiries</p>
                    </div>

                    <div className="mb-3">
                      <h4 className="h6 fw-bold mb-2">
                        <i className="bi bi-telephone me-2"></i>Phone
                      </h4>
                      <p className="mb-0">
                        <a
                          href="tel:+441234567890"
                          className="text-decoration-none"
                        >
                          +44 (0) 123 456 7890
                        </a>
                      </p>
                      <p className="text-muted small mb-0">
                        Mon-Fri, 9:00 AM - 5:00 PM GMT
                      </p>
                    </div>

                    <div className="mb-0">
                      <h4 className="h6 fw-bold mb-2">
                        <i className="bi bi-geo-alt me-2"></i>Address
                      </h4>
                      <address className="mb-0">
                        SME NetZero Hub
                        <br />
                        123 Green Street
                        <br />
                        London, EC1A 1BB
                        <br />
                        United Kingdom
                      </address>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm mb-4">
                  <Card.Body className="p-4">
                    <h3 className="h5 mb-3">Office Hours</h3>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Monday - Friday:</span>
                      <span className="fw-bold">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Saturday:</span>
                      <span className="fw-bold">Closed</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Sunday:</span>
                      <span className="fw-bold">Closed</span>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm bg-light">
                  <Card.Body className="p-4">
                    <h3 className="h5 mb-3">Need Immediate Help?</h3>
                    <p className="mb-3">
                      Check out our comprehensive FAQ section for quick answers
                      to common questions.
                    </p>
                    <Button
                      href="/faqs"
                      variant="outline-primary"
                      className="w-100"
                    >
                      Visit FAQs
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          {/* Additional Information Section */}
          <Row className="mt-5 pt-4 border-top">
            <Col md={4} className="mb-4 mb-md-0">
              <div className="text-center">
                <div
                  className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "64px", height: "64px" }}
                  role="img"
                  aria-label="Technical Support"
                >
                  <i
                    className="bi bi-headset fs-2 text-primary"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="h5">Technical Support</h3>
                <p className="text-muted">
                  Get expert assistance with our sustainability tools and
                  reporting systems.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <div className="text-center">
                <div
                  className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "64px", height: "64px" }}
                  role="img"
                  aria-label="Consultation Services"
                >
                  <i
                    className="bi bi-people fs-2 text-success"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="h5">Consultation Services</h3>
                <p className="text-muted">
                  Book a consultation to discuss your sustainability compliance
                  needs.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <div
                  className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "64px", height: "64px" }}
                  role="img"
                  aria-label="Resources & Training"
                >
                  <i
                    className="bi bi-book fs-2 text-warning"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="h5">Resources & Training</h3>
                <p className="text-muted">
                  Access comprehensive guides and training materials for your
                  team.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
