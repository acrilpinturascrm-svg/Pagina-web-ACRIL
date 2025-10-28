/**
 * Configuración de EmailJS para formulario de contacto
 * 
 * NOTA DE SEGURIDAD:
 * - La Public Key de EmailJS está diseñada para ser pública
 * - EmailJS tiene rate limiting incorporado para prevenir abuso
 * - El Service ID y Template ID también son seguros de exponer
 * - Para mayor seguridad, configura restricciones de dominio en EmailJS Dashboard
 * 
 * Configuración recomendada en EmailJS Dashboard:
 * 1. Ir a Account → Security
 * 2. Agregar www.acril.com.ve a "Allowed Domains"
 * 3. Habilitar reCAPTCHA (opcional pero recomendado)
 * 4. Configurar límite de emails por día
 */

export const EMAILJS_CONFIG = {
  serviceId: 'service_qbm4var',
  templateId: 'template_8hodd6f',
  publicKey: 'CyXliHb1oYX6ckq58',
} as const;

/**
 * Validar que la configuración esté completa
 */
export const isEmailJSConfigured = (): boolean => {
  return !!(
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey
  );
};
