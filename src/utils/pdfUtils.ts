import { getAssetPath } from './assetPath';

// Mapeo de nombres de productos a nombres de archivo PDF
export const getPdfUrl = (productName: string): string => {
  // Mapeo de nombres de productos a nombres de archivo
  const productNameMap: Record<string, string> = {
    // ===== LÍNEA ELASTOMÉRICA =====
    'Impecril': 'impecril',
    'Decocril Elastómerico': 'decocril-elastomerico',
    'Depocril': 'depocril',
    'Tráficril Elastomérico': 'traficril-elastomerico',
    
    // ===== LÍNEA DE CAUCHO MATE =====
    'Decocril Caucho': 'decocril-caucho',
    
    // ===== LÍNEA DE SATINADOS =====
    'SEDACRIL': 'decocril-caucho', // Reutiliza la ficha técnica de Decocril Caucho Mate
    
    // ===== LÍNEA DE SOLVENTE =====
    'Esmacril': 'esmacril',
    'Esmacril Piscinas': 'esmacril-piscinas',
    'Tráficril Alto Tráfico': 'traficril-alto-trafico',
    'Hierrocril': 'hierrocril',
    
    // ===== LÍNEA DE TRATAMIENTOS =====
    'Base Antialcalino': 'base-antialcalino',
    'Doxicril': 'doxicril',
    'Pastacril': 'pastacril',
    'Sellacril': 'sellacril'
  };

  // Convertir a minúsculas, reemplazar espacios por guiones y quitar tildes
  const normalizeName = (name: string): string => {
    return name
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Quitar tildes
      .replace(/\s+/g, '-') // Reemplazar espacios por guiones
      .replace(/[^a-z0-9-]/g, ''); // Quitar caracteres especiales
  };

  // Usar el nombre mapeado si existe, de lo contrario normalizar el nombre
  const fileName = productNameMap[productName] || normalizeName(productName);
  return getAssetPath(`/fichas-tecnicas/${fileName}.pdf`);
};

// Función para abrir la ficha técnica en una nueva pestaña
export const openPdfInNewTab = (productName: string): void => {
  const url = getPdfUrl(productName);
  window.open(url, '_blank');
};

// Función para configurar el visor de PDF
export const getPdfViewerConfig = (productName: string) => {
  return {
    isOpen: true,
    productName,
    pdfUrl: getPdfUrl(productName)
  };
};

// Lista de archivos PDF disponibles
export const AVAILABLE_PDFS = [
  'base-antialcalino',
  'decocril-caucho',
  'decocril-elastomerico',
  'depocril',
  'doxicril',
  'esmacril',
  'esmacril-piscinas',
  'hierrocril',
  'impecril',
  'pastacril',
  'sellacril',
  'traficril-alto-trafico',
  'traficril-elastomerico'
];
