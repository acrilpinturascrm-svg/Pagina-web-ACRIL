# 🗺️ Roadmap de Navegación del Código - ACRIL Pinturas

---

## 🎯 Punto de Entrada Principal

```
src/main.tsx → src/App.tsx → components/
```

---

## 📂 Estructura de Navegación por Funcionalidad

### **1. INICIO DE LA APLICACIÓN**

```
src/
├── main.tsx                    # ⭐ PUNTO DE ENTRADA
│   └── Renderiza <App />
│
└── App.tsx                     # 🎯 ROUTER PRINCIPAL
    ├── Maneja navegación por secciones
    ├── Lazy loading de componentes
    └── Error boundaries
```

**Flujo**: `main.tsx` → `App.tsx` → Renderiza componentes según `activeSection`

---

### **2. NAVEGACIÓN Y HEADER**

```
src/components/
├── HeaderWithSearch.tsx        # ✅ HEADER ACTIVO (con búsqueda)
│   ├── Usa: SearchBar.tsx
│   ├── Usa: ProductsDropdown.tsx
│   └── Usa: navigation.ts
│
├── Header.tsx                  # ⚠️ LEGACY (sin búsqueda)
│   └── NO SE USA actualmente
│
├── SearchBar.tsx               # 🔍 Búsqueda de productos
│   └── Usa: colors.ts
│
└── ProductsDropdown.tsx        # 📦 Dropdown de líneas
    └── Navega a páginas individuales
```

**Configuración**: `src/constants/navigation.ts`
- `NAVIGATION_SECTIONS` - Desktop (5 items)
- `NAVIGATION_SECTIONS_MOBILE` - Móvil (3 items)

---

### **3. PÁGINA DE INICIO (activeSection === "inicio")**

```
Componentes renderizados en orden:

1. Hero.tsx                     # Banner principal
   └── Usa: brandColors.ts

2. Services.tsx                 # 3 servicios
   └── Usa: brandColors.ts

3. About.tsx                    # Sobre Nosotros
   └── Usa: brandColors.ts

4. Contact.tsx                  # Formulario de contacto
   ├── Usa: emailjs.config.ts
   └── Usa: brandColors.ts

5. Footer.tsx                   # Footer
   └── Usa: brandColors.ts
```

**Deshabilitados** (comentados en App.tsx):
- ❌ Gallery.tsx - Proyectos
- ❌ Testimonials.tsx - Testimonios

---

### **4. PRODUCTOS (Sistema Completo)**

#### **Página General**
```
Products.tsx                    # Vista general de productos
├── Muestra todas las líneas
├── Sistema de candidatos de imágenes
└── Usa: colors.ts, pdfUtils.ts
```

#### **Páginas Individuales por Línea**
```
src/components/
├── LineaElastomerica.tsx       # 4 productos
├── LineaCaucho.tsx             # 1 producto
├── LineaSatinados.tsx          # 1 producto
├── LineaSolvente.tsx           # 4 productos
└── LineaTratamientos.tsx       # 4 productos

Cada una:
├── Sistema de candidatos de imágenes
├── Descarga de fichas técnicas
├── Paleta de colores expandible
└── Botón "Volver a Productos"
```

**Navegación**: 
- Dropdown en header → Línea específica
- Botón "Volver" → Products.tsx

---

### **5. DATOS Y CONFIGURACIÓN**

```
src/constants/
├── colors.ts                   # 🎨 139 colores por producto
│   └── PRODUCT_LINES array
│
├── brandColors.ts              # 🎨 Colores de marca ACRIL
│   ├── bloodRed (rojo)
│   └── chickYellow (amarillo)
│
└── navigation.ts               # 🧭 Configuración de navegación
    ├── NAVIGATION_SECTIONS
    └── NAVIGATION_SECTIONS_MOBILE
```

---

### **6. TIPOS Y INTERFACES**

```
src/types/
└── index.ts                    # 📝 TypeScript interfaces
    ├── Color
    ├── Product
    ├── ProductLine
    ├── Surface
    ├── NavigationSection
    └── HeaderProps
```

---

### **7. UTILIDADES**

```
src/utils/
├── pdfUtils.ts                 # 📄 Manejo de PDFs
│   ├── getPdfUrl()
│   ├── getPdfViewerConfig()
│   └── openPdfInNewTab()
│
└── assetPath.ts                # 🖼️ Rutas de assets
    └── getAssetPath()
```

---

### **8. CONFIGURACIÓN**

```
src/config/
└── emailjs.config.ts           # 📧 Configuración EmailJS
    ├── SERVICE_ID
    ├── TEMPLATE_ID
    └── PUBLIC_KEY
```

---

## 🔄 Flujos de Navegación Principales

### **Flujo 1: Usuario entra al sitio**
```
1. main.tsx
2. App.tsx (activeSection = "inicio")
3. HeaderWithSearch.tsx
4. Hero.tsx
5. Services.tsx
6. About.tsx
7. Contact.tsx
8. Footer.tsx
```

### **Flujo 2: Usuario busca un producto**
```
1. HeaderWithSearch.tsx
2. SearchBar.tsx
   ├── Lee colors.ts
   └── Filtra productos
3. Muestra resultados
4. Click → Navega a línea específica
```

