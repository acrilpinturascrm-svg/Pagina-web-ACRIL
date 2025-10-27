import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  productName: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ isOpen, onClose, pdfUrl, productName }) => {
  // Hooks must be called unconditionally at the top of the component
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const checkPdf = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch(pdfUrl, { method: 'HEAD' });
        if (!isCancelled) {
          if (!res.ok) {
            setHasError(true);
          }
        }
      } catch {
        if (!isCancelled) setHasError(true);
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    };
    checkPdf();
    return () => {
      isCancelled = true;
    };
  }, [pdfUrl]);

  // Early return after hooks are declared
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${productName}-ficha-tecnica.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📄</div>
            <h2 className="text-lg font-semibold text-gray-900">
              Ficha Técnica - {productName}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* PDF Content */}
        <div className="flex-1 h-full">
          {isLoading && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-3"></div>
                <p>Cargando ficha técnica…</p>
              </div>
            </div>
          )}
          {!isLoading && hasError && (
            <div className="w-full h-full flex items-center justify-center p-6">
              <div className="max-w-md text-center">
                <div className="text-5xl mb-3">⚠️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontró el PDF</h3>
                <p className="text-sm text-gray-600 mb-4">La ficha técnica para “{productName}” no está disponible en este momento. Puedes intentar abrirla en una nueva pestaña o descargarla si el archivo existe.</p>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={handleOpenInNewTab}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200"
                  >
                    Abrir en nueva pestaña
                  </button>
                  <button
                    onClick={handleDownload}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200"
                  >
                    Descargar
                  </button>
                </div>
              </div>
            </div>
          )}
          {!isLoading && !hasError && (
            <iframe
              src={pdfUrl}
              className="w-full h-full border-none"
              title={`Ficha técnica de ${productName}`}
              style={{ height: 'calc(100vh - 140px)' }}
            />
          )}
        </div>

        {/* Footer with actions */}
        <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={handleOpenInNewTab}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            <ExternalLink className="h-4 w-4" />
            Abrir en nueva pestaña
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            <Download className="h-4 w-4" />
            Descargar PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
