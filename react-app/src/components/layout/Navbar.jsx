import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import ThemeToggle from '../common/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    path: '#',
    dropdown: [
      { name: 'Overview', path: '/about' },
      { name: 'Gallery', path: '/gallery' },
    ],
  },
  {
    name: 'Academics',
    path: '#',
    dropdown: [
      { name: 'CSE', path: '/department/cse' },
      { name: 'ECE', path: '/department/ece' },
      { name: 'Mechanical', path: '/department/mech' },
      { name: 'Civil', path: '/department/civil' },
    ],
  },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Placements', path: '/placement' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-[var(--color-surface)]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2 border-b border-[var(--color-border)]' 
          : 'bg-[var(--color-surface)]/90 backdrop-blur-lg shadow-sm py-4 border-b border-[var(--color-border)]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-lg transition-all group-hover:scale-105`}>
              <span className="text-white font-extrabold text-2xl tracking-tighter">GC</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-[var(--color-text-main)] transition-colors">
              ERODE
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div key={link.name} className="relative group flex items-center">
                  <Link
                    to={link.path !== '#' ? link.path : location.pathname}
                    className={`text-[15px] font-semibold tracking-wide flex items-center gap-1 transition-colors duration-200 ${
                      isActive 
                        ? 'text-[var(--color-primary)]' 
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <FaAngleDown className="mt-0.5 text-[0.65rem] transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>

                  {/* Dropdown Indicator */}
                  <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></div>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className="absolute top-full -left-4 w-56 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-xl overflow-hidden py-2 transform origin-top -translate-y-2 group-hover:translate-y-0 transition-transform">
                        {link.dropdown.map((dropLink) => (
                          <Link
                            key={dropLink.name}
                            to={dropLink.path}
                            className="block px-5 py-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background)] hover:pl-6 transition-all font-medium"
                          >
                            {dropLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Theme Toggle in Navbar */}
            <div className="pl-4 border-l border-[var(--color-border)] opacity-80 hover:opacity-100 transition-opacity">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              type="button"
              className={`p-2 rounded-xl transition-colors ${
                scrolled ? 'text-[var(--color-text-main)] hover:bg-[var(--color-background)]' : 'text-[var(--color-text-main)] hover:bg-black/10'
              }`}
              aria-label="Menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-surface)] border-b border-[var(--color-border)] overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path !== '#' ? link.path : location.pathname}
                    onClick={() => !link.dropdown && setIsOpen(false)}
                    className="flex justify-between items-center px-4 py-3 rounded-xl text-md font-semibold text-[var(--color-text-main)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.name}
                    {link.dropdown && <FaAngleDown className="text-[var(--color-text-muted)]" />}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 mt-1 space-y-1 border-l-2 border-[var(--color-border)] ml-6">
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.name}
                          to={dropLink.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background)] transition-colors"
                        >
                          {dropLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
