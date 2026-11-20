import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiMaximize2, FiCalendar, FiTrendingUp, FiUsers, FiDollarSign, FiGrid } from 'react-icons/fi';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaLinkedin, FaEthereum, FaWallet } from 'react-icons/fa';

function PropertyDetail() {
  const { id } = useParams();

  const property = {
    id: parseInt(id),
    title: 'Modern Villa with Pool',
    price: {
      usd: 850000,
      eth: 425
    },
    location: 'Beverly Hills, CA',
    type: 'villa',
    roi: '7.2%',
    metrics: {
      totalInvestors: 142,
      funded: '89%',
      minInvestment: '$10',
      monthlyIncome: '$520',
      appreciation: '4.5%',
      rentalYield: '5.8%',
      totalReturn: '10.3%'
    },
    status: 'Active Investment',
    description: 'This stunning modern villa offers luxurious living spaces with high-end finishes throughout. The property has been tokenized for fractional ownership, allowing investors to participate in this premium real estate opportunity with as little as $10.',
    features: [
      'Swimming Pool',
      'Smart Home System',
      'Gourmet Kitchen',
      'Home Theater',
      'Wine Cellar',
      'Outdoor Kitchen',
      'Fire Pit',
      'Three-Car Garage'
    ],
    tokenDetails: {
      totalTokens: 85000,
      availableTokens: 9350,
      tokenPrice: '$10',
      tokenSymbol: 'VILLA425',
      contractAddress: '0x1234...5678',
      blockchain: 'Ethereum'
    },
    financials: {
      grossRent: '$8,500/month',
      netRent: '$7,225/month',
      expenses: {
        management: '8%',
        maintenance: '5%',
        insurance: '2%',
        property_tax: '1.2%'
      },
      projectedAppreciation: '4.5% annually'
    },
    yearBuilt: 2020,
    parkingSpaces: 3,
    lotSize: '0.5 acres',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'
    ],
    agent: {
      name: 'John Doe',
      phone: '+1 (555) 123-4567',
      email: 'john@realestate.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    }
  };

  const shareUrl = window.location.href;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-secondary-900 text-secondary-900 dark:text-white transition-colors duration-200">
      {/* Navigation */}
      <div className="bg-white dark:bg-secondary-800 border-b border-slate-200 dark:border-secondary-700/60 shadow-sm">
        <div className="container py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-secondary-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link>
            <span className="text-secondary-400">/</span>
            <Link to="/properties" className="text-secondary-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Properties</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-primary-600 dark:text-primary-400 font-medium">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="h-96 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {property.images.slice(1).map((image, index) => (
                  <div key={index} className="h-32 rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={image}
                      alt={`${property.title} - ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Property Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">Property Details</h2>
              <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">{property.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center space-x-2 text-secondary-700 dark:text-secondary-200 font-medium">
                  {/* <FiBed className="text-primary-600" /> */}
                  <span>{property.parkingSpaces} Parking</span>
                </div>
                <div className="flex items-center space-x-2 text-secondary-700 dark:text-secondary-200 font-medium">
                  <FiMaximize2 className="text-primary-600 dark:text-primary-400" />
                  <span>{property.lotSize}</span>
                </div>
                <div className="flex items-center space-x-2 text-secondary-700 dark:text-secondary-200 font-medium">
                  <FiCalendar className="text-primary-600 dark:text-primary-400" />
                  <span>Built {property.yearBuilt}</span>
                </div>
                <div className="flex items-center space-x-2 text-secondary-700 dark:text-secondary-200 font-medium">
                  <FiUsers className="text-primary-600 dark:text-primary-400" />
                  <span>{property.metrics.totalInvestors} Investors</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-secondary-700 dark:text-secondary-300">
                    <FiHome className="text-primary-600 dark:text-primary-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Token Details */}
              <h3 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">Token Information</h3>
              <div className="bg-slate-50 dark:bg-secondary-900/60 rounded-xl p-6 mb-8 border border-slate-100 dark:border-secondary-700/50">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-secondary-500 dark:text-secondary-400">Token Symbol</p>
                    <p className="font-bold text-secondary-900 dark:text-white mt-0.5">{property.tokenDetails.tokenSymbol}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-secondary-500 dark:text-secondary-400">Token Price</p>
                    <p className="font-bold text-primary-600 dark:text-primary-400 mt-0.5">{property.tokenDetails.tokenPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-secondary-500 dark:text-secondary-400">Available Tokens</p>
                    <p className="font-bold text-secondary-900 dark:text-white mt-0.5">{property.tokenDetails.availableTokens.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-secondary-500 dark:text-secondary-400">Total Supply</p>
                    <p className="font-bold text-secondary-900 dark:text-white mt-0.5">{property.tokenDetails.totalTokens.toLocaleString()}</p>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-slate-200/60 dark:border-secondary-700/40">
                    <p className="text-xs font-medium text-secondary-500 dark:text-secondary-400">Smart Contract</p>
                    <p className="font-mono text-xs text-secondary-700 dark:text-secondary-300 mt-0.5 break-all">{property.tokenDetails.contractAddress}</p>
                  </div>
                </div>
              </div>

              {/* Financial Details */}
              <h3 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">Financial Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-secondary-900/60 rounded-xl p-6 border border-slate-100 dark:border-secondary-700/50">
                  <h4 className="font-bold mb-4 text-secondary-900 dark:text-white">Rental Income</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-500 dark:text-secondary-400">Gross Rent</span>
                      <span className="font-bold text-secondary-900 dark:text-white">{property.financials.grossRent}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-500 dark:text-secondary-400">Net Rent</span>
                      <span className="font-bold text-secondary-900 dark:text-white">{property.financials.netRent}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-secondary-900/60 rounded-xl p-6 border border-slate-100 dark:border-secondary-700/50">
                  <h4 className="font-bold mb-4 text-secondary-900 dark:text-white">Expenses</h4>
                  <div className="space-y-2">
                    {Object.entries(property.financials.expenses).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-secondary-500 dark:text-secondary-400">{key.replace('_', ' ').charAt(0).toUpperCase() + key.slice(1)}</span>
                        <span className="font-bold text-secondary-900 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Investment Card */}
            <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 p-6">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100 dark:border-secondary-700/60">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-secondary-400 dark:text-secondary-500 mb-0.5">Investment Price</p>
                  <div className="flex items-center">
                    <FiDollarSign className="text-primary-600 dark:text-primary-400" />
                    <span className="text-2xl font-bold text-secondary-900 dark:text-white">${property.price.usd.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center text-xs text-primary-600 dark:text-primary-400 font-medium">
                    <FaEthereum className="mr-1" />
                    <span>{property.price.eth} ETH</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium uppercase tracking-wider text-secondary-400 dark:text-secondary-500 mb-0.5">Annual ROI</p>
                  <div className="flex items-center justify-end text-emerald-600 dark:text-emerald-400">
                    <FiTrendingUp className="mr-1" />
                    <span className="text-2xl font-extrabold">{property.roi}</span>
                  </div>
                </div>
              </div>

              {/* Investment Metrics */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary-500 dark:text-secondary-400">Rental Yield</span>
                  <span className="font-semibold text-secondary-800 dark:text-secondary-200">{property.metrics.rentalYield}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary-500 dark:text-secondary-400">Appreciation</span>
                  <span className="font-semibold text-secondary-800 dark:text-secondary-200">{property.metrics.appreciation}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary-500 dark:text-secondary-400">Total Return</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{property.metrics.totalReturn}</span>
                </div>
              </div>

              {/* Funding Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-secondary-500 dark:text-secondary-400 font-medium">Funding Progress</span>
                  <span className="font-bold text-primary-600 dark:text-primary-400">{property.metrics.funded}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-secondary-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full"
                    style={{ width: property.metrics.funded }}
                  />
                </div>
                <p className="text-xs text-secondary-500 dark:text-secondary-400 mt-2">
                  Min Investment: <span className="font-semibold text-secondary-800 dark:text-secondary-200">{property.metrics.minInvestment}</span>
                </p>
              </div>
              
              <Link
                to={`/property-3d`}
                className="w-full mb-3 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center bg-slate-100 dark:bg-secondary-700 hover:bg-slate-200 dark:hover:bg-secondary-600 text-secondary-800 dark:text-white">
                <FiGrid className="mr-2" />
                View 3D version
              </Link>

              <button className="w-full mb-4 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-600/20">
                <FaWallet className="mr-2" />
                Connect Wallet to Invest
              </button>
              
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-100 dark:border-secondary-700/60">
                <FacebookShareButton url={shareUrl}>
                  <FaFacebook className="text-2xl text-blue-600 hover:opacity-80 transition-opacity" />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                  <FaTwitter className="text-2xl text-sky-500 hover:opacity-80 transition-opacity" />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <FaLinkedin className="text-2xl text-blue-700 hover:opacity-80 transition-opacity" />
                </LinkedinShareButton>
              </div>
            </div>

            {/* Agent Card */}
            <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <h3 className="font-bold text-secondary-900 dark:text-white">{property.agent.name}</h3>
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-400">Investment Advisor</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-secondary-600 dark:text-secondary-300">
                  <span className="font-semibold text-secondary-800 dark:text-secondary-200">Phone:</span> {property.agent.phone}
                </p>
                <p className="text-secondary-600 dark:text-secondary-300">
                  <span className="font-semibold text-secondary-800 dark:text-secondary-200">Email:</span> {property.agent.email}
                </p>
              </div>
              <button className="btn-secondary w-full mt-4 rounded-xl">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;