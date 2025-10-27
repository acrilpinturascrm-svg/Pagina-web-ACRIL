# 🌐 Configuración DNS en Cloudflare para GitHub Pages

## 📋 Registros DNS a Configurar

Una vez que Cloudflare esté activo (nameservers propagados), sigue estos pasos:

---

## 1️⃣ Acceder a DNS en Cloudflare

1. Inicia sesión en [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click en tu dominio `acril.com.ve`
3. En el menú lateral, click en **"DNS"** → **"Records"**

---

## 2️⃣ Agregar Registros A (para acril.com.ve)

Necesitas agregar **4 registros A** con las IPs de GitHub Pages:

### Registro A #1
```
Type: A
Name: @
IPv4 address: 185.199.108.153
Proxy status: DNS only (nube gris, NO naranja)
TTL: Auto
```

### Registro A #2
```
Type: A
Name: @
IPv4 address: 185.199.109.153
Proxy status: DNS only (nube gris)
TTL: Auto
```

### Registro A #3
```
Type: A
Name: @
IPv4 address: 185.199.110.153
Proxy status: DNS only (nube gris)
TTL: Auto
```

### Registro A #4
```
Type: A
Name: @
IPv4 address: 185.199.111.153
Proxy status: DNS only (nube gris)
TTL: Auto
```

**IMPORTANTE:** La nube debe estar en **GRIS** (DNS only), NO naranja.

---

## 3️⃣ Agregar Registro CNAME (para www.acril.com.ve)

### Registro CNAME
```
Type: CNAME
Name: www
Target: acrilpinturascrm-svg.github.io
Proxy status: DNS only (nube gris, NO naranja)
TTL: Auto
```

---

## 4️⃣ Configurar en GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. En **"Custom domain"** ingresa: `www.acril.com.ve`
4. Click en **"Save"**
5. Espera unos minutos
6. Marca la casilla **"Enforce HTTPS"** (aparecerá después de verificar el dominio)

---

## ✅ Verificación

### Cómo saber si está funcionando:

1. **En Cloudflare:**
   - Los registros DNS deben aparecer en la lista
   - Estado: "Activo" o "Active"

2. **En GitHub Pages:**
   - El mensaje "DNS check successful" debe aparecer
   - El dominio debe mostrar un check verde ✓

3. **En tu navegador:**
   - Visita `http://www.acril.com.ve`
   - Debe cargar tu sitio (puede tardar hasta 24 horas)

---

## ⏱️ Tiempos de Propagación

- **Nameservers:** 1-48 horas
- **Registros DNS:** 5 minutos - 2 horas
- **HTTPS en GitHub:** 24 horas después de verificar el dominio

---

## 🚨 Solución de Problemas

### Error: "DNS check unsuccessful"
- Verifica que los 4 registros A estén correctos
- Verifica que el CNAME apunte a `acrilpinturascrm-svg.github.io`
- Espera más tiempo (hasta 24 horas)

### Error: "Both www.acril.com.ve and its alternate name are improperly configured"
- Los nameservers aún no se han propagado
- Espera más tiempo
- Verifica en [whatsmydns.net](https://whatsmydns.net) que los nameservers sean de Cloudflare

### La nube está naranja en Cloudflare
- Click en la nube naranja para cambiarla a gris
- GitHub Pages requiere "DNS only" (gris)

---

## 📞 Siguiente Paso

Una vez configurado el DNS, necesitarás resolver el problema de las **variables de entorno** para que el formulario de contacto funcione.

### Opciones:
1. Crear un backend serverless (Vercel Functions, Cloudflare Workers)
2. Usar Cloudflare Pages en lugar de GitHub Pages
3. Exponer las credenciales (no recomendado)

---

## 📝 Checklist

- [ ] Nameservers cambiados en el registrador
- [ ] Cloudflare activo (email de confirmación recibido)
- [ ] 4 registros A agregados en Cloudflare
- [ ] 1 registro CNAME agregado en Cloudflare
- [ ] Todas las nubes en GRIS (DNS only)
- [ ] Dominio configurado en GitHub Pages
- [ ] DNS check successful en GitHub
- [ ] HTTPS habilitado en GitHub Pages
- [ ] Sitio carga en www.acril.com.ve

---

¡Guarda este archivo para referencia! 🚀
