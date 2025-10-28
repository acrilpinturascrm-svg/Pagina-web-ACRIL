import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import ProductsDropdown from './ProductsDropdown';
import SearchBar from './SearchBar';
import type { HeaderProps } from '../types';
import { ACRIL_COLORS } from '../constants/brandColors';
import { NAVIGATION_SECTIONS } from '../constants/navigation';
import { getAssetPath } from '../utils/assetPath';

const Header: React.FC<HeaderProps> = ({ onSectionChange, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
        setIsMobileProductsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 border-gray-200 shadow-md backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src={getAssetPath('/logo-modificado.png')} alt="ACRIL Pinturas Logo" className="h-8 w-auto" />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 justify-end">
            {NAVIGATION_SECTIONS.map((section) => (
              <button
                key={section.key}
                onClick={() => onSectionChange(section.key)}
                className={`font-medium px-2 py-1 rounded-lg transition-all duration-300 hover:scale-105 ${
                  activeSection === section.key ? 'shadow-lg scale-105' : 'text-gray-800'
                }`}
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
              >
                {section.label}
              </button>
            ))}

            <ProductsDropdown
              onProductLineSelect={(lineName) => {
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

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" style={{ color: ACRIL_COLORS.bloodRed600 }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: ACRIL_COLORS.bloodRed600 }} />
            )}
          </button>
        </div>

        {/* Search Bar - Mobile */}
        <div className="lg:hidden pb-4">
          <SearchBar />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t shadow-lg bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="px-4 py-4 space-y-2">
              {NAVIGATION_SECTIONS.map((section) => (
                <button
                  key={section.key}
                  onClick={() => {
                    onSectionChange(section.key);
                    setIsMenuOpen(false);
                    setIsMobileProductsOpen(false);
                  }}
                  className={`w-full text-left font-medium px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === section.key ? 'shadow-md' : 'text-gray-800 hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: activeSection === section.key ? ACRIL_COLORS.chickYellow400 : undefined,
                    color: activeSection === section.key ? ACRIL_COLORS.bloodRed600 : undefined
                  }}
                >
                  {section.label}
                </button>
              ))}

              {/* Mobile Products Menu */}
              <div className="border-t pt-2 mt-2">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="w-full text-left font-medium px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 hover:bg-gray-50 flex items-center justify-between"
                >
                  <span>Productos</span>
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform duration-200 ${
                      isMobileProductsOpen ? 'rotate-180' : ''
                    }`}
                    style={{ color: ACRIL_COLORS.bloodRed600 }}
                  />
                </button>

                {/* Submenu de Productos */}
                {isMobileProductsOpen && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 pl-4" style={{ borderColor: ACRIL_COLORS.chickYellow400 }}>
                    <button
                      onClick={() => {
                        onSectionChange('linea-elastomerica');
                        setIsMenuOpen(false);
                        setIsMobileProductsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    >
                      <div className="font-medium">Línea Elastomérica</div>
                      <div className="text-xs text-gray-500">IMPECRIL, DECOCRIL, DEPOCRIL</div>
                    </button>
                    <button
                      onClick={() => {
                        onSectionChange('linea-caucho');
                        setIsMenuOpen(false);
                        setIsMobileProductsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    >
                      <div className="font-medium">Línea de Caucho Mate</div>
                      <div className="text-xs text-gray-500">DECOCRIL Caucho</div>
                    </button>
                    <button
                      onClick={() => {
                        onSectionChange('linea-satinados');
                        setIsMenuOpen(false);
                        setIsMobileProductsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    >
                      <div className="font-medium">Línea de Satinados</div>
                      <div className="text-xs text-gray-500">SEDACRIL</div>
                    </button>
                    <button
                      onClick={() => {
                        onSectionChange('linea-solvente');
                        setIsMenuOpen(false);
                        setIsMobileProductsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    >
                      <div className="font-medium">Línea de Solvente</div>
                      <div className="text-xs text-gray-500">ESMACRIL, HIERROCRIL</div>
                    </button>
                    <button
                      onClick={() => {
                        onSectionChange('linea-tratamientos');
                        setIsMenuOpen(false);
                        setIsMobileProductsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    >
                      <div className="font-medium">Línea de Tratamientos</div>
                      <div className="text-xs text-gray-500">DOXICRIL, SELLACRIL</div>
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
