import React from "react";
import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  structuredData,
  type = "website",
}) => {
  const baseUrl = "https://your-domain.com";
  const defaultImage = `${baseUrl}/og-image.jpg`;

  const fullTitle = title
    ? `${title} - Sustainability Portal`
    : "Sustainability Portal - Environmental Reporting & Impact Tracking";

  const defaultDescription =
    "Leading sustainability platform providing transparent environmental reporting, carbon footprint tracking, and measurable impact data.";

  const metaDescription = description || defaultDescription;
  const canonical = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const imageUrl = ogImage ? `${baseUrl}${ogImage}` : defaultImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
