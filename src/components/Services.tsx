import { ACRIL_COLORS } from '../constants/brandColors';
import { getAssetPath } from '../utils/assetPath';

const Services = () => {
  const services = [
    {
      title: 'Impermeabilizantes',
      image: '/images/services/impermeabilizantes.png',
      features: ['Preparación de superficies', 'Alta Elasticidad y Protección UV', 'Hidrorepelentes']
    },
    {
      title: 'Decorativa',
      image: '/images/services/decorativa.png',
      features: ['Acabados en mate y satinados', 'Colores corporativos', 'Interior y Exterior']
    },
    {
      title: 'Industrial',
      image: '/images/services/industrial.png',
      features: ['Anticorrosivos', 'Protección a la Intemperie', 'Ambientes químicos']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de pintura para todos los sectores, 
            con la más alta calidad y profesionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Imagen del Servicio */}
              <div className="relative h-64 sm:h-72 md:h-80 bg-gray-200 overflow-hidden">
                <img 
                  src={getAssetPath(service.image)}
                  alt={service.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Placeholder si la imagen no existe
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <div class="text-center p-6">
                          <div class="text-6xl mb-4">${index === 0 ? '🏠' : index === 1 ? '🎨' : '🏭'}</div>
                          <p class="text-gray-500 font-medium">${service.title}</p>
                          <p class="text-xs text-gray-400 mt-2">Imagen pendiente</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div
                        className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                        style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
                      ></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;