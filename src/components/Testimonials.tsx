import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Propietaria de Casa',
      location: 'Los Jardines, Valencia',
      rating: 5,
      comment: 'Excelente trabajo en la renovación de mi casa. El equipo fue muy profesional y el resultado superó mis expectativas. Los colores quedaron perfectos y la calidad es notable.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Angelica Rodríguez',
      role: 'Gerente General',
      location: 'Centro Comercial Las Flores',
      rating: 5,
      comment: 'Contratamos sus servicios para pintar nuestras oficinas y el resultado fue impecable. Cumplieron con los tiempos acordados y trabajaron sin interrumpir nuestras operaciones.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana Martínez',
      role: 'Arquitecta',
      location: 'Urbanización El Parral',
      rating: 5,
      comment: 'He recomendado Pinturas Valencia a varios de mis clientes. Su atención al detalle y conocimiento técnico los hace únicos en la región. Siempre entregan trabajos de primera.',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mejor testimonio. 
            Conoce sus experiencias trabajando con nosotros.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-red-800 to-yellow-600 rounded-br-3xl flex items-center justify-center">
              <Quote className="h-8 w-8 text-white" />
            </div>

            <div className="pt-8">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-6 w-6 ${
                      i < testimonials[currentTestimonial].rating 
                        ? 'text-yellow-500 fill-current' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].comment}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button 
                    onClick={prevTestimonial}
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-all hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-all hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-red-800 to-yellow-600' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;