import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaHandshake, FaChartLine } from 'react-icons/fa';

const Placement = () => {
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
            Training & Placement Cell
          </motion.h1>
          <div className="border-b-[4px] border-[var(--color-primary)] mx-auto rounded-full w-32 shadow-[0_0_15px_var(--color-primary)]"></div>
          <p className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Connecting our brilliant students with global industry leaders.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
        
        {/* Top Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 lg:p-10 shadow-xl overflow-hidden relative group"
           >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all"></div>
              <FaGraduationCap className="text-5xl text-[var(--color-primary)] mb-6 drop-shadow-sm" />
              <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">Placement Statistics</h2>
              <p className="text-[var(--color-text-muted)] font-medium leading-relaxed mb-6">
                 We take pride in an excellent placement record, with over 90% of our eligible students consistently placed across top-tier multinational companies, core engineering firms, and high-growth startups globally.
              </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 lg:p-10 shadow-xl overflow-hidden relative group"
           >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[var(--color-secondary)] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all"></div>
              <FaChartLine className="text-4xl text-[var(--color-secondary)] mb-6 drop-shadow-sm" />
              <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">Training Activities</h2>
              <ul className="space-y-3">
                 {[
                   "Soft Skills and Personality Development",
                   "Aptitude Testing & Quantitative Analysis",
                   "Group Discussion & Interview Preparation",
                   "Core Technical Refresher Modules",
                   "Company-Specific Drive Seminars"
                 ].map((item, id) => (
                    <li key={id} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] box-shadow-sm"></span>
                      <span className="text-[var(--color-text-muted)] font-medium text-[15px]">{item}</span>
                    </li>
                 ))}
              </ul>
           </motion.div>
        </div>

        {/* Top Recruiters */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 lg:p-16 shadow-xl mb-16 text-center overflow-hidden"
        >
           <h2 className="text-3xl font-black text-[var(--color-text-main)] mb-2 uppercase tracking-widest">Our Top Recruiters</h2>
           <div className="w-16 h-1 bg-[var(--color-primary)] rounded-full mx-auto mb-10"></div>
           
           <div className="flex justify-center mb-8">
               <FaHandshake className="text-6xl text-slate-300 dark:text-slate-700" />
           </div>

           <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-12">
              Our students are recruited by pioneering giants in software, electronics, and mechanical sectors.
           </p>

           <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture', 'HCL', 'Zoho', 'IBM', 'Tech Mahindra', 'L&T', 'Hyundai', 'Ashok Leyland', 'TVS'].map((company, idx) => (
                 <div key={idx} className="bg-[var(--color-background)] px-8 py-4 rounded-xl border border-[var(--color-border)] shadow-sm hover:border-[var(--color-primary)] hover:shadow-md transition-all font-bold text-[var(--color-text-main)] tracking-wide hover:-translate-y-1 hover:text-[var(--color-primary)] cursor-default">
                    {company}
                 </div>
              ))}
           </div>
        </motion.div>

        {/* Placement Contact */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-[#020617] rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent"></div>
           <div className="relative z-10 grid md:grid-cols-2 items-center gap-8">
               <div>
                  <h2 className="text-3xl font-extrabold text-white mb-4"><FaBriefcase className="inline-block mr-3 mb-1" /> Placement Officer</h2>
                  <p className="text-slate-300 text-lg">
                      Companies wishing to conduct campus recruitment drives at GCE Erode are cordially invited to contact our Placement Cell.
                  </p>
               </div>
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">Prof. Placement Incharge</h3>
                  <p className="text-slate-300 mb-2">Government College of Engineering, Erode</p>
                  <p className="text-[var(--color-secondary)] font-medium"><a href="mailto:placement@gcee.ac.in" className="hover:underline">placement@gcee.ac.in</a></p>
                  <p className="text-[var(--color-secondary)] font-medium mt-1"><a href="tel:04242533279" className="hover:underline">0424 - 2533279</a></p>
               </div>
           </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Placement;
