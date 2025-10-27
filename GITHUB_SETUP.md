# 📦 Guía para Subir ACRIL a GitHub

## ✅ Estado Actual
- ✅ Repositorio Git inicializado
- ✅ Primer commit realizado (92 archivos)
- ✅ `.gitignore` configurado correctamente
- ✅ Variables de entorno protegidas
- ✅ `.env.example` con placeholders seguros

---

## 🚀 Pasos para Subir a GitHub

### 1. Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** (arriba derecha) → **"New repository"**
3. Configura el repositorio:
   - **Repository name**: `acril-pinturas-website` (o el nombre que prefieras)
   - **Description**: `Sitio web oficial de ACRIL Pinturas - Valencia, Carabobo, Venezuela`
   - **Visibility**: 
     - ✅ **Private** (recomendado para proteger información del negocio)
     - ⚠️ **Public** (solo si quieres que sea visible públicamente)
   - ⚠️ **NO marques** "Add a README file"
   - ⚠️ **NO marques** "Add .gitignore"
   - ⚠️ **NO marques** "Choose a license"
4. Haz clic en **"Create repository"**

### 2. Conectar tu Repositorio Local con GitHub

GitHub te mostrará instrucciones. Usa estas (reemplaza `TU-USUARIO` con tu usuario de GitHub):

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/TU-USUARIO/acril-pinturas-website.git

# Renombrar la rama a 'main' (GitHub usa 'main' por defecto)
git branch -M main

# Subir el código
git push -u origin main
```

### 3. Comandos Completos (Copia y Pega)

Ejecuta estos comandos en PowerShell desde la carpeta del proyecto:

```powershell
# 1. Agregar el repositorio remoto (REEMPLAZA TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/acril-pinturas-website.git

# 2. Renombrar rama a main
git branch -M main

# 3. Subir código a GitHub
git push -u origin main
```

---

## 🔐 Seguridad - Variables de Entorno

### ⚠️ IMPORTANTE: Configurar Variables en GitHub

Tu archivo `.env` NO se subirá a GitHub (está protegido por `.gitignore`).

Para que el sitio funcione en producción, debes configurar las variables de entorno:

#### En GitHub (para GitHub Pages):
1. Ve a tu repositorio en GitHub
2. **Settings** → **Secrets and variables** → **Actions**
3. Haz clic en **"New repository secret"**
4. Agrega cada variable:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_WHATSAPP_NUMBER`

#### En Netlify (recomendado):
1. Después de conectar el repositorio
2. **Site settings** → **Environment variables**
3. Agrega las mismas variables

---

## 📋 Checklist Final

Antes de subir, verifica:

- [ ] El archivo `.env` está en `.gitignore` ✅
- [ ] El archivo `.env.example` NO contiene credenciales reales ✅
- [ ] Has hecho el primer commit ✅
- [ ] Has creado el repositorio en GitHub
- [ ] Has copiado la URL del repositorio
- [ ] Has ejecutado los comandos de conexión

---

## 🌐 Próximos Pasos: Deploy

Una vez en GitHub, puedes desplegar en:

### Opción 1: Netlify (Recomendado)
1. Ve a [netlify.com](https://netlify.com)
2. **"Add new site"** → **"Import an existing project"**
3. Conecta con GitHub
4. Selecciona el repositorio `acril-pinturas-website`
5. Netlify detectará automáticamente Vite
6. Agrega las variables de entorno
7. **Deploy**

### Opción 2: Vercel
1. Ve a [vercel.com](https://vercel.com)
2. **"Add New"** → **"Project"**
3. Importa desde GitHub
4. Configura variables de entorno
5. **Deploy**

### Opción 3: GitHub Pages
- Requiere configuración adicional
- No recomendado para sitios con variables de entorno

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/acril-pinturas-website.git
```

### Error: "Authentication failed"
- Usa un **Personal Access Token** en lugar de contraseña
- GitHub → Settings → Developer settings → Personal access tokens → Generate new token

### Ver repositorios remotos configurados
```bash
git remote -v
```

---

## 📞 Contacto

Si tienes dudas, puedo ayudarte con:
- Configuración de variables de entorno
- Deploy en Netlify/Vercel
- Configuración de dominio personalizado
- Cualquier error que encuentres

¡Estás listo para subir tu proyecto a GitHub! 🚀
