# 🚀 Guía de Despliegue - ACRIL Pinturas
## www.acril.com.ve

**Fecha:** 24 de Octubre, 2025  
**Estado:** Listo para Producción ✅

---

## 📋 Pre-requisitos

### ✅ Lo que YA tienes listo:
- [x] Código fuente completo y funcional
- [x] Optimizaciones de SEO implementadas
- [x] Configuración de Netlify (netlify.toml)
- [x] Variables de entorno configuradas
- [x] Build optimizado (19 chunks)
- [x] PWA manifest
- [x] Sitemap.xml
- [x] Robots.txt

### 📝 Lo que necesitas:
- [ ] Cuenta en Netlify (gratuita)
- [ ] Dominio www.acril.com.ve registrado
- [ ] Acceso al panel de tu proveedor de dominio

---

## 🎯 Opción 1: Despliegue en Netlify (RECOMENDADO)

### Paso 1: Crear Cuenta en Netlify

1. Ve a: https://www.netlify.com/
2. Haz clic en "Sign up" (Registrarse)
3. Elige "Sign up with GitHub" o "Sign up with Email"
4. Completa el registro

### Paso 2: Preparar el Proyecto

#### A. Verificar que el build funcione localmente

```bash
# En la terminal, dentro de la carpeta del proyecto:
npm install
npm run build
```

**Resultado esperado:** Carpeta `dist/` creada sin errores

#### B. Crear repositorio en GitHub (si no lo tienes)

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Preparado para producción - ACRIL Pinturas"

# Crear repositorio en GitHub y conectarlo
# Ve a github.com, crea un nuevo repositorio llamado "Pagina-web-ACRIL"
# Luego ejecuta:
git remote add origin https://github.com/TU-USUARIO/Pagina-web-ACRIL.git
git branch -M main
git push -u origin main
```

### Paso 3: Desplegar en Netlify

#### Opción A: Desde GitHub (RECOMENDADO)

1. **En Netlify Dashboard:**
   - Clic en "Add new site" → "Import an existing project"
   - Selecciona "GitHub"
   - Autoriza a Netlify acceder a tu GitHub
   - Selecciona el repositorio "Pagina-web-ACRIL"

2. **Configuración del Build:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Variables de Entorno:**
   - Clic en "Site settings" → "Environment variables"
   - Agregar las siguientes variables:
   ```
   VITE_EMAILJS_SERVICE_ID=service_qbm4var
   VITE_EMAILJS_TEMPLATE_ID=template_8hodd6f
   VITE_EMAILJS_PUBLIC_KEY=CyXliHb1oYX6ckq58
   VITE_WHATSAPP_NUMBER=584244597443
   ```

4. **Deploy:**
   - Clic en "Deploy site"
   - Espera 2-3 minutos
   - ¡Tu sitio estará en línea! (con URL temporal de Netlify)

#### Opción B: Deploy Manual (Drag & Drop)

1. **Hacer build local:**
   ```bash
   npm run build
   ```

2. **En Netlify:**
   - Clic en "Add new site" → "Deploy manually"
   - Arrastra la carpeta `dist/` completa
   - Espera que suba
   - ¡Listo!

3. **Configurar variables de entorno:**
   - Igual que en Opción A, paso 3

### Paso 4: Configurar Dominio Personalizado

#### A. En Netlify:

1. Ve a "Site settings" → "Domain management"
2. Clic en "Add custom domain"
3. Ingresa: `www.acril.com.ve`
4. Netlify te mostrará los registros DNS que necesitas configurar

#### B. En tu Proveedor de Dominio:

**Necesitas agregar estos registros DNS:**

```
Tipo: CNAME
Nombre: www
Valor: [tu-sitio].netlify.app
TTL: 3600 (o automático)

Tipo: A (para dominio raíz acril.com.ve)
Nombre: @ (o dejar vacío)
Valor: 75.2.60.5
TTL: 3600

