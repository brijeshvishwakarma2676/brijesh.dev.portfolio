import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function ProjectCardImage({
  src,
  alt,
  color,
  title,
  heightClass = 'h-44',
  className = '',
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const initialWord = (title || '').split(' ')[0] || '';

  return (
    <div
      className={`relative ${heightClass} w-full flex items-center justify-center overflow-hidden select-none bg-gray-50 dark:bg-gray-900 ${className}`}
      style={{
        borderTop: color ? `3px solid ${color}` : undefined,
      }}
    >
      {/* 1. Underlying Fallback Layer (always present underneath and visible on error) */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: color
            ? `radial-gradient(circle at 20% 50%, ${color}40 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${color}20 0%, transparent 50%)`
            : undefined,
        }}
      />
      <span
        className="text-5xl font-bold opacity-10 transition-transform duration-500 group-hover:scale-110 pointer-events-none"
        style={{ color: color || '#94A3B8' }}
      >
        {initialWord}
      </span>

      {/* 2. Skeleton Loader (active while image is loading and no error) */}
      {src && !isLoaded && !hasError && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 overflow-hidden"
          aria-hidden="true"
        >
          {/* Browser-style window dots */}
          <div className="absolute top-3 left-3.5 flex items-center gap-1.5 opacity-40">
            <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse [animation-delay:150ms]" />
            <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse [animation-delay:300ms]" />
          </div>

          {/* Shimmer sweep effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/10 to-transparent animate-shimmer pointer-events-none" />

          {/* Placeholder center badge */}
          <div className="flex flex-col items-center gap-2 relative z-10">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center animate-pulse shadow-sm"
              style={{
                backgroundColor: color ? `${color}18` : 'rgba(156, 163, 175, 0.15)',
              }}
            >
              <ImageIcon
                className="w-5 h-5 opacity-50"
                style={{ color: color || '#94A3B8' }}
              />
            </div>
            <div className="h-1.5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
          </div>
        </div>
      )}

      {/* 3. Image Element */}
      {src && !hasError && (
        <img
          src={src}
          alt={alt || `${title} thumbnail`}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-top z-20 transition-all duration-500 group-hover:scale-105 bg-white dark:bg-gray-900 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
