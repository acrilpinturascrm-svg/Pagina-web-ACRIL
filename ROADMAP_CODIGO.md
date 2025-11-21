# 🎨 Guía Súper Simple del Código - ACRIL Pinturas

> **¡Imagina que el código es como una casa!** 🏠

---

## 🚪 LA PUERTA DE ENTRADA

```
1. El usuario abre la página → main.tsx
2. main.tsx abre App.tsx (el cerebro de la casa)
3. App.tsx muestra lo que el usuario quiere ver
```

**Así de simple:** Usuario → main.tsx → App.tsx → ¡Página lista!

---

## 🏠 LA ESTRUCTURA DE LA CASA (Carpetas)

```
src/
├── main.tsx                    ← LA PUERTA (punto de inicio)
├── App.tsx                     ← EL CEREBRO (controla todo)
│
├── components/                 ← LAS HABITACIONES (partes de la página)
│   ├── HeaderWithSearch.tsx    ← La barra de arriba con búsqueda
│   ├── Hero.tsx                ← El banner grande
│   ├── Services.tsx            ← Los servicios
│   ├── About.tsx               ← Sobre nosotros
│   ├── Contact.tsx             ← Formulario de contacto
│   ├── Footer.tsx              ← El pie de página
│   ├── SearchBar.tsx           ← La búsqueda
│   ├── ProductsDropdown.tsx    ← El menú de productos
│   ├── LineaElastomerica.tsx   ← Línea 1 de productos
│   ├── LineaCaucho.tsx         ← Línea 2 de productos
│   ├── LineaSatinados.tsx      ← Línea 3 de productos
│   ├── LineaSolvente.tsx       ← Línea 4 de productos
│   └── LineaTratamientos.tsx   ← Línea 5 de productos
│
├── constants/                  ← LOS DATOS (información fija)
│   ├── colors.ts               ← Todos los productos y colores
│   ├── brandColors.ts          ← Colores rojo y amarillo de ACRIL
│   └── navigation.ts           ← El menú de navegación
│
├── utils/                      ← LAS HERRAMIENTAS (funciones útiles)
│   ├── pdfUtils.ts             ← Para descargar PDFs
│   └── assetPath.ts            ← Para encontrar imágenes
│
└── types/                      ← LAS REGLAS (tipos de datos)
    └── index.ts                ← Define qué es un producto, color, etc.
```

---

## 🎯 ¿QUÉ HACE CADA ARCHIVO IMPORTANTE?

### **App.tsx** - El Cerebro 🧠
- Decide qué mostrar según dónde esté el usuario
- Si está en "inicio" → muestra Hero, Services, About, Contact
- Si está en "linea-solvente" → muestra LineaSolvente.tsx
- Es como el control remoto de la casa

### **HeaderWithSearch.tsx** - La Barra de Arriba 📍
- El menú principal
- La búsqueda de productos
- El dropdown de productos
- Aparece en TODAS las páginas

### **colors.ts** - La Base de Datos de Productos 📦
- Aquí están TODOS los productos
- Aquí están TODOS los colores
- Si quieres agregar un producto → edita este archivo

### **brandColors.ts** - Los Colores de la Marca 🎨
- Rojo de ACRIL (bloodRed)
- Amarillo de ACRIL (chickYellow)
- Se usa en toda la página

---

## 🚶 CÓMO NAVEGA EL USUARIO

### **Escenario 1: El usuario abre la página**
```
1. Ve el header (HeaderWithSearch.tsx)
2. Ve el banner grande (Hero.tsx)
3. Ve los servicios (Services.tsx)
4. Ve sobre nosotros (About.tsx)
5. Ve el formulario (Contact.tsx)
6. Ve el footer (Footer.tsx)
```

### **Escenario 2: El usuario busca un producto**
```
1. Escribe en la búsqueda (SearchBar.tsx)
2. SearchBar busca en colors.ts
3. Muestra resultados
4. Usuario hace click → va a esa línea de productos
```

### **Escenario 3: El usuario quiere ver una línea de productos**
```
1. Abre el menú de productos (ProductsDropdown.tsx)
2. Elige una línea (ej: "Solvente")
3. App.tsx cambia a "linea-solvente"
4. Se muestra LineaSolvente.tsx con todos los productos
```

