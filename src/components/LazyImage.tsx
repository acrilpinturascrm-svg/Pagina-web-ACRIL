import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  width,
  height
}) => {
  // Crear placeholder con gradiente ACRIL si no se proporciona
  const defaultPlaceholder = `data:image/svg+xml;base64,${btoa(`
    <svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" opacity="0.1"/>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#DC2626;stop-opacity:0.1"/>
          <stop offset="100%" style="stop-color:#FBBF24;stop-opacity:0.1"/>
        </linearGradient>
      </defs>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280" font-family="Arial, sans-serif" font-size="14">Cargando...</text>
    </svg>
  `)}`;

  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      placeholderSrc={placeholder || defaultPlaceholder}
      effect="blur"
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );
};

export default LazyImage;
