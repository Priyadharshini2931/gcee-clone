import { motion } from 'framer-motion';

const Admissions = () => {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-20">
      <div className="relative pt-32 pb-24 overflow-hidden bg-[#020617] text-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest drop-shadow-2xl mb-6 text-slate-100"
          >
            Admissions 2026
          </motion.h1>
          <div className="border-b-[4px] border-[var(--color-primary)] mx-auto rounded-full w-32 shadow-[0_0_15px_var(--color-primary)]"></div>
          <p className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Begin your journey towards an exceptional future in engineering.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-[var(--color-surface)] rounded-3xl p-8 lg:p-12 shadow-xl border border-[var(--color-border)] mb-12"
        >
          <h2 className="text-3xl font-extrabold text-[var(--color-text-main)] mb-6 border-l-4 border-[var(--color-primary)] pl-4">UG Admissions Procedures</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6 font-medium">
            Candidates who wish to secure admission to the FIRST YEAR of B.E / B.Tech degree courses should have passed the Higher Secondary Examination (10 + 2 Pattern) of the Tamil Nadu Board, or an examination of any other competent authority accepted by the Syndicate of Anna University as equivalent thereto.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
            Admissions are based entirely on Single Window Counseling by the Directorate of Technical Education (DOTE), Chennai via the TNEA rank list.
          </p>
          
          <div className="bg-[var(--color-background)] rounded-2xl p-6 border border-[var(--color-border)]">
             <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-4">Required Documents</h3>
             <ul className="space-y-3">
               {[
                 "Original 10th and 12th Marksheets",
                 "Transfer Certificate & Conduct Certificate",
                 "Community Certificate (if applicable)",
                 "Nativity Certificate (if applicable)",
                 "First Graduate Certificate (if applicable)",
                 "Allotment Order from DOTE",
                 "Recent Passport Size Photographs"
               ].map((item, id) => (
                 <li key={id} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></span>
                    <span className="text-[var(--color-text-main)]">{item}</span>
                 </li>
               ))}
             </ul>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-[var(--color-surface)] rounded-3xl p-8 lg:p-12 shadow-xl border border-[var(--color-border)]"
        >
          <h2 className="text-3xl font-extrabold text-[var(--color-text-main)] mb-6 border-l-4 border-[var(--color-primary)] pl-4">PG Admissions Procedures</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6 font-medium">
            Candidates for admission to the first semester of the Master's Degree Programme must possess a B.E. / B.Tech. degree in the corresponding discipline. Admissions are based entirely on the TANCET examination score administered by Anna University.
          </p>
          <div className="bg-[var(--color-background)] p-6 rounded-2xl border border-[var(--color-border)]">
             <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2">Available Master's Programs:</h3>
             <p className="text-[var(--color-text-muted)] mb-1">M.E - Structural Engineering</p>
             <p className="text-[var(--color-text-muted)]">M.E - Computer Science & Engineering</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admissions;
