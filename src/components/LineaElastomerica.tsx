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

const buildElastomericaCandidates = (productName: string) => {
  const basePath = `/images/products/elastomerica/`;
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
    firstTokenUpper,
    `${firstTokenUpper} G`,
    `${firstTokenUpper} GALÓN`,
    `${firstTokenUpper} GALON`,
    `${firstTokenUpper} C5G`,
  ];
  const exts = ['.png', '.jpg', '.jpeg', '.webp'];
  const variants: string[] = [];
  for (const nb of nameBases) {
    for (const ext of exts) variants.push(nb + ext);
  }
  return variants.map(v => getAssetPath(basePath + v));
};

const LineaElastomerica = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [pdfViewer, setPdfViewer] = useState<{ isOpen: boolean; productName: string; pdfUrl: string }>({
    isOpen: false,
    productName: '',
    pdfUrl: ''
  });

  const lineaElastomerica = PRODUCT_LINES.find(line => line.name === 'Línea Elastomérica');

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


  if (!lineaElastomerica) {
    return <div>Línea no encontrada</div>;
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header con navegación */}
        <div className="mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver a Productos
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {lineaElastomerica.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {lineaElastomerica.description}
            </p>
          </div>
        </div>

        {/* Características de la línea */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Características de la Línea Elastomérica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: ACRIL_COLORS.bloodRed50 }}>
              <h3 className="font-semibold text-gray-900">Alta Resistencia</h3>
              <p className="text-sm text-gray-600">Protección superior contra intemperie</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: ACRIL_COLORS.chickYellow50 }}>
              <h3 className="font-semibold text-gray-900">Impermeabilizante</h3>
              <p className="text-sm text-gray-600">Excelente barrera contra humedad</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: ACRIL_COLORS.bloodRed100 }}>
              <h3 className="font-semibold text-gray-900">Elasticidad</h3>
              <p className="text-sm text-gray-600">Se adapta a movimientos estructurales</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: ACRIL_COLORS.chickYellow100 }}>
              <h3 className="font-semibold text-gray-900">Durabilidad</h3>
              <p className="text-sm text-gray-600">Larga vida útil en exteriores</p>
            </div>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lineaElastomerica.products.map((product: Product) => {
            const candidates = buildElastomericaCandidates(product.name);
            return (
            <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              {/* Imagen del producto */}
              <div className="relative w-full h-48 bg-white flex items-center justify-center p-3">
                <img 
                  src={candidates[0]}
                  data-candidates={candidates.join('|')}
                  data-idx={0}
                  alt={product.name}
                  className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${product.name === 'DEPOCRIL' ? 'max-w-[80%] max-h-[81%]' : ''}`}
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
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                {/* Características técnicas */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Características:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.colors[0]?.types.map((type, index) => (
                      <span key={index} className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: ACRIL_COLORS.bloodRed100, color: ACRIL_COLORS.bloodRed800 }}>
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleViewTechnicalSheet(product.name)}
                      className="flex-1 text-white px-3 py-2 rounded text-xs font-medium transition-colors duration-200"
                      style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed700}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed600}
                    >
                      Ver Ficha Técnica
                    </button>
                    <button 
                      onClick={() => handleDownloadTechnicalSheet(product.name)}
                      className="flex-1 text-white px-3 py-2 rounded text-xs font-medium transition-colors duration-200"
                      style={{ backgroundColor: ACRIL_COLORS.chickYellow500 }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow600}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow500}
                    >
                      Descargar PDF
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => setExpandedProduct(expandedProduct === product.name ? null : product.name)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded text-xs font-medium transition-colors duration-200"
                  >
                    {expandedProduct === product.name ? 'Ocultar' : `${product.colors.length} Colores`}
                  </button>

                  {/* Paleta de colores expandible */}
                  {expandedProduct === product.name && (
                    <div className="mt-3 p-3 bg-gray-50 rounded">
                      <div className="grid grid-cols-6 gap-2">
                        {product.colors.slice(0, 12).map((color: Color) => (
                          <div key={color.name} className="text-center">
                            <div 
                              className="w-6 h-6 rounded border border-gray-300 mx-auto"
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            ></div>
                          </div>
                        ))}
                      </div>
                      {product.colors.length > 12 && (
                        <p className="text-xs text-gray-500 text-center mt-2">
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

        {/* Call to Action específico para elastoméricos */}
        <div className="mt-16 rounded-xl p-8 text-center text-white" style={{ background: `linear-gradient(to right, ${ACRIL_COLORS.bloodRed800}, ${ACRIL_COLORS.chickYellow600})` }}>
          <h3 className="text-2xl font-bold mb-4">¿Necesitas asesoría para tu proyecto elastomérico?</h3>
          <p className="mb-6 max-w-2xl mx-auto" style={{ color: ACRIL_COLORS.chickYellow50 }}>
            Los productos elastoméricos requieren aplicación especializada. Nuestros expertos te guiarán 
            en la selección del producto ideal para tu superficie y condiciones específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '584244597443';
                const message = 'Hola, necesito asesoría técnica sobre productos elastoméricos ACRIL.';
                window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              style={{ backgroundColor: ACRIL_COLORS.chickYellow500 }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow600}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow500}
            >
              Consultar por WhatsApp
            </button>
            <button 
              onClick={() => {
                // Navegar a la sección de contacto
                window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'contacto' }));
              }}
              className="px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              style={{ backgroundColor: ACRIL_COLORS.white, color: ACRIL_COLORS.bloodRed800 }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.gray100}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ACRIL_COLORS.white}
            >
              Solicitar Cotización
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

export default LineaElastomerica;
