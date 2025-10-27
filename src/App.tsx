import { useState, useEffect } from "react";
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero';
import Header from './components/HeaderWithSearch';
import ErrorBoundary from './components/ErrorBoundary';
import SEOSection from './components/SEOSection';
import { ACRIL_COLORS } from './constants/brandColors';

// Lazy loading para componentes grandes
const Services = lazy(() => import('./components/Services'));
// TEMPORALMENTE DESHABILITADO - Gallery (Proyectos)
// const Gallery = lazy(() => import('./components/Gallery'));
const About = lazy(() => import('./components/About'));
// TEMPORALMENTE DESHABILITADO - Testimonios
// const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Products = lazy(() => import('./components/Products'));
const LineaElastomerica = lazy(() => import('./components/LineaElastomerica'));
const LineaCaucho = lazy(() => import('./components/LineaCaucho'));
const LineaSatinados = lazy(() => import('./components/LineaSatinados'));
const LineaSolvente = lazy(() => import('./components/LineaSolvente'));
const LineaTratamientos = lazy(() => import('./components/LineaTratamientos'));

function App() {
  const [activeSection, setActiveSection] = useState<string>("inicio");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Escuchar eventos de navegación desde otros componentes
  useEffect(() => {
    const handleNavigateToSection = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('navigate-to-section', handleNavigateToSection as EventListener);

    return () => {
      window.removeEventListener('navigate-to-section', handleNavigateToSection as EventListener);
    };
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="bg-white">
          <SEOSection activeSection={activeSection} />
          <Header onSectionChange={handleSectionChange} activeSection={activeSection} />
        {activeSection === "inicio" && (
          <>
            <Hero />
            <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
              <Services />
            </Suspense>
            {/* TEMPORALMENTE DESHABILITADO - Gallery (Proyectos)
            <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
              <Gallery />
            </Suspense>
            */}
            <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
              <About />
            </Suspense>
            {/* TEMPORALMENTE DESHABILITADO - Testimonios
            <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
              <Testimonials />
            </Suspense>
            */}
            <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
              <Contact />
            </Suspense>
          </>
        )}
        {activeSection === "servicios" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <Services />
          </Suspense>
        )}
        {/* TEMPORALMENTE DESHABILITADO - Sección Gallery (Proyectos)
        {activeSection === "galeria" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <Gallery />
          </Suspense>
        )}
        */}
        {activeSection === "sobre" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <About />
          </Suspense>
        )}
        {/* TEMPORALMENTE DESHABILITADO - Sección Testimonios
        {activeSection === "testimonios" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <Testimonials />
          </Suspense>
        )}
        */}
        {activeSection === "contacto" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <Contact />
          </Suspense>
        )}
        {activeSection === "productos" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <ErrorBoundary fallback={
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8">
                  <div style={{ color: ACRIL_COLORS.bloodRed500 }} className="text-4xl mb-4">📦</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Error en la Página de Productos
                  </h3>
                  <p className="text-gray-600 mb-4">
                    No pudimos cargar los productos. Por favor, recarga la página.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-white px-6 py-2 rounded-lg hover:bg-red-900"
                    style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed700)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed600)}
                  >
                    Recargar
                  </button>
                </div>
              </div>
            }>
              <Products />
            </ErrorBoundary>
          </Suspense>
        )}

        {/* Páginas individuales de líneas de productos */}
        {activeSection === "linea-elastomerica" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <ErrorBoundary>
              <LineaElastomerica />
            </ErrorBoundary>
          </Suspense>
        )}

        {activeSection === "linea-caucho" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <ErrorBoundary>
              <LineaCaucho />
            </ErrorBoundary>
          </Suspense>
        )}

        {activeSection === "linea-satinados" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <ErrorBoundary>
              <LineaSatinados />
            </ErrorBoundary>
          </Suspense>
        )}

        {activeSection === "linea-solvente" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <ErrorBoundary>
              <LineaSolvente />
            </ErrorBoundary>
          </Suspense>
        )}

        {activeSection === "linea-tratamientos" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <ErrorBoundary>
              <LineaTratamientos />
            </ErrorBoundary>
          </Suspense>
        )}

        <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;