Tipo: CNAME (alternativa para dominio raíz)
Nombre: @ (o dejar vacío)
Valor: [tu-sitio].netlify.app
TTL: 3600
```

**Proveedores comunes en Venezuela:**

##### Si usas NIC.ve:
1. Inicia sesión en https://registro.nic.ve/
2. Ve a "Mis Dominios" → "acril.com.ve"
3. Clic en "Gestión DNS"
4. Agrega los registros CNAME y A

##### Si usas otro proveedor (GoDaddy, Namecheap, etc.):
1. Inicia sesión en tu panel de control
2. Busca "DNS Management" o "Gestión DNS"
3. Agrega los registros proporcionados por Netlify

#### C. Verificar Dominio en Netlify:

1. Después de configurar DNS, vuelve a Netlify
2. Clic en "Verify DNS configuration"
3. Espera 24-48 horas para propagación completa
4. Netlify configurará HTTPS automáticamente (Let's Encrypt)

---

## 🔒 Configurar HTTPS (Automático en Netlify)

Netlify configura HTTPS automáticamente con Let's Encrypt:

1. Una vez verificado el dominio
2. Espera 5-10 minutos
3. Ve a "Site settings" → "Domain management" → "HTTPS"
4. Verifica que diga "Certificate active"
5. Activa "Force HTTPS" (redirigir HTTP a HTTPS)

---

## 🎯 Opción 2: Despliegue en Vercel (Alternativa)

### Paso 1: Crear Cuenta en Vercel

1. Ve a: https://vercel.com/
2. "Sign up" con GitHub
3. Importa el repositorio
4. Vercel detecta automáticamente Vite

### Paso 2: Configurar

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Paso 3: Variables de Entorno

Igual que en Netlify, agregar las 4 variables.

### Paso 4: Dominio Personalizado

Similar a Netlify:
1. "Settings" → "Domains"
2. Agregar "www.acril.com.ve"
3. Configurar DNS según instrucciones de Vercel

---

## 🎯 Opción 3: Hosting Tradicional (cPanel)

Si prefieres hosting tradicional venezolano:

### Paso 1: Build Local

```bash
npm run build
```

### Paso 2: Subir Archivos

1. Conecta por FTP o File Manager de cPanel
2. Sube TODO el contenido de la carpeta `dist/` a `public_html/`
3. Asegúrate de subir también:
   - `.htaccess` (crear si no existe)
   - Todas las subcarpetas

### Paso 3: Crear .htaccess

Crea un archivo `.htaccess` en `public_html/`:

```apache
# Redirigir HTTP a HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirigir sin www a www
RewriteCond %{HTTP_HOST} ^acril\.com\.ve [NC]
RewriteRule ^(.*)$ https://www.acril.com.ve/$1 [L,R=301]

# SPA Routing - Todas las rutas al index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Compresión GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache Control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Frame-Options "DENY"
  Header set X-Content-Type-Options "nosniff"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### Paso 4: Configurar Variables de Entorno

**IMPORTANTE:** En hosting tradicional, las variables de entorno se "queman" en el build.

Antes de hacer `npm run build`, crea un archivo `.env` local:

```bash
VITE_EMAILJS_SERVICE_ID=service_qbm4var
VITE_EMAILJS_TEMPLATE_ID=template_8hodd6f
VITE_EMAILJS_PUBLIC_KEY=CyXliHb1oYX6ckq58
VITE_WHATSAPP_NUMBER=584244597443
```

Luego haz el build y sube.

---

## ✅ Checklist Post-Despliegue

### Verificaciones Inmediatas:

- [ ] **Sitio accesible:** www.acril.com.ve carga correctamente
- [ ] **HTTPS activo:** Candado verde en el navegador
- [ ] **Redirección HTTP→HTTPS:** http://acril.com.ve redirige a https://www.acril.com.ve
- [ ] **Redirección sin www:** acril.com.ve redirige a www.acril.com.ve
- [ ] **Todas las secciones funcionan:** Navegar por todas las páginas
- [ ] **Formulario de contacto:** Enviar email de prueba
- [ ] **WhatsApp funciona:** Clic en botón de WhatsApp
- [ ] **PDFs descargan:** Probar descarga de fichas técnicas
- [ ] **Imágenes cargan:** Verificar que todas las imágenes se ven
- [ ] **Responsive:** Probar en móvil y tablet
- [ ] **Velocidad:** PageSpeed Insights >90

### Verificaciones SEO:

- [ ] **Google Search Console:** Enviar sitemap
- [ ] **Sitemap accesible:** www.acril.com.ve/sitemap.xml
- [ ] **Robots.txt accesible:** www.acril.com.ve/robots.txt
- [ ] **Meta tags:** Ver código fuente, verificar title y description
- [ ] **Schema.org:** Rich Results Test de Google
- [ ] **Open Graph:** Facebook Debugger
- [ ] **Mobile-Friendly:** Mobile-Friendly Test de Google

