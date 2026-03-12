import { motion } from 'framer-motion';

const StaffCard = ({ name, role, department, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
      className="bg-[var(--color-surface)] rounded-3xl p-6 shadow-md hover:shadow-2xl flex flex-col items-center justify-start min-h-[380px] border border-[var(--color-border)] group relative overflow-hidden transition-all duration-300"
    >
      {/* Premium subtle background glow effect on hover */}
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-[var(--color-primary)] opacity-5 to-transparent blur-2xl group-hover:opacity-10 transition-opacity duration-500 z-0"></div>

      <div className="z-10 bg-[var(--color-background)] p-1.5 rounded-full shadow-lg mb-6 mt-4 relative group-hover:shadow-[var(--color-primary)]/20 transition-shadow duration-300">
        <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-[var(--color-surface)] shadow-inner bg-slate-100 flex items-center justify-center relative z-10">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <span className="text-slate-400 text-4xl font-light">👤</span>
          )}
        </div>
      </div>

      <div className="text-center w-full z-10 px-2 flex flex-col items-center flex-grow">
        <h3 className="text-xl font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors leading-tight mb-2">
          {name}
        </h3>
        
        <p className="text-[var(--color-text-muted)] font-medium text-sm mb-4 leading-relaxed tracking-wide">
          {role}
        </p>

        <div className="mt-auto w-full pt-4 border-t border-[var(--color-border)] opacity-70 group-hover:opacity-100 transition-opacity">
          <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest break-words px-2 bg-[var(--color-primary)]/10 py-1.5 rounded-full inline-block w-[90%] truncate">
            {department}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default StaffCard;
