
import React from 'react';

interface FooterProps {
  onPrivacyClick: (e: React.MouseEvent) => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  return (
    <footer className="bg-[#F5F2EC] dark:bg-[#050908] pt-20 pb-10 border-t border-black/5 dark:border-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="col-span-1">
            <div className="flex items-center mb-6 group cursor-default">
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
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Bespoke website design & development agency delivering ultra-fast, premium digital products. We simplify complex web engineering to grow your business online.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-8 text-lg uppercase tracking-wider font-serif">Quick Links</h4>
            <ul className="text-slate-600 dark:text-gray-300 text-xl font-medium space-y-4">
              <li>
                <a href="#services" className="relative pl-0 hover:pl-6 text-slate-800 dark:text-gray-200 hover:text-[#1B4231] dark:hover:text-[#A1CCA5] transition-all duration-300 flex items-center group">
                  <span className="absolute left-0 opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#1B4231]">→</span>
                  Web Services
                </a>
              </li>
              <li>
                <a href="#about" className="relative pl-0 hover:pl-6 text-slate-800 dark:text-gray-200 hover:text-[#1B4231] dark:hover:text-[#A1CCA5] transition-all duration-300 flex items-center group">
                  <span className="absolute left-0 opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#1B4231]">→</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#work" className="relative pl-0 hover:pl-6 text-slate-800 dark:text-gray-200 hover:text-[#1B4231] dark:hover:text-[#A1CCA5] transition-all duration-300 flex items-center group">
                  <span className="absolute left-0 opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#1B4231]">→</span>
                  Portfolio
                </a>
              </li>
              <li>
                <button 
                  onClick={onPrivacyClick}
                  className="relative pl-0 hover:pl-6 text-slate-800 dark:text-gray-200 hover:text-[#1B4231] dark:hover:text-[#A1CCA5] transition-all duration-300 flex items-center group outline-none text-left w-full"
                >
                  <span className="absolute left-0 opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#1B4231]">→</span>
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-8 text-lg uppercase tracking-wider font-serif">Contact Us</h4>
            <div className="text-slate-600 dark:text-gray-400 text-sm space-y-6">
              <p className="leading-relaxed">Ready to design and build a pristine web flagship? Get in touch with our team.</p>
              <div className="space-y-4">
                <div className="flex flex-col gap-1 group">
                  <span className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest">General Inquiries</span>
                  <a href="mailto:advantageousmedia1@gmail.com" className="text-lg font-bold text-slate-900 dark:text-white hover:text-[#1B4231] dark:hover:text-[#A1CCA5] transition-colors">advantageousmedia1@gmail.com</a>
                </div>
                <div className="flex flex-col gap-1 group">
                  <span className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest">Direct Line</span>
                  <a href="tel:+447493095445" className="text-lg font-bold text-slate-900 dark:text-white hover:text-[#1B4231] dark:hover:text-[#A1CCA5] transition-colors">+44 7493 095445</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-center items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500">
          <p>© 2026 AdVantageousMedia. Built for Performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
