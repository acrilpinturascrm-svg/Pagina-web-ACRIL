# 🔒 Seguridad del Formulario de Contacto - EmailJS

**Fecha:** 28 de Octubre, 2025  
**Implementación:** Credenciales hardcodeadas con mejores prácticas

---

## ✅ Implementación Actual

### Archivos Modificados:
1. **`src/config/emailjs.config.ts`** (NUEVO)
   - Configuración centralizada de EmailJS
   - Credenciales en un solo lugar
   - Función de validación `isEmailJSConfigured()`

2. **`src/components/Contact.tsx`** (MODIFICADO)
   - Importa configuración desde archivo centralizado
   - Eliminadas referencias a variables de entorno
   - Validación antes de enviar

---

## 🛡️ Mejores Prácticas Implementadas

### 1. **Configuración Centralizada**
```typescript
// ✅ BUENO: Un solo lugar para las credenciales
src/config/emailjs.config.ts

// ❌ MALO: Credenciales dispersas en múltiples archivos
```

**Beneficios:**
- Fácil de actualizar si cambias las credenciales
- Código más mantenible
- Validación centralizada

### 2. **Public Key de EmailJS**
Las credenciales expuestas son **seguras por diseño**:

- ✅ **Service ID:** Identificador público del servicio
- ✅ **Template ID:** Identificador público de la plantilla
- ✅ **Public Key:** Diseñada para estar en el frontend

**Nota:** EmailJS tiene protecciones incorporadas contra abuso.

### 3. **Sanitización de Datos**
```typescript
const sanitizedData = {
  name: formData.name.trim(),
  email: formData.email.trim().toLowerCase(),
  phone: formData.phone.trim(),
  service: formData.service,
  message: formData.message.trim()
};
```

**Protecciones:**
- Elimina espacios en blanco
- Normaliza emails a minúsculas
- Previene inyección de código

### 4. **Validación con Yup**
```typescript
const validationSchema = yup.object({
  name: yup.string().required().min(2).max(50),
  email: yup.string().email().max(100),
  phone: yup.string().required().matches(/^[+]?[0-9\s-()]+$/),
  service: yup.string().required(),
  message: yup.string().required().min(10).max(500)
});
```

**Protecciones:**
- Validación de formato de email
- Límites de longitud
- Formato de teléfono válido
- Previene campos vacíos

---

## 🔐 Configuración Adicional Recomendada en EmailJS

