import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onQuoteClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass border-b border-black/5 dark:border-white/10 shadow-lg py-0' 
          : 'bg-transparent border-b border-transparent shadow-none py-2'
      }`} 
      role="navigation" 
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          aria-label="AdVantageousMedia Home"
          onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="text-2xl font-black tracking-tighter flex items-center">
            <span className="inline-block text-[#1B4231] dark:text-[#A1CCA5] animate-soft-pulse group-hover:drop-shadow-[0_0_10px_rgba(161,204,165,0.4)] transition-all duration-500 mr-[1px]">
              Ad
            </span>
            <span className="text-slate-900 dark:text-white transition-colors duration-300">
              Vantageous
            </span>
            <span className="text-gradient ml-1">
              Media
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-[#1B4231] dark:hover:text-[#A1CCA5] focus:text-[#A1CCA5] focus:outline-none transition-colors">Services</a>
          <a href="#work" className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-[#1B4231] dark:hover:text-[#A1CCA5] focus:text-[#A1CCA5] focus:outline-none transition-colors">Portfolio</a>
          <a href="#about" className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-[#1B4231] dark:hover:text-[#A1CCA5] focus:text-[#A1CCA5] focus:outline-none transition-colors">About</a>
 
          <button 
            onClick={onQuoteClick}
            className="px-6 py-2.5 bg-[#1B4231] dark:bg-[#A1CCA5] hover:opacity-90 active:scale-95 rounded-full text-sm font-semibold text-white dark:text-[#0C1410] transition-all shadow-lg shadow-emerald-950/20 focus:ring-2 focus:ring-[#A1CCA5] focus:ring-offset-2 dark:focus:ring-offset-[#080E0C] outline-none"
          >
            Request a Quote
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button className="text-slate-900 dark:text-white" aria-label="Toggle Mobile Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;