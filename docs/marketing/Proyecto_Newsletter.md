# 📧 Proyecto Newsletter - ACRIL Pinturas

**Fecha de Creación:** 28 de Octubre 2025  
**Estado:** Propuesta Pendiente de Aprobación  
**Responsable:** Equipo ACRIL

---

## 📋 Tabla de Contenidos

1. [Contexto del Proyecto](#contexto-del-proyecto)
2. [Objetivos y Estrategia](#objetivos-y-estrategia)
3. [Segmentación de Audiencia](#segmentación-de-audiencia)
4. [Implementación Técnica](#implementación-técnica)
5. [Estructura de la Newsletter](#estructura-de-la-newsletter)
6. [Calendario Editorial](#calendario-editorial)
7. [Banco de Contenido](#banco-de-contenido)
8. [Plan de Implementación](#plan-de-implementación)
9. [Medición y KPIs](#medición-y-kpis)
10. [Presupuesto y Timeline](#presupuesto-y-timeline)
11. [Próximos Pasos](#próximos-pasos)

---

## 🎯 Contexto del Proyecto

### Estado Actual del Sitio Web ACRIL

**Características del sitio:**
- ✅ **5 líneas de productos** (Elastomérica, Caucho, Satinados, Solvente, Tratamientos)
- ✅ **13 productos** con fichas técnicas en PDF
- ✅ **139 colores únicos** organizados por línea
- ✅ **Formulario de contacto** funcional con EmailJS
- ✅ **Audiencia definida**: Clientes residenciales, comerciales e industriales en Valencia, Carabobo

**Tecnologías actuales:**
- React 18.3.1 + TypeScript
- Vite 5.4.2
- Tailwind CSS 3.4.1
- EmailJS Browser 4.4.1
- Colores de marca: Rojo Sangre (#DC2626) + Amarillo Pollito (#FBBF24)

---

## 🎯 Objetivos y Estrategia

### 1. Define el Objetivo de tu Newsletter

#### Objetivo Principal
**Fidelizar clientes actuales** y mantener contacto con leads generados desde el sitio web

#### Objetivos Secundarios
1. **Educar a tu audiencia**: Compartir información útil sobre mantenimiento de superficies pintadas
2. **Generar confianza**: Posicionarte como experto en impermeabilización y pinturas
3. **Promocionar productos**: Anunciar ofertas, lanzamientos de nuevos colores o descuentos exclusivos
4. **Fidelizar clientes**: Mantener el contacto con clientes actuales y potenciales

#### Estrategia de Contenido
- **70% Educativo**: Tips, guías, consejos prácticos
- **20% Promocional**: Ofertas, descuentos, nuevos productos
- **10% Corporativo**: Noticias de la empresa, casos de éxito

---

## 👥 Segmentación de Audiencia

### 2. Identifica a tu Audiencia

#### Segmentos Principales

| Segmento | Descripción | Características | Contenido Recomendado |
|----------|-------------|-----------------|----------------------|
| **🏠 Residencial** | Propietarios de viviendas | Buscan durabilidad, interesados en estética | Tips de mantenimiento, colores de moda, ofertas decorativas |
| **🏢 Comercial** | Negocios y oficinas | Necesitan rapidez, alto tráfico | Soluciones de alto tráfico, tiempos de entrega, proyectos corporativos |
| **🏭 Industrial** | Empresas industriales | Ambientes extremos, certificaciones | Productos anticorrosivos, certificaciones, casos de éxito |

#### Fuente de Segmentación
**Formulario de contacto actual** - Campo "Tipo de Servicio"

---

## 💻 Implementación Técnica

### 3. Elige una Plataforma de Email Marketing

#### Plataforma Recomendada: **Mailchimp**

**Razones para elegir Mailchimp:**
- ✅ Gratis hasta 500 contactos y 1,000 correos al mes
- ✅ Plantillas profesionales personalizables
- ✅ Integración con formularios web (API o embed)
- ✅ Automatizaciones básicas incluidas
- ✅ Analíticas detalladas
- ✅ Interfaz en español
- ✅ Segmentación de listas
- ✅ Responsive por defecto

#### Alternativas Consideradas

| Plataforma | Gratis | Ventajas | Desventajas |
|------------|--------|----------|-------------|
| **Sendinblue** | 300 emails/día | Mejor para volumen alto, SMS incluido | Límite diario |
| **MailerLite** | 1,000 suscriptores | Interfaz simple, landing pages | Menos automatización |
| **Benchmark Email** | 500 contactos | Soporte en español | Menos integraciones |

---

### 4. Componentes Web a Desarrollar

#### Ubicaciones del Formulario de Suscripción

**1. Footer (Todas las páginas) - Versión Compacta**
- Email + Botón de suscripción
- Mensaje breve de beneficios

**2. Página de Contacto - Versión Completa**
- Nombre, Email, Tipo de Cliente
- Lista de beneficios
- Checkbox de consentimiento

**3. Pop-up de Salida (Opcional - Fase 2)**
- Se activa al detectar intención de salida
- Ofrece descuento del 10% por suscripción

#### Datos a Capturar

```javascript
{
  nombre: string,        // Requerido
  email: string,         // Requerido
  telefono: string,      // Opcional
  tipoCliente: enum,     // 'residencial' | 'comercial' | 'industrial'
  aceptaNewsletter: boolean  // Requerido (GDPR compliance)
}
```

#### Archivos a Crear/Modificar

**Nuevos archivos:**
- `src/components/NewsletterForm.tsx`
- `src/components/NewsletterPopup.tsx` (Fase 2)
- `src/config/mailchimp.config.ts`
- `src/utils/mailchimpApi.ts`

**Archivos a modificar:**
- `src/components/Footer.tsx`
- `src/components/Contact.tsx`
- `src/types/index.ts`

---

## 📝 Estructura de la Newsletter

### 4. Diseña la Estructura de tu Newsletter

#### Plantilla Estándar ACRIL

```
┌─────────────────────────────────────────────────────┐
│  [LOGO ACRIL - Rojo y Amarillo]                    │
│  Newsletter ACRIL - [Mes Año]                      │
├─────────────────────────────────────────────────────┤
│  ¡Hola [Nombre]! 👋                                 │
│  Gracias por ser parte de nuestra comunidad.       │
│  En esta edición:                                   │
│  📌 [Artículo Principal]                           │
│  🎨 [Tip Práctico]                                 │
│  🔥 [Oferta Especial]                              │
│  📰 [Novedades ACRIL]                              │
├─────────────────────────────────────────────────────┤
│  📖 ARTÍCULO DESTACADO                             │
│  [Título llamativo]                                 │
│  [Imagen 600x400px]                                │
│  [Resumen 2-3 líneas]                              │
│  👉 [Botón: Leer más]                              │
├─────────────────────────────────────────────────────┤
│  🔥 OFERTA ESPECIAL DEL MES                        │
│  [Producto destacado]                               │
│  [Descuento/Promoción]                             │
│  Código: NEWSLETTER20                              │
│  👉 [Botón: Obtener oferta]                        │
├─────────────────────────────────────────────────────┤
│  💡 TIPS RÁPIDOS                                   │
│  • [Consejo 1]                                      │
│  • [Consejo 2]                                      │
│  • [Consejo 3]                                      │
├─────────────────────────────────────────────────────┤
│  📰 NOVEDADES ACRIL                                │
│  • [Novedad 1]                                      │
│  • [Novedad 2]                                      │
├─────────────────────────────────────────────────────┤
│  📞 CONTACTO                                       │
│  +58 4244597443 | acrilpinturas@gmail.com         │
│  Valencia, Carabobo | www.acril.com.ve             │
│  [Instagram] [Facebook] [WhatsApp]                 │
│  [Darse de baja] | [Actualizar preferencias]      │
└─────────────────────────────────────────────────────┘
```

#### Líneas de Asunto Efectivas

**Formato:** Corto (6-8 palabras) + Emoji relevante

**Ejemplos:**
- ✅ "🏠 ¿Tu techo está listo para las lluvias?"
- ✅ "🎨 Los 5 colores más vendidos este mes"
- ✅ "🔥 Oferta exclusiva: 20% OFF en impermeabilizantes"
- ✅ "💡 Tip ACRIL: Ahorra en mantenimiento"
- ✅ "📢 Nueva línea de colores disponible"

---

## 📅 Calendario Editorial

### 5. Planifica el Contenido

#### Frecuencia: MENSUAL
- **Día:** Primer martes de cada mes
- **Hora:** 9:00 AM (Venezuela)

#### Calendario - Primer Semestre

| Mes | Tema Principal | Artículo | Oferta | Producto |
|-----|---------------|----------|--------|----------|
| **Nov 2025** | Preparación lluvias | "5 señales de impermeabilización urgente" | 15% desc. IMPECRIL | IMPECRIL |
| **Dic 2025** | Renovación fin de año | "Colores de moda 2025" | Envío gratis +5 gal | DECOCRIL |
| **Ene 2026** | Año nuevo renovado | "Cómo preparar paredes" | 2x1 SEDACRIL | SEDACRIL |
| **Feb 2026** | Mantenimiento | "Calendario anual" | 20% Tratamientos | SELLACRIL |
| **Mar 2026** | Alto tráfico | "Pintura alto tráfico" | 10% TRAFICRIL | TRAFICRIL |
| **Abr 2026** | Piscinas y verano | "Prepara tu piscina" | 15% ESMACRIL | ESMACRIL Piscinas |

---

## ✍️ Banco de Contenido

### 6. Ideas de Artículos

#### Categoría: Educación (20 artículos)

**Impermeabilización:**
1. "5 señales de que tu techo necesita impermeabilización urgente"
2. "Guía completa: Cómo impermeabilizar un techo paso a paso"
3. "Diferencias entre pintura elastomérica y caucho mate"

**Preparación:**
4. "Cómo preparar paredes antes de pintar (paso a paso)"
5. "Errores comunes al pintar y cómo evitarlos"

**Colores:**
6. "Guía de colores: ¿Qué transmite cada tono?"
7. "Los 10 colores más vendidos de ACRIL y por qué"

**Mantenimiento:**
8. "Calendario anual de mantenimiento para superficies pintadas"
9. "Cómo limpiar superficies pintadas sin dañarlas"

#### Categoría: Casos de Éxito

10. "Proyecto del mes: Impermeabilización de edificio comercial"
11. "Testimonios: Cómo ACRIL salvó mi techo de filtraciones"
12. "Antes y después: Transformación de fachada industrial"

#### Categoría: Productos

13. "Conoce IMPECRIL: El impermeabilizante que resiste todo"
14. "SEDACRIL: Elegancia satinada para interiores"
15. "Línea de Tratamientos: Preparación profesional"

#### Categoría: Tendencias

16. "Colores de moda 2025 para exteriores"
17. "Acabados texturizados: La nueva tendencia"

#### Categoría: Estacional

18. "Prepara tu hogar para la temporada de lluvias"
19. "Renueva tu hogar para las fiestas de fin de año"
20. "Prepara tu piscina para la temporada de verano"

---

## 🚀 Plan de Implementación

### 7. Implementación Paso a Paso

#### Semana 1-2: Configuración Técnica

**Acciones:**
1. ✅ Crear cuenta en Mailchimp
2. ✅ Diseñar plantilla base con colores ACRIL
3. ✅ Configurar formulario de suscripción
4. ✅ Integrar formulario en sitio web (Footer + Contacto)
5. ✅ Configurar email de bienvenida automático

#### Semana 3: Creación de Contenido

**Acciones:**
1. ✅ Redactar 3 artículos para el primer mes
2. ✅ Diseñar gráficos con colores ACRIL
3. ✅ Preparar ofertas especiales
4. ✅ Crear calendario editorial de 6 meses

**Herramientas:**
- Canva (diseño de gráficos)
- Mailchimp (plantillas de email)
- Google Docs (redacción)

#### Semana 4: Lanzamiento

**Acciones:**
1. ✅ Enviar newsletter de prueba a equipo
2. ✅ Recopilar feedback y ajustar
3. ✅ Enviar primera newsletter
4. ✅ Promocionar en redes sociales

---

### 8. Prueba y Envía

#### Checklist Pre-Envío

**✅ Contenido:**
- [ ] Asunto atractivo (máx. 50 caracteres)
- [ ] Preheader complementa el asunto
- [ ] Personalización funciona ([Nombre])
- [ ] Artículo completo y bien redactado
- [ ] Tips claros y accionables
- [ ] Oferta con fecha de vencimiento
- [ ] Código promocional funciona
- [ ] Info de contacto actualizada
- [ ] Link "darse de baja" funciona

**✅ Diseño:**
- [ ] Logo ACRIL visible
- [ ] Colores consistentes (#DC2626, #FBBF24)
- [ ] Imágenes optimizadas (máx. 200KB)
- [ ] Botones CTA visibles
- [ ] Espaciado adecuado
- [ ] Tipografía legible

**✅ Técnico:**
- [ ] Todos los enlaces funcionan
- [ ] Tracking configurado
- [ ] Email responsive
- [ ] Probado en Gmail, Outlook, Apple Mail
- [ ] Sin errores ortográficos
- [ ] Peso total < 102KB

---

## 📊 Medición y KPIs

### 9. Mide los Resultados

#### KPIs a Monitorear

| Métrica | Meta Inicial | Bueno | Excelente |
|---------|-------------|-------|-----------|
| **Tasa de apertura** | 15% | 20-25% | >30% |
| **Tasa de clics** | 2% | 3-5% | >5% |
| **Tasa de conversión** | 1% | 2-3% | >5% |
| **Cancelaciones** | <5% | <3% | <1% |
| **Crecimiento mensual** | +20 suscriptores | +50 | +100 |

#### Métricas Detalladas

**Tasa de apertura:**
- Cuántas personas abrieron el correo
- Indica efectividad del asunto

**Tasa de clics:**
- Cuántas personas hicieron clic en enlaces
- Indica relevancia del contenido

**Conversiones:**
- Cuántas personas realizaron acción deseada
- Comprar, descargar, contactar

**Cancelaciones:**
- Cuántas personas se dieron de baja
- Indica satisfacción general

---

### 10. Mejora Continuamente

#### Pruebas A/B Sugeridas

**Mes 1-2: Líneas de Asunto**
- Versión A: "🏠 Protege tu hogar de las lluvias"
- Versión B: "Oferta: 20% OFF en impermeabilizantes"

**Mes 3-4: Horarios de Envío**
- Versión A: Martes 9:00 AM
- Versión B: Jueves 3:00 PM

**Mes 5-6: Formato de Contenido**
- Versión A: Artículo largo + oferta
- Versión B: Tips cortos + múltiples ofertas

#### Optimizaciones Basadas en Datos

**Si tasa de apertura es baja (<15%):**
- Mejorar líneas de asunto
- Probar diferentes horarios
- Limpiar lista de inactivos

**Si tasa de clics es baja (<2%):**
- Mejorar CTAs
- Contenido más relevante
- Ofertas más atractivas

**Si cancelaciones son altas (>5%):**
- Reducir frecuencia
- Mejorar segmentación
- Más contenido educativo, menos promocional

---

## 💰 Presupuesto y Timeline

### Presupuesto Estimado

| Concepto | Costo Mensual | Anual | Notas |
|----------|--------------|-------|-------|
| **Mailchimp** | $0 - $20 | $0 - $240 | Gratis hasta 500 contactos |
| **Canva Pro** | $12.99 | $155.88 | Opcional, diseños avanzados |
| **Redacción** | $0 - $100 | $0 - $1,200 | Interno o freelancer |
| **Total** | **$13 - $133** | **$156 - $1,596** | Escalable |

### Timeline de Implementación

```
Semana 1-2: Configuración técnica
├─ Crear cuenta Mailchimp
├─ Diseñar plantilla
└─ Integrar formulario en sitio web

Semana 3: Creación de contenido
├─ Redactar artículos
├─ Diseñar gráficos
└─ Preparar calendario editorial

Semana 4: Lanzamiento
├─ Newsletter de prueba
├─ Ajustar según feedback
└─ Lanzamiento oficial

Mes 2+: Optimización continua
├─ Analizar métricas
├─ Pruebas A/B
└─ Ajustar estrategia
```

---

## 🎁 Propuesta de Código

### Componente de Suscripción

**Ubicación:** `src/components/NewsletterForm.tsx`

**Características:**
- ✅ Diseño consistente con sitio actual
- ✅ Validación de email
- ✅ Integración con Mailchimp API
- ✅ Mensaje de confirmación
- ✅ Responsive (móvil y desktop)

**Integración en:**
1. `Footer.tsx` - Versión compacta
2. `Contact.tsx` - Versión completa con beneficios

---

## ❓ Próximos Pasos

### Decisiones Pendientes de Aprobación

1. **¿Apruebas la estrategia general?**
   - Objetivos, segmentación, frecuencia mensual

2. **¿Implementar componente de suscripción?**
   - Ubicaciones: Footer + Página de Contacto
   - Integración con Mailchimp

3. **¿Plataforma preferida?**
   - Mailchimp (recomendado)
   - Otra alternativa

4. **¿Preparar plantilla en Mailchimp?**
   - Diseño con colores ACRIL
   - Estructura propuesta

5. **¿Contenido para primera newsletter?**
   - Tema sugerido: "Prepara tu hogar para lluvias"

---

## 📌 Resumen Ejecutivo

### Lo que se Propone

- ✅ Sistema de newsletter mensual segmentado
- ✅ Formulario de suscripción integrado en sitio web
- ✅ Mailchimp como plataforma (gratis para empezar)
- ✅ Contenido educativo + ofertas exclusivas
- ✅ Calendario editorial de 6 meses
- ✅ Medición de KPIs y optimización continua

### Beneficios Esperados

- 📈 Mayor fidelización de clientes
- 💰 Incremento en ventas recurrentes
- 🎯 Comunicación directa con audiencia segmentada
- 📊 Datos medibles para tomar decisiones
- 🏆 Posicionamiento como expertos en el sector
- 💌 Canal de comunicación propio (no depende de redes sociales)

---

**Documento creado:** 28 de Octubre 2025  
**Próxima revisión:** Pendiente de aprobación  
**Contacto:** Equipo ACRIL Pinturas
