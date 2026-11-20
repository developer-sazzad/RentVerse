import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiClock, FiUser, FiBookOpen, FiX, FiRotateCcw, FiTag, FiChevronDown } from 'react-icons/fi';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'crypto', name: 'Cryptocurrency' },
    { id: 'investment', name: 'Investment' },
    { id: 'property', name: 'Property' },
    { id: 'technology', name: 'Technology' },
    { id: 'market', name: 'Market Analysis' }
  ];

  const posts = [
    {
      id: 1,
      title: 'The Future of Real Estate: Cryptocurrency Payments and Blockchain Technology',
      slug: 'future-real-estate-crypto-payments',
      excerpt: 'Explore how cryptocurrency and blockchain are revolutionizing property transactions and investment opportunities.',
      image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&q=80',
      category: 'crypto',
      author: 'Sarah Johnson',
      date: '2024-03-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Understanding Tokenized Real Estate Investment',
      slug: 'understanding-tokenized-real-estate',
      excerpt: "A comprehensive guide to property tokenization and how it's making real estate investment more accessible.",
      image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&q=80',
      category: 'investment',
      author: 'Michael Chen',
      date: '2024-03-12',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Smart Contracts in Real Estate Transactions',
      slug: 'smart-contracts-real-estate',
      excerpt: 'How smart contracts are streamlining property transactions and reducing costs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      category: 'technology',
      author: 'David Rodriguez',
      date: '2024-03-10',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: '2024 Real Estate Market Analysis: Crypto Impact',
      slug: '2024-market-analysis-crypto',
      excerpt: 'Analysis of how cryptocurrency adoption is affecting real estate market dynamics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      category: 'market',
      author: 'Emma Wilson',
      date: '2024-03-08',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Property Investment Strategies with Cryptocurrency',
      slug: 'property-investment-strategies-crypto',
      excerpt: 'Learn effective strategies for investing in real estate using cryptocurrency.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      category: 'investment',
      author: 'Sarah Johnson',
      date: '2024-03-05',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Regulatory Landscape: Crypto in Real Estate',
      slug: 'regulatory-landscape-crypto-real-estate',
      excerpt: 'Understanding the current regulatory environment for cryptocurrency-based property transactions.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      category: 'crypto',
      author: 'Michael Chen',
      date: '2024-03-02',
      readTime: '7 min read'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-secondary-900 text-secondary-900 dark:text-white transition-colors duration-200">
      {/* =========================================================================
          HERO SECTION: Dual-Theme (Light & Dark) Hero for Blog Page
          ========================================================================= */}
      <section className="relative min-h-[360px] sm:min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-100 dark:bg-[#051124] border-b border-slate-200/80 dark:border-secondary-800 transition-colors duration-300">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516245834210-c4c142787335?w=1600&q=80"
            alt="Blog Hero Background"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-700"
          />
          {/* Dual-Theme Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-slate-50/90 dark:from-[#051124]/90 dark:via-[#051124]/75 dark:to-[#051124]/95 transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70 dark:from-[#051124]/85 dark:via-transparent dark:to-[#051124]/85 transition-colors duration-300" />

          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-400/15 dark:bg-primary-600/20 rounded-full blur-3xl pointer-events-none transition-colors duration-300" />
          <div className="absolute -top-24 right-1/4 w-72 h-72 bg-sky-300/20 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none transition-colors duration-300" />
        </div>

        <div className="relative container pt-12 pb-14 z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-950/60 border border-primary-200 dark:border-primary-500/30 text-primary-700 dark:text-primary-300 mb-4 backdrop-blur-md">
              <FiBookOpen className="text-primary-600 dark:text-primary-400" />
              <span>Articles, News & Guides</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-secondary-900 dark:text-white leading-tight">
              Real Estate & Crypto Insights
            </h1>

            <p className="text-base sm:text-lg text-secondary-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest trends in property tokenization, cryptocurrency markets, smart contracts, and real estate investment strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          ALWAYS ACTIVE COMPACT SEARCH & CATEGORY SELECT FILTER
          ========================================================================= */}
      <div className="container -mt-7 relative z-20">
        <div className="bg-white dark:bg-secondary-800 rounded-3xl shadow-xl dark:shadow-black/40 border border-slate-200/90 dark:border-secondary-700/80 p-5 sm:p-6">
          <div className="flex flex-col md:flex-row gap-3.5 sm:gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-base" />
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 dark:bg-secondary-900 border border-slate-200 dark:border-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm font-medium transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-200"
                >
                  <FiX size={15} />
                </button>
              )}
            </div>

            {/* Category Dropdown Select Field (NOT buttons!) */}
            <div className="relative w-full md:w-72">
              <FiTag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-base" />
              <select
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 dark:bg-secondary-900 border border-slate-200 dark:border-secondary-700 text-secondary-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer appearance-none transition-all"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-white dark:bg-secondary-900">
                    {category.name}
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-secondary-400 pointer-events-none" />
            </div>

            {/* Reset / Actions */}
            {(searchTerm || selectedCategory !== 'all') ? (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/40 border border-rose-200 dark:border-rose-800 font-bold text-xs sm:text-sm whitespace-nowrap transition-colors"
              >
                <FiRotateCcw size={13} />
                <span>Reset Filters</span>
              </button>
            ) : (
              <div className="hidden md:flex items-center text-xs font-semibold text-secondary-500 dark:text-secondary-400 whitespace-nowrap pl-2">
                <span>{filteredPosts.length} articles found</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================================
          BLOG POSTS GRID
          ========================================================================= */}
      <div className="container py-12 lg:py-16">
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm font-semibold text-secondary-600 dark:text-secondary-400">
            Showing <span className="text-secondary-900 dark:text-white font-extrabold">{filteredPosts.length}</span> articles
          </p>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-white dark:bg-secondary-800 rounded-3xl p-12 text-center border border-slate-200 dark:border-secondary-700 shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-950/60 flex items-center justify-center mx-auto mb-4 text-primary-600">
              <FiSearch size={28} />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-6">
              Try searching for another keyword or selecting a different category.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors shadow-md shadow-primary-600/30"
            >
              <FiRotateCcw size={15} />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md hover:shadow-xl dark:shadow-black/20 border border-slate-200/90 dark:border-secondary-700/60 overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 shadow-sm border border-slate-200/50 dark:border-secondary-700/50">
                      {categories.find(c => c.id === post.category)?.name}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-secondary-500 dark:text-secondary-400 pt-3 border-t border-slate-100 dark:border-secondary-700/60">
                      <FiUser className="mr-1.5 text-primary-600 dark:text-primary-400" />
                      <span className="mr-4 font-medium">{post.author}</span>
                      <FiClock className="mr-1.5 text-primary-600 dark:text-primary-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;