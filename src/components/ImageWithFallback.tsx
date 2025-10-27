import React, { useMemo, useState } from 'react';

export type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  sources: string[]; // Ordered list of image URLs to try
  referrerPolicyAll?: React.HTMLAttributeReferrerPolicy; // default 'no-referrer'
  crossOriginAll?: '' | 'anonymous' | 'use-credentials'; // default 'anonymous'
};

/**
 * ImageWithFallback
 * - Tries multiple image sources in order until one loads successfully.
 * - Useful to support JPG/PNG/WebP/External CDNs/Local public assets seamlessly.
 */
const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  sources,
  alt,
  className,
  referrerPolicyAll = 'no-referrer',
  crossOriginAll = 'anonymous',
  loading = 'eager',
  decoding = 'async',
  sizes,
  ...rest
}) => {
  const cleanedSources = useMemo(
    () => (sources || []).filter(Boolean),
    [sources]
  );
  const [index, setIndex] = useState(0);

  const currentSrc = cleanedSources[index];

  if (!currentSrc) {
    // If no sources, render nothing to avoid broken UI
    return null;
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      referrerPolicy={referrerPolicyAll}
      crossOrigin={crossOriginAll}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
      onError={() => {
        // Try next source if available
        if (index < cleanedSources.length - 1) {
          setIndex((i) => i + 1);
        }
      }}
      {...rest}
    />
  );
};

export default ImageWithFallback;
