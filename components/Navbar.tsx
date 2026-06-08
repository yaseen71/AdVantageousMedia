import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onQuoteClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-[#1B4231] focus:text-[#1B4231] focus:outline-none transition-colors">Services</a>
          <a href="#work" className="text-sm font-medium text-slate-600 hover:text-[#1B4231] focus:text-[#1B4231] focus:outline-none transition-colors">Portfolio</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-[#1B4231] focus:text-[#1B4231] focus:outline-none transition-colors">About</a>
 
          <button 
            onClick={onQuoteClick}
            className="px-6 py-2.5 bg-[#1B4231] hover:opacity-90 active:scale-95 rounded-full text-sm font-semibold text-white transition-all shadow-lg shadow-emerald-950/20 focus:ring-2 focus:ring-[#1B4231] focus:ring-offset-2 outline-none"
          >
            Request a Quote
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2.5 text-slate-900 focus:outline-none hover:bg-slate-100 rounded-full transition-colors relative z-50" 
            aria-label="Toggle Mobile Menu"
          >
            {isMobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Elegant Slide-down Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          isMobileOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 text-center text-2xl font-bold tracking-tight">
          <a 
            href="#services" 
            onClick={() => setIsMobileOpen(false)}
            className="text-slate-900 hover:text-[#1B4231] transition-colors py-2 border-b border-slate-100"
          >
            Services
          </a>
          <a 
            href="#work" 
            onClick={() => setIsMobileOpen(false)}
            className="text-slate-900 hover:text-[#1B4231] transition-colors py-2 border-b border-slate-100"
          >
            Portfolio
          </a>
          <a 
            href="#about" 
            onClick={() => setIsMobileOpen(false)}
            className="text-slate-900 hover:text-[#1B4231] transition-colors py-2 border-b border-slate-100"
          >
            About Us
          </a>
          
          <button 
            onClick={() => {
              setIsMobileOpen(false);
              onQuoteClick();
            }}
            className="mt-4 px-8 py-4 bg-[#1B4231] text-white rounded-2xl text-lg font-bold shadow-xl shadow-emerald-900/10 active:scale-95 transition-all"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;