
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DiscoveryCall from './components/DiscoveryCall';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import StatsBanner from './components/StatsBanner';
import Portfolio from './components/Portfolio';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        
        try {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (err) {
          // Invalid selector, do nothing and let browser handle
        }
      }
    };
    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} onQuoteClick={() => scrollToSection('contact-booking')} />
      
      <main id="top">
        <Hero onLaunchClick={() => scrollToSection('contact-booking')} onProofClick={() => scrollToSection('work')} />
        
        <StatsBanner />
        
        <Services onCustomClick={() => scrollToSection('contact-booking')} />

        <Portfolio />

        <section id="about" className="py-24 glass mx-6 rounded-[3rem] border border-black/5 dark:border-white/10 my-12 overflow-hidden relative shadow-2xl bg-black">
          {/* Hexagonal Background Overlay */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
            <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMEw0MCAxMEw0MCAzMEwyMCA0MEwwIDMwTDAgMTBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMTU2ZmUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] bg-repeat"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left relative z-10">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 mb-8 mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-[#48fffa] animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-[#48fffa]">Neural Infrastructure</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-[1.05] tracking-tighter">
                Meet the <br/>
                <span className="bg-gradient-to-r from-[#db0072] via-[#3156fe] to-[#48fffa] bg-clip-text text-transparent">Architects of AI.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                We've spent thousands of GPU hours perfecting the art of synthetic brand growth. Our team blends deep-learning expertise with elite creative strategy to put your brand in a league of its own.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('contact-booking')}
                  className="group px-12 py-5 bg-[#3156fe] text-white font-extrabold rounded-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(49,86,254,0.4)] transition-all flex items-center gap-4 active:scale-95 outline-none"
                >
                  Consult an Expert
                  <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
               {/* Glowing back-glow */}
               <div className="absolute -inset-10 bg-blue-600/20 rounded-full blur-[100px] opacity-50"></div>
               
               <div className="relative glass p-2 rounded-[3.5rem] border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                 <img 
                   src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
                   alt="Cinematic Mountain Scenery" 
                   className="rounded-[3rem] w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110"
                 />
               </div>
            </div>
          </div>
        </section>

        <DiscoveryCall />
      </main>

      <Footer onPrivacyClick={(e) => { e.preventDefault(); setShowPrivacy(true); }} />
      <BackToTop />
      
      {/* Privacy Policy Modal */}
      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </div>
  );
};

export default App;
