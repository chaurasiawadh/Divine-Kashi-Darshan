import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  children?: ReactNode;
}

export default function SEO({ title, description, canonical, children }: SEOProps) {
  const fullTitle = `${title} | Divine Kashi Darshan`;
  
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Divine Kashi Darshan",
    "description": "Connecting Souls to Sacred Destinations",
    "url": window.location.origin + import.meta.env.BASE_URL,
    "telephone": "+91-95595-57776",
    "email": "aakanksha@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "D-58/12, Sigra",
      "addressLocality": "Varanasi",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "221010",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Aakanksha Singh"
    },
    "sameAs": [
      "https://wa.me/919559557776"
    ]
  };
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      {canonical && <link rel="canonical" href={canonical} />}
      <script type="application/ld+json">
        {JSON.stringify(contactSchema)}
      </script>
      {children}
    </Helmet>
  );
}
