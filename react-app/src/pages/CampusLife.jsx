import { motion } from 'framer-motion';
import { FaBed, FaBus, FaMedkit, FaUtensils, FaGavel } from 'react-icons/fa';
import { useState } from 'react';

const FacilitySection = ({ icon: Icon, title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 shadow-xl mb-8 relative overflow-hidden"
  >
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 w-16 h-16 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center mt-1">
        <Icon className="text-3xl text-[var(--color-primary)]" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">{title}</h2>
        <div className="text-[var(--color-text-muted)] space-y-4 font-medium leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  </motion.div>
);

const CampusLife = () => {
  const [activeTab, setActiveTab] = useState('hostel');

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
            Campus Life
          </motion.h1>
          <div className="border-b-[4px] border-[var(--color-primary)] mx-auto rounded-full w-32 shadow-[0_0_15px_var(--color-primary)]"></div>
          <p className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Discover a holistic, engaging, and highly secure campus culture designed for immersive learning.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mt-16 relative z-20">
        
        {/* Sidebar Nav */}
        <div className="w-full lg:w-72 flex-shrink-0">
           <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-4 shadow-xl sticky top-32">
              {[
                { id: 'hostel', label: 'Hostel Accommodation', icon: FaBed },
                { id: 'transport', label: 'Transport Facilities', icon: FaBus },
                { id: 'medical', label: 'Medical Facilities', icon: FaMedkit },
                { id: 'cafeteria', label: 'Cafeteria', icon: FaUtensils },
                { id: 'rules', label: 'Rules & Regulations', icon: FaGavel },
              ].map(tab => (
                 <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`w-full text-left px-5 py-4 rounded-2xl font-bold flex items-center gap-4 transition-all duration-300 ${
                     activeTab === tab.id 
                     ? 'bg-[var(--color-primary)] text-white shadow-lg' 
                     : 'text-[var(--color-text-main)] hover:bg-[var(--color-background)]'
                   }`}
                 >
                   <tab.icon size={18} className={activeTab === tab.id ? "text-white" : "text-[var(--color-text-muted)]"} />
                   {tab.label}
                 </button>
              ))}
           </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow">
          {activeTab === 'hostel' && (
            <FacilitySection 
               icon={FaBed}
               title="Hostels for Boys & Girls"
               content={
                 <>
                   <p>
                     Separate hostel facilities for boys and girls in the campus provide comfortable accommodation. Vegetarian & Non-Vegetarian food is served. It can accommodate 500 rooms with 2000 boys and 300 rooms for 1400 girl students. 
                   </p>
                   <p>
                     Each student will be provided with a cot, table, chair and cupboard. Facilities like Wi-Fi, Reading room and Medical Facilities are strictly available.
                   </p>
                   <h3 className="text-xl font-bold text-[var(--color-text-main)] mt-8 mb-4">Key Hostel Rules</h3>
                   <ul className="space-y-3 pl-4 list-disc marker:text-[var(--color-primary)]">
                     <li>Ragging in any form is strictly forbidden and punishable by immediate expulsion.</li>
                     <li>Smoking and consumption of alcohol are strictly prohibited.</li>
                     <li>Cleanliness in the mess and living areas must be maintained continuously.</li>
                     <li>The study hour in all hostels strictly observed between 8:30 PM to 10:30 PM.</li>
                     <li>Students leaving the hostel for holidays require prior Deputy Warden permissions.</li>
                   </ul>
                 </>
               }
            />
          )}

          {activeTab === 'transport' && (
            <FacilitySection 
               icon={FaBus}
               title="Transport Infrastructure"
               content={
                 <>
                   <p>
                     The College maintains a massive transport system consisting of several fleets. It efficiently shuttles day scholars from surrounding localities directly to the institution prioritizing maximal geographical reach and reliable timings.
                   </p>
                   <ul className="space-y-3 mt-6">
                     <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span> Free internal transport within the mega campus structure</li>
                     <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span> Bus operation timings synchronized with placement & department schedules</li>
                   </ul>
                 </>
               }
            />
          )}

          {activeTab === 'medical' && (
             <FacilitySection 
                icon={FaMedkit}
                title="Medical Facilities"
                content={
                  <>
                    <p>
                      Government College of Engineering takes extreme priority regarding student health. A highly functional dispensary with a residential medical officer operates within the limits of the college campus round-the-clock.
                    </p>
                    <p className="mt-4">
                      In the event of medical emergencies, standby vehicle transports are instantly accessible to transfer students towards multi-specialty hospitals in Erode limit.
                    </p>
                  </>
                }
             />
          )}

          {activeTab === 'cafeteria' && (
             <FacilitySection 
                icon={FaUtensils}
                title="Cafeteria & Mess"
                content={
                  <>
                    <p>
                      The Central Cafeteria is meticulously administered under strict hygiene guidelines. Nutritional vegetarian and non-vegetarian selections are constructed to cater students originating from inter-state geographies.
                    </p>
                  </>
                }
             />
          )}

          {activeTab === 'rules' && (
             <FacilitySection 
                icon={FaGavel}
                title="Rules & Regulations"
                content={
                  <>
                    <p>GCE Erode enforces a strict absolute adherence towards academic integrity and public conduct.</p>
                    <ul className="space-y-3 mt-6 border-l-4 border-[var(--color-secondary)] pl-4">
                      <li>Dress Code parameters are strictly checked during Laboratory modules and core hours.</li>
                      <li>Absolute prohibition regarding Public Demonstrations internally unless officially sanctioned.</li>
                      <li>Total compliance enforcing Tamil Nadu Educational code regarding Anti-Ragging regulations. Zero Tolerance architecture.</li>
                    </ul>
                  </>
                }
             />
          )}

        </div>
      </div>
    </div>
  );
};

export default CampusLife;