### **Escenario 4: El usuario descarga una ficha técnica**
```
1. Hace click en "Descargar PDF"
2. pdfUtils.ts busca el archivo
3. Se descarga desde public/fichas-tecnicas/
```

---

## 🎨 LOS 5 TIPOS DE PRODUCTOS

| Línea | Archivo | Productos | Descripción |
|-------|---------|-----------|-------------|
| 1️⃣ Elastomérica | `LineaElastomerica.tsx` | IMPECRIL, DECOCRIL, DEPOCRIL, TRAFICRIL | Pinturas elásticas |
| 2️⃣ Caucho | `LineaCaucho.tsx` | DECOCRIL Caucho | Acabado mate |
| 3️⃣ Satinados | `LineaSatinados.tsx` | SEDACRIL | Acabado brillante |
| 4️⃣ Solvente | `LineaSolvente.tsx` | ESMACRIL, ESMACRIL Piscinas, TRAFICRIL, HIERROCRIL | Base solvente |
| 5️⃣ Tratamientos | `LineaTratamientos.tsx` | Base Antialcalino, DOXICRIL, PASTACRIL, SELLACRIL | Preparación |

---

## 🔧 ¿DÓNDE CAMBIO CADA COSA?

| Quiero cambiar... | Voy a... |
|------------------|----------|
| El menú de arriba | `HeaderWithSearch.tsx` |
| El banner grande | `Hero.tsx` |
| Los servicios | `Services.tsx` |
| El "Sobre nosotros" | `About.tsx` |
| El formulario de contacto | `Contact.tsx` |
| El pie de página | `Footer.tsx` |
| Un producto o color | `constants/colors.ts` |
| El rojo o amarillo de ACRIL | `constants/brandColors.ts` |
| El menú de navegación | `constants/navigation.ts` |
| Cómo se descargan los PDFs | `utils/pdfUtils.ts` |

---

## ➕ ¿CÓMO AGREGO UNA NUEVA LÍNEA DE PRODUCTOS?

1. **Crea el archivo**: `LineaNueva.tsx` (copia uno existente)
2. **Agrega los datos**: Ve a `constants/colors.ts` y agrega tu línea
3. **Agrega la ruta**: Ve a `App.tsx` y agrega el condicional
4. **Agrega al menú**: Ve a `ProductsDropdown.tsx` y agrega el botón

---

## 📝 PRODUCTOS DE CADA LÍNEA

### **Línea de Solvente** (LineaSolvente.tsx)
```
1. ESMACRIL
   Descripción: Esmalte sintético base solvente
   Colores: 21 colores

2. ESMACRIL Piscinas
   Descripción: Pintura base solvente para piscinas
   Colores: 4 colores

3. TRAFICRIL Alto Tráfico
   Descripción: Pintura base solvente y caucho clorado
   Colores: 5 colores

4. HIERROCRIL
   Descripción: Pintura anticorrosiva para hierro
   Colores: 3 colores
```

---

## 🎯 PUNTOS IMPORTANTES

✅ **Header activo**: `HeaderWithSearch.tsx` (el otro no se usa)  
✅ **Todos los productos**: Están en `constants/colors.ts`  
✅ **Todos los colores**: También en `constants/colors.ts`  
✅ **Imágenes**: Se buscan automáticamente en `public/images/products/`  
✅ **PDFs**: Se descargan desde `public/fichas-tecnicas/`  
✅ **Lazy loading**: Las páginas cargan rápido porque se cargan cuando se necesitan  

---

## 🚀 RESUMEN ULTRA RÁPIDO

1. **main.tsx** = La puerta
2. **App.tsx** = El cerebro (decide qué mostrar)
3. **components/** = Las habitaciones (cada parte de la página)
4. **constants/colors.ts** = La base de datos (todos los productos)
5. **constants/brandColors.ts** = Los colores de ACRIL
6. **utils/** = Las herramientas (funciones útiles)

**¡Eso es todo!** 🎉

---

**Última actualización**: 21 de Noviembre 2025  
**Versión**: 2.0 - Simplificada para todos
