import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useWallet } from '../../hooks/useWallet';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const { connectWallet } = useWallet();

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-sm border-b border-secondary-200/60 dark:border-secondary-800/80 transition-colors duration-200">
      <div className="container">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <svg width="30" height="35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="20" r="10" stroke="#0682ff"/>
                  <circle cx="15" cy="20" r="6" stroke="#0682ff" strokeWidth="3"/>
              </svg>  
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-600 mt-1.5">RentVerse</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-secondary-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}

            <button onClick={() => setDarkMode(!darkMode)}
              className="dark:text-white">
              {darkMode ? (
                <FiSun size={20} />
              ) : (
                <FiMoon size={20} />
              )}
            </button>

            <button
              className="btn"
              onClick={connectWallet}
            >
              Connect
            </button>
          </div>

          {/* Mobile header controls: Theme toggle + Hamburger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-secondary-600 dark:text-secondary-300 hover:bg-slate-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <FiSun size={20} className="text-amber-400" />
              ) : (
                <FiMoon size={20} className="text-secondary-600" />
              )}
            </button>

            <button
              type="button"
              className="p-2.5 rounded-xl text-secondary-600 dark:text-secondary-300 hover:bg-slate-100 dark:hover:bg-secondary-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200/80 dark:border-secondary-800/80 bg-white/98 dark:bg-secondary-900/98 backdrop-blur-lg">
            <div className="py-3 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2.5 rounded-xl text-base font-semibold text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-secondary-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Theme Toggle row inside menu drawer */}
              {/* <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-secondary-700 dark:text-secondary-200 hover:bg-slate-100 dark:hover:bg-secondary-800 transition-colors"
              >
                <span>Theme</span>
                <span className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400">
                  {darkMode ? (
                    <>
                      <FiSun size={18} className="text-amber-400" />
                      <span>Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <FiMoon size={18} className="text-secondary-600" />
                      <span>Light Mode</span>
                    </>
                  )}
                </span>
              </button> */}

              <div className="pt-2 px-1">
                <button
                  className="w-full py-3 px-4 rounded-xl font-bold text-center text-white bg-primary-600 hover:bg-primary-700 shadow-md shadow-primary-600/30 transition-all duration-200"
                  onClick={() => {
                    connectWallet();
                    setIsOpen(false);
                  }}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;