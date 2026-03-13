import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has touch capability, if so, disable cursor
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Attach to all links and buttons for the hover effect
    const addHoverEventListeners = () => {
      const interactables = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .interactive-card');
      
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });

      return () => {
        interactables.forEach((el) => {
          el.removeEventListener('mouseenter', () => setIsHovered(true));
          el.removeEventListener('mouseleave', () => setIsHovered(false));
        });
      };
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Initial listener setup
    let cleanup = addHoverEventListeners();

    // Setup an observer to attach listeners to newly added DOM elements (for a SPA)
    const observer = new MutationObserver(() => {
      cleanup();
      cleanup = addHoverEventListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
      cleanup();
    };
  }, [cursorX, cursorY, hidden]);

  if (hidden) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.3 : 0.8,
          backgroundColor: isHovered ? '#ffffff' : '#ffffff',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
      />
    </motion.div>
  );
};

export default CustomCursor;
