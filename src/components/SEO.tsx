import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getAssetPath } from '../utils/assetPath';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  published?: string;
  modified?: string;
  section?: string;
  tags?: string[];
}

const SEO = React.memo<SEOProps>(({
  title = "ACRIL Pinturas - Pintura Profesional en Venezuela",
  description = "Transforma tus espacios con ACRIL Pinturas. Más de 15 años de experiencia en pintura residencial, comercial e industrial en Valencia, Carabobo. Calidad garantizada.",
  keywords = "pintura, venezuela, valencia, carabobo, pintura profesional, elastomérica, caucho, satinados, solvente, tratamientos",
  image = "/logo-modificado.png",
  url = "https://www.acril.com.ve",
  type = "website",
  author = "ACRIL Pinturas",
  published,
  modified,
  section,
  tags = []
}) => {
  const fullTitle = title.includes("ACRIL") ? title : `${title} | ACRIL Pinturas`;
  const canonicalUrl = `${url}${section ? `/#${section}` : ''}`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${getAssetPath(image)}`;
  const logoUrl = `${url}${getAssetPath('/logo-modificado.png')}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ACRIL Pinturas",
    "url": url,
    "logo": logoUrl,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Valencia",
      "addressRegion": "Carabobo",
      "addressCountry": "Venezuela"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+58-4244597443",
      "contactType": "customer service",
      "email": "acrilpinturas@gmail.com"
    },
    "sameAs": [
      "https://www.facebook.com/PinturasAcril/",
      "https://www.instagram.com/acrilpinturas/"
    ]
  };

  return (
    <Helmet>
      {/* Título y Meta Básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="ACRIL Pinturas" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Datos Estructurados */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Meta Tags Adicionales */}
      {published && <meta name="article:published_time" content={published} />}
      {modified && <meta name="article:modified_time" content={modified} />}
      {tags.length > 0 && <meta name="article:tag" content={tags.join(', ')} />}

      {/* Configuración de Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Configuración de Charset */}
      <meta charSet="utf-8" />

      {/* Configuración de Idioma */}
      <html lang="es" />
    </Helmet>
  );
});

SEO.displayName = 'SEO';

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;
