# 🌐 PASO 2: Configurar DNS en Cloudflare (Ejecutar DESPUÉS del Email)

## ⏳ Estado Actual
- ✅ Nameservers configurados en NIC.ve
- 🔄 Esperando propagación (1-24 horas)
- 📧 Recibirás email cuando esté listo

---

## 📧 Cuando Recibas el Email de Cloudflare

El email dirá algo como:
> "Great news! Cloudflare is now protecting your site acril.com.ve"

**ENTONCES** sigue estos pasos:

---

## 🎯 PASO 2A: Configurar Registros DNS en Cloudflare

### 1. Acceder a DNS en Cloudflare
1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click en `acril.com.ve`
3. En el menú lateral izquierdo, click en **"DNS"** → **"Records"**

### 2. Agregar 4 Registros A (para acril.com.ve)

**IMPORTANTE:** La nube debe estar en **GRIS** (DNS only), NO naranja.

#### Registro A #1
```
Type: A
Name: @
IPv4 address: 185.199.108.153
Proxy status: DNS only (🌥️ GRIS)
TTL: Auto
```
Click en **"Save"**

#### Registro A #2
```
Type: A
Name: @
IPv4 address: 185.199.109.153
Proxy status: DNS only (🌥️ GRIS)
TTL: Auto
```
Click en **"Save"**

#### Registro A #3
```
Type: A
Name: @
IPv4 address: 185.199.110.153
Proxy status: DNS only (🌥️ GRIS)
TTL: Auto
```
Click en **"Save"**

#### Registro A #4
```
Type: A
Name: @
IPv4 address: 185.199.111.153
Proxy status: DNS only (🌥️ GRIS)
TTL: Auto
```
Click en **"Save"**

### 3. Agregar 1 Registro CNAME (para www.acril.com.ve)

```
Type: CNAME
Name: www
Target: acrilpinturascrm-svg.github.io
Proxy status: DNS only (🌥️ GRIS)
TTL: Auto
```
Click en **"Save"**

### 4. Verificar que la Nube esté en GRIS

**MUY IMPORTANTE:**
- Si ves una nube **🟠 NARANJA**, haz click en ella para cambiarla a **🌥️ GRIS**
- GitHub Pages NO funciona con el proxy de Cloudflare activado
- Debe decir "DNS only"

---

## 🎯 PASO 2B: Configurar Dominio en GitHub Pages

### 1. Ir a GitHub Pages Settings
1. Ve a tu repositorio: `https://github.com/acrilpinturascrm-svg/acril-pinturas-website`
2. Click en **"Settings"** (arriba derecha)
3. En el menú lateral, click en **"Pages"**

### 2. Configurar Custom Domain
1. En la sección **"Custom domain"**
2. Ingresa: `www.acril.com.ve`
3. Click en **"Save"**

### 3. Esperar Verificación DNS
- GitHub verificará los registros DNS
- Puede tardar 5-30 minutos
- Verás un mensaje: ✅ "DNS check successful"

### 4. Habilitar HTTPS
- Una vez que veas el check verde ✓
- Marca la casilla **"Enforce HTTPS"**
- **NOTA:** HTTPS puede tardar hasta 24 horas en activarse completamente

---

## ✅ Verificación Final

### En Cloudflare:
- [ ] 4 registros A agregados (todas las IPs de GitHub)
- [ ] 1 registro CNAME agregado (www → github.io)
- [ ] Todas las nubes en GRIS (DNS only)

### En GitHub Pages:
- [ ] Custom domain configurado: `www.acril.com.ve`
- [ ] DNS check successful ✓
- [ ] Enforce HTTPS marcado (después de 24 horas)

### En tu Navegador:
- [ ] `http://www.acril.com.ve` carga tu sitio
- [ ] `https://www.acril.com.ve` carga tu sitio (después de 24 horas)
- [ ] `http://acril.com.ve` redirige a www

---

## 🚨 Solución de Problemas

### Error: "DNS check unsuccessful" en GitHub
**Causa:** Los registros DNS no se han propagado o están incorrectos

**Solución:**
1. Verifica que los 4 registros A estén correctos en Cloudflare
2. Verifica que el CNAME apunte a `acrilpinturascrm-svg.github.io`
3. Verifica que las nubes estén en GRIS
4. Espera 1-2 horas más y refresca la página

### Error: "Both www.acril.com.ve and its alternate name are improperly configured"
**Causa:** DNS aún no propagado

**Solución:**
1. Espera más tiempo (hasta 24 horas)
2. Verifica en [whatsmydns.net](https://www.whatsmydns.net) que los registros sean visibles globalmente

### La nube está naranja en Cloudflare
**Causa:** Proxy de Cloudflare activado

**Solución:**
1. Click en la nube naranja 🟠
2. Cambiar a "DNS only" (gris 🌥️)
3. Guardar cambios

### El sitio no carga después de 24 horas
**Causa:** Puede ser cache del navegador o DNS local

**Solución:**
1. Limpia el cache del navegador (Ctrl + Shift + Delete)
2. Prueba en modo incógnito
3. Prueba desde otro dispositivo o red
4. Ejecuta: `ipconfig /flushdns` en PowerShell

---

## 📞 Siguiente Problema: Variables de Entorno

Una vez que el sitio esté funcionando, necesitarás resolver el problema de las **variables de entorno** para que el formulario de contacto funcione.

### Opciones:
1. **Cloudflare Workers** (backend serverless gratis)
2. **Vercel Functions** (backend serverless gratis)
3. **Exponer credenciales** (no recomendado)

Te ayudaré con esto cuando el DNS esté funcionando.

---

## 📧 Avísame Cuando Recibas el Email

Cuando Cloudflare te envíe el email de confirmación, avísame y te guío paso a paso en la configuración de DNS.

¡Estás muy cerca! 🚀
