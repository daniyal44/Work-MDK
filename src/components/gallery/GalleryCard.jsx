import React, { useState } from 'react';

export default function GalleryCard({ item }) {
  const [imgSrc, setImgSrc] = useState(item.image);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`);
    }
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${item.title}`}
      className="glass-card rounded-2xl overflow-hidden p-3 block group transition-all duration-300 hover:scale-[1.02] bg-white border border-slate-200 hover:border-blue-500 shadow-sm"
    >
      <div className="image-zoom-container rounded-xl aspect-square overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center relative">
        <img
          src={imgSrc}
          alt={item.alt || item.title}
          loading="lazy"
          decoding="async"
          onError={handleImageError}
          className={`w-full h-full ${
            imgSrc?.toLowerCase().includes('logo') || imgSrc?.toLowerCase().includes('zyphuel')
              ? 'object-contain p-4 bg-slate-900'
              : 'object-cover'
          } transition-transform duration-500 group-hover:scale-108`}
        />
        <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
      <div className="mt-3 px-1">
        <p className="font-semibold text-sm group-hover:text-blue-600 transition-colors truncate text-slate-800">
          {item.title}
        </p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block truncate">
            {item.tag}
          </span>
          <i className="ri-external-link-line text-xs text-slate-400 group-hover:text-blue-600 transition-colors"></i>
        </div>
      </div>
    </a>
  );
}
