import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  { id: 1, image: '/assets/img/sliders/layer/CollegeBirdView.jpg', title: 'Welcome to GCE Erode', subtitle: 'A Tradition of Excellence' },
  { id: 2, image: '/assets/img/sliders/layer/NammaGCEE2.jpg', title: 'Excellence in Engineering', subtitle: 'Pushing the Boundaries of Innovation' },
  { id: 3, image: '/assets/img/sliders/layer/bg1.jpg', title: 'Empowering Future Innovators', subtitle: 'World-Class Research Hub' },
  { id: 4, image: '/assets/img/sliders/layer/Auditorium1.jpg', title: 'State of the Art Facilities', subtitle: 'Modern Infrastructure' },
  { id: 5, image: '/assets/img/sliders/layer/IndoorStadiumInnerView.jpg', title: 'Holistic Development', subtitle: 'Sports and Cultural Prowess' },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  // Animation configuration for crossfade and scale
  const slideVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative h-[45vh] md:h-[55vh] lg:h-[65vh] w-full overflow-hidden bg-[#020617] group">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          {/* Subtle gradient overlay to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-black/30 z-10 mix-blend-multiply" />
          
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover transform origin-center"
            loading={current === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating Content wrapper */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-24 md:pb-32 px-4 text-center pointer-events-none">
        <AnimatePresence mode="wait">
           <motion.div
             key={`content-${current}`}
             variants={contentVariants}
             initial="hidden"
             animate="visible"
             exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
             className="max-w-5xl"
           >
             <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
               {slides[current].subtitle}
             </div>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] tracking-tight leading-tight">
               {slides[current].title}
             </h1>
             <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto rounded-full shadow-[0_0_15px_var(--color-primary)]" />
           </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 hover:bg-[var(--color-primary)]/90 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 z-30 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 cursor-pointer shadow-lg"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} className="-ml-1" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 hover:bg-[var(--color-primary)]/90 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 z-30 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 cursor-pointer shadow-lg"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} className="-mr-1" />
      </button>

      {/* Pagination indicators */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-30 bg-black/20 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-500 overflow-hidden relative cursor-pointer ${
              current === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
             {current === idx && (
               <motion.div 
                 initial={{ x: "-100%" }}
                 animate={{ x: "0%" }}
                 transition={{ duration: 6, ease: "linear" }}
                 className="absolute inset-0 bg-[var(--color-primary)]"
               />
             )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
