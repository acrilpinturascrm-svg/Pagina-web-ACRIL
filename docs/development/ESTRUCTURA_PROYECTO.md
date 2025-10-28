# 📂 Estructura del Proyecto ACRIL Pinturas

## 🎯 Organización Actualizada (Octubre 2025)

```
Pagina-web-ACRIL/
│
├── 📚 .docs/                           # Documentación técnica
│   ├── README.md                       # Índice de documentación
│   ├── QUICK_DEPLOY.md                 # Guía rápida de despliegue (15 min)
│   ├── DEPLOYMENT_GUIDE.md             # Guía completa de despliegue
│   ├── CHECKLIST.md                    # Checklist general
│   ├── PRODUCTION_CHECKLIST.md         # Checklist pre-producción
│   ├── SEO_STRATEGY.md                 # Estrategia SEO completa
│   ├── SEO_CHECKLIST.md                # Checklist SEO
│   ├── SECCIONES_DESHABILITADAS.md     # Secciones deshabilitadas
│   └── acril-project-base.json         # Configuración base
│
├── 💻 src/                             # Código fuente
│   ├── components/                     # Componentes React (23 archivos)
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeaderWithSearch.tsx
│   │   ├── Hero.tsx
│   │   ├── LineaCaucho.tsx
│   │   ├── LineaElastomerica.tsx
│   │   ├── LineaSatinados.tsx
│   │   ├── LineaSolvente.tsx
│   │   ├── LineaTratamientos.tsx
│   │   ├── PDFViewer.tsx
│   │   ├── Products.tsx
│   │   ├── ProductsDropdown.tsx
│   │   ├── SEO.tsx
│   │   ├── SEOSection.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   │
│   ├── constants/                      # Constantes y configuración
│   │   ├── brandColors.ts              # Colores oficiales ACRIL
│   │   ├── colors.ts                   # 139 colores de productos
│   │   └── navigation.ts               # Menú de navegación
│   │
│   ├── types/                          # Tipos TypeScript
│   │   └── index.ts                    # Interfaces centralizadas
│   │
│   ├── utils/                          # Utilidades
│   │   └── pdfUtils.ts                 # Gestión de PDFs
│   │
│   ├── App.tsx                         # Componente principal
│   ├── main.tsx                        # Punto de entrada
│   └── index.css                       # Estilos globales
│
├── 🖼️ public/                          # Archivos públicos
│   ├── images/                         # Imágenes del sitio
│   │   ├── products/                   # Imágenes de productos
│   │   │   ├── elastomerica/
│   │   │   ├── caucho/
│   │   │   ├── satinados/
│   │   │   ├── solvente/
│   │   │   └── tratamientos/
│   │   └── surfaces/                   # Imágenes de superficies
│   │
│   ├── fichas-tecnicas/                # PDFs de productos (13 archivos)
│   ├── logo-modificado.png             # Logo ACRIL
│   ├── oficinia-acril.jpg              # Foto oficina
│   ├── manifest.json                   # PWA manifest
│   ├── _headers                        # Headers de Netlify
│   └── _redirects                      # Redirects de Netlify
│
├── 📦 dist/                            # Build de producción (generado)
│
├── 🔧 Configuración                    # Archivos de configuración
│   ├── .env                            # Variables de entorno (no en git)
│   ├── .env.example                    # Ejemplo de variables
│   ├── .env.local                      # Variables locales
│   ├── .gitignore                      # Archivos ignorados por git
│   ├── eslint.config.js                # Configuración ESLint
│   ├── netlify.toml                    # Configuración Netlify
│   ├── package.json                    # Dependencias del proyecto
│   ├── postcss.config.js               # Configuración PostCSS
│   ├── tailwind.config.js              # Configuración Tailwind
│   ├── tsconfig.json                   # Configuración TypeScript
│   ├── tsconfig.app.json               # Config TS para app
│   ├── tsconfig.node.json              # Config TS para Node
│   └── vite.config.ts                  # Configuración Vite
│
├── 🌐 SEO y Metadatos                  # Archivos para SEO
│   ├── index.html                      # HTML principal
│   ├── robots.txt                      # Instrucciones para crawlers
│   └── sitemap.xml                     # Mapa del sitio
│
└── 📖 README.md                        # Documentación principal

```

---

## 📊 Estadísticas del Proyecto

### Código Fuente
- **Componentes React:** 23 archivos
- **Líneas de Productos:** 5 páginas individuales
- **Colores Únicos:** 139 colores
- **Productos:** 13 productos con fichas técnicas

### Build
- **Bundle Size:** 139.46 KB
- **Gzip Size:** 44.77 KB
- **Chunks:** 19 archivos optimizados
- **Build Time:** ~13 segundos

### Documentación
- **Archivos de Docs:** 8 documentos
- **Guías:** 2 guías de despliegue
- **Checklists:** 3 checklists
- **Estrategias:** 2 documentos SEO

---

## 🎨 Líneas de Productos

1. **Línea Elastomérica** (48 colores)
   - IMPECRIL, DECOCRIL Elastomérico, DEPOCRIL, TRAFICRIL

2. **Línea de Caucho Mate** (32 colores)
   - DECOCRIL Caucho

3. **Línea de Satinados** (24 colores)
   - SEDACRIL

4. **Línea de Solvente** (33 colores)
   - ESMACRIL, ESMACRIL Piscinas, TRAFICRIL Alto Tráfico, HIERROCRIL

5. **Línea de Tratamientos** (4 productos)
   - Base Antialcalino, DOXICRIL, PASTACRIL, SELLACRIL

---

## 🚀 Comandos Rápidos

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview

# Linting
npm run lint

# Tests
npm run test
```

---

## 📝 Notas Importantes

### Archivos Sensibles (No en Git)
- `.env` - Variables de entorno
- `node_modules/` - Dependencias
- `dist/` - Build de producción
- `*.tsbuildinfo` - Archivos de build TypeScript

### Archivos de Configuración Importantes
- `netlify.toml` - Configuración de despliegue
- `vite.config.ts` - Configuración del bundler
- `tailwind.config.js` - Configuración de estilos

### Documentación Clave
- **Inicio Rápido:** `.docs/QUICK_DEPLOY.md`
- **Guía Completa:** `.docs/DEPLOYMENT_GUIDE.md`
- **SEO:** `.docs/SEO_STRATEGY.md`

---

**Última actualización:** 24 de Octubre 2025  
**Versión:** 1.0.0  
**Estado:** ✅ Production Ready
