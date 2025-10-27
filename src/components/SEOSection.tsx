import React from 'react';
import SEO from './SEO';

interface SEOSectionProps {
  activeSection: string;
}

const SEOSection: React.FC<SEOSectionProps> = ({ activeSection }) => {
  const seoData = {
    inicio: {
      title: "ACRIL Pinturas Venezuela - Pintura Industrial y Residencial en Valencia, Carabobo",
      description: "Empresa líder en pinturas profesionales en Venezuela. +15 años de experiencia, +500 proyectos exitosos. Pintura industrial, residencial y comercial en Valencia, Carabobo. Impermeabilizantes, elastoméricos, satinados. ¡Cotiza ahora!",
      keywords: "pintura venezuela, pinturas valencia carabobo, empresa pinturas venezuela, pintura industrial venezuela, pintura residencial valencia, impermeabilizantes venezuela, ACRIL pinturas, pintura profesional carabobo, pinturas valencia venezuela, servicios pintura valencia"
    },
    servicios: {
      title: "Servicios de Pintura Profesional en Venezuela | ACRIL Pinturas Valencia",
      description: "Servicios especializados de pintura en Valencia, Carabobo: Impermeabilizantes elastoméricos, pintura industrial, residencial y comercial. Garantía extendida hasta 3 años. Asesoría profesional en color. Cotización gratis.",
      keywords: "servicios pintura venezuela, pintura residencial valencia, pintura comercial carabobo, pintura industrial venezuela, impermeabilizantes valencia, pintura elastomerica venezuela, servicios pintura carabobo, empresa pintura valencia"
    },
    galeria: {
      title: "Galería de Proyectos - ACRIL Pinturas",
      description: "Explora nuestra galería de proyectos realizados. Transformaciones profesionales de fachadas, interiores y espacios comerciales en Valencia, Carabobo.",
      keywords: "galería pintura, proyectos pintura, trabajos realizados, antes y después"
    },
    sobre: {
      title: "Sobre Nosotros - ACRIL Pinturas",
      description: "Conoce la historia de ACRIL Pinturas. Más de 15 años de experiencia en el sector de la pintura profesional en Venezuela. Equipo certificado y comprometido.",
      keywords: "sobre nosotros, historia, experiencia, equipo, certificaciones"
    },
    testimonios: {
      title: "Testimonios de Clientes - ACRIL Pinturas",
      description: "Lee los testimonios de nuestros clientes satisfechos. Más de 500 proyectos exitosos en Valencia, Carabobo. Pintura de calidad con garantía.",
      keywords: "testimonios, clientes satisfechos, opiniones, reseñas, garantía"
    },
    contacto: {
      title: "Contacto - ACRIL Pinturas | Solicita tu Cotización",
      description: "Contacta con ACRIL Pinturas para tu proyecto de pintura. Ubicados en Valencia, Carabobo. Formulario de contacto, WhatsApp y teléfono disponibles.",
      keywords: "contacto, cotización, presupuesto, valencia, carabobo, whatsapp"
    },
    productos: {
      title: "Catálogo de Productos ACRIL | 13 Productos, 141 Colores | Venezuela",
      description: "Catálogo completo de pinturas ACRIL: 5 líneas especializadas (Elastomérica, Caucho, Satinados, Solvente, Tratamientos), 13 productos profesionales, 141 colores. IMPECRIL, DECOCRIL, SEDACRIL, ESMACRIL. Fichas técnicas disponibles.",
      keywords: "productos pintura venezuela, catalogo pinturas acril, IMPECRIL venezuela, DECOCRIL, SEDACRIL, ESMACRIL, pintura elastomerica venezuela, colores pintura venezuela, catalogo colores acril, productos pintura valencia"
    },
    'linea-elastomerica': {
      title: "Pintura Elastomérica Venezuela | IMPECRIL, DECOCRIL | Impermeabilizantes",
      description: "Línea elastomérica ACRIL para impermeabilización profesional en Venezuela. IMPECRIL, DECOCRIL Elastomérico, DEPOCRIL, TRAFICRIL. 48 colores disponibles. Ideal para techos, fachadas, terrazas. Alta resistencia UV y clima tropical.",
      keywords: "pintura elastomerica venezuela, impermeabilizantes venezuela, IMPECRIL venezuela, DECOCRIL elastomerico, pintura techos venezuela, impermeabilizante fachadas, pintura elastomerica valencia, impermeabilizante carabobo"
    },
    'linea-caucho': {
      title: "Pintura de Caucho Mate Venezuela | DECOCRIL Caucho | 32 Colores",
      description: "DECOCRIL Caucho: pintura mate de alta calidad para interiores y exteriores en Venezuela. 32 colores disponibles. Acabado mate profesional, lavable, alta cubrición. Ideal para paredes, cielos rasos. Resistente al clima tropical.",
      keywords: "pintura caucho venezuela, DECOCRIL caucho, pintura mate venezuela, pintura interiores venezuela, pintura exteriores mate, pintura lavable venezuela, pintura caucho valencia, DECOCRIL carabobo"
    },
    'linea-satinados': {
      title: "Pintura Satinada Venezuela | SEDACRIL | Brillo de Seda | 24 Colores",
      description: "SEDACRIL: pintura satinada premium con brillo de seda para Venezuela. 24 colores elegantes. Acabado satinado lavable, resistente al tráfico. Ideal para oficinas, comercios, áreas de alto tráfico. Durabilidad superior.",
      keywords: "pintura satinada venezuela, SEDACRIL venezuela, pintura brillo seda, pintura satinada valencia, pintura oficinas venezuela, pintura comercial satinada, SEDACRIL carabobo, pintura lavable satinada"
    },
    'linea-solvente': {
      title: "Pintura de Solvente Industrial Venezuela | ESMACRIL, TRAFICRIL, HIERROCRIL",
      description: "Línea de solvente ACRIL para uso industrial en Venezuela: ESMACRIL (esmalte sintético), ESMACRIL Piscinas, TRAFICRIL Alto Tráfico, HIERROCRIL (anticorrosivo). 33 colores. Máxima resistencia, secado rápido, ideal para metal, madera, concreto.",
      keywords: "pintura solvente venezuela, ESMACRIL venezuela, pintura industrial venezuela, TRAFICRIL venezuela, HIERROCRIL anticorrosivo, esmalte sintetico venezuela, pintura piscinas venezuela, pintura alto trafico venezuela, pintura industrial valencia"
    },
    'linea-tratamientos': {
      title: "Tratamientos de Superficies Venezuela | Base Antialcalino, DOXICRIL, PASTACRIL",
      description: "Productos especializados ACRIL para preparación de superficies en Venezuela: Base Antialcalino (neutralizador), DOXICRIL (sellador), PASTACRIL (pasta niveladora), SELLACRIL (sellador de poros). Preparación profesional para pintura perfecta.",
      keywords: "tratamientos superficies venezuela, base antialcalino venezuela, DOXICRIL venezuela, PASTACRIL venezuela, SELLACRIL, sellador superficies venezuela, preparacion pintura venezuela, pasta niveladora venezuela, tratamiento paredes venezuela"
    }
  };

  const currentSeo = seoData[activeSection as keyof typeof seoData] || seoData.inicio;

  return (
    <SEO
      title={currentSeo.title}
      description={currentSeo.description}
      keywords={currentSeo.keywords}
      section={activeSection}
    />
  );
};

export default SEOSection;
