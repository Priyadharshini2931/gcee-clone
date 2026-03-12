import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-300 pt-20 mt-auto border-t border-slate-900 border-opacity-50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 relative inline-block">
              GCE ERODE
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[var(--color-primary)] rounded-full"></span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Government College of Engineering, Erode, formerly IRTT, is a premier educational institution established in 1984 under the auspices of the Institute of Road Transport, Government of Tamil Nadu.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com/gceerode" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all hover:-translate-y-1 shadow-md">
                <FaFacebookF size={16} />
              </a>
              <a href="https://twitter.com/gceerode" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[var(--color-secondary)] hover:text-white transition-all hover:-translate-y-1 shadow-md">
                <FaTwitter size={16} />
              </a>
              <a href="https://linkedin.com/school/gceerode" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 shadow-md">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[var(--color-primary)] rounded-full"></span>
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
                    className="text-sm hover:text-[var(--color-secondary)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[var(--color-primary)] transition-transform group-hover:translate-x-1">→</span> 
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Important Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[var(--color-primary)] rounded-full"></span>
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
                      className="text-sm hover:text-[var(--color-secondary)] transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-[var(--color-primary)] transition-transform group-hover:translate-x-1">→</span> 
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.path}
                      className="text-sm hover:text-[var(--color-secondary)] transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-[var(--color-primary)] transition-transform group-hover:translate-x-1">→</span> 
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[var(--color-primary)] rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-800/50 transition-colors cursor-default">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/20 flex flex-shrink-0 items-center justify-center mt-1">
                  <FaMapMarkerAlt className="text-[var(--color-secondary)]" size={18} />
                </div>
                <span className="text-sm leading-relaxed text-slate-300">
                  Government College of Engineering,<br />
                  Chithode, Erode - 638 316,<br />
                  Tamil Nadu, India.
                </span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/20 flex flex-shrink-0 items-center justify-center">
                  <FaPhoneAlt className="text-[var(--color-secondary)]" size={16} />
                </div>
                <a href="tel:04242533279" className="text-sm text-slate-300 hover:text-white transition-colors">
                  0424 - 2533279, 2533379
                </a>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/20 flex flex-shrink-0 items-center justify-center">
                  <FaEnvelope className="text-[var(--color-secondary)]" size={16} />
                </div>
                <a href="mailto:principal@gcee.ac.in" className="text-sm text-slate-300 hover:text-[var(--color-secondary)] transition-colors">
                  principal@gcee.ac.in
                </a>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/20 flex flex-shrink-0 items-center justify-center">
                  <FaGlobe className="text-[var(--color-secondary)]" size={16} />
                </div>
                <a href="https://www.gcee.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-[var(--color-secondary)] transition-colors">
                  www.gcee.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black py-6 mt-4 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Government College of Engineering, Erode.</p>
          <div className="flex gap-6 font-medium">
            <Link to="/privacy-policy" className="hover:text-[var(--color-secondary)] transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-[var(--color-secondary)] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
