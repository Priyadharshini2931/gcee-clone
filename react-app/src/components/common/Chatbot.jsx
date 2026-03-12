import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaPaperPlane } from 'react-icons/fa';

const FAQ_DATA = {
  'admissions': 'TNEA 2026 Admissions are open. Please visit the Admissions page or contact the Directorate of Technical Education.',
  'departments': 'We offer B.E/B.Tech in CSE, ECE, EEE, Mechanical, Civil, IT, and AI&DS, as well as M.E in Structural and CSE.',
  'placements': 'We have a >90% placement record with top recruiters including TCS, Infosys, Wipro, and Cognizant.',
  'contact info': 'Email: principal@gcee.ac.in | Phone: 0424 - 2533279, 2533379 | Location: Chithode, Erode - 638 316.'
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I am the GCEE Chatbot. How can I help you today? Choose a topic below:' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { type: 'user', text: option }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: FAQ_DATA[option.toLowerCase()] }]);
    }, 500);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: inputVal }]);
    setInputVal('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: "I'm a simple FAQ bot. You can choose one of the predefined topics to get an exact answer, or contact the administration directly." }]);
    }, 500);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_var(--color-primary)] hover:bg-[var(--color-secondary)] hover:shadow-[0_0_30px_var(--color-secondary)] transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        aria-label="Open Chatbot"
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={28} className="transform translate-y-px" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-[var(--color-surface)] shadow-2xl rounded-2xl overflow-hidden z-[9999] border border-[var(--color-border)] flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-[var(--color-primary)] p-4 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[var(--color-primary)] text-sm font-bold">Bot</span>
                </div>
                <div>
                  <h3 className="text-white font-bold m-0 p-0 text-md">GCEE Assistant</h3>
                  <p className="text-blue-100 text-xs m-0">Typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Messages body */}
            <div className="flex-1 p-4 overflow-y-auto bg-[var(--color-background)] flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm shadow-sm ${
                    msg.type === 'user' 
                    ? 'bg-[var(--color-primary)] text-white rounded-tr-sm' 
                    : 'bg-[var(--color-surface)] text-[var(--color-text-main)] rounded-tl-sm border border-[var(--color-border)]'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Suggestions always visible */}
              <div className="flex flex-wrap gap-2 mt-2 justify-start mb-4">
                {Object.keys(FAQ_DATA).map(opt => (
                  <button 
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    className="text-xs bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] border border-[var(--color-secondary)]/30 rounded-full py-1.5 px-3 hover:bg-[var(--color-secondary)] hover:text-white transition-colors capitalize font-medium"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
              <form onSubmit={handleSend} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full bg-[var(--color-background)] text-[var(--color-text-main)] border border-[var(--color-border)] rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                />
                <button type="submit" className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)] focus:outline-none transition-colors shrink-0">
                  <FaPaperPlane size={14} className="mr-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
