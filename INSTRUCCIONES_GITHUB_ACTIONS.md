# 🔧 Configurar GitHub Actions para Deploy Automático

## ✅ Pasos para Activar el Deploy

### 1️⃣ Verificar que GitHub Actions esté habilitado

1. Ve a tu repositorio: `https://github.com/acrilpinturascrm-svg/Pagina-web-ACRIL`
2. Click en **"Settings"** (arriba derecha)
3. En el menú lateral, busca **"Actions"** → **"General"**
4. En **"Actions permissions"**, asegúrate de que esté seleccionado:
   - ✅ **"Allow all actions and reusable workflows"**
5. Scroll hacia abajo hasta **"Workflow permissions"**
6. Selecciona:
   - ✅ **"Read and write permissions"**
7. Click en **"Save"**

### 2️⃣ Ejecutar el Workflow Manualmente

1. Ve a la pestaña **"Actions"**
2. En el menú lateral izquierdo, click en **"Deploy to GitHub Pages"**
3. Click en el botón **"Run workflow"** (arriba derecha)
4. Selecciona la rama **"master"**
5. Click en **"Run workflow"** (verde)

### 3️⃣ Esperar a que termine

- El workflow tardará 2-3 minutos
- Verás un círculo amarillo 🟡 mientras se ejecuta
- Cuando termine, verás un check verde ✅ o una X roja ❌

### 4️⃣ Si hay errores

Si ves una X roja ❌:
1. Click en el workflow que falló
2. Click en el job "build" o "deploy"
3. Revisa los logs para ver el error
4. Toma una captura y compártela

---

## 🔍 Verificar el Deploy

Una vez que veas el ✅ verde:

1. Ve a: `https://acrilpinturascrm-svg.github.io/Pagina-web-ACRIL/`
2. Presiona **Ctrl + Shift + R** (hard refresh)
3. El sitio debería cargar correctamente

---

## 🚨 Si Sigue en Blanco

Si después del ✅ verde el sitio sigue en blanco:

1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Toma captura de los errores
4. Ve a la pestaña "Network"
5. Refresca la página
6. Toma captura de los archivos que fallan (404)

---

## 📝 Checklist

- [ ] Actions permissions: "Allow all actions"
- [ ] Workflow permissions: "Read and write"
- [ ] Pages Source: "GitHub Actions"
- [ ] Workflow ejecutado manualmente
- [ ] Workflow completado con ✅
- [ ] Sitio carga correctamente

---

¡Sigue estos pasos y avísame cuando veas el ✅ verde! 🚀
