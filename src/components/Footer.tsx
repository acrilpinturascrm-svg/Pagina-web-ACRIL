import { Paintbrush, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { ACRIL_COLORS } from '../constants/brandColors';

// Componente de ícono de TikTok
const TikTokIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <div
                className="p-2 rounded-lg flex-shrink-0"
                style={{ backgroundColor: ACRIL_COLORS.chickYellow400 }}
              >
                <Paintbrush
                  className="h-5 md:h-6 w-5 md:w-6"
                  style={{ color: ACRIL_COLORS.bloodRed600 }}
                />
              </div>
              <span className="text-lg md:text-xl font-bold">ACRIL Pinturas</span>
            </div>
            <p className="text-xs md:text-sm text-gray-200 mb-4 md:mb-6 max-w-md leading-relaxed">
              Transformando espacios con color y calidad. 
              Tu empresa de confianza para proyectos de pintura en Venezuela.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/PinturasAcril/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Facebook
                  className="h-4 md:h-5 w-4 md:w-5"
                  style={{ color: ACRIL_COLORS.bloodRed600 }}
                />
              </a>
              <a href="https://www.instagram.com/acrilpinturas/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Instagram
                  className="h-4 md:h-5 w-4 md:w-5"
                  style={{ color: ACRIL_COLORS.bloodRed600 }}
                />
              </a>
              <a href="https://www.tiktok.com/@acrilpinturas?lang=en" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <TikTokIcon
                  className="h-4 md:h-5 w-4 md:w-5"
                  style={{ color: ACRIL_COLORS.bloodRed600 }}
                />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">Productos</h3>
            <ul className="space-y-1 md:space-y-2 text-gray-200">
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'linea-elastomerica' }))} className="hover:text-white transition-colors text-left text-xs md:text-sm">Línea Elastomérica</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'linea-caucho' }))} className="hover:text-white transition-colors text-left text-xs md:text-sm">Línea De Caucho Mate</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'linea-satinados' }))} className="hover:text-white transition-colors text-left text-xs md:text-sm">Línea De Satinados</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'linea-solvente' }))} className="hover:text-white transition-colors text-left text-xs md:text-sm">Línea De Solvente</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'linea-tratamientos' }))} className="hover:text-white transition-colors text-left text-xs md:text-sm">Línea De Tratamiento</button></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">Contacto</h3>
            <div className="space-y-2 md:space-y-3 text-gray-200 text-xs md:text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0 mt-0.5" />
                <span className="break-words">Av. Henry Ford, Centro Comercial Boulevard Industrial Municipal, Local A8, Valencia</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-0.5">
                  <span>+58 4244597443</span>
                  <span>+58 4222274500</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-0.5">
                  <span className="break-all">acrilpinturas@gmail.com</span>
                  <span className="break-all">acrilpinturascrm@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="py-4 md:py-6 text-center md:text-left"
          style={{ borderTop: `1px solid ${ACRIL_COLORS.bloodRed700}` }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
            <p className="text-gray-200 text-xs md:text-sm">
              2025 ACRIL Pinturas. Todos los derechos reservados.
            </p>
            <div className="flex space-x-3 md:space-x-6 text-xs md:text-sm">
              <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'contacto' }))} className="text-gray-200 hover:text-white transition-colors">
                Privacidad
              </button>
              <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'contacto' }))} className="text-gray-200 hover:text-white transition-colors">
                Términos
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;