import { CheckCircle } from 'lucide-react';
import { ACRIL_COLORS } from '../constants/brandColors';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
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
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Más de 17 años transformando hogares y empresas en Valencia, Carabobo. 
              Calidad garantizada, precios justos y atención personalizada.
            </p>

            

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">17+ Años de Experiencia</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Durabilidad Garantizada</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Asesoría Gratuito</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src="/images/hero/Impecril 3.jpg"
                alt="Aplicación de impermeabilizante en techo"
                className="w-full h-[28rem] object-contain object-center rounded-lg shadow-2xl bg-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-white text-red-800 p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Proyectos</div>
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