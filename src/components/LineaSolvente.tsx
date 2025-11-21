import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { PRODUCT_LINES } from '../constants/colors';
import { ACRIL_COLORS } from '../constants/brandColors';
import type { Product, Color } from '../types';
import PDFViewer from './PDFViewer';
import { getPdfViewerConfig, getPdfUrl } from '../utils/pdfUtils';
import { getAssetPath } from '../utils/assetPath';

const normalize = (str: string) =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ñ/gi, 'n');

const buildSolventeCandidates = (productName: string) => {
  const basePath = `/images/products/solvente/`;
  const slug = normalize(productName.toLowerCase()).replace(/\s+/g, '-');
  const upper = normalize(productName).toUpperCase();
  const baseUpper = upper.replace(/^BASE\s+/, '');
  const firstTokenUpper = baseUpper.split(' ')[0];

  const nameBases = [
    slug,
    baseUpper,
    `${baseUpper} G`,
    `${baseUpper} GALÓN`,
    `${baseUpper} GALON`,
    `${baseUpper} C5G`,
    `${baseUpper} JARRA`,
    `${baseUpper} LITRO`,
    firstTokenUpper,
    `${firstTokenUpper} G`,
    `${firstTokenUpper} GALÓN`,
    `${firstTokenUpper} GALON`,
    `${firstTokenUpper} C5G`,
    `${firstTokenUpper} JARRA`,
    `${firstTokenUpper} LITRO`,
  ];

  const exts = ['.png', '.jpg', '.jpeg', '.webp'];
  const variants: string[] = [];
  for (const nb of nameBases) {
    for (const ext of exts) variants.push(nb + ext);
  }
  return variants.map(v => getAssetPath(basePath + v));
};