### Configuraciones Externas:

- [ ] **Google Search Console:** Registrar y verificar propiedad
- [ ] **Google Analytics:** Configurar tracking
- [ ] **Google My Business:** Crear/verificar perfil
- [ ] **Facebook Pixel:** (Opcional) Si usarás ads
- [ ] **Hotjar/Analytics:** (Opcional) Para heatmaps

---

## 🐛 Solución de Problemas Comunes

### Problema: "Site not found" o 404

**Solución:**
- Verifica que la carpeta `dist/` se subió correctamente
- En Netlify: verifica que "Publish directory" sea `dist`
- Espera 5-10 minutos después del deploy

### Problema: Imágenes no cargan

**Solución:**
- Verifica que la carpeta `public/` esté en el build
- Rutas deben ser `/images/...` no `./images/...`
- Verifica que los archivos existan en `public/images/`

### Problema: Formulario no envía emails

**Solución:**
- Verifica variables de entorno en Netlify
- Prueba las credenciales de EmailJS en su dashboard
- Revisa la consola del navegador para errores

### Problema: Dominio no resuelve

**Solución:**
- DNS tarda 24-48 horas en propagarse
- Verifica registros DNS con: https://dnschecker.org/
- Asegúrate de haber configurado CNAME y A records correctamente

### Problema: HTTPS no funciona

**Solución:**
- En Netlify: espera 10-15 minutos después de verificar dominio
- Verifica que "Force HTTPS" esté activado
- Si persiste, contacta soporte de Netlify

### Problema: Sitio lento

**Solución:**
- Verifica en PageSpeed Insights
- Optimiza imágenes (comprimir, usar WebP)
- Verifica que cache headers estén configurados
- Considera usar CDN

---

## 📊 Monitoreo Post-Despliegue

### Día 1-7:
- [ ] Monitorear errores en consola del navegador
- [ ] Verificar que formulario funcione
- [ ] Probar en diferentes dispositivos
- [ ] Revisar Google Search Console diariamente
- [ ] Verificar que sitemap se indexe

### Semana 2-4:
- [ ] Analizar Google Analytics
- [ ] Revisar posiciones en Google Search Console
- [ ] Optimizar páginas con bajo rendimiento
- [ ] Solicitar primeras reseñas en GMB

### Mes 2-3:
- [ ] Análisis completo de métricas
- [ ] Ajustar estrategia SEO según datos
- [ ] Publicar contenido nuevo
- [ ] Expandir link building

---

## 🎯 Comandos Útiles

### Desarrollo Local:
```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Tests
npm run test
```

### Git (para actualizar):
```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Commit
git commit -m "Descripción del cambio"

# Push a GitHub (auto-deploy en Netlify)
git push origin main
```

---

## 📞 Soporte y Recursos

### Netlify:
- **Documentación:** https://docs.netlify.com/
- **Soporte:** https://www.netlify.com/support/
- **Status:** https://www.netlifystatus.com/

### Dominios Venezuela:
- **NIC.ve:** https://registro.nic.ve/
- **Soporte NIC.ve:** soporte@nic.ve

### Herramientas de Verificación:
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Rich Results Test:** https://search.google.com/test/rich-results
- **DNS Checker:** https://dnschecker.org/
- **SSL Checker:** https://www.sslshopper.com/ssl-checker.html

---

## 🎉 ¡Felicidades!

Una vez completados estos pasos, tu sitio web estará:
- ✅ En línea y accesible mundialmente
- ✅ Con HTTPS seguro
- ✅ Optimizado para SEO
- ✅ Listo para recibir clientes

### Próximos Pasos Recomendados:
1. Configurar Google Search Console (URGENTE)
2. Configurar Google Analytics (URGENTE)
3. Crear perfil de Google My Business (URGENTE)
4. Solicitar primeras reseñas
5. Publicar en redes sociales el lanzamiento
6. Enviar email a clientes actuales con el nuevo sitio

---

**¿Necesitas ayuda durante el despliegue?**
- Email: acrilpinturas@gmail.com
- WhatsApp: +58 4244597443

**Documento creado por:** Cascade AI  
**Fecha:** 24 de Octubre, 2025  
**Versión:** 1.0
