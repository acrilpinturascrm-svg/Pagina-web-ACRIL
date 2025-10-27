# ⚡ Guía Rápida de Despliegue - ACRIL Pinturas

## 🎯 Opción Más Rápida: Netlify (15 minutos)

### ✅ Build Exitoso
Tu proyecto ya está compilado y listo para producción:
- ✓ Build completado en 10.98s
- ✓ 19 archivos optimizados
- ✓ Bundle total: ~340 KB (comprimido: 85 KB)
- ✓ Sin errores

---

## 🚀 Pasos para Desplegar AHORA

### 1️⃣ Crear Cuenta en Netlify (2 minutos)

1. Ve a: **https://www.netlify.com/**
2. Clic en **"Sign up"**
3. Elige **"Sign up with Email"** o GitHub
4. Confirma tu email

### 2️⃣ Desplegar el Sitio (5 minutos)

#### Opción A: Drag & Drop (MÁS RÁPIDO)

1. **En Netlify Dashboard:**
   - Clic en **"Add new site"** → **"Deploy manually"**

2. **Arrastra la carpeta `dist`:**
   - Busca la carpeta: `C:\Users\USUARIO\Desktop\Pagina-web-ACRIL\dist`
   - Arrastra TODA la carpeta `dist` a Netlify
   - Espera 1-2 minutos

3. **¡Listo!** Tu sitio estará en línea con una URL temporal como:
   ```
   https://random-name-123456.netlify.app
   ```

#### Opción B: Desde GitHub (Recomendado para actualizaciones automáticas)

1. **Sube tu código a GitHub:**
   ```bash
   # En la terminal del proyecto:
   git init
   git add .
   git commit -m "Sitio web ACRIL listo para producción"
   
   # Crea un repo en github.com llamado "acril-website"
   # Luego:
   git remote add origin https://github.com/TU-USUARIO/acril-website.git
   git branch -M main
   git push -u origin main
   ```

2. **En Netlify:**
   - Clic en **"Add new site"** → **"Import an existing project"**
   - Selecciona **"GitHub"**
   - Autoriza Netlify
   - Selecciona tu repositorio
   - **Build settings:**
     ```
     Build command: npm run build
     Publish directory: dist
     ```
   - Clic en **"Deploy"**

### 3️⃣ Configurar Variables de Entorno (2 minutos)

1. En Netlify, ve a: **"Site settings"** → **"Environment variables"**
2. Clic en **"Add a variable"**
3. Agrega estas 4 variables:

```
Key: VITE_EMAILJS_SERVICE_ID
Value: service_qbm4var

Key: VITE_EMAILJS_TEMPLATE_ID
Value: template_8hodd6f

Key: VITE_EMAILJS_PUBLIC_KEY
Value: CyXliHb1oYX6ckq58

Key: VITE_WHATSAPP_NUMBER
Value: 584244597443
```

4. Clic en **"Save"**
5. Ve a **"Deploys"** → **"Trigger deploy"** → **"Deploy site"**

### 4️⃣ Configurar tu Dominio www.acril.com.ve (5 minutos)

1. **En Netlify:**
   - Ve a **"Site settings"** → **"Domain management"**
   - Clic en **"Add custom domain"**
   - Ingresa: `www.acril.com.ve`
   - Clic en **"Verify"**

2. **Netlify te mostrará algo como:**
   ```
   Configure these DNS records with your domain provider:
   
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

3. **En tu proveedor de dominio (NIC.ve u otro):**
   - Inicia sesión
   - Ve a "Gestión DNS" o "DNS Management"
   - Agrega el registro CNAME que Netlify te indicó
   - **Ejemplo:**
     ```
     Tipo: CNAME
     Host/Nombre: www
     Apunta a: your-site-name.netlify.app
     TTL: 3600 (o automático)
     ```

4. **Espera 10-30 minutos** (puede tardar hasta 24 horas)

5. **En Netlify, verifica:**
   - Vuelve a "Domain management"
   - Clic en "Verify DNS configuration"
   - Cuando esté verificado, Netlify activará HTTPS automáticamente

---

## ✅ Verificación Post-Despliegue

### Prueba tu sitio:

1. **Accede a tu URL temporal de Netlify**
   - Ejemplo: https://your-site.netlify.app

2. **Verifica que funcione:**
   - [ ] Página carga correctamente
   - [ ] Navegación entre secciones funciona
   - [ ] Formulario de contacto (envía un email de prueba)
   - [ ] Botón de WhatsApp abre correctamente
   - [ ] Descarga de PDFs funciona
   - [ ] Se ve bien en móvil (prueba desde tu teléfono)

3. **Una vez configurado el dominio:**
   - [ ] www.acril.com.ve carga
   - [ ] Tiene candado verde (HTTPS)
   - [ ] acril.com.ve redirige a www.acril.com.ve

---

## 🐛 Problemas Comunes

### "Build failed" en Netlify
**Solución:** Asegúrate de que las variables de entorno estén configuradas y vuelve a hacer deploy.

### "Domain not found"
**Solución:** El DNS tarda en propagarse. Espera 24-48 horas. Verifica en https://dnschecker.org/

### Formulario no envía emails
**Solución:** Verifica que las variables de entorno estén correctas en Netlify.

### Imágenes no cargan
**Solución:** Asegúrate de que la carpeta `public/` con todas las imágenes esté en el repositorio.

---

## 📊 Después del Despliegue

### URGENTE - Hacer HOY:

1. **Google Search Console** (5 min)
   - Ve a: https://search.google.com/search-console
   - Agrega tu sitio: www.acril.com.ve
   - Verifica propiedad (método HTML tag)
   - Envía sitemap: www.acril.com.ve/sitemap.xml

2. **Google Analytics** (5 min)
   - Ve a: https://analytics.google.com
   - Crea propiedad para www.acril.com.ve
   - Obtén código de tracking
   - (Opcional) Agrégalo al sitio después

3. **Google My Business** (10 min)
   - Ve a: https://business.google.com
   - Crea perfil para ACRIL Pinturas
   - Agrega toda la información
   - Solicita verificación

---

## 💰 Costos

### Netlify (Plan Gratuito):
- ✅ 100 GB de ancho de banda/mes
- ✅ 300 minutos de build/mes
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Suficiente para 10,000+ visitas/mes
- ✅ **GRATIS** 🎉

### Dominio www.acril.com.ve:
- Costo anual: ~$15-30 USD (depende del proveedor)
- Renovación anual

### Total mensual: **$0 USD** (solo dominio anual)

---

## 🎉 ¡Eso es Todo!

Tu sitio web estará en línea en **menos de 15 minutos**.

### Resumen de URLs:

- **Sitio temporal:** https://[tu-sitio].netlify.app
- **Sitio final:** https://www.acril.com.ve
- **Panel Netlify:** https://app.netlify.com
- **Search Console:** https://search.google.com/search-console

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas durante el despliegue:

1. **Revisa la guía completa:** `DEPLOYMENT_GUIDE.md`
2. **Documentación Netlify:** https://docs.netlify.com/
3. **Soporte Netlify:** https://www.netlify.com/support/

---

**¡Éxito con tu lanzamiento! 🚀**

El sitio está 100% listo para producción. Solo necesitas subirlo a Netlify y configurar el dominio.
