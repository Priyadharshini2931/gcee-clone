import { motion } from 'framer-motion';

const Library = () => {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-20">
      {/* Header Banner - Fixed Visibility */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-[#020617] text-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            /* Forced white text with !text-white */
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest drop-shadow-2xl mb-6 !text-white"
          >
            Central Library
          </motion.h1>
          <div className="border-b-[4px] border-[var(--color-primary)] mx-auto rounded-full w-32 shadow-[0_0_15px_var(--color-primary)]"></div>
          <p className="mt-8 text-xl !text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            The heart of academic resources, driving research, innovation, and independent learning.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[var(--color-surface)] rounded-3xl p-8 lg:p-12 shadow-xl border border-[var(--color-border)]"
          >
            <h2 className="text-3xl font-extrabold text-[var(--color-text-main)] mb-6 border-l-4 border-[var(--color-primary)] pl-4">About the Library</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6 font-medium text-lg">
              The Central Library of Government College of Engineering, Erode functions as the primary information resource center for students, faculty, and researchers. It is well-equipped with modern facilities and massive digital archives.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              Open from 9:00 AM to 5:45 PM on all working days. Our mission is to promote continuous learning and provide unparalleled access to international journals, extensive print volumes, and electronic media.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-[var(--color-background)] rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="text-4xl font-black text-[var(--color-primary)] mb-2">45,000+</h3>
                <p className="text-[var(--color-text-main)] font-semibold uppercase tracking-wider text-xs">Total Volumes</p>
              </div>
              <div className="bg-[var(--color-background)] rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="text-4xl font-black text-[var(--color-primary)] mb-2">12,500+</h3>
                <p className="text-[var(--color-text-main)] font-semibold uppercase tracking-wider text-xs">Unique Titles</p>
              </div>
              <div className="bg-[var(--color-background)] rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="text-4xl font-black text-[var(--color-secondary)] mb-2">1,500+</h3>
                <p className="text-[var(--color-text-main)] font-semibold uppercase tracking-wider text-xs">CD/DVD Resources</p>
              </div>
              <div className="bg-[var(--color-background)] rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="text-4xl font-black text-[var(--color-secondary)] mb-2">National</h3>
                <p className="text-[var(--color-text-main)] font-semibold uppercase tracking-wider text-xs">Journals & Magazines</p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-surface)] rounded-3xl p-8 lg:p-10 shadow-xl border border-[var(--color-border)] lg:sticky top-32 h-fit"
          >
            <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-6 border-b border-[var(--color-border)] pb-4">Digital Access</h3>
            <ul className="space-y-4">
              {[
                "NPTEL Video Lectures Desktop",
                "IEEE Xplore Digital Library",
                "Springer Journals",
                "ScienceDirect",
                "DELNET Access",
                "E-Shodh Sindhu"
              ].map((item, id) => (
                <li key={id} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                  <span className="text-[var(--color-text-muted)] font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-[var(--color-text-main)] mt-10 mb-6 border-b border-[var(--color-border)] pb-4">Services</h3>
            <ul className="space-y-4">
              {[
                "Reference Service",
                "Reprography Service",
                "OPAC (Online Public Access)",
                "Internet Browsing Center"
              ].map((item, id) => (
                <li key={id} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></span>
                  <span className="text-[var(--color-text-muted)] font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Library;