### **Flujo 3: Usuario navega a productos**
```
1. HeaderWithSearch.tsx
2. ProductsDropdown.tsx
3. Click en línea → App.tsx cambia activeSection
4. Renderiza LineaElastomerica.tsx (ejemplo)
   ├── Muestra productos
   ├── Paleta de colores
   └── Descarga PDF
```

### **Flujo 4: Usuario descarga ficha técnica**
```
1. LineaElastomerica.tsx (ejemplo)
2. Click "Descargar PDF"
3. pdfUtils.ts → getPdfUrl()
4. Descarga desde public/fichas-tecnicas/
```

---

## 📁 Mapa de Archivos por Categoría

### **🎨 UI/Componentes Visuales**
```
Hero.tsx              - Banner principal
Services.tsx          - Tarjetas de servicios
About.tsx             - Información empresa
Contact.tsx           - Formulario
Footer.tsx            - Pie de página
Gallery.tsx           - Proyectos (deshabilitado)
Testimonials.tsx      - Testimonios (deshabilitado)
```

### **🧭 Navegación**
```
HeaderWithSearch.tsx  - Header activo
Header.tsx            - Header legacy
SearchBar.tsx         - Búsqueda
ProductsDropdown.tsx  - Dropdown productos
```

### **📦 Productos**
```
Products.tsx              - Vista general
LineaElastomerica.tsx     - Línea 1
LineaCaucho.tsx           - Línea 2
LineaSatinados.tsx        - Línea 3
LineaSolvente.tsx         - Línea 4
LineaTratamientos.tsx     - Línea 5
```

### **🛠️ Utilidades**
```
PDFViewer.tsx         - Visor de PDFs
ErrorBoundary.tsx     - Manejo de errores
SEO.tsx               - Meta tags
SEOSection.tsx        - SEO por sección
ImageWithFallback.tsx - Imágenes con fallback
LazyImage.tsx         - Lazy loading imágenes
```

---

## 🎯 Puntos Clave para Modificar

### **Cambiar navegación**
→ `src/constants/navigation.ts`

### **Cambiar colores de marca**
→ `src/constants/brandColors.ts`

### **Agregar/modificar productos**
→ `src/constants/colors.ts`

### **Cambiar textos del Hero**
→ `src/components/Hero.tsx`

### **Cambiar servicios**
→ `src/components/Services.tsx`

### **Cambiar información de contacto**
→ `src/components/Contact.tsx`
→ `src/components/Footer.tsx`

### **Modificar header**
→ `src/components/HeaderWithSearch.tsx`

### **Agregar nueva línea de productos**
1. Crear `LineaNueva.tsx` (copiar estructura de existente)
2. Agregar en `colors.ts`
3. Agregar lazy loading en `App.tsx`
4. Agregar en `ProductsDropdown.tsx`

---

## 🔍 Búsqueda Rápida por Funcionalidad

| Funcionalidad | Archivo Principal |
|---------------|-------------------|
| Navegación principal | `HeaderWithSearch.tsx` |
| Búsqueda de productos | `SearchBar.tsx` |
| Banner principal | `Hero.tsx` |
| Servicios | `Services.tsx` |
| Sobre nosotros | `About.tsx` |
| Formulario contacto | `Contact.tsx` |
| Footer | `Footer.tsx` |
| Productos general | `Products.tsx` |
| Línea Elastomérica | `LineaElastomerica.tsx` |
| Línea Caucho | `LineaCaucho.tsx` |
| Línea Satinados | `LineaSatinados.tsx` |
| Línea Solvente | `LineaSolvente.tsx` |
| Línea Tratamientos | `LineaTratamientos.tsx` |
| Colores | `constants/colors.ts` |
| Navegación config | `constants/navigation.ts` |
| Colores marca | `constants/brandColors.ts` |
| PDFs | `utils/pdfUtils.ts` |
| EmailJS | `config/emailjs.config.ts` |

---

## 📊 Dependencias entre Archivos

### **App.tsx depende de:**
- HeaderWithSearch.tsx
- Hero.tsx
- Services.tsx
- About.tsx
- Contact.tsx
- Footer.tsx
- Products.tsx
- Linea*.tsx (5 archivos)
- ErrorBoundary.tsx
- SEOSection.tsx
- brandColors.ts

### **HeaderWithSearch.tsx depende de:**
- SearchBar.tsx
- ProductsDropdown.tsx
- navigation.ts
- brandColors.ts
- assetPath.ts

### **Líneas de productos dependen de:**
- colors.ts
- brandColors.ts
- pdfUtils.ts
- assetPath.ts
- PDFViewer.tsx
- types/index.ts

---

## 🚀 Comandos Útiles para Navegar

```bash
# Buscar texto en todo el proyecto
grep -r "texto" src/

# Buscar archivos por nombre
find src/ -name "*Product*"

# Ver estructura de carpetas
tree src/

# Buscar importaciones de un archivo
grep -r "import.*Hero" src/
```

---

## 📝 Notas Importantes

1. **Header activo**: `HeaderWithSearch.tsx` (NO `Header.tsx`)
2. **Navegación**: Configurada en `navigation.ts`
3. **Colores**: Siempre usar `ACRIL_COLORS` de `brandColors.ts`
4. **Imágenes**: Sistema de candidatos en todas las líneas
5. **PDFs**: En `public/fichas-tecnicas/`
6. **Lazy loading**: Implementado en `App.tsx`

---

**Última actualización**: 6 de Noviembre 2024  
**Mantenido por**: ACRIL Pinturas Team
