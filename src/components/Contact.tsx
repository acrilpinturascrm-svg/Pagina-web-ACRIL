import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import { ACRIL_COLORS } from '../constants/brandColors';
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../config/emailjs.config';

// Esquema de validación
const validationSchema = yup.object({
  name: yup.string()
    .required('El nombre es requerido')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  email: yup.string()
    .email('Debe ser un email válido')
    .max(100, 'El email no puede exceder 100 caracteres'),
  phone: yup.string()
    .required('El teléfono es requerido')
    .matches(/^[+]?[0-9\s-()]+$/, 'Formato de teléfono inválido')
    .min(10, 'El teléfono debe tener al menos 10 dígitos'),
  service: yup.string()
    .required('Debe seleccionar un tipo de servicio'),
  message: yup.string()
    .required('El mensaje es requerido')
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede exceder 500 caracteres')
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validar datos del formulario
      await validationSchema.validate(formData, { abortEarly: false });

      // Validar que EmailJS esté configurado
      if (!isEmailJSConfigured()) {
        alert('Error de configuración: El servicio de email no está disponible. Por favor, contacta por WhatsApp.');
        return;
      }

      // Sanitizar datos antes de enviar
      const sanitizedData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: formData.message.trim()
      };

      // Enviar email usando la configuración centralizada
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        sanitizedData as Record<string, unknown>,
        EMAILJS_CONFIG.publicKey
      );
      
      alert('¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        // Manejar errores de validación
        const validationErrors: Record<string, string> = {};
        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
      } else {
        // Manejar errores de EmailJS
        alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Listo para transformar tu espacio? Solicita tu cotización gratuita 
            y descubre por qué somos la opción preferida en Valencia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: ACRIL_COLORS.bloodRed50 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ubicación</h4>
                    <p className="text-gray-600">
                      Av. Henry Ford, Centro Comercial Boulevard Industrial Municipal<br />
                      Local A8, punto de referencia al lado de la Alcaldía de Valencia, IAMVIAL - Carabobo, Venezuela
                      <a 
                        href="https://acortar.link/My5FPo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline block mt-1"
                        style={{ color: ACRIL_COLORS.bloodRed600 }}
                      >
                        Ver en Google Maps
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
                  >
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-gray-600">+58 4244597443</p>
                    <p className="text-gray-600">+58 4222274500</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">acrilpinturas@gmail.com</p>
                    <p className="text-gray-600">acrilpinturascrm@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
                  >
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horarios</h4>
                    <p className="text-gray-600">Lunes a Viernes: 8:30 AM - 4:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-8 text-center"
              style={{ backgroundColor: ACRIL_COLORS.chickYellow100, color: ACRIL_COLORS.bloodRed600 }}
            >
              <MessageCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">¿Necesitas una Cotización Rápida?</h3>
              <p className="mb-4">Envíanos un WhatsApp y te respondemos en minutos</p>
              <a 
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '584244597443'}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                style={{ color: ACRIL_COLORS.bloodRed600 }}
              >
                Chatear por WhatsApp
              </a>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicita tu Cotización Gratuita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    style={{
                      '--tw-ring-color': ACRIL_COLORS.bloodRed600,
                      '--tw-border-opacity': errors.name ? '1' : undefined
                    } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = ACRIL_COLORS.bloodRed600;
                      e.currentTarget.style.boxShadow = `0 0 0 2px ${ACRIL_COLORS.bloodRed600}25`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = errors.name ? '#ef4444' : '#d1d5db';
                      e.currentTarget.style.boxShadow = errors.name ? 'none' : 'none';
                    }}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p style={{ color: ACRIL_COLORS.bloodRed500 }} className="text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    style={{
                      '--tw-ring-color': ACRIL_COLORS.bloodRed600,
                      '--tw-border-opacity': errors.phone ? '1' : undefined
                    } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = ACRIL_COLORS.bloodRed600;
                      e.currentTarget.style.boxShadow = `0 0 0 2px ${ACRIL_COLORS.bloodRed600}25`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = errors.phone ? '#ef4444' : '#d1d5db';
                      e.currentTarget.style.boxShadow = errors.phone ? 'none' : 'none';
                    }}
                    placeholder="Tu teléfono"
                  />
                  {errors.phone && (
                    <p style={{ color: ACRIL_COLORS.bloodRed500 }} className="text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  style={{
                    '--tw-ring-color': ACRIL_COLORS.bloodRed600,
                    '--tw-border-opacity': errors.email ? '1' : undefined
                  } as React.CSSProperties}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = ACRIL_COLORS.bloodRed600;
                    e.currentTarget.style.boxShadow = `0 0 0 2px ${ACRIL_COLORS.bloodRed600}25`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = errors.email ? '#ef4444' : '#d1d5db';
                    e.currentTarget.style.boxShadow = errors.email ? 'none' : 'none';
                  }}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p style={{ color: ACRIL_COLORS.bloodRed500 }} className="text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Servicio *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.service ? 'border-red-500' : 'border-gray-300'
                  }`}
                  style={{
                    '--tw-ring-color': ACRIL_COLORS.bloodRed600,
                    '--tw-border-opacity': errors.service ? '1' : undefined
                  } as React.CSSProperties}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = ACRIL_COLORS.bloodRed600;
                    e.currentTarget.style.boxShadow = `0 0 0 2px ${ACRIL_COLORS.bloodRed600}25`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = errors.service ? '#ef4444' : '#d1d5db';
                    e.currentTarget.style.boxShadow = errors.service ? 'none' : 'none';
                  }}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="residencial">Línea Elastomérica</option>
                  <option value="comercial">Línea De Caucho Mate</option>
                  <option value="industrial">Línea De Satinados</option>
                  <option value="decorativa">Línea De Solvente</option>
                  <option value="restauracion">Línea de Tratamiento</option>
                </select>
                {errors.service && (
                  <p style={{ color: ACRIL_COLORS.bloodRed500 }} className="text-sm mt-1">{errors.service}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  style={{
                    '--tw-ring-color': ACRIL_COLORS.bloodRed600,
                    '--tw-border-opacity': errors.message ? '1' : undefined
                  } as React.CSSProperties}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = ACRIL_COLORS.bloodRed600;
                    e.currentTarget.style.boxShadow = `0 0 0 2px ${ACRIL_COLORS.bloodRed600}25`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = errors.message ? '#ef4444' : '#d1d5db';
                    e.currentTarget.style.boxShadow = errors.message ? 'none' : 'none';
                  }}
                  placeholder="Cuéntanos sobre tu proyecto: área a pintar, colores preferidos, tiempo estimado, etc."
                />
                {errors.message && (
                  <p style={{ color: ACRIL_COLORS.bloodRed500 }} className="text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'text-white hover:bg-red-900'
                }`}
                style={{
                  backgroundColor: isSubmitting ? undefined : ACRIL_COLORS.bloodRed600
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Solicitud
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;