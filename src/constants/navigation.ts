import type { NavigationSection } from '../types';

// Navegación Desktop (con Servicios y Productos como botón)
export const NAVIGATION_SECTIONS: NavigationSection[] = [
  { key: "inicio", label: "Inicio" },
  { key: "servicios", label: "Servicios" },
  { key: "productos-btn", label: "Productos" }, // Botón que abre dropdown
  { key: "sobre", label: "Sobre Nosotros" },
  { key: "contacto", label: "Contacto" },
];

// Navegación Móvil (sin Servicios, Productos como menú expandible)
export const NAVIGATION_SECTIONS_MOBILE: NavigationSection[] = [
  { key: "inicio", label: "Inicio" },
  { key: "sobre", label: "Sobre Nosotros" },
  { key: "productos-mobile", label: "Productos" }, // Menú expandible
  { key: "contacto", label: "Contacto" },
];