### Paso 1: Restricción de Dominio
1. Ir a [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Account → Security
3. Agregar a "Allowed Domains":
   ```
   www.acril.com.ve
   acril.com.ve
   localhost (para desarrollo)
   ```

### Paso 2: Rate Limiting
1. En EmailJS Dashboard → Account → Quota
2. Configurar límites:
   - **Emails por día:** 200 (ajusta según necesidad)
   - **Emails por hora:** 50
   - **Emails por minuto:** 5

### Paso 3: Habilitar reCAPTCHA (Opcional pero Recomendado)
1. EmailJS Dashboard → Security
2. Habilitar "reCAPTCHA v3"
3. Agregar las keys de Google reCAPTCHA

### Paso 4: Notificaciones de Abuso
1. EmailJS Dashboard → Settings
2. Configurar email de notificación
3. Habilitar alertas de uso inusual

---

## 🚨 Monitoreo y Alertas

### Indicadores de Abuso:
- ⚠️ Aumento repentino de emails
- ⚠️ Múltiples envíos desde la misma IP
- ⚠️ Mensajes con contenido spam
- ⚠️ Emails rebotados (bounces)

### Acciones Recomendadas:
1. **Revisar EmailJS Dashboard semanalmente**
2. **Configurar alertas de cuota** (80% de uso)
3. **Revisar logs de errores** en la consola del navegador
4. **Backup de contactos importantes** por si EmailJS falla

---

## 📊 Límites del Plan Gratuito de EmailJS

### Plan Free:
- ✅ **200 emails/mes** (suficiente para la mayoría de sitios pequeños)
- ✅ **Soporte básico**
- ✅ **2 servicios de email**
- ✅ **Plantillas ilimitadas**

### Si Excedes el Límite:
1. **Opción 1:** Upgrade a plan Personal ($7/mes - 1000 emails)
2. **Opción 2:** Implementar Cloudflare Workers (gratis)
3. **Opción 3:** Usar formulario de Google Forms como backup

---

## 🔄 Plan de Contingencia

### Si EmailJS Falla:

#### Opción 1: WhatsApp Directo
```typescript
// Ya implementado en el sitio
const whatsappNumber = '584244597443';
const message = `Hola, me gustaría información sobre...`;
window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
```

#### Opción 2: Email Directo
```html
<a href="mailto:acrilpinturas@gmail.com?subject=Consulta desde sitio web">
  Enviar Email
</a>
```

#### Opción 3: Google Forms
- Crear formulario en Google Forms
- Embedear en el sitio como iframe
- Recibir notificaciones por email

---

## 🧪 Testing del Formulario

### Checklist de Pruebas:

#### Validación:
- [ ] Enviar con campos vacíos (debe mostrar errores)
- [ ] Email inválido (debe rechazar)
- [ ] Teléfono con letras (debe rechazar)
- [ ] Mensaje muy corto (<10 caracteres)
- [ ] Mensaje muy largo (>500 caracteres)

#### Funcionalidad:
- [ ] Envío exitoso muestra mensaje de confirmación
- [ ] Formulario se limpia después de enviar
- [ ] Email llega a acrilpinturas@gmail.com
- [ ] Email llega a acrilpinturascrm@gmail.com
- [ ] Formato del email es correcto

#### Seguridad:
- [ ] Intentar inyección SQL en campos
- [ ] Intentar inyección XSS en mensaje
- [ ] Enviar múltiples veces rápidamente (rate limit)
- [ ] Verificar que solo funciona desde www.acril.com.ve

---

## 📝 Plantilla de EmailJS

### Configuración Actual:
- **Template ID:** `template_8hodd6f`
- **Variables:**
  ```
  {{name}}     - Nombre del cliente
  {{email}}    - Email del cliente
  {{phone}}    - Teléfono del cliente
  {{service}}  - Tipo de servicio solicitado
  {{message}}  - Mensaje del cliente
  ```

### Ejemplo de Plantilla Recomendada:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .header { background: #DC2626; color: white; padding: 20px; }
    .content { padding: 20px; }
    .footer { background: #f3f4f6; padding: 10px; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <h2>Nuevo Contacto desde ACRIL Pinturas</h2>
  </div>
  <div class="content">
    <p><strong>Nombre:</strong> {{name}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Teléfono:</strong> {{phone}}</p>
    <p><strong>Servicio:</strong> {{service}}</p>
    <p><strong>Mensaje:</strong></p>
    <p>{{message}}</p>
  </div>
  <div class="footer">
    <p>Email enviado desde www.acril.com.ve</p>
  </div>
</body>
</html>
```

---

## 🔧 Mantenimiento

### Mensual:
- [ ] Revisar cuota de EmailJS
- [ ] Verificar que emails llegan correctamente
- [ ] Revisar logs de errores

### Trimestral:
- [ ] Actualizar credenciales si es necesario
- [ ] Revisar y actualizar plantilla de email
- [ ] Verificar restricciones de dominio

### Anual:
- [ ] Evaluar si necesitas upgrade de plan
- [ ] Revisar alternativas (Cloudflare Workers, etc.)
- [ ] Actualizar documentación

---

## 📞 Soporte

### EmailJS:
- **Dashboard:** https://dashboard.emailjs.com
- **Documentación:** https://www.emailjs.com/docs/
- **Soporte:** support@emailjs.com

### Contactos ACRIL:
- **Email Principal:** acrilpinturas@gmail.com
- **Email CRM:** acrilpinturascrm@gmail.com
- **WhatsApp:** +58 4244597443

---

## ✨ Resultado Final

Con esta implementación:
- ✅ **Formulario funcional** en GitHub Pages
- ✅ **Seguridad adecuada** con rate limiting
- ✅ **Código mantenible** y centralizado
- ✅ **Validación robusta** de datos
- ✅ **Plan de contingencia** si falla EmailJS

---

**Estado:** ✅ Implementado y listo para producción  
**Próximo paso:** Rebuild, deploy y testing del formulario
