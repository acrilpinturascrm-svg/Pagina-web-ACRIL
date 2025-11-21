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
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
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
            <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
              <About />
            </Suspense>
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
        {activeSection === "sobre" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <About />
          </Suspense>
        )}
        {activeSection === "contacto" && (
          <Suspense fallback={<div className="flex justify-center items-center h-32"><div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: ACRIL_COLORS.bloodRed600 }}></div></div>}>
            <Contact />
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