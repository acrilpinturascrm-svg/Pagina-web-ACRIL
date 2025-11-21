import { Award, Users, Calendar, Target } from 'lucide-react';
import { ACRIL_COLORS } from '../constants/brandColors';
import LazyImage from './LazyImage';

const About = () => {
  const stats = [
    { icon: Calendar, number: '15+', label: 'Años de Experiencia' },
    { icon: Users, number: '500+', label: 'Clientes Satisfechos' },
    { icon: Award, number: '98%', label: 'Proyectos Exitosos' },
    { icon: Target, number: '24h', label: 'Tiempo de Respuesta' }
  ];

  return (
    <section id="about" className="py-12 md:py-20" style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Más que Pintura,
              <span style={{ color: ACRIL_COLORS.chickYellow400 }}>
                {' '}Experiencia
              </span>
            </h2>
            
            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
              Desde 2008, hemos sido la empresa de confianza para familias y empresas 
              en Venezuela. Nuestro compromiso con la calidad y la satisfacción 
              del cliente nos ha convertido en líderes del sector
            </p>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: ACRIL_COLORS.chickYellow400 }}
                ></div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Equipo Especializado</h4>
                  <p className="text-sm md:text-base text-gray-200">
                    Nuestros personal cuenta con más de 30 años de experiencia en la fabricación de pinturas, 
                   lo que garantiza la calidad de nuestros productos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: ACRIL_COLORS.chickYellow400 }}
                ></div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Materiales Premium</h4>
                  <p className="text-sm md:text-base text-gray-200">
                    Fabricamos con materias primas tanto nacionales como internacionales
                    de alta calidad.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: ACRIL_COLORS.chickYellow400 }}
                ></div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Compromiso Total</h4>
                  <p className="text-sm md:text-base text-gray-200">
                    Cada proyecto es único y merece nuestra máxima dedicación. 
                    Tu satisfacción es nuestro mayor logro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/20">
              <LazyImage
                src="/oficinia-acril.jpg"
                alt="Oficina ACRIL - Equipo de trabajo profesional"
                className="w-full h-48 md:h-72 object-cover rounded-lg shadow-2xl"
                width={525}
                height={288}
              />
              
              <div className="text-center text-white mt-4 md:mt-6">
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">Compromiso y dedicación</h3>
                <p className="text-xs md:text-base text-gray-200">
                  En ACRIL no eres un cliente más, desde la primera compra eres parte de nuestra familia. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div
                className="w-12 md:w-16 h-12 md:h-16 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4"
                style={{ backgroundColor: ACRIL_COLORS.chickYellow100 }}
              >
                <stat.icon
                  className="h-6 md:h-8 w-6 md:w-8"
                  style={{ color: ACRIL_COLORS.chickYellow400 }}
                />
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">{stat.number}</div>
              <div className="text-gray-200 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;