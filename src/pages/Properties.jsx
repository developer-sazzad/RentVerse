import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiTrendingUp,
  FiDollarSign,
  FiSearch,
  FiMapPin,
  FiHome,
  FiPieChart,
  FiSliders,
  FiX,
  FiRotateCcw,
  FiCheckCircle,
  FiChevronDown,
} from 'react-icons/fi';
import { FaEthereum } from 'react-icons/fa';

function Properties() {
  const [filters, setFilters] = useState({
    search: '',
    priceRange: 'all',
    propertyType: 'all',
    location: '',
    minROI: '',
    maxROI: '',
    fundingStatus: 'all',
    sortBy: 'newest',
  });

  const properties = [
    {
      id: 1,
      title: 'Modern Villa with Pool',
      price: {
        usd: 850000,
        eth: 425
      },
      location: 'Beverly Hills, CA',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      type: 'villa',
      roi: '7.2%',
      metrics: {
        totalInvestors: 142,
        funded: '89%',
        minInvestment: '$10',
        monthlyIncome: '$520',
        appreciation: '4.5%'
      },
      status: 'Active Investment',
      features: ['Pool', 'Smart Home', 'Solar Panels'],
      tokenDetails: {
        totalTokens: 85000,
        availableTokens: 9350,
        tokenPrice: '$10'
      }
    },
    {
      id: 2,
      title: 'Luxury Penthouse',
      price: {
        usd: 1200000,
        eth: 600
      },
      location: 'Manhattan, NY',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      type: 'apartment',
      roi: '6.8%',
      metrics: {
        totalInvestors: 203,
        funded: '95%',
        minInvestment: '$10',
        monthlyIncome: '$680',
        appreciation: '5.2%'
      },
      status: 'Almost Funded',
      features: ['Doorman', 'Gym', 'Terrace'],
      tokenDetails: {
        totalTokens: 120000,
        availableTokens: 6000,
        tokenPrice: '$10'
      }
    },
    {
      id: 3,
      title: 'Waterfront Estate',
      price: {
        usd: 2100000,
        eth: 1050
      },
      location: 'Miami Beach, FL',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      type: 'house',
      roi: '7.5%',
      metrics: {
        totalInvestors: 89,
        funded: '45%',
        minInvestment: '$10',
        monthlyIncome: '$1200',
        appreciation: '6.1%'
      },
      status: 'New Listing',
      features: ['Waterfront', 'Dock', 'Wine Cellar'],
      tokenDetails: {
        totalTokens: 210000,
        availableTokens: 115500,
        tokenPrice: '$10'
      }
    }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      priceRange: 'all',
      propertyType: 'all',
      location: '',
      minROI: '',
      maxROI: '',
      fundingStatus: 'all',
      sortBy: 'newest'
    });
  };

  const hasActiveFilters = Boolean(
    filters.search ||
    filters.priceRange !== 'all' ||
    filters.propertyType !== 'all' ||
    filters.location ||
    filters.minROI ||
    filters.fundingStatus !== 'all' ||
    filters.sortBy !== 'newest'
  );

  const filteredProperties = properties.filter(property => {
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const match =
        property.title.toLowerCase().includes(q) ||
        property.location.toLowerCase().includes(q) ||
        property.type.toLowerCase().includes(q) ||
        property.features.some(f => f.toLowerCase().includes(q));
      if (!match) return false;
    }

    if (filters.propertyType !== 'all' && property.type !== filters.propertyType) return false;
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.minROI && parseFloat(property.roi) < parseFloat(filters.minROI)) return false;
    if (filters.maxROI && parseFloat(property.roi) > parseFloat(filters.maxROI)) return false;
    
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max && (property.price.usd < min || property.price.usd > max)) return false;
      if (!max && property.price.usd < min) return false;
    }

    if (filters.fundingStatus !== 'all') {
      const fundedPercentage = parseInt(property.metrics.funded);
      switch (filters.fundingStatus) {
        case 'new':
          if (fundedPercentage > 30) return false;
          break;
        case 'active':
          if (fundedPercentage < 30 || fundedPercentage >= 90) return false;
          break;
        case 'almostFunded':
          if (fundedPercentage < 90) return false;
          break;
        default:
          break;
      }
    }
    
    return true;
  });

  // Sort properties based on selected criteria
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (filters.sortBy) {
      case 'priceAsc':
        return a.price.usd - b.price.usd;
      case 'priceDesc':
        return b.price.usd - a.price.usd;
      case 'roiDesc':
        return parseFloat(b.roi) - parseFloat(a.roi);
      case 'fundingDesc':
        return parseInt(b.metrics.funded) - parseInt(a.metrics.funded);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-secondary-900 text-secondary-900 dark:text-white transition-colors duration-200">
      {/* =========================================================================
          HERO SECTION: Dual-Theme (Light & Dark) Luxury Real Estate Hero for Properties
          ========================================================================= */}
      <section className="relative min-h-[380px] sm:min-h-[420px] flex items-center justify-center overflow-hidden bg-slate-100 dark:bg-[#051124] border-b border-slate-200/80 dark:border-secondary-800 transition-colors duration-300">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt="Properties Hero Background"
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
              <FiHome className="text-primary-600 dark:text-primary-400" />
              <span>Tokenized Real Estate Market</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-secondary-900 dark:text-white leading-tight">
              Explore Investment Properties
            </h1>

            <p className="text-base sm:text-lg text-secondary-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Invest in high-yield, verified residential and commercial assets. Earn monthly rental dividends and trade tokens with instant liquidity.
            </p>

            {/* Quick Metrics Chips */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200/80 dark:border-white/15 px-4 py-2 rounded-xl text-secondary-800 dark:text-slate-200 shadow-sm">
                <FiCheckCircle className="text-emerald-500 dark:text-emerald-400 text-base" />
                <span className="font-semibold">From $10 per NFT</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200/80 dark:border-white/15 px-4 py-2 rounded-xl text-secondary-800 dark:text-slate-200 shadow-sm">
                <FiTrendingUp className="text-emerald-500 dark:text-emerald-400 text-base" />
                <span className="font-semibold">Average 7.2% Annual ROI</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200/80 dark:border-white/15 px-4 py-2 rounded-xl text-secondary-800 dark:text-slate-200 shadow-sm">
                <FaEthereum className="text-primary-600 dark:text-primary-400 text-base" />
                <span className="font-semibold">Crypto & Web3 Powered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          ALWAYS ACTIVE 2-LINE SEARCH & FILTER SECTION
          ========================================================================= */}
      <div className="container -mt-7 relative z-20">
        <div className="bg-white dark:bg-secondary-800 rounded-3xl shadow-xl dark:shadow-black/40 border border-slate-200/90 dark:border-secondary-700/80 p-5 sm:p-6 space-y-3.5">
          {/* Line 1: Search, Property Type Select, Price Range Select, Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-base" />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 dark:bg-secondary-900 border border-slate-200 dark:border-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm font-medium transition-all"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
              {filters.search && (
                <button
                  type="button"
                  onClick={() => handleFilterChange('search', '')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-200"
                >
                  <FiX size={15} />
                </button>
              )}
            </div>

            {/* Property Type Dropdown (Select field instead of buttons) */}
            <div className="relative">
              <FiHome className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-base" />
              <select
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-50 dark:bg-secondary-900 border border-slate-200 dark:border-secondary-700 text-secondary-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer appearance-none transition-all"
                value={filters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="villa">Villas</option>
                <option value="apartment">Apartments</option>
                <option value="house">Houses</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-secondary-400 pointer-events-none" />
            </div>

            {/* Price Range Dropdown */}
            <div className="relative">
              <FiDollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-base" />
              <select
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-50 dark:bg-secondary-900 border border-slate-200 dark:border-secondary-700 text-secondary-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer appearance-none transition-all"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="0-500000">Under $500,000</option>
                <option value="500000-1000000">$500,000 - $1,000,000</option>
                <option value="1000000">Over $1,000,000</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-secondary-400 pointer-events-none" />
            </div>

            {/* Location Input */}
            <div className="relative">
              <FiMapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-base" />
              <input
                type="text"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-secondary-900 border border-slate-200 dark:border-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="Location (e.g. CA, NY, Miami)"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              />
            </div>
          </div>

          {/* Line 2: Min ROI, Funding Status, Sort By, and Reset/Result Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center pt-1 border-t border-slate-100 dark:border-secondary-700/60">
            {/* Min ROI Input */}
            <div className="relative">
              <FiTrendingUp className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-base" />
              <input
                type="number"
                step="0.1"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-secondary-900 border border-slate-200 dark:border-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="Min Annual ROI %"
                value={filters.minROI}
                onChange={(e) => handleFilterChange('minROI', e.target.value)}
              />
            </div>

            {/* Funding Status Dropdown */}
            <div className="relative">
              <FiPieChart className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-base" />
              <select
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-50 dark:bg-secondary-900 border border-slate-200 dark:border-secondary-700 text-secondary-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer appearance-none transition-all"
                value={filters.fundingStatus}
                onChange={(e) => handleFilterChange('fundingStatus', e.target.value)}
              >
                <option value="all">All Funding Statuses</option>
                <option value="new">New Listings (&lt; 30%)</option>
                <option value="active">Active Funding (30 - 90%)</option>
                <option value="almostFunded">Almost Funded (&gt; 90%)</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-secondary-400 pointer-events-none" />
            </div>

            {/* Sort By Dropdown */}
            <div className="relative">
              <FiSliders className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-base" />
              <select
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-50 dark:bg-secondary-900 border border-slate-200 dark:border-secondary-700 text-secondary-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer appearance-none transition-all"
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              >
                <option value="newest">Sort: Featured / Newest</option>
                <option value="priceAsc">Sort: Price Low to High</option>
                <option value="priceDesc">Sort: Price High to Low</option>
                <option value="roiDesc">Sort: Highest Annual ROI</option>
                <option value="fundingDesc">Sort: Most Funded</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-secondary-400 pointer-events-none" />
            </div>

            {/* Reset / Status Actions */}
            <div className="flex items-center justify-between sm:justify-end gap-3">
              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/40 border border-rose-200 dark:border-rose-800 transition-colors"
                >
                  <FiRotateCcw size={14} />
                  <span>Reset All Filters</span>
                </button>
              ) : (
                <div className="w-full flex items-center justify-center sm:justify-end text-xs font-semibold text-secondary-500 dark:text-secondary-400">
                  <span>{sortedProperties.length} properties available</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PROPERTIES GRID
          ========================================================================= */}
      <div className="container py-12 lg:py-16">
        {/* Results Bar */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm font-semibold text-secondary-600 dark:text-secondary-400">
            Showing <span className="text-secondary-900 dark:text-white font-extrabold">{sortedProperties.length}</span> investment opportunities
          </p>
        </div>

        {sortedProperties.length === 0 ? (
          <div className="bg-white dark:bg-secondary-800 rounded-3xl p-12 text-center border border-slate-200 dark:border-secondary-700 shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-950/60 flex items-center justify-center mx-auto mb-4 text-primary-600">
              <FiSearch size={28} />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">No properties matched your criteria</h3>
            <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-6">
              Try adjusting your price range, ROI filter, or location keyword.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors shadow-md shadow-primary-600/30"
            >
              <FiRotateCcw size={15} />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProperties.map((property, index) => (
              <motion.div
                key={property.id}
                className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md hover:shadow-xl dark:shadow-black/20 border border-slate-200/90 dark:border-secondary-700/60 overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/properties/${property.id}`} className="flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm ${
                        property.status === 'Active Investment' 
                          ? 'bg-emerald-500 text-white' 
                          : property.status === 'Almost Funded'
                          ? 'bg-blue-600 text-white'
                          : 'bg-cyan-500 text-white'
                      }`}>
                        {property.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-1.5 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-secondary-500 dark:text-secondary-400 text-sm mb-4">
                      {property.location}
                    </p>

                    {/* Price and ROI */}
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100 dark:border-secondary-700/60">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-secondary-400 dark:text-secondary-500 mb-0.5">Investment Price</p>
                        <div className="flex items-center">
                          <FiDollarSign className="text-primary-600 dark:text-primary-400 text-base" />
                          <span className="font-bold text-lg text-secondary-900 dark:text-white">${property.price.usd.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center text-xs text-primary-600 dark:text-primary-400 font-medium">
                          <FaEthereum className="mr-1 text-[11px]" />
                          <span>{property.price.eth} ETH</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium uppercase tracking-wider text-secondary-400 dark:text-secondary-500 mb-0.5">Annual ROI</p>
                        <div className="flex items-center justify-end text-emerald-600 dark:text-emerald-400">
                          <FiTrendingUp className="mr-1 text-base" />
                          <span className="font-extrabold text-lg">{property.roi}</span>
                        </div>
                      </div>
                    </div>

                    {/* Investment Metrics */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-secondary-500 dark:text-secondary-400">Monthly Income</span>
                        <span className="font-semibold text-secondary-800 dark:text-secondary-200">{property.metrics.monthlyIncome}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-secondary-500 dark:text-secondary-400">Appreciation</span>
                        <span className="font-semibold text-secondary-800 dark:text-secondary-200">{property.metrics.appreciation}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-secondary-500 dark:text-secondary-400">Min Investment</span>
                        <span className="font-semibold text-secondary-800 dark:text-secondary-200">{property.metrics.minInvestment}</span>
                      </div>
                    </div>

                    {/* Funding Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-secondary-500 dark:text-secondary-400 font-medium">Funding Progress</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{property.metrics.funded}</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-secondary-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: property.metrics.funded }}
                        />
                      </div>
                    </div>

                    {/* Token Details */}
                    <div className="bg-slate-50 dark:bg-secondary-900/60 rounded-xl p-3.5 mb-5 border border-slate-100 dark:border-secondary-700/50">
                      <div className="flex justify-between text-xs">
                        <span className="text-secondary-500 dark:text-secondary-400 font-medium">Available Tokens</span>
                        <span className="font-bold text-secondary-800 dark:text-secondary-200">
                          {property.tokenDetails.availableTokens.toLocaleString()} / {property.tokenDetails.totalTokens.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs mt-1.5">
                        <span className="text-secondary-500 dark:text-secondary-400 font-medium">Token Price</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{property.tokenDetails.tokenPrice}</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <button className="w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-600/20 group-hover:shadow-primary-600/30">
                        <span>Invest Now</span>
                        <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Properties;