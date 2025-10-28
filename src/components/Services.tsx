import { Home, Building, Factory, Palette, Shield, Clock } from 'lucide-react';
import { ACRIL_COLORS } from '../constants/brandColors';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Impermeabilizantes',
      description: 'Protege techos con una membrana flexible que sella grietas, resiste a agua, rayos UV y cambios extremos de temperatura.',
      features: ['Preparación de superficies', 'Pinturas ecológicas', 'Acabados especiales']
    },
    {
      icon: Building,
      title: 'Decorativa',
      description: 'Protege techos con una membrana flexible que sella grietas, resiste a agua, rayos UV y cambios extremos de temperatura.',
      features: ['Alto tráfico', 'Colores corporativos', 'Tiempos ajustados']
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Protección, señalización y sellado para instalaciones industriales.',
      features: ['Anticorrosivos', 'Altas temperaturas', 'Ambientes químicos']
    }
  ];

  const features = [
    { icon: Shield, title: 'Garantía Extendida', desc: 'Hasta 3 años en materiales' },
    { icon: Clock, title: 'Entrega Puntual', desc: 'Cumplimos con los tiempos' },
    { icon: Palette, title: 'Asesoría en Color', desc: 'Te ayudamos a elegir' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de pintura para todos los sectores, 
            con la más alta calidad y profesionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: ACRIL_COLORS.chickYellow400 }}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;