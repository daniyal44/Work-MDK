import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { pageSEO, siteMetadata } from '../data/seoData';
import { zyphuelArticles } from '../data/articlesData';

const ARTICLES_PER_PAGE = 12;

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { label: 'All Articles', value: 'all' },
    { label: 'Flagship & Zyphuel', value: 'flagship' },
    { label: '3D & WebGL', value: '3d' },
    { label: 'CSS Engineering', value: 'css' },
    { label: 'Canvas & Particles', value: 'canvas' },
    { label: 'UI & Interactions', value: 'ui' },
  ];

  // Filtering & Sorting
  const filteredArticles = useMemo(() => {
    let list = [...zyphuelArticles];

    // Filter by search query
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase().trim();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Filter by category
    if (activeCategory !== 'all') {
      if (activeCategory === 'flagship') {
        list = list.filter((a) => a.isFlagship === true);
      } else if (activeCategory === '3d') {
        list = list.filter((a) => a.category === '3D & WebGL');
      } else if (activeCategory === 'css') {
        list = list.filter((a) => a.category === 'CSS Engineering');
      } else if (activeCategory === 'canvas') {
        list = list.filter((a) => a.category === 'Canvas & Particles');
      } else if (activeCategory === 'ui') {
        list = list.filter((a) => a.category === 'UI & Interactions');
      }
    }

    // Sorting
    if (sortOrder === 'latest') {
      list.sort((a, b) => (b.projectId || 0) - (a.projectId || 0));
    } else if (sortOrder === 'oldest') {
      list.sort((a, b) => (a.projectId || 0) - (b.projectId || 0));
    } else if (sortOrder === 'az') {
      list.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase(), undefined, {
          numeric: true,
          sensitivity: 'base',
        })
      );
    } else if (sortOrder === 'za') {
      list.sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase(), undefined, {
          numeric: true,
          sensitivity: 'base',
        })
      );
    }

    return list;
  }, [searchTerm, activeCategory, sortOrder]);

  const handleCategoryChange = (val) => {
    setActiveCategory(val);
    setCurrentPage(1);
  };

  const handleSearchChange = (val) => {
    setSearchTerm(val);
    setCurrentPage(1);
  };

  const paginatedArticles = filteredArticles.slice(0, currentPage * ARTICLES_PER_PAGE);
  const hasMore = currentPage * ARTICLES_PER_PAGE < filteredArticles.length;

  const articlesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://workmdk.netlify.app/articles#blog",
        "url": "https://workmdk.netlify.app/articles",
        "name": "MDK Technical Articles & Project Case Studies Hub",
        "description": "Technical insights and case studies on all 130+ web projects, 3D WebGL experiments, and Zyphuel energy logistics by Muhammad Daniyal (ItxMDK).",
        "inLanguage": "en-US",
        "publisher": {
          "@type": "Organization",
          "name": "MDK Gallery",
          "logo": siteMetadata.defaultImage
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://workmdk.netlify.app/articles#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://workmdk.netlify.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Technical Articles & Case Studies",
            "item": "https://workmdk.netlify.app/articles"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title={pageSEO.articles.title}
        description={pageSEO.articles.description}
        keywords={pageSEO.articles.keywords}
        canonical={pageSEO.articles.canonical}
        schema={articlesSchema}
      />

      <main className="container mx-auto px-6 pt-36 pb-24 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <i className="ri-article-line text-blue-600"></i> Technical Case Studies & Knowledge Base
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-slate-900">
            Project <span className="text-blue-600">Articles & Case Studies</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            In-depth architectural breakdowns, CSS transforms, physics simulations, and engineering insights for all <strong className="text-slate-900">130+ interactive web projects</strong> and <strong className="text-blue-600 font-semibold">Zyphuel</strong> digital logistics platforms by <strong className="text-slate-900 font-semibold">Muhammad Daniyal (ItxMDK)</strong>.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
          {/* Search Input */}
          <div className="relative w-full lg:w-1/2">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search across all 130+ project articles & case studies..."
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 text-sm text-slate-900"
              aria-label="Search articles"
            />
            {searchTerm && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                aria-label="Clear search"
              >
                <i className="ri-close-circle-line text-lg"></i>
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="w-full lg:w-auto flex items-center justify-between lg:justify-end gap-3">
            <div className="flex items-center gap-2">
              <label htmlFor="article-sort" className="text-xs font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap">
                Sort:
              </label>
              <select
                id="article-sort"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer"
              >
                <option value="latest">Latest Projects (Default)</option>
                <option value="oldest">Oldest Projects</option>
                <option value="az">Title (A → Z)</option>
                <option value="za">Title (Z → A)</option>
              </select>
            </div>

            <div className="text-xs font-bold px-3 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700">
              <span className="text-blue-900 font-extrabold">{filteredArticles.length}</span> Articles
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {paginatedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-3xl overflow-hidden flex flex-col justify-between group border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300"
              >
                <div>
                  <div className="image-zoom-container h-48 bg-slate-50 border-b border-slate-100 relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur border border-slate-200 text-blue-700 shadow-sm">
                        {article.category}
                      </span>
                    </div>
                    {article.isFlagship && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-blue-600 text-white shadow">
                          Flagship
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 pb-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                      <span><i className="ri-calendar-line text-blue-600"></i> {article.date}</span>
                      <span>•</span>
                      <span><i className="ri-time-line text-blue-600"></i> {article.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold bg-slate-50 border border-slate-200 text-slate-600">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 flex gap-2">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 text-xs font-semibold transition flex items-center justify-center gap-1.5"
                  >
                    <i className="ri-book-open-line"></i> Read Case Study
                  </button>
                  {article.demoUrl && (
                    <a
                      href={article.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs border border-slate-200 transition"
                      title="Launch Standalone Live Demo"
                      aria-label="Launch Live Demo"
                    >
                      <i className="ri-external-link-line"></i>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center max-w-lg mx-auto mb-16 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto mb-4 text-2xl">
              <i className="ri-search-eye-line"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">No articles found</h3>
            <p className="text-slate-500 text-sm mb-6">
              Try searching with different terms or reset your filters to see all 130+ case studies.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition shadow-md shadow-blue-600/20"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mb-16">
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition accent-glow-btn inline-flex items-center gap-2 shadow-md shadow-blue-600/20"
            >
              <i className="ri-loader-4-line animate-spin"></i> Load More Articles ({paginatedArticles.length} of {filteredArticles.length})
            </button>
          </div>
        )}

        {/* Modal for Article Reading */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in-up">
            <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 border border-slate-200 relative my-8 shadow-2xl">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 text-xl transition"
                aria-label="Close article"
              >
                <i className="ri-close-line"></i>
              </button>

              <div className="mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                  {selectedArticle.category}
                </span>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-4">
                  <span><i className="ri-calendar-line text-blue-600"></i> {selectedArticle.date}</span>
                  <span>•</span>
                  <span><i className="ri-time-line text-blue-600"></i> {selectedArticle.readTime}</span>
                  <span>•</span>
                  <span className="text-slate-800 font-medium">By Muhammad Daniyal (ItxMDK)</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 font-display">
                {selectedArticle.title}
              </h2>

              <div className="rounded-2xl overflow-hidden mb-8 border border-slate-200 h-64 sm:h-80 bg-slate-50">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
                  const trimmed = paragraph.trim();
                  if (trimmed.startsWith('## ')) {
                    return <h3 key={idx} className="text-xl font-bold text-slate-900 font-display mt-6 mb-2">{trimmed.replace('## ', '')}</h3>;
                  }
                  if (trimmed.startsWith('### ')) {
                    return <h4 key={idx} className="text-lg font-semibold text-blue-600 font-display mt-4 mb-2">{trimmed.replace('### ', '')}</h4>;
                  }
                  if (trimmed.startsWith('- ')) {
                    const listItems = trimmed.split('\n').map(li => li.replace('- ', '').trim());
                    return (
                      <ul key={idx} className="list-disc list-inside space-y-1.5 text-slate-700 my-3">
                        {listItems.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={idx} className="text-slate-700">{trimmed}</p>;
                })}
              </div>

              <div className="border-t border-slate-200 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                {selectedArticle.demoUrl && (
                  <a
                    href={selectedArticle.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <i className="ri-external-link-line"></i> Launch Standalone Demo
                  </a>
                )}
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
