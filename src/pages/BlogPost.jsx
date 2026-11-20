import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiClock, FiCalendar, FiShare2, FiArrowLeft, FiTag } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function BlogPost() {

  const post = {
    title: 'The Future of Real Estate: Cryptocurrency Payments and Blockchain Technology',
    content: `
      <p class="mb-4">The real estate industry is undergoing a revolutionary transformation with the integration of cryptocurrency payments and blockchain technology. This shift is not just about adding another payment method – it's about fundamentally changing how property transactions are conducted, recorded, and verified.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">The Rise of Crypto in Real Estate</h2>
      <p class="mb-4">Cryptocurrency is increasingly being accepted in real estate transactions, offering several advantages:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Faster transaction processing</li>
        <li class="mb-2">Lower transaction fees</li>
        <li class="mb-2">Enhanced security through blockchain technology</li>
        <li class="mb-2">Access to global investment opportunities</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Blockchain's Impact on Property Transactions</h2>
      <p class="mb-4">Blockchain technology is revolutionizing property transactions in several ways:</p>
      <ol class="list-decimal pl-6 mb-4">
        <li class="mb-2">Smart Contracts: Automating and securing transaction processes</li>
        <li class="mb-2">Property Records: Creating immutable records of ownership</li>
        <li class="mb-2">Tokenization: Enabling fractional property ownership</li>
        <li class="mb-2">Transparency: Providing clear transaction histories</li>
      </ol>

      <h2 class="text-2xl font-semibold mt-8 mb-4">The Future Outlook</h2>
      <p class="mb-4">As we look to the future, several trends are emerging:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Increased adoption of cryptocurrency payments in real estate</li>
        <li class="mb-2">More platforms offering tokenized property investments</li>
        <li class="mb-2">Integration of smart contracts in property transactions</li>
        <li class="mb-2">Enhanced security measures for digital real estate transactions</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">The integration of cryptocurrency and blockchain in real estate is not just a trend – it's the future of property transactions. As these technologies continue to evolve, we can expect to see more innovative solutions that make real estate investment more accessible, secure, and efficient.</p>
    `,
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=1200&q=80',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Cryptocurrency',
    tags: ['Blockchain', 'Real Estate', 'Cryptocurrency', 'Investment']
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-secondary-900 text-secondary-900 dark:text-white transition-colors duration-200">
      {/* =========================================================================
          IMPROVED HERO SECTION: Single Blog Article Hero (Dual Theme)
          ========================================================================= */}
      <div className="relative min-h-[460px] sm:min-h-[500px] flex items-center overflow-hidden bg-slate-100 dark:bg-[#051124] text-secondary-900 dark:text-white border-b border-slate-200/80 dark:border-secondary-800 transition-colors duration-300">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-700"
          />
          {/* Dual-Theme Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-slate-100/60 dark:from-[#051124] dark:via-[#051124]/80 dark:to-[#051124]/60 transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/90 dark:from-[#051124]/90 dark:via-[#051124]/60 dark:to-[#051124]/90 transition-colors duration-300" />

          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-400/15 dark:bg-primary-500/15 rounded-full blur-3xl pointer-events-none transition-colors duration-300" />
        </div>

        <div className="relative container pt-12 pb-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {/* Top Navigation & Category Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md text-secondary-900 dark:text-white text-xs sm:text-sm font-semibold border border-slate-300/80 dark:border-white/20 shadow-sm transition-all"
              >
                <FiArrowLeft className="text-base text-primary-600 dark:text-primary-400" />
                <span>Back to Articles</span>
              </Link>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-600 dark:bg-primary-600/90 text-white backdrop-blur-md shadow-sm">
                <FiTag size={13} />
                <span>{post.category}</span>
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-secondary-900 dark:text-white drop-shadow-sm">
              {post.title}
            </h1>

            {/* Author Meta Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-slate-300/60 dark:border-white/15 text-xs sm:text-sm text-secondary-600 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-600/30 border border-primary-300 dark:border-primary-400/60 flex items-center justify-center font-bold text-primary-700 dark:text-white text-sm shadow-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-secondary-900 dark:text-white">{post.author}</p>
                  <p className="text-xs text-secondary-500 dark:text-slate-400">Contributor & Analyst</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-6 bg-slate-300 dark:bg-white/20" />

              <div className="flex items-center gap-1.5">
                <FiCalendar className="text-primary-600 dark:text-primary-400 text-base" />
                <span>Published on {post.date}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <FiClock className="text-primary-600 dark:text-primary-400 text-base" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 p-8 text-secondary-800 dark:text-secondary-200 leading-relaxed">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none [&>h2]:text-secondary-900 dark:[&>h2]:text-white [&>h2]:font-bold [&>p]:text-secondary-600 dark:[&>p]:text-secondary-300 [&>ul]:text-secondary-600 dark:[&>ul]:text-secondary-300 [&>ol]:text-secondary-600 dark:[&>ol]:text-secondary-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-6">
              {/* Share */}
              <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center text-secondary-900 dark:text-white">
                  <FiShare2 className="mr-2 text-primary-600 dark:text-primary-400" />
                  Share this article
                </h3>
                <div className="flex space-x-4">
                  <button className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                    <FaFacebook size={20} />
                  </button>
                  <button className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-500 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors">
                    <FaTwitter size={20} />
                  </button>
                  <button className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                    <FaLinkedin size={20} />
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center text-secondary-900 dark:text-white">
                  <FiTag className="mr-2 text-primary-600 dark:text-primary-400" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3.5 py-1.5 bg-slate-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-xl text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;