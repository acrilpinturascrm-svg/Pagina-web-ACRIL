import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ACRIL_COLORS } from '../constants/brandColors';
import LazyImage from './LazyImage';

const Gallery = () => {
  const projects = [
    {
      title: 'Casa Residencial Los Jardines',
      category: 'Residencial',
      before: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Transformación completa de fachada con colores modernos'
    },
    {
      title: 'Oficinas Centro Comercial',
      category: 'Comercial',
      before: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Espacios corporativos con identidad visual profesional'
    },
    {
      title: 'Apartamento Vista Hermosa',
      category: 'Residencial',
      before: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Renovación interior con técnicas de pintura decorativa'
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setShowBefore(true);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setShowBefore(true);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada proyecto es único. Descubre cómo hemos transformado espacios 
            en toda Valencia, Carabobo.
          </p>
        </div>

        <div
          style={{ background: `linear-gradient(to right, ${ACRIL_COLORS.bloodRed50}, ${ACRIL_COLORS.chickYellow50})` }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <LazyImage
                  src={showBefore ? projects[currentProject].before : projects[currentProject].after}
                  alt={`${projects[currentProject].title} ${showBefore ? 'antes' : 'después'}`}
                  className="w-full h-80 object-cover transition-all duration-500"
                  width={600}
                  height={320}
                />
                
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      showBefore
                        ? 'text-white'
                        : 'text-white'
                    }`}
                    style={{
                      backgroundColor: showBefore ? ACRIL_COLORS.bloodRed600 : ACRIL_COLORS.chickYellow500
                    }}
                  >
                    {showBefore ? 'Antes' : 'Después'}
                  </span>
                </div>

                <button 
                  onClick={() => setShowBefore(!showBefore)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-all"
                >
                  <Eye className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              <div className="flex justify-center mt-6 space-x-4">
                <button 
                  onClick={prevProject}
                  className="bg-white shadow-lg p-3 rounded-full hover:shadow-xl transition-all hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
                <button 
                  onClick={nextProject}
                  className="bg-white shadow-lg p-3 rounded-full hover:shadow-xl transition-all hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span
                  className="text-white px-3 py-1 rounded-full text-sm font-medium"
                  style={{ background: `linear-gradient(to right, ${ACRIL_COLORS.bloodRed600}, ${ACRIL_COLORS.chickYellow500})` }}
                >
                  {projects[currentProject].category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
                  {projects[currentProject].title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {projects[currentProject].description}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Servicios incluidos:</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: ACRIL_COLORS.chickYellow500 }}
                    ></div>
                    <span className="text-sm text-gray-700">Preparación de superficie</span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: ACRIL_COLORS.chickYellow500 }}
                    ></div>
                    <span className="text-sm text-gray-700">Pintura de alta calidad</span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: ACRIL_COLORS.chickYellow500 }}
                    ></div>
                    <span className="text-sm text-gray-700">Limpieza final</span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: ACRIL_COLORS.chickYellow500 }}
                    ></div>
                    <span className="text-sm text-gray-700">Garantía extendida</span>
                  </div>
                </div>
              </div>

              <button
                className="w-full text-white py-3 rounded-lg font-semibold transition-all duration-300"
                style={{ background: `linear-gradient(to right, ${ACRIL_COLORS.bloodRed600}, ${ACRIL_COLORS.chickYellow500})` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(to right, ${ACRIL_COLORS.bloodRed700}, ${ACRIL_COLORS.chickYellow600})`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `linear-gradient(to right, ${ACRIL_COLORS.bloodRed600}, ${ACRIL_COLORS.chickYellow500})`;
                }}
              >
                Solicitar Proyecto Similar
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {setCurrentProject(index); setShowBefore(true);}}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentProject
                    ? ''
                    : 'hover:scale-110'
                }`}
                style={{
                  background: index === currentProject
                    ? `linear-gradient(to right, ${ACRIL_COLORS.bloodRed600}, ${ACRIL_COLORS.chickYellow500})`
                    : undefined,
                  backgroundColor: index !== currentProject ? ACRIL_COLORS.gray300 : undefined
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;