import { motion } from 'framer-motion';

function Privacy() {
  const sections = [
    {
      title: 'Introduction',
      content: `This Privacy Policy explains how RentVerse ("we," "us," or "our") collects, uses, and protects your personal information when you use our platform. We are committed to ensuring the privacy and security of your personal and financial information, including cryptocurrency transactions.`
    },
    {
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:    
      • Personal identification information (name, email address, phone number)
      • Government-issued ID for KYC verification
      • Cryptocurrency wallet addresses
      • Investment preferences and history
      • Communication records with our platform

      We also automatically collect certain information about your device and how you interact with our platform, including:

      • IP address and device identifiers
      • Browser type and operating system
      • Usage data and interaction with our services
      • Blockchain transaction data`
    },
    {
      title: 'How We Use Your Information',
      content: `We use the collected information for:

      • Processing your property investments and cryptocurrency transactions
      • Verifying your identity and preventing fraud
      • Providing customer support and responding to inquiries
      • Sending important updates about your investments
      • Improving our platform and services
      • Complying with legal and regulatory requirements

      All data processing is conducted in accordance with applicable laws and regulations.`
    },
    {
      title: 'Cryptocurrency Transaction Privacy',
      content: `While blockchain transactions are publicly visible, we implement additional privacy measures:

      • We never share your wallet addresses publicly
      • Transaction details are encrypted in our database
      • We use separate wallet addresses for each transaction
      • Smart contracts are audited for privacy vulnerabilities

      Please note that blockchain transactions are irreversible and publicly recorded on the respective networks.`
    },
    {
      title: 'Data Security',
      content: `We implement robust security measures to protect your information:

• End-to-end encryption for sensitive data
• Regular security audits and penetration testing
• Multi-factor authentication
• Secure cold storage for cryptocurrency assets
• Regular backup and disaster recovery procedures

Despite our best efforts, no method of transmission over the Internet is 100% secure.`
    },
    {
      title: 'Information Sharing',
      content: `We may share your information with:

• Property management partners for investment processing
• Identity verification services for KYC compliance
• Legal authorities when required by law
• Service providers who assist in platform operations

We never sell your personal information to third parties.`
    },
    {
      title: 'Your Rights',
      content: `You have the right to:

• Access your personal information
• Correct inaccurate information
• Request deletion of your data (where legally possible)
• Opt-out of marketing communications
• Export your data in a portable format

Contact our privacy team to exercise these rights.`
    },
    {
      title: 'Cookies and Tracking',
      content: `We use cookies and similar technologies to:

• Maintain your session security
• Remember your preferences
• Analyze platform usage
• Improve user experience

You can control cookie settings through your browser preferences.`
    },
    {
      title: 'Changes to Privacy Policy',
      content: `We may update this Privacy Policy periodically. Significant changes will be notified through:

• Email notifications
• Platform announcements
• Website updates

Continue using our platform after changes constitutes acceptance of the updated policy.`
    },
    {
      title: 'Contact Us',
      content: `For privacy-related inquiries:

Email: privacy@RentVerse.com
Address: 123 Privacy Street, Real City, RC 12345

We aim to respond to all inquiries within 48 hours.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-secondary-900 text-secondary-900 dark:text-white transition-colors duration-200">
      {/* Privacy Hero Banner */}
      <section className="relative bg-gradient-to-b from-slate-900 via-secondary-900 to-secondary-950 text-white py-16 sm:py-20 overflow-hidden border-b border-secondary-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl" />
        </div>
        <div className="relative container z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">Privacy Policy</h1>
            <p className="text-base sm:text-lg text-secondary-300 max-w-2xl mx-auto">
              Last updated: March 15, 2024 &bull; Your privacy and security are our top priorities.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-slate-200/90 dark:border-secondary-700/60 p-8">
            <div className="space-y-8 divide-y divide-slate-100 dark:divide-secondary-700/60">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={index > 0 ? "pt-8" : ""}
                >
                  <h2 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">{section.title}</h2>
                  <div className="text-secondary-600 dark:text-secondary-300 whitespace-pre-line leading-relaxed">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Privacy;