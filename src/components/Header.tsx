import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ProductsDropdown from './ProductsDropdown';
import type { HeaderProps, NavigationSection } from '../types';
import { ACRIL_COLORS } from '../constants/brandColors';
import { getAssetPath } from '../utils/assetPath';

const sections: NavigationSection[] = [
  { key: "inicio", label: "Inicio" },
  { key: "servicios", label: "Servicios" },
  { key: "galeria", label: "Galería" },
  { key: "sobre", label: "Sobre Nosotros" },
  { key: "testimonios", label: "Testimonios" },
  { key: "contacto", label: "Contacto" },
];

const Header: React.FC<HeaderProps> = ({ onSectionChange, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-500 ease-in-out bg-white/80 border-gray-200 shadow-md backdrop-blur-md border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src={getAssetPath('/logo-modificado.png')} alt="ACRIL Pinturas Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 justify-center flex-grow" role="navigation" aria-label="Navegación principal">
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => onSectionChange(section.key)}
                className={`font-medium px-2 py-1 rounded-lg
                  transition-all duration-300 ease-in-out
                  hover:scale-105
                  ${activeSection === section.key ? 'shadow-lg scale-105' : 'text-gray-800'}`}
                style={{
                  color: activeSection === section.key ? ACRIL_COLORS.bloodRed600 : undefined,
                  backgroundColor: activeSection === section.key ? ACRIL_COLORS.chickYellow400 : undefined
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section.key) {
                    e.currentTarget.style.color = ACRIL_COLORS.bloodRed600;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section.key) {
                    e.currentTarget.style.color = '#1f2937';
                  }
                }}
                aria-current={activeSection === section.key ? 'page' : undefined}
                aria-label={`Ir a sección ${section.label}`}
              >
                {section.label}
              </button>
            ))}

            {/* Products Dropdown */}
            <ProductsDropdown
              onProductLineSelect={(lineName) => {
                // Navegar a la página específica de cada línea
                const lineRoutes: Record<string, string> = {
                  'Línea Elastomérica': 'linea-elastomerica',
                  'Línea de Caucho Mate': 'linea-caucho',
                  'Línea de Satinados': 'linea-satinados',
                  'Línea de Solvente': 'linea-solvente',
                  'Línea de Tratamientos': 'linea-tratamientos'
                };
                const route = lineRoutes[lineName] || 'productos';
                onSectionChange(route);
              }}
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6`} style={{ color: ACRIL_COLORS.bloodRed600 }} aria-hidden="true" />
            ) : (
              <Menu className={`h-6 w-6`} style={{ color: ACRIL_COLORS.bloodRed600 }} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-t shadow-lg bg-white`} id="mobile-menu">
            <nav className="px-4 py-4 space-y-4" role="navigation" aria-label="Navegación móvil">
              {sections.map((section) => (
                <button
                  key={section.key}
                  onClick={() => {
                    onSectionChange(section.key);
                    setIsMenuOpen(false);
                  }}
                  className={`block font-medium px-2 py-2 rounded-lg
                    transition-all duration-300 ease-in-out
                    hover:scale-105
                    ${activeSection === section.key ? 'shadow-lg scale-105' : 'text-gray-800'}`}
                  style={{
                    backgroundColor: activeSection === section.key ? ACRIL_COLORS.chickYellow400 : undefined,
                    color: activeSection === section.key ? ACRIL_COLORS.bloodRed600 : undefined
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== section.key) {
                      e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow100;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== section.key) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                  aria-current={activeSection === section.key ? 'page' : undefined}
                  aria-label={`Ir a sección ${section.label}`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;