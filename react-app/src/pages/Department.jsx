import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StaffCard from '../components/common/StaffCard';
import { FaChevronRight, FaBullseye, FaRocket, FaTools } from 'react-icons/fa';
import { DEPARTMENT_DATA } from '../data/departmentsData';

const Department = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const departmentId = id?.toLowerCase();
  const depData = DEPARTMENT_DATA[departmentId];

  if (!depData) {
    return <Navigate to="/department/cse" replace />;
  }

  // Animation variants setup
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-20">
      {/* Premium Dynamic Department Banner */}
      {/* Explicitly setting text-white on this container to ensure all children inherit it */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-[#020617] text-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-[130px] opacity-40 mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            /* Added !text-white to ensure it overrides any global theme-based color changes */
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest drop-shadow-2xl mb-6 !text-white px-4"
          >
            {depData.title}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="border-b-[4px] border-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_15px_var(--color-primary)]"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-20 flex flex-col lg:flex-row gap-8 lg:gap-12">

        {/* Modern Sidebar Navigation Segment */}
        <div className="w-full lg:w-72 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-surface)] rounded-3xl shadow-xl p-6 lg:sticky lg:top-32 border border-[var(--color-border)]"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest pb-4 mb-4 text-[var(--color-text-muted)] border-b border-[var(--color-border)]">
              Menu Index
            </h3>
            <ul className="space-y-3">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'faculty', label: 'Faculty & Engineers' },
                { id: 'facilities', label: 'Laboratories' },
                { id: 'syllabus', label: 'Syllabus Archive' }
              ].map(tab => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-5 py-3.5 rounded-2xl font-bold flex items-center justify-between transition-all duration-300 group ${activeTab === tab.id
                        ? 'bg-[var(--color-primary)] text-white shadow-lg'
                        : 'bg-transparent text-[var(--color-text-main)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
                      }`}
                  >
                    <span>{tab.label}</span>
                    <FaChevronRight className={`transition-transform duration-300 ${activeTab === tab.id ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0'}`} size={12} />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Dynamic Interactive Content Area */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">

            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="bg-[var(--color-surface)] rounded-3xl shadow-xl p-8 lg:p-12 border border-[var(--color-border)]"
              >
                <div className="mb-10 lg:mb-12 border-l-4 border-[var(--color-primary)] pl-6">
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--color-text-main)] mb-2 tracking-tight">Department Overview</h2>
                  <p className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm">GCE Erode Engineering</p>
                </div>

                <p className="text-[var(--color-text-muted)] mb-12 leading-relaxed text-lg lg:text-xl font-light">
                  {depData.description}
                </p>

                {/* Vision / Mission Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-[var(--color-background)] p-8 rounded-3xl border border-[var(--color-border)] shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                      <FaBullseye className="text-2xl text-[var(--color-primary)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">Vision</h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed text-[15px]">
                      {depData.vision}
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-[var(--color-background)] p-8 rounded-3xl border border-[var(--color-border)] shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-[var(--color-secondary)]/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                      <FaRocket className="text-2xl text-[var(--color-secondary)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">Mission</h3>
                    <ul className="text-[var(--color-text-muted)] space-y-3 text-[15px] pl-2">
                      {depData.mission.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[var(--color-secondary)] font-black mt-0.5">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'faculty' && (
              <motion.div
                key="faculty"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              >
                <div className="mb-10 bg-[var(--color-surface)] rounded-3xl shadow-xl p-8 border border-[var(--color-border)] flex justify-between items-center flex-wrap gap-6">
                  <div className="border-l-4 border-[var(--color-primary)] pl-6">
                    <h2 className="text-3xl font-extrabold text-[var(--color-text-main)] mb-2 tracking-tight">Faculty Members</h2>
                    <p className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm">Distinguished Academic Experts</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {depData.staff.map((staff) => (
                    <StaffCard key={staff.id} {...staff} />
                  ))}
                </div>
              </motion.div>
            )}

            {(activeTab === 'facilities' || activeTab === 'syllabus') && (
              <motion.div
                key={activeTab}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="bg-[var(--color-surface)] rounded-3xl shadow-xl p-12 border border-[var(--color-border)] min-h-[50vh] flex flex-col justify-center items-center"
              >
                <div className="w-24 h-24 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <FaTools className="text-4xl text-[var(--color-primary)]" />
                </div>
                <h2 className="text-3xl font-extrabold text-[var(--color-text-main)] mb-4 capitalize tracking-tight">{activeTab} Modules</h2>
                <p className="text-[var(--color-text-muted)] text-center max-w-md font-medium leading-relaxed">
                  We are currently integrating deeply structured interactive records for the {activeTab} section matching the newly released AICTE and Anna University guidelines. Let's build the future together.
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Department;