import React, { useState, useMemo } from 'react';
import GalleryCard from './GalleryCard';
import { galleryItems } from '../../data/galleryData';

export default function GalleryGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('latest');

  // Categories list
  const categoryFilters = [
    { label: 'All Experiments', value: 'all' },
    { label: '3D & WebGL', value: '3d' },
    { label: 'CSS Interactions', value: 'css' },
    { label: 'Canvas & Particles', value: 'canvas' },
    { label: 'UI & Forms', value: 'ui' },
  ];

  // Filtering & Sorting (Latest first by default)
  const filteredItems = useMemo(() => {
    let result = [...galleryItems];

    // Filter by search query
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.tag.toLowerCase().includes(q) ||
          (item.alt && item.alt.toLowerCase().includes(q))
      );
    }

    // Filter by category group
    if (selectedCategory !== 'all') {
      if (selectedCategory === '3d') {
        result = result.filter((item) =>
          item.tag.toLowerCase().includes('3d') ||
          item.tag.toLowerCase().includes('webgl') ||
          item.tag.toLowerCase().includes('three') ||
          item.title.toLowerCase().includes('3d')
        );
      } else if (selectedCategory === 'css') {
        result = result.filter((item) =>
          item.tag.toLowerCase().includes('css') ||
          item.title.toLowerCase().includes('css') ||
          item.title.toLowerCase().includes('hover')
        );
      } else if (selectedCategory === 'canvas') {
        result = result.filter((item) =>
          item.tag.toLowerCase().includes('canvas') ||
          item.tag.toLowerCase().includes('particle') ||
          item.tag.toLowerCase().includes('shader')
        );
      } else if (selectedCategory === 'ui') {
        result = result.filter((item) =>
          item.tag.toLowerCase().includes('ui') ||
          item.tag.toLowerCase().includes('card') ||
          item.tag.toLowerCase().includes('page') ||
          item.tag.toLowerCase().includes('form') ||
          item.tag.toLowerCase().includes('dashboard')
        );
      }
    }

    // Sorting logic (Latest First by default)
    if (sortOrder === 'latest') {
      result.sort((a, b) => b.id - a.id);
    } else if (sortOrder === 'oldest') {
      result.sort((a, b) => a.id - b.id);
    } else if (sortOrder === 'az') {
      result.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase(), undefined, {
          numeric: true,
          sensitivity: 'base',
        })
      );
    } else if (sortOrder === 'za') {
      result.sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase(), undefined, {
          numeric: true,
          sensitivity: 'base',
        })
      );
    }

    return result;
  }, [searchTerm, selectedCategory, sortOrder]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortOrder('latest');
  };

  return (
    <div id="gallery-section" className="scroll-mt-24">
      <div className="border-t border-white/10 pt-16 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <i className="ri-flashlight-line text-cyan-400"></i> Latest Projects First
            </div>
            <h2 className="text-3xl font-bold mb-3 flex items-center gap-2 font-display">
              <i className="ri-compass-3-line text-purple-400"></i> Interactive Showcase
            </h2>
            <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
              Explore Muhammad Daniyal's latest responsive widgets, 3D web artworks, and live frontend demos sorted chronologically.
            </p>
          </div>
          <div className="text-sm font-semibold px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 self-start md:self-auto">
            Showing <span className="text-white font-bold">{filteredItems.length}</span> / {galleryItems.length} Experiments
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 p-4 rounded-2xl glass-panel border border-white/5">
        {/* Search Input */}
        <div className="relative w-full lg:w-1/2">
          <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search experiments (e.g. 3D, particle, clock, button)..."
            className="w-full pl-12 pr-10 py-3 rounded-xl glass-input placeholder-slate-500 focus:ring-2 focus:ring-purple-500 text-sm"
            aria-label="Search experiments"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              aria-label="Clear search"
            >
              <i className="ri-close-circle-line text-lg"></i>
            </button>
          )}
        </div>

        {/* Filters and Sort Dropdowns */}
        <div className="w-full lg:w-auto flex flex-wrap sm:flex-nowrap items-center gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label htmlFor="gallery-category" className="text-xs font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap">
              Category:
            </label>
            <select
              id="gallery-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto px-4 py-3 rounded-xl glass-input focus:ring-2 focus:ring-purple-500 text-sm bg-[#0f172a] text-slate-200 cursor-pointer"
            >
              {categoryFilters.map((cat) => (
                <option key={cat.value} value={cat.value} className="bg-slate-900 text-slate-200">
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label htmlFor="gallery-sort" className="text-xs font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap">
              Sort:
            </label>
            <select
              id="gallery-sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full sm:w-auto px-4 py-3 rounded-xl glass-input focus:ring-2 focus:ring-purple-500 text-sm bg-[#0f172a] text-slate-200 cursor-pointer"
            >
              <option value="latest" className="bg-slate-900 text-slate-200">Latest Projects (Default)</option>
              <option value="oldest" className="bg-slate-900 text-slate-200">Oldest Projects</option>
              <option value="az" className="bg-slate-900 text-slate-200">Name (A → Z)</option>
              <option value="za" className="bg-slate-900 text-slate-200">Name (Z → A)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filter Quick Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categoryFilters.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              selectedCategory === cat.value
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-3xl p-12 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 mx-auto mb-4 text-2xl">
            <i className="ri-search-eye-line"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 font-display">No matching experiments found</h3>
          <p className="text-slate-400 text-sm mb-6">
            Try adjusting your search query or clear your category filters to view all works.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
