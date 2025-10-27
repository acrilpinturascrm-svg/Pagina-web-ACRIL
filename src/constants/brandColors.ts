// Colores oficiales de la marca ACRIL
export const ACRIL_COLORS = {
  // Colores principales
  white: '#FFFFFF',           // Blanco normal
  bloodRed: '#DC2626',        // Rojo Sangre (red-600)
  chickYellow: '#FBBF24',     // Amarillo pollito (amber-400)
  
  // Variaciones del Rojo Sangre
  bloodRed50: '#FEF2F2',      // Muy claro
  bloodRed100: '#FEE2E2',     // Claro
  bloodRed200: '#FECACA',     // Medio claro
  bloodRed300: '#FCA5A5',     // Medio
  bloodRed400: '#F87171',     // Medio oscuro
  bloodRed500: '#EF4444',     // Base alternativa
  bloodRed600: '#DC2626',     // Base principal
  bloodRed700: '#B91C1C',     // Oscuro
  bloodRed800: '#991B1B',     // Muy oscuro
  bloodRed900: '#7F1D1D',     // Más oscuro
  
  // Variaciones del Amarillo pollito
  chickYellow50: '#FFFBEB',   // Muy claro
  chickYellow100: '#FEF3C7',  // Claro
  chickYellow200: '#FDE68A',  // Medio claro
  chickYellow300: '#FCD34D',  // Medio
  chickYellow400: '#FBBF24',  // Base principal
  chickYellow500: '#F59E0B',  // Base alternativa
  chickYellow600: '#D97706',  // Medio oscuro
  chickYellow700: '#B45309',  // Oscuro
  chickYellow800: '#92400E',  // Muy oscuro
  chickYellow900: '#78350F',  // Más oscuro
  
  // Grises neutros (para textos y fondos)
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
} as const;

// Mapeo de colores por línea de productos usando solo colores ACRIL
export const PRODUCT_LINE_COLORS = {
  'Línea Elastomérica': {
    primary: ACRIL_COLORS.bloodRed600,
    light: ACRIL_COLORS.bloodRed50,
    medium: ACRIL_COLORS.bloodRed100,
    accent: ACRIL_COLORS.chickYellow400,
  },
  'Línea de Satinados': {
    primary: ACRIL_COLORS.chickYellow500,
    light: ACRIL_COLORS.chickYellow50,
    medium: ACRIL_COLORS.chickYellow100,
    accent: ACRIL_COLORS.bloodRed600,
  },
  'Línea de Solvente': {
    primary: ACRIL_COLORS.bloodRed700,
    light: ACRIL_COLORS.bloodRed50,
    medium: ACRIL_COLORS.bloodRed100,
    accent: ACRIL_COLORS.chickYellow400,
  },
  'Línea de Tratamientos': {
    primary: ACRIL_COLORS.chickYellow600,
    light: ACRIL_COLORS.chickYellow50,
    medium: ACRIL_COLORS.chickYellow100,
    accent: ACRIL_COLORS.bloodRed600,
  },
  'Línea Caucho': {
    primary: ACRIL_COLORS.bloodRed600,
    light: ACRIL_COLORS.bloodRed50,
    medium: ACRIL_COLORS.bloodRed100,
    accent: ACRIL_COLORS.chickYellow400,
  },
} as const;
