import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBuilding } from 'react-icons/fa';
import { DEPARTMENT_DATA } from '../data/departmentsData';

const DepartmentsList = () => {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-20">
      {/* Banner Container */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-[#020617] text-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            /* Added !text-white to ensure the heading is visible on the dark banner */
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest drop-shadow-2xl mb-6 !text-white"
          >
            Academic Departments
          </motion.h1>
          <div className="border-b-[4px] border-[var(--color-primary)] mx-auto rounded-full w-32 shadow-[0_0_15px_var(--color-primary)]"></div>
          <p className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our world-class engineering disciplines guided by expert faculty and state-of-the-art infrastructure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(DEPARTMENT_DATA).map(([id, data], idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>

              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <FaBuilding className="text-3xl text-[var(--color-primary)]" />
              </div>

              <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-4 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">
                {data.title}
              </h2>

              <p className="text-[var(--color-text-muted)] leading-relaxed text-sm mb-8 line-clamp-3">
                {data.description}
              </p>

              <div className="mt-auto pt-6 border-t border-[var(--color-border)] opacity-70 group-hover:opacity-100 transition-opacity flex justify-between items-center">
                <span className="text-[var(--color-text-muted)] text-sm font-semibold">{data.staff ? data.staff.length : 0} Faculty Members</span>
                <Link to={`/department/${id}`} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition-colors shadow-md">
                  <span className="text-lg leading-none transform translate-x-px">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsList;