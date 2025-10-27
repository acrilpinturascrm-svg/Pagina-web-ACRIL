import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ProductsDropdown from './ProductsDropdown';
import SearchBar from './SearchBar';
import type { HeaderProps } from '../types';
import { ACRIL_COLORS } from '../constants/brandColors';
import { NAVIGATION_SECTIONS } from '../constants/navigation';

const Header: React.FC<HeaderProps> = ({ onSectionChange, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 border-gray-200 shadow-md backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src="/logo-modificado.png" alt="ACRIL Pinturas Logo" className="h-8 w-auto" />
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
          <div className="md:hidden border-t shadow-lg bg-white">
            <nav className="px-4 py-4 space-y-4">
              {NAVIGATION_SECTIONS.map((section) => (
                <button
                  key={section.key}
                  onClick={() => {
                    onSectionChange(section.key);
                    setIsMenuOpen(false);
                  }}
                  className={`block font-medium px-2 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    activeSection === section.key ? 'shadow-lg scale-105' : 'text-gray-800'
                  }`}
                  style={{
                    backgroundColor: activeSection === section.key ? ACRIL_COLORS.chickYellow400 : undefined,
                    color: activeSection === section.key ? ACRIL_COLORS.bloodRed600 : undefined
                  }}
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
