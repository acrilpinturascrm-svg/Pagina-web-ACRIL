import { CheckCircle } from 'lucide-react';
import { ACRIL_COLORS } from '../constants/brandColors';
import { getAssetPath } from '../utils/assetPath';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Transforma tus
              <span style={{ color: ACRIL_COLORS.chickYellow400 }}>
                {' '}espacios
              </span>
              <br />
              con
              <span style={{ color: ACRIL_COLORS.chickYellow400 }}>
                {' '}nosotros
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              Más de 17 años transformando hogares y empresas en Valencia, Carabobo. 
              Calidad garantizada, precios justos y atención personalizada.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">17+ Años de Experiencia</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">Durabilidad Garantizada</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">Asesoría Gratuita</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-white/20">
              <img 
                src={getAssetPath('/images/hero/Impecril 3.jpg')}
                alt="Aplicación de impermeabilizante en techo"
                className="w-full h-64 sm:h-80 lg:h-[28rem] object-contain object-center rounded-lg shadow-2xl bg-white"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white text-red-800 p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">500+</div>
                  <div className="text-xs sm:text-sm">Proyectos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;