const LineaSolvente = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [pdfViewer, setPdfViewer] = useState<{ isOpen: boolean; productName: string; pdfUrl: string }>({
    isOpen: false,
    productName: '',
    pdfUrl: ''
  });

  const lineaSolvente = PRODUCT_LINES.find(line => line.name === 'Línea de Solvente');

  const handleViewTechnicalSheet = (productName: string) => {
    setPdfViewer(getPdfViewerConfig(productName));
  };

  const handleDownloadTechnicalSheet = (productName: string) => {
    const url = getPdfUrl(productName);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${productName}-ficha-tecnica.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!lineaSolvente) {
    return <div>Línea no encontrada</div>;
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con navegación */}
        <div className="mb-8 md:mb-12">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-3 md:mb-4 text-sm md:text-base"
          >
            <ArrowLeft className="h-4 md:h-5 w-4 md:w-5" />
            Volver a Productos
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              {lineaSolvente.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-4 md:mb-6 px-2">
              {lineaSolvente.description}
            </p>
          </div>
        </div>

        {/* Características de la línea */}
        <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-8 mb-8 md:mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Características de la Línea Solvente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: ACRIL_COLORS.bloodRed50 }}>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">Uso Industrial</h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Formulación para ambientes exigentes</p>
            </div>
            <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: ACRIL_COLORS.chickYellow50 }}>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">Alta Resistencia</h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Protección superior contra corrosión</p>
            </div>
            <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: ACRIL_COLORS.bloodRed100 }}>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">Secado Rápido</h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Menor tiempo de secado</p>
            </div>
            <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: ACRIL_COLORS.chickYellow100 }}>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">Especializado</h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Cada producto para uso específico</p>
            </div>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {lineaSolvente.products.map((product: Product) => {
            const candidates = buildSolventeCandidates(product.name);
            return (
            <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              {/* Imagen del producto */}
              <div className="relative w-full h-56 bg-white flex items-center justify-center p-6">
                <img 
                  src={candidates[0]}
                  data-candidates={candidates.join('|')}
                  data-idx={0}
                  alt={product.name}
                  className="max-w-[85%] max-h-[85%] object-contain transition-opacity duration-300"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    const list = (img.dataset.candidates || '').split('|').filter(Boolean);
                    let idx = parseInt(img.dataset.idx || '0', 10);
                    idx += 1;
                    if (idx < list.length) {
                      img.dataset.idx = String(idx);
                      img.src = list[idx];
                    } else {
                      img.style.display = 'none';
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center rounded-lg" style={{ background: `linear-gradient(to bottom right, ${ACRIL_COLORS.bloodRed50}, ${ACRIL_COLORS.bloodRed100})` }}>
                  <div className="w-20 h-24 rounded-lg shadow-lg flex items-center justify-center" style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}>
                    <span className="text-white font-bold text-xs">ACRIL</span>
                  </div>
                </div>
              </div>

              {/* Información del producto */}
              <div className="p-3 md:p-4 text-center">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{product.name}</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">{product.description}</p>

                {/* Características técnicas */}
                <div className="mb-3 md:mb-4">
                  <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-2">Características:</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                    {product.colors[0]?.types.map((type, index) => (
                      <span key={index} className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-medium" style={{ backgroundColor: ACRIL_COLORS.bloodRed700, color: ACRIL_COLORS.white }}>
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex gap-1 md:gap-2">
                    <button 
                      onClick={() => handleViewTechnicalSheet(product.name)}
                      className="flex-1 text-white px-2 md:px-3 py-1.5 md:py-2 rounded text-xs font-medium transition-colors duration-200"
                      style={{ backgroundColor: ACRIL_COLORS.bloodRed700 }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed800}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed700}
                    >
                      Ver Ficha
                    </button>
                    <button 
                      onClick={() => handleDownloadTechnicalSheet(product.name)}
                      className="flex-1 text-white px-2 md:px-3 py-1.5 md:py-2 rounded text-xs font-medium transition-colors duration-200"
                      style={{ backgroundColor: ACRIL_COLORS.chickYellow500 }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow600}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow500}
                    >
                      PDF
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => setExpandedProduct(expandedProduct === product.name ? null : product.name)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 md:px-3 py-1.5 md:py-2 rounded text-xs font-medium transition-colors duration-200"
                  >
                    {expandedProduct === product.name ? 'Ocultar' : `${product.colors.length} Colores`}
                  </button>

                  {/* Paleta de colores expandible */}
                  {expandedProduct === product.name && (
                    <div className="mt-2 md:mt-3 p-2 md:p-3 bg-gray-50 rounded">
                      <div className="grid grid-cols-5 md:grid-cols-6 gap-1 md:gap-2">
                        {product.colors.slice(0, 12).map((color: Color) => (
                          <div key={color.name} className="text-center">
                            <div 
                              className="w-5 md:w-6 h-5 md:h-6 rounded border border-gray-300 mx-auto"
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            ></div>
                          </div>
                        ))}
                      </div>
                      {product.colors.length > 12 && (
                        <p className="text-xs text-gray-500 text-center mt-1 md:mt-2">
                          +{product.colors.length - 12} colores más
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );})}
        </div>

        {/* Call to Action específico para solvente */}
        <div className="mt-8 md:mt-16 rounded-lg md:rounded-xl p-4 md:p-8 text-center text-white" style={{ background: `linear-gradient(to right, ${ACRIL_COLORS.bloodRed800}, ${ACRIL_COLORS.chickYellow600})` }}>
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">¿Proyecto industrial o especializado?</h3>
          <p className="mb-4 md:mb-6 max-w-2xl mx-auto text-xs md:text-base px-2" style={{ color: ACRIL_COLORS.chickYellow50 }}>
            Nuestros productos base solvente están diseñados para las aplicaciones más exigentes. 
            Cada producto tiene características específicas para diferentes necesidades industriales.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
            <button 
              onClick={() => {
                const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '584244597443';
                const message = 'Hola, necesito asesoría sobre productos base solvente para aplicación industrial.';
                window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base"
              style={{ backgroundColor: ACRIL_COLORS.chickYellow500 }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow600}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow500}
            >
              Asesoría Técnica
            </button>
            <button 
              onClick={() => {
                // Navegar a la sección de contacto
                window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'contacto' }));
              }}
              className="px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base"
              style={{ backgroundColor: ACRIL_COLORS.white, color: ACRIL_COLORS.bloodRed800 }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.gray100}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.white}
            >
              Cotización Industrial
            </button>
          </div>
        </div>
      </div>
      
      {/* PDF Viewer Modal */}
      <PDFViewer 
        isOpen={pdfViewer.isOpen}
        onClose={() => setPdfViewer({ ...pdfViewer, isOpen: false })}
        pdfUrl={pdfViewer.pdfUrl}
        productName={pdfViewer.productName}
      />
    </section>
  );
};

export default LineaSolvente;
