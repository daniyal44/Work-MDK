import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteMetadata } from '../../data/seoData';

export default function SEO({
  title,
  description,
  keywords,
  canonical = '/',
  image = siteMetadata.defaultImage,
  type = 'website',
  schema = null
}) {
  const fullCanonical = `${siteMetadata.siteUrl}${canonical === '/' ? '' : canonical}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={siteMetadata.author} />
      <link rel="canonical" href={fullCanonical} />

      {/* Crawlability & Indexing Directives */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* International Hreflang & Geo Targeting */}
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} />
      <link rel="alternate" hrefLang="en" href={fullCanonical} />
      <link rel="alternate" hrefLang="en-US" href={fullCanonical} />
      <link rel="alternate" hrefLang="en-GB" href={fullCanonical} />
      <link rel="alternate" hrefLang="en-PK" href={fullCanonical} />
      <link rel="alternate" hrefLang="en-AE" href={fullCanonical} />
      <link rel="alternate" hrefLang="en-CA" href={fullCanonical} />
      <link rel="alternate" hrefLang="en-AU" href={fullCanonical} />
      <meta name="geo.region" content="PK-PB" />
      <meta name="geo.placename" content="Lahore" />
      <meta name="geo.position" content="31.5204;74.3587" />
      <meta name="ICBM" content="31.5204, 74.3587" />
      <meta name="content-language" content="en-US, en-GB, en-PK" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="MDK Gallery — Zyphuel & Poke nexus" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="https://github.com/MuhammadDaniyalMDK" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@MuhammadDaniyalMDK" />
      <meta name="twitter:site" content="@MuhammadDaniyalMDK" />

      {/* Structured Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
