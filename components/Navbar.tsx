import React from 'react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onQuoteClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, onQuoteClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-black/5 dark:border-white/10" role="navigation" aria-label="Main Navigation">
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
            <span className="inline-block text-blue-600 dark:text-[#48fffa] animate-soft-pulse group-hover:drop-shadow-[0_0_10px_#48fffa] transition-all duration-500 mr-[1px]">
              Ad
            </span>
            <span className="text-slate-900 dark:text-white transition-colors duration-300">
              Vantageous
            </span>
            <span className="text-gradient text-glow-blue ml-1">
              Media
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-[#3156fe] focus:text-[#3156fe] focus:outline-none transition-colors">Services</a>
          <a href="#work" className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-[#3156fe] focus:text-[#3156fe] focus:outline-none transition-colors">Portfolio</a>
          <a href="#about" className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-[#3156fe] focus:text-[#3156fe] focus:outline-none transition-colors">About</a>
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 transition-all text-xl focus:ring-2 focus:ring-blue-500 outline-none"
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <button 
            onClick={onQuoteClick}
            className="px-6 py-2.5 bg-[#db0072] hover:bg-[#b0005c] active:scale-95 rounded-full text-sm font-semibold text-white transition-all shadow-lg shadow-pink-500/20 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 dark:focus:ring-offset-[#050505] outline-none"
          >
            Request a Quote
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-lg"
            aria-label="Toggle Theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
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