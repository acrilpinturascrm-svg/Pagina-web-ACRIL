import { useState } from 'react';
import { Download, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { PRODUCT_LINES } from '../constants/colors';
import type { ProductLine, Product } from '../types';
import { openPdfInNewTab } from '../utils/pdfUtils';
import { ACRIL_COLORS } from '../constants/brandColors';

const normalize = (str: string) =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quitar tildes
    .replace(/ñ/gi, 'n');

const buildProductImageCandidates = (lineName: string, productName: string) => {
  // Normalizar carpeta de línea (sin "línea", sin acentos, minúsculas)
  const lineDir = normalize(lineName.toLowerCase())
    .replace(/^linea\s+de\s+/, '')
    .replace(/^linea\s+/, '')
    .replace(/\s+/g, '-');

  // Slug estándar del producto
  const productSlug = normalize(productName.toLowerCase()).replace(/\s+/g, '-');

  // Variantes en mayúsculas con sufijos comunes
  const upper = normalize(productName).toUpperCase();
  const baseUpper = upper.replace(/^BASE\s+/, ''); // "BASE ANTIALCALINO" -> "ANTIALCALINO"
  const firstTokenUpper = baseUpper.split(' ')[0]; // "TRAFICRIL ELASTOMERICO" -> "TRAFICRIL"

  const basePath = `/images/products/${lineDir}/`;

  const variants = [
    `${productSlug}.jpg`,
    `${productSlug}.png`,
    `${baseUpper}.png`,
    `${baseUpper} G.png`,
    `${baseUpper} GALÓN.png`,
    `${baseUpper} GALON.png`,
    `${baseUpper} C5G.png`,
    `${baseUpper} JARRA.png`,
    `${baseUpper} LITRO.png`,
    `${firstTokenUpper}.png`,
    `${firstTokenUpper} G.png`,
  ];

  return variants.map(v => basePath + v);
};

const Products = () => {
  const [selectedLine, setSelectedLine] = useState<string>('');
  const [expandedProducts, setExpandedProducts] = useState<Set<string>>(new Set());

  const toggleProductExpansion = (productName: string) => {
    const newExpanded = new Set(expandedProducts);
    if (newExpanded.has(productName)) {
      newExpanded.delete(productName);
    } else {
      newExpanded.add(productName);
    }
    setExpandedProducts(newExpanded);
  };

  const handleDownloadTechnicalSheet = (productName: string) => {
    // Descargar ficha técnica
    const url = `/fichas-tecnicas/${productName.toLowerCase().replace(/\s+/g, '-')}.pdf`;
    const link = document.createElement('a');
    link.href = url;
    link.download = `${productName}-ficha-tecnica.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLines = selectedLine 
    ? PRODUCT_LINES.filter(line => line.name === selectedLine)
    : PRODUCT_LINES;

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de pinturas y recubrimientos especializados, 
            organizados por líneas de productos para diferentes aplicaciones.
          </p>
        </div>

        {/* Filtro por líneas */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedLine('')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedLine === '' 
                  ? 'text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
              style={{
                backgroundColor: selectedLine === '' ? ACRIL_COLORS.bloodRed600 : undefined
              }}
            >
              Todas las Líneas
            </button>
            {PRODUCT_LINES.map((line) => (
              <button
                key={line.name}
                onClick={() => setSelectedLine(line.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedLine === line.name 
                    ? 'text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
                style={{
                  backgroundColor: selectedLine === line.name ? ACRIL_COLORS.bloodRed600 : undefined
                }}
              >
                {line.name.replace('Línea de ', '').replace('Línea ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Productos por líneas */}
        <div className="space-y-12">
          {filteredLines.map((line: ProductLine) => (
            <div key={line.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header de la línea */}
              <div
                className="text-white p-6"
                style={{ background: `linear-gradient(to right, ${ACRIL_COLORS.bloodRed600}, ${ACRIL_COLORS.bloodRed800})` }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{line.name}</h2>
                <p style={{ color: ACRIL_COLORS.bloodRed100 }} className="text-lg">{line.description}</p>
                <div className="mt-3 flex items-center gap-4 text-sm">
                  <span
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: ACRIL_COLORS.bloodRed700 }}
                  >
                    {line.products.length} producto{line.products.length !== 1 ? 's' : ''}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: ACRIL_COLORS.bloodRed700 }}
                  >
                    {line.products.reduce((total, product) => total + product.colors.length, 0)} colores disponibles
                  </span>
                </div>
              </div>

              {/* Grid de productos */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {line.products.map((product: Product) => {
                    const candidates = buildProductImageCandidates(line.name, product.name);
                    return (
                      <div key={product.name} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        {/* Imagen del producto */}
                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                          <img
                            src={candidates[0]}
                            data-candidates={candidates.join('|')}
                            data-idx={0}
                            alt={`${product.name} - ${line.name}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const img = e.currentTarget as HTMLImageElement;
                              const list = (img.dataset.candidates || '').split('|').filter(Boolean);
                              let idx = parseInt(img.dataset.idx || '0', 10);
                              idx += 1;
                              if (idx < list.length) {
                                img.dataset.idx = String(idx);
                                img.src = list[idx];
                              } else {
                                // Fallback a gradiente si no existe la imagen
                                img.style.display = 'none';
                                img.parentElement!.innerHTML = `
                                  <div class="w-full h-full flex items-center justify-center"
                                       style="background: linear-gradient(to bottom right, ${ACRIL_COLORS.bloodRed50}, ${ACRIL_COLORS.bloodRed100})">
                                    <div class="text-center">
                                      <div class="text-4xl mb-2">🎨</div>
                                      <p style="color: ${ACRIL_COLORS.bloodRed600}; font-weight: 500;">${product.name}</p>
                                    </div>
                                  </div>
                                `;
                              }
                            }}
                          />
                          <div className="absolute top-2 right-2">
                            <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                              {product.colors.length} colores
                            </span>
                          </div>
                        </div>

                        {/* Información del producto */}
                        <div className="p-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{product.name}</h3>
                          <p className="text-gray-600 text-sm mb-4 text-center">{product.description}</p>

                          {/* Características */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                              {product.colors[0]?.types.slice(0, 3).map((type, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 rounded text-xs"
                                  style={{ backgroundColor: ACRIL_COLORS.bloodRed100, color: ACRIL_COLORS.bloodRed800 }}
                                >
                                  {type}
                                </span>
                              ))}
                              {product.colors[0]?.types.length > 3 && (
                                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: ACRIL_COLORS.gray100, color: ACRIL_COLORS.gray600 }}>
                                  +{product.colors[0].types.length - 3} más
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Botones de acción */}
                          <div className="space-y-2">
                            <button
                              onClick={() => toggleProductExpansion(product.name)}
                              className="w-full flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors duration-200"
                            >
                              {expandedProducts.has(product.name) ? (
                                <>
                                  <ChevronUp className="h-4 w-4" />
                                  Ocultar colores
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="h-4 w-4" />
                                  Ver colores ({product.colors.length})
                                </>
                              )}
                            </button>

                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={() => openPdfInNewTab(product.name)}
                                className="flex items-center justify-center gap-2 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-200"
                                style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed700)}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed600)}
                              >
                                <Eye className="h-4 w-4" />
                                Ver Ficha
                              </button>
                              <button
                                onClick={() => handleDownloadTechnicalSheet(product.name)}
                                className="flex items-center justify-center gap-2 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-200"
                                style={{ backgroundColor: ACRIL_COLORS.chickYellow500 }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow600)}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow500)}
                              >
                                <Download className="h-4 w-4" />
                                Descargar
                              </button>
                            </div>
                          </div>

                          {/* Paleta de colores expandible */}
                          {expandedProducts.has(product.name) && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                Colores disponibles:
                              </h4>
                              <div className="grid grid-cols-4 gap-2">
                                {product.colors.slice(0, 12).map((color) => (
                                  <div key={color.value} className="text-center">
                                    <div
                                      className="w-8 h-8 rounded-full border-2 border-gray-300 mx-auto mb-1"
                                      style={{ backgroundColor: color.value }}
                                      title={`${color.name} - ${color.value}`}
                                    ></div>
                                    <p className="text-xs text-gray-600 truncate">{color.name}</p>
                                  </div>
                                ))}
                                {product.colors.length > 12 && (
                                  <div className="text-center">
                                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-gray-100 mx-auto mb-1 flex items-center justify-center">
                                      <span className="text-xs text-gray-600">+{product.colors.length - 12}</span>
                                    </div>
                                    <p className="text-xs text-gray-600">más</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="mt-16 rounded-xl p-8 text-center text-white"
          style={{ background: `linear-gradient(to right, ${ACRIL_COLORS.bloodRed600}, ${ACRIL_COLORS.bloodRed800})` }}
        >
          <h3 className="text-2xl font-bold mb-4">¿Necesitas asesoría técnica?</h3>
          <p style={{ color: ACRIL_COLORS.bloodRed100 }} className="mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a elegir el producto perfecto 
            para tu proyecto específico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '584244597443';
                const message = 'Hola, necesito asesoría técnica sobre sus productos de pintura.';
                window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              style={{ backgroundColor: ACRIL_COLORS.chickYellow500 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow600)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.chickYellow500)}
            >
              📱 Consultar por WhatsApp
            </button>
            <button 
              onClick={() => {
                // Navegar a la sección de contacto
                window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'contacto' }));
              }}
              className="text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              style={{ backgroundColor: ACRIL_COLORS.bloodRed600 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed700)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACRIL_COLORS.bloodRed600)}
            >
              💬 Formulario de Contacto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
