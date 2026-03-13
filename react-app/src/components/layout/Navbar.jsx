import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import ThemeToggle from '../common/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png';

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
      { name: 'Automobile', path: '/department/auto' },
      { name: 'Civil', path: '/department/civil' },
      { name: 'CSE', path: '/department/cse' },
      { name: 'ECE', path: '/department/ece' },
      { name: 'EEE', path: '/department/eee' },
      { name: 'IT', path: '/department/it' },
      { name: 'Mechanical', path: '/department/mech' },
      { name: 'Science & Humanities', path: '/department/science&humanities' },
    ],
  },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Placements', path: '/placement' },
  { name: 'Contact Us', path: '/contact' },
];

const DesktopDropdown = ({ link, location }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = location.pathname === link.path || (link.dropdown && link.dropdown.some(d => d.path === location.pathname));

  return (
    <div 
      className="relative flex items-center h-full py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={link.path !== '#' ? link.path : location.pathname}
        className={`text-[15px] font-semibold tracking-wide flex items-center gap-1.5 transition-colors duration-300 ${
          isActive || isHovered ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
        }`}
      >
        {link.name}
        {link.dropdown && (
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FaAngleDown className="text-[0.7rem] opacity-70" />
          </motion.div>
        )}
      </Link>

      {/* Underline Indicator */}
      <motion.div 
        className="absolute -bottom-1 left-0 h-[2px] bg-[var(--color-primary)] rounded-full"
        initial={{ width: isActive ? "100%" : "0%" }}
        animate={{ width: isHovered ? "100%" : (isActive ? "100%" : "0%") }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Dropdown Menu */}
      {link.dropdown && (
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full -left-6 pt-4 w-64 z-50 origin-top"
            >
              <div className="bg-[var(--color-surface)]/95 backdrop-blur-2xl border border-[var(--color-border)]/60 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden">
                {link.dropdown.map((dropLink) => {
                  const isDropActive = location.pathname === dropLink.path;
                  return (
                    <Link
                      key={dropLink.name}
                      to={dropLink.path}
                      className={`block px-5 py-3.5 text-sm transition-all duration-300 font-medium relative group ${
                        isDropActive ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/5' : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5'
                      }`}
                    >
                      <span className="relative z-10 flex items-center transform group-hover:translate-x-2 transition-transform duration-300">
                        {dropLink.name}
                      </span>
                      {isDropActive && (
                        <motion.div 
                          layoutId={`active-drop-${link.name}`}
                          className="absolute left-0 top-0 h-full w-1 bg-[var(--color-primary)]"
                        />
                      )}
                      <div className="absolute left-0 top-0 h-full w-1 bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change and prevent body scroll when open

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 w-full ${
        scrolled 
          ? 'bg-[var(--color-surface)]/80 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-2 border-b border-[var(--color-border)]/80' 
          : 'bg-[var(--color-surface)]/60 backdrop-blur-xl shadow-sm py-4 border-b border-[var(--color-border)]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group z-50 relative">
            <motion.div 
              initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              <img src={logo} alt="GCEE Logo" className="w-full h-full object-contain filter drop-shadow-md" />
            </motion.div>
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-extrabold text-2xl tracking-tight text-[var(--color-text-main)] transition-colors"
            >
              GCEE
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <DesktopDropdown key={link.name} link={link} location={location} />
            ))}
            
            {/* Theme Toggle in Navbar */}
            <div className="pl-4 border-l border-[var(--color-border)]/50 opacity-90 hover:opacity-100 transition-opacity">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-4 z-50 relative">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              type="button"
              className="p-2.5 rounded-full bg-[var(--color-background)]/50 backdrop-blur-md border border-[var(--color-border)]/50 text-[var(--color-text-main)] shadow-sm hover:bg-[var(--color-background)] transition-all"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Full Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)', transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-0 left-0 w-full h-[100dvh] bg-[var(--color-surface)]/98 backdrop-blur-3xl pt-28 px-6 overflow-y-auto pb-10 flex flex-col"
          >
            <div className="flex flex-col space-y-1 flex-1">
              {NAV_LINKS.map((link, idx) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                >
                  <div 
                    onClick={() => {
                      if (link.dropdown) {
                        toggleMobileDropdown(link.name);
                      } else if (link.path !== '#') {
                        setIsOpen(false);
                      }
                    }}
                    className={`flex justify-between items-center py-4 text-xl font-bold cursor-pointer border-b border-[var(--color-border)]/30 transition-colors ${
                      location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-main)] hover:text-[var(--color-primary)]'
                    }`}
                  >
                    {link.path !== '#' && !link.dropdown ? (
                      <Link to={link.path} className="w-full">{link.name}</Link>
                    ) : (
                      <span className="w-full">{link.name}</span>
                    )}
                    {link.dropdown && (
                      <motion.div
                        animate={{ rotate: openMobileDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaAngleDown className={`text-lg transition-colors ${openMobileDropdown === link.name ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'}`} />
                      </motion.div>
                    )}
                  </div>

                  <AnimatePresence>
                    {link.dropdown && openMobileDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 pl-4 space-y-1.5 border-l-2 border-[var(--color-primary)]/30 ml-2 mt-2">
                          {link.dropdown.map((dropLink, dropIdx) => (
                            <motion.div
                              key={dropLink.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: dropIdx * 0.05, duration: 0.3 }}
                            >
                              <Link
                                to={dropLink.path}
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                                  location.pathname === dropLink.path ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] ml-2' : 'text-[var(--color-text-muted)] hover:bg-[var(--color-background)] hover:text-[var(--color-text-main)] hover:translate-x-2'
                                }`}
                              >
                                {dropLink.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 text-center text-sm font-medium text-[var(--color-text-muted)] mb-8 opacity-60 flex flex-col items-center gap-2"
            >
              <div className="w-12 h-1 bg-[var(--color-border)] rounded-full mb-2"></div>
              <span>Government College of Engineering, Erode</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
