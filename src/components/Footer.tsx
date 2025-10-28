import { Paintbrush, MapPin, Phone, Mail, Facebook, Instagram, Play } from 'lucide-react';
import { ACRIL_COLORS } from '../constants/brandColors';

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: ACRIL_COLORS.chickYellow400 }}
              >
                <Paintbrush
                  className="h-6 w-6"
                  style={{ color: ACRIL_COLORS.bloodRed600 }}
                />
              </div>
              <span className="text-xl font-bold">ACRIL Pinturas</span>
            </div>
            <p className="text-gray-200 mb-6 max-w-md">
              Transformando espacios con color y calidad. 
              Tu empresa de confianza para proyectos de pintura en Venezuela.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/PinturasAcril/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Facebook
                  className="h-5 w-5"
                  style={{ color: ACRIL_COLORS.bloodRed600 }}
                />
              </a>
              <a href="https://www.instagram.com/acrilpinturas/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Instagram
                  className="h-5 w-5"
                  style={{ color: ACRIL_COLORS.bloodRed600 }}
                />
              </a>
              <a href="https://www.tiktok.com/@acrilpinturas?lang=en" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Play
                  className="h-5 w-5"
                  style={{ color: ACRIL_COLORS.bloodRed600 }}
                />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-2 text-gray-200">
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'servicios' }))} className="hover:text-white transition-colors text-left">Línea Elastomérica</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'servicios' }))} className="hover:text-white transition-colors text-left">Línea De Caucho Mate</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'servicios' }))} className="hover:text-white transition-colors text-left">Línea De Satinados</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'servicios' }))} className="hover:text-white transition-colors text-left">Línea De Solvente</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'servicios' }))} className="hover:text-white transition-colors text-left">Línea De Tratamiento</button></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-200">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Av. Henry Ford, Centro Comercial Boulevard Industrial Municipal, Local A8, punto de referencia al lado de la Alcaldía de Valencia, IAMVIAL - Carabobo</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <span className="text-sm">+58 4244597443</span>
                  <span className="text-sm">+58 4222274500</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <span className="text-sm break-all">acrilpinturas@gmail.com</span>
                  <span className="text-sm break-all">acrilpinturascrm@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="py-6"
          style={{ borderTop: `1px solid ${ACRIL_COLORS.bloodRed700}` }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm">
              2025 ACRIL Pinturas. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'contacto' }))} className="text-gray-200 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </button>
              <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'contacto' }))} className="text-gray-200 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;