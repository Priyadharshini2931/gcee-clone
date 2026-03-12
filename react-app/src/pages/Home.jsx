import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie, FaBuilding, FaBook, FaBullhorn } from 'react-icons/fa';
import HeroSlider from '../components/common/HeroSlider';
import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { title: 'Admissions', text: 'Apply for 2026 Batch', icon: <FaGraduationCap size={28} />, path: '/admissions', bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500/20' },
  { title: 'Placements', text: 'Top tier Recruiters', icon: <FaUserTie size={28} />, path: '/placement', bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400', border: 'border-blue-500/20' },
  { title: 'Departments', text: 'Diverse Engineering Fields', icon: <FaBuilding size={28} />, path: '/department', bg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400', border: 'border-purple-500/20' },
  { title: 'E-Library', text: 'Digital Academic Resources', icon: <FaBook size={28} />, path: '/facilities', bg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400', border: 'border-rose-500/20' },
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] pb-20">
      <HeroSlider />

      {/* Modern High-Contrast News Ticker */}
      <div className="bg-[#0f172a] shadow-md border-b-2 border-[var(--color-primary)] py-3 text-white overflow-hidden z-10 relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          <div className="font-bold whitespace-nowrap mr-6 uppercase tracking-widest text-xs bg-[var(--color-primary)] text-white px-4 py-1.5 rounded-sm shadow-sm flex items-center gap-2">
            <FaBullhorn /> Updates
          </div>
          <div className="flex-grow overflow-hidden relative">
            <motion.div
              className="whitespace-nowrap flex gap-12 cursor-pointer font-medium text-sm text-slate-300"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            >
              <a href="/News/GCEE-PIC.pdf" className="hover:text-[var(--color-secondary)] inline-flex items-center gap-2">
                 <span className="text-[var(--color-primary)]">⦿</span> Applications open for TN Pre-Incubation Centre
              </a>
              <a href="#" className="hover:text-[var(--color-secondary)] inline-flex items-center gap-2">
                 <span className="text-[var(--color-primary)]">⦿</span> TNEA 2026 Admissions Schedule Released
              </a>
              <a href="#" className="hover:text-[var(--color-secondary)] inline-flex items-center gap-2">
                 <span className="text-[var(--color-primary)]">⦿</span> End Semester Examination Timetable Download
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        
        {/* Animated Welcome Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-28"
        >
          <h2 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-[0.3em] mb-4">Established 1984</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-main)] mb-8 tracking-tight leading-tight">
            Engineering Excellence <br />
            <span className="text-gradient">For The Next Generation</span>
          </h3>
          <p className="text-[var(--color-text-muted)] text-lg md:text-xl leading-relaxed font-light">
            Government College of Engineering, Erode is a premier educational institution dedicated to providing top-tier technical education, promoting cutting-edge research, and developing ethical professionals ready to tackle global challenges.
          </p>
        </motion.div>

        {/* Quick Links Sliding Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_LINKS.map((link, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring', stiffness: 100 }}
              className="group h-full"
            >
              <Link 
                to={link.path} 
                className={`block h-full p-8 rounded-[2rem] bg-[var(--color-surface)] border ${link.border} shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Background Decor */}
                <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity duration-300 group-hover:opacity-40 ${link.bg.split(' ')[0]}`}></div>
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-none transition-transform group-hover:scale-110 ${link.bg}`}>
                  {link.icon}
                </div>
                
                <h3 className="font-bold text-2xl mb-2 text-[var(--color-text-main)]">{link.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm mb-6 pb-6 pr-4">{link.text}</p>
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center group-hover:text-[var(--color-primary)] transition-colors">
                  <span className="text-sm font-semibold tracking-wide uppercase">Explore</span>
                  <span className="transform group-hover:translate-x-2 transition-transform opacity-70 group-hover:opacity-100">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
