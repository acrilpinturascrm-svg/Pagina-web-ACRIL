/**
 * Construye la ruta correcta para assets (imágenes, PDFs, etc.)
 * teniendo en cuenta el base path configurado en Vite
 * 
 * @param path - Ruta relativa del asset (ej: '/images/logo.png')
 * @returns Ruta completa con el base path incluido
 * 
 * @example
 * // En desarrollo: getAssetPath('/images/logo.png') -> '/images/logo.png'
 * // En GitHub Pages: getAssetPath('/images/logo.png') -> '/Pagina-web-ACRIL/images/logo.png'
 * // Con dominio personalizado: getAssetPath('/images/logo.png') -> '/images/logo.png'
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  
  // Si el path ya incluye el base, no lo agregamos de nuevo
  if (path.startsWith(base)) {
    return path;
  }
  
  // Remover slash inicial del path si existe
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Asegurar que base termine con slash
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  
  return `${baseWithSlash}${cleanPath}`;
};
