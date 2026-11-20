import { motion } from 'framer-motion';
import { FiUsers, FiDollarSign, FiGlobe, FiShield, FiBriefcase, FiAward } from 'react-icons/fi';
import { FaBitcoin, FaEthereum, FaHandshake } from 'react-icons/fa';
import { SiChainlink } from 'react-icons/si';
import MehdiRezakhani_Pic from '../assets/MehdiRezakhani2.jpeg'

function About() {
  const stats = [
    {
      value: '$250M+',
      label: 'Property Transactions',
      icon: FiDollarSign
    },
    {
      value: '15,000+',
      label: 'Active Investors',
      icon: FiUsers
    },
    {
      value: '45+',
      label: 'Countries Served',
      icon: FiGlobe
    },
    {
      value: '100%',
      label: 'Secure Transactions',
      icon: FiShield
    }
  ];

  const team = [
    {
      name: 'Alessandro Santos Alves',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet debiti'
    },
    {
      name: 'Roman Cole',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet debiti'
    },
    {
      name: 'Mehdi Rezakhani',
      role: 'Web & Mobile Developer',
      image: MehdiRezakhani_Pic,
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet debiti'
    },
    {
      name: 'Lorem Ipsum',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet debiti'
    }
  ];

  const partners = [
    {
      name: 'Bitcoin',
      icon: FaBitcoin,
      color: 'text-orange-500'
    },
    {
      name: 'Ethereum',
      icon: FaEthereum,
      color: 'text-purple-500'
    },
    {
      name: 'Chainlink',
      icon: SiChainlink,
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-secondary-900 text-secondary-900 dark:text-white transition-colors duration-200">
      {/* =========================================================================
          HERO SECTION: Dual-Theme (Light & Dark) Hero for About Page
          ========================================================================= */}
      <section className="relative min-h-[380px] sm:min-h-[420px] flex items-center justify-center overflow-hidden bg-slate-100 dark:bg-[#051124] border-b border-slate-200/80 dark:border-secondary-800 transition-colors duration-300">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt="About Hero Background"
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
              <FiGlobe className="text-primary-600 dark:text-primary-400" />
              <span>About RentVerse</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-secondary-900 dark:text-white leading-tight">
              Revolutionizing Real Estate Investment
            </h1>

            <p className="text-base sm:text-lg text-secondary-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We're bridging the gap between traditional real estate and cryptocurrency, 
              making property investment accessible, secure, and transparent through blockchain technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl p-6 text-center shadow-md border border-slate-200/90 dark:border-secondary-700/60 hover:-translate-y-1 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
                <div className="text-3xl font-extrabold text-secondary-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-secondary-600 dark:text-secondary-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-secondary-800/40 border-y border-slate-200/60 dark:border-secondary-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold text-secondary-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
              To democratize real estate investment by leveraging blockchain technology, 
              making property ownership accessible to investors worldwide through 
              fractional ownership and cryptocurrency transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-800 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">Accessibility</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">
                Making real estate investment available to everyone through fractional ownership 
                and cryptocurrency payments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-800 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FiShield className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">Security</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">
                Ensuring secure transactions through blockchain technology and smart contracts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-800 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">Global Reach</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">
                Connecting property investors and opportunities worldwide through our platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-secondary-900 dark:text-white text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3 text-sm">{member.role}</p>
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white dark:bg-secondary-800/40 border-y border-slate-200/60 dark:border-secondary-800">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-secondary-900 dark:text-white text-center mb-12">Supported Cryptocurrencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-secondary-800 p-6 rounded-2xl border border-slate-200/80 dark:border-secondary-700/60 shadow-sm text-center"
              >
                <partner.icon className={`w-16 h-16 mx-auto mb-4 ${partner.color}`} />
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white">{partner.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-secondary-900 dark:text-white text-center mb-12">Recognition & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-secondary-800 p-6 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 text-center hover:-translate-y-1 transition-all duration-300"
            >
              <FiAward className="w-12 h-12 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">Best Blockchain Innovation</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Real Estate Tech Awards 2024</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-secondary-800 p-6 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 text-center hover:-translate-y-1 transition-all duration-300"
            >
              <FiBriefcase className="w-12 h-12 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">Fastest Growing PropTech</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Forbes Innovation 2024</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-secondary-800 p-6 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 text-center hover:-translate-y-1 transition-all duration-300"
            >
              <FiShield className="w-12 h-12 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">Most Secure Platform</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Blockchain Security Excellence 2024</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;