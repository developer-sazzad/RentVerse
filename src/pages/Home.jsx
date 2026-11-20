import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowRight,
  FiUser,
  FiClock,
  FiChevronDown,
  FiChevronUp,
  FiInfo,
  FiDollarSign,
  FiTrendingUp,
} from 'react-icons/fi';
import {
  FaWallet,
  FaStore,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaChartLine,
  FaLock,
  FaUserCog,
  FaCoins,
  FaDiscord,
  FaEthereum,
} from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';
import { useWallet } from '../hooks/useWallet';

function Home() {
  const [openSections, setOpenSections] = useState({});
  const { connectWallet } = useWallet();

  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Villa with Pool',
      price: {
        usd: 850000,
        eth: 425,
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
        appreciation: '4.5%',
      },
      status: 'Active Investment',
      features: ['Pool', 'Smart Home', 'Solar Panels'],
      tokenDetails: {
        totalTokens: 85000,
        availableTokens: 9350,
        tokenPrice: '$10',
      },
    },
    {
      id: 2,
      title: 'Luxury Penthouse',
      price: {
        usd: 1200000,
        eth: 600,
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
        appreciation: '5.2%',
      },
      status: 'Almost Funded',
      features: ['Doorman', 'Gym', 'Terrace'],
      tokenDetails: {
        totalTokens: 120000,
        availableTokens: 6000,
        tokenPrice: '$10',
      },
    },
    {
      id: 3,
      title: 'Waterfront Estate',
      price: {
        usd: 2100000,
        eth: 1050,
      },
      location: 'Miami Beach, FL',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      type: 'house',
      roi: '7.5%',
      metrics: {
        totalInvestors: 89,
        funded: '45%',
        minInvestment: '$10',
        monthlyIncome: '$1200',
        appreciation: '6.1%',
      },
      status: 'New Listing',
      features: ['Waterfront', 'Dock', 'Wine Cellar'],
      tokenDetails: {
        totalTokens: 210000,
        availableTokens: 115500,
        tokenPrice: '$10',
      },
    },
  ];

  const advantages = [
    {
      icon: FaChartLine,
      title: 'Profitability',
      description:
        'Target average annual returns of 7% through strategic property investments and efficient management.',
    },
    {
      icon: FaExchangeAlt,
      title: 'Liquidity',
      description:
        'Trade your property NFTs anytime on our marketplace, providing unprecedented real estate liquidity.',
    },
    {
      icon: FaLock,
      title: 'No Hidden Fees',
      description:
        'Transparent pricing with no entry, exit, or capital gains fees. What you see is what you get.',
    },
    {
      icon: FaUserCog,
      title: 'Hassle-Free',
      description:
        'Anytime location, all property management, from maintenance to tenant relations handled for you.',
    },
  ];

  const investmentSteps = [
    {
      icon: FaWallet,
      title: 'Connect Wallet',
      description:
        'Connect your cryptocurrency wallet to RentVerse to start investing.',
    },
    {
      icon: FaStore,
      title: 'Choose Property',
      description:
        'Browse our marketplace and select properties that match your investment goals.',
    },
    {
      icon: FaMoneyBillWave,
      title: 'Receive Returns',
      description:
        'Collect monthly rental returns directly to your connected wallet.',
    },
    {
      icon: FaExchangeAlt,
      title: 'Flexible Exit',
      description:
        'Sell your property NFTs whenever you want through our marketplace.',
    },
  ];

  const howItWorks = [
    {
      icon: FaCoins,
      title: 'Tokenization',
      description:
        'Properties are divided into $10 NFT tokens, making real estate investment accessible to everyone.',
    },
    {
      icon: SiEthereum,
      title: 'Purchase NFTs',
      description:
        'Buy property NFTs using cryptocurrency, becoming a fractional owner of the property.',
    },
    {
      icon: FaMoneyBillWave,
      title: 'Monthly Returns',
      description:
        'Receive your share of rental income directly to your wallet each month.',
    },
    {
      icon: FaExchangeAlt,
      title: 'Flexible Trading',
      description:
        'List or trade your property NFTs on our marketplace at any time.',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'crypto', name: 'Cryptocurrency' },
    { id: 'investment', name: 'Investment' },
    { id: 'property', name: 'Property' },
    { id: 'technology', name: 'Technology' },
    { id: 'market', name: 'Market Analysis' },
  ];

  const blogPosts = [
    {
      id: 1,
      title:
        'The Future of Real Estate: Cryptocurrency Payments and Blockchain Technology',
      slug: 'future-real-estate-crypto-payments',
      excerpt:
        'Explore how cryptocurrency and blockchain are revolutionizing property transactions and investment opportunities.',
      image:
        'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&q=80',
      category: 'crypto',
      author: 'Sarah Johnson',
      date: '2024-03-15',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Understanding Tokenized Real Estate Investment',
      slug: 'understanding-tokenized-real-estate',
      excerpt:
        "A comprehensive guide to property tokenization and how it's making real estate investment more accessible.",
      image:
        'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&q=80',
      category: 'investment',
      author: 'Michael Chen',
      date: '2024-03-12',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Smart Contracts in Real Estate',
      slug: 'smart-contracts-real-estate',
      excerpt:
        'How smart contracts are streamlining property transactions and reducing costs.',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      category: 'technology',
      author: 'David Rodriguez',
      date: '2024-03-10',
      readTime: '6 min read',
    },
  ];

  const faqSections = [
    {
      title: 'General Information',
      questions: [
        {
          question: 'What is RentVerse?',
          answer:
            'RentVerse is an innovative investment project dedicated to real estate. We allow clients to invest as little as $10 in investment properties, with the aim of building up regular income and/or savings.',
        },
        {
          question:
            'I want to buy NFTs, what payment methods are accepted?',
          answer:
            'You can use various payment methods such as Metamask, Phantom wallet, OKX wallet, Trust wallet, etc.',
        },
        {
          question: 'What is the marketplace, or secondary market?',
          answer:
            'The RentVerse Marketplace is our platform that allows RentVerse community members to buy and sell NFTs among themselves. It is the equivalent of a secondary market where investors can buy and sell NFTs among themselves. We may also cooperate with other marketplaces to allow anyone to choose their preferred marketplace.',
        },
        {
          question:
            'I sell or buy NFTs during the month. Who received the rental income for the current month?',
          answer:
            'The rental income is paid to the investor who owns the NFTs on the day the royalties are paid.',
        },
        {
          question: 'Are transactions on the platform secure?',
          answer:
            'RentVerse uses the most advanced technical means to ensure the confidentiality and security of transactions on the platform.',
        },
      ],
    },
  ];

  const toggleSection = (sectionTitle, questionIndex) => {
    const key = `${sectionTitle}-${questionIndex}`;
    setOpenSections(prev => (prev[key] ? {} : { [key]: true }));
  };

  return (
    <div className="relative overflow-hidden bg-secondary-50 dark:bg-secondary-900 transition-colors duration-200">
      {/* =========================================================================
          1. HERO SECTION: Dual-Theme (Light & Dark) Luxury Real Estate Experience
          ========================================================================= */}
      <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-secondary-100 dark:bg-[#051124] transition-colors duration-300">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
            alt="Hero background"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-700"
          />

          {/* Theme-Adaptive Multilayer Overlays:
              - In Light mode: Clean, crisp, luminous overlay showing luxury villa architecture without milky washout
              - In Dark mode: Deep luxury dark navy gradient letting warm lights and architectural details shine through */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-slate-50/90 dark:from-[#051124]/90 dark:via-[#051124]/75 dark:to-[#051124]/95 transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70 dark:from-[#051124]/85 dark:via-transparent dark:to-[#051124]/85 transition-colors duration-300" />

          {/* Ambient Glow Accents (Theme-Adaptive) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-400/15 dark:bg-primary-600/20 rounded-full blur-3xl pointer-events-none transition-colors duration-300" />
          <div className="absolute -top-24 left-1/4 w-72 h-72 bg-sky-300/20 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none transition-colors duration-300" />
        </div>

        {/* Hero Content (Centered with Light & Dark Typography, optimized top padding) */}
        <div className="relative container pt-10 sm:pt-14 lg:pt-14 pb-16 sm:pb-20 lg:pb-22 z-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary-900 dark:text-white leading-[1.15] text-center drop-shadow-sm transition-colors duration-200"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Invest and Trade in <br className="hidden sm:inline" />
              Real Estate with{' '}
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-blue-700 dark:from-blue-400 dark:via-primary-400 dark:to-sky-300 bg-clip-text text-transparent drop-shadow-sm transition-all duration-200">
                Cryptocurrency
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg lg:text-xl text-secondary-700 dark:text-blue-100/90 font-medium sm:font-normal leading-relaxed max-w-2xl mx-auto text-center drop-shadow-sm transition-colors duration-200"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Own fractional shares of premium properties through NFTs.{' '}
              <br className="hidden sm:inline" />
              Start investing with as little as $10.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/properties"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 via-primary-500 to-blue-600 hover:from-primary-500 hover:to-blue-500 shadow-lg shadow-primary-600/30 dark:shadow-primary-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Start Investing</span>
                <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl text-secondary-800 dark:text-white bg-white/90 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md border border-secondary-300 dark:border-white/20 hover:border-secondary-400 dark:hover:border-white/30 shadow-md transition-all duration-200"
              >
                <FiInfo className="text-base text-primary-600 dark:text-blue-300 transition-colors duration-200" />
                <span>Learn More</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Organic Curved Wave Divider matching the reference design */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-10">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            className="w-full h-12 sm:h-16 md:h-20 lg:h-24 text-secondary-50 dark:text-secondary-900 transition-colors duration-200"
            preserveAspectRatio="none"
          >
            <path
              d="M0,58 C240,65 420,12 720,14 C1040,16 1260,55 1440,46 L1440,100 L0,100 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* =========================================================================
          2. START INVESTING IN MINUTES (4 Connected Steps)
          ========================================================================= */}
      <section id="investment-steps" className="py-14 sm:py-16 lg:py-[80px]">
        <div className="container relative">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-secondary-900 dark:text-white">
              Start Investing in Minutes
            </h2>
            <p className="mt-3 text-base sm:text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Your journey to crypto-powered real estate investment
            </p>
          </div>

          <div className="relative">
            {/* Subtle Connected Line Behind Steps (Large Screens) */}
            <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 border-t-2 border-dashed border-primary-200 dark:border-secondary-700 -translate-y-8 z-0 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {investmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-secondary-800 rounded-3xl p-7 sm:p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(15,23,42,0.12)] border border-slate-200/90 dark:border-secondary-700/70 hover:border-primary-400/50 dark:hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950/60 border border-primary-100 dark:border-primary-800/40 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary-600 dark:group-hover:bg-primary-500 transition-all duration-300 shadow-sm">
                    <step.icon className="text-2xl text-primary-600 dark:text-primary-400 group-hover:!text-white transition-colors duration-300" />
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Step {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. HOW RENTVERSE WORKS: Deep Dark Navy Glassmorphic Section
          ========================================================================= */}
      <section
        id="how-it-works"
        className="relative bg-gradient-to-b from-[#071329] via-[#091b38] to-[#061021] text-white py-14 sm:py-16 lg:py-[80px] overflow-hidden"
      >
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary-900/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative container z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              How RentVerse Works
            </h2>
            <p className="mt-3 text-base sm:text-lg text-primary-200/80 max-w-2xl mx-auto">
              Understanding our tokenized real estate platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-primary-400/50 hover:bg-white/[0.08] p-7 sm:p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-1.5 group shadow-xl shadow-black/20 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-5 text-white shadow-lg shadow-primary-500/30 group-hover:scale-110 group-hover:shadow-primary-500/50 transition-all duration-300">
                  <item.icon className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300/90 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FEATURED INVESTMENT OPPORTUNITIES: Enhanced Properties Page Cards
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-[80px] bg-gradient-to-b from-slate-100/80 via-blue-50/20 to-slate-100/80 dark:from-secondary-900/60 dark:via-secondary-900/40 dark:to-secondary-900/60 border-y border-slate-200/70 dark:border-secondary-800 transition-colors duration-200">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-secondary-900 dark:text-white">
              Featured Investment Opportunities
            </h2>
            <p className="mt-3 text-base sm:text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Curated properties with verified returns and immediate tokenization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md hover:shadow-xl dark:shadow-black/20 border border-slate-200/90 dark:border-secondary-700/60 overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link to={`/properties/${property.id}`} className="flex flex-col h-full">
                  {/* Property Image & Status Badge */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Floating Status Pill */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm ${
                          property.status === 'Active Investment'
                            ? 'bg-emerald-500 text-white'
                            : property.status === 'Almost Funded'
                            ? 'bg-blue-600 text-white'
                            : 'bg-cyan-500 text-white'
                        }`}
                      >
                        {property.status}
                      </span>
                    </div>
                  </div>

                  {/* Card Body matching Properties.jsx structure */}
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
                        <p className="text-xs font-medium uppercase tracking-wider text-secondary-400 dark:text-secondary-500 mb-0.5">
                          Investment Price
                        </p>
                        <div className="flex items-center">
                          <FiDollarSign className="text-primary-600 dark:text-primary-400 text-base" />
                          <span className="font-bold text-lg text-secondary-900 dark:text-white">
                            ${property.price.usd.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center text-xs text-primary-600 dark:text-primary-400 font-medium">
                          <FaEthereum className="mr-1 text-[11px]" />
                          <span>{property.price.eth} ETH</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium uppercase tracking-wider text-secondary-400 dark:text-secondary-500 mb-0.5">
                          Annual ROI
                        </p>
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
        </div>
      </section>

      {/* =========================================================================
          5. WHY CHOOSE RENTVERSE
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-[80px]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-secondary-900 dark:text-white">
              Why Choose RentVerse
            </h2>
            <p className="mt-3 text-base sm:text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Experience the future of real estate investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-secondary-800 rounded-3xl p-7 sm:p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(15,23,42,0.12)] border border-slate-200/90 dark:border-secondary-700/70 hover:border-primary-400/50 dark:hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 text-center group flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950/60 border border-primary-100 dark:border-primary-800/40 flex items-center justify-center mb-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:bg-primary-600 dark:group-hover:bg-primary-500 group-hover:!text-white transition-all duration-300 shadow-sm">
                  <advantage.icon className="text-2xl group-hover:!text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. READY TO START INVESTING? (CTA Banner with Graphic)
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-[80px]">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-700 via-primary-600 to-blue-600 p-8 sm:p-12 lg:p-14 text-white shadow-xl shadow-primary-900/20">
            {/* Decorative Background Chart Watermark */}
            <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none transform translate-x-10 translate-y-6 hidden sm:block">
              <svg
                width="280"
                height="190"
                viewBox="0 0 280 190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="20" y="120" width="36" height="70" rx="6" fill="white" />
                <rect x="75" y="85" width="36" height="105" rx="6" fill="white" />
                <rect x="130" y="55" width="36" height="135" rx="6" fill="white" />
                <rect x="185" y="20" width="36" height="170" rx="6" fill="white" />
                <path
                  d="M38 105 L93 70 L148 40 L203 10"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M183 10 H203 V30"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Ready to Start Investing?
              </h2>
              <p className="mt-3 text-base sm:text-lg text-blue-100 max-w-xl leading-relaxed">
                Join thousands of investors already earning passive income through
                tokenized real estate.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/properties"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl text-primary-700 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Browse Properties
                </Link>
                <button
                  type="button"
                  onClick={connectWallet}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl text-white bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-sm transition-all duration-200"
                >
                  <FaWallet className="text-base" />
                  <span>Connect Wallet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. LATEST INSIGHTS (Blog Section)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-[80px] bg-gradient-to-b from-slate-100/80 via-blue-50/20 to-slate-100/80 dark:from-secondary-900/60 dark:via-secondary-900/40 dark:to-secondary-900/60 border-y border-slate-200/70 dark:border-secondary-800 transition-colors duration-200">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-secondary-900 dark:text-white">
              Latest Insights
            </h2>
            <p className="mt-3 text-base sm:text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Stay informed with our latest articles and market analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white dark:bg-secondary-800 rounded-3xl shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(15,23,42,0.12)] border border-slate-200/90 dark:border-secondary-700/60 hover:border-primary-400/50 dark:hover:border-primary-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-secondary-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4 backdrop-blur-md bg-white/95 dark:bg-secondary-900/90 px-3.5 py-1 rounded-full text-xs font-bold text-primary-600 dark:text-primary-400 shadow-md tracking-wide">
                      {categories.find((c) => c.id === post.category)?.name}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-400 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-secondary-700/60 flex items-center justify-between text-xs text-secondary-500 dark:text-secondary-400">
                      <div className="flex items-center">
                        <FiUser className="mr-1.5 text-primary-500" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FiClock className="mr-1.5 text-secondary-400" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-[80px]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-secondary-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-base sm:text-lg text-secondary-600 dark:text-secondary-400">
                Find answers to common questions about our platform, cryptocurrency
                payments, and real estate investment.
              </p>
            </div>

            <div className="space-y-4">
              {faqSections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="bg-white dark:bg-secondary-800 rounded-3xl shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] border border-slate-200/90 dark:border-secondary-700/60 divide-y divide-slate-100 dark:divide-secondary-700/60 overflow-hidden"
                >
                  {section.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="p-6 sm:p-7">
                      <button
                        type="button"
                        className="w-full flex justify-between items-center text-left gap-4 group"
                        onClick={() =>
                          toggleSection(section.title, questionIndex)
                        }
                      >
                        <span className="font-semibold text-secondary-900 dark:text-white text-base group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {item.question}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-secondary-700/80 flex items-center justify-center text-secondary-500 dark:text-secondary-300 flex-shrink-0 group-hover:bg-primary-50 dark:group-hover:bg-primary-950/60 group-hover:text-primary-600 transition-colors">
                          {openSections[`${section.title}-${questionIndex}`] ? (
                            <FiChevronUp className="text-lg" />
                          ) : (
                            <FiChevronDown className="text-lg" />
                          )}
                        </span>
                      </button>
                      <AnimatePresence>
                        {openSections[`${section.title}-${questionIndex}`] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-sm sm:text-base text-secondary-600 dark:text-secondary-300 leading-relaxed pt-3 border-t border-slate-100 dark:border-secondary-700/40">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. JOIN OUR COMMUNITY: Deep Navy Container with Discord Card
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-[80px]">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1f3a] via-[#0d2a4f] to-[#071326] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
            {/* Subtle Ambient Blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-12 items-center">
              {/* Left Column: Community Info */}
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Join Our Community
                </h2>
                <p className="mt-3 text-base sm:text-lg text-primary-100/90 max-w-xl leading-relaxed">
                  Connect with other crypto real estate investors, share insights,
                  and get early access to new properties.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary-700/70 border border-primary-500/30 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-bold text-white">
                        10,000+ Members
                      </h3>
                      <p className="mt-1 text-sm text-primary-200/80">
                        Join a growing community of crypto-savvy real estate
                        investors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary-700/70 border border-primary-500/30 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-bold text-white">
                        Weekly Events
                      </h3>
                      <p className="mt-1 text-sm text-primary-200/80">
                        Educational webinars, market updates, and networking
                        sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Discord Card */}
              <div className="mt-10 lg:mt-0 lg:col-span-5 flex justify-center">
                <div className="bg-white dark:bg-secondary-800 rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center border border-slate-200 dark:border-secondary-700/80">
                  <h3 className="text-2xl font-extrabold text-secondary-900 dark:text-white">
                    Join Discord
                  </h3>
                  <p className="mt-2 text-sm text-secondary-500 dark:text-secondary-400">
                    Get instant access to our community and start connecting with
                    other investors
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://discord.gg/RentVerse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-[#5865F2] hover:bg-[#4752C4] shadow-lg shadow-[#5865F2]/30 hover:shadow-[#5865F2]/50 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <FaDiscord className="text-xl" />
                      <span>Join Now</span>
                    </a>
                  </div>
                  <p className="mt-4 text-xs text-secondary-500 dark:text-secondary-400">
                    Already a member?{' '}
                    <a
                      href="https://discord.gg/RentVerse"
                      className="text-[#5865F2] hover:underline font-semibold"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
