import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../../assets/images/logo.png';
const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface)] text-[var(--color-text-muted)] pt-16 pb-0 mt-0 border-t border-[var(--color-border)] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-6 relative inline-flex items-center gap-3">
              <img src={logo} alt="GCEE Logo" className="w-12 h-12 drop-shadow-md" />
              GCEE
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></span>
            </h3>
            <p className="text-sm leading-relaxed">
              Government College of Engineering, Erode, formerly IRTT, is a premier educational institution established in 1984 under the auspices of the Institute of Road Transport, Government of Tamil Nadu.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com/gceerode" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-primary)] hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                <FaFacebookF size={16} />
              </a>
              <a href="https://twitter.com/gceerode" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-secondary)] hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                <FaTwitter size={16} />
              </a>
              <a href="https://linkedin.com/school/gceerode" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:pl-8"
          >
            <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Admissions', path: '/admissions' },
                { name: 'Departments', path: '/department' },
                { name: 'Facilities', path: '/facilities' },
                { name: 'Placements', path: '/placement' },
                { name: 'Alumni', path: '/alumni' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[var(--color-primary)] opacity-50 group-hover:opacity-100 transition-transform group-hover:translate-x-1">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-6 relative inline-block">
              Important Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Anna University', url: 'https://www.annauniv.edu/' },
                { name: 'AICTE', url: 'https://www.aicte-india.org/' },
                { name: 'DOTE', url: 'http://www.tndte.gov.in/' },
                { name: 'NPTEL', url: 'https://nptel.ac.in/' },
                { name: 'Anti-Ragging', path: '/anti-ragging' },
              ].map((link) => (
                <li key={link.name}>
                  {link.url ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-[var(--color-primary)] opacity-50 group-hover:opacity-100 transition-transform group-hover:translate-x-1">→</span>
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-[var(--color-primary)] opacity-50 group-hover:opacity-100 transition-transform group-hover:translate-x-1">→</span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[var(--color-primary)] mt-1 flex-shrink-0" size={16} />
                <span className="text-sm">
                  Government College of Engineering, Chithode, Erode - 638 316.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[var(--color-primary)] flex-shrink-0" size={14} />
                <a href="tel:04242533279" className="text-sm hover:text-[var(--color-primary)]">
                  0424 - 2533279
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--color-primary)] flex-shrink-0" size={14} />
                <a href="mailto:principal@gcee.ac.in" className="text-sm hover:text-[var(--color-primary)]">
                  principal@gcee.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaGlobe className="text-[var(--color-primary)] flex-shrink-0" size={14} />
                <a href="https://www.gcee.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--color-primary)]">
                  www.gcee.ac.in
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[var(--color-background)] py-6 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>&copy; {new Date().getFullYear()} Government College of Engineering, Erode.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-[var(--color-primary)]">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[var(--color-primary)]">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;