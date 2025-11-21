import React, { useState } from 'react';
import { ACRIL_COLORS } from '../constants/brandColors';

interface ProductImageProps {
  candidates: string[];
  productName: string;
  className?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ 
  candidates, 
  productName, 
  className = "w-full h-full object-contain" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowFallback(true);
      setIsLoading(false);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full bg-gray-50 flex items-center justify-center">
      {/* Skeleton loader mientras carga */}
      {isLoading && !showFallback && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}

      {/* Imagen real */}
      {!showFallback && (
        <img
          src={candidates[currentIndex]}
          alt={productName}
          className={className}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Fallback cuando no hay imagen */}
      {showFallback && (
        <div 
          className="w-full h-full flex flex-col items-center justify-center p-4"
          style={{ background: `linear-gradient(135deg, ${ACRIL_COLORS.bloodRed50}, ${ACRIL_COLORS.chickYellow50})` }}
        >
          <div className="text-5xl mb-3">🎨</div>
          <p 
            className="text-center font-semibold text-sm"
            style={{ color: ACRIL_COLORS.bloodRed600 }}
          >
            {productName}
          </p>
          <p className="text-xs text-gray-500 mt-2">Imagen no disponible</p>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
