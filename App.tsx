
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
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('light');
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 transition-colors duration-300">
      <Navbar onQuoteClick={() => scrollToSection('contact-booking')} />
      
      <main id="top">
        <Hero onLaunchClick={() => scrollToSection('contact-booking')} onProofClick={() => scrollToSection('work')} />
        
        <StatsBanner />
        
        <Services onCustomClick={() => scrollToSection('contact-booking')} />

        <Portfolio />

        <section id="about" className="py-24 glass mx-6 rounded-[3rem] border border-black/5 dark:border-white/10 my-12 overflow-hidden relative shadow-2xl bg-[#040806]">
          {/* Subtle Organic Background Overlay */}
          <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
            <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,_rgba(161,204,165,0.08)_0%,_transparent_55%),_radial-gradient(circle_at_70%_80%,_rgba(212,163,115,0.06)_0%,_transparent_60%)]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left relative z-10">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#224231] border border-[#7EA18F]/20 mb-8 mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-[#A1CCA5] animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A1CCA5]">Organic Engineering</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-[1.05] tracking-tighter font-serif">
                Crafting <br/>
                <span className="text-gradient">Pure Digital Spaces.</span>
              </h2>
              <p className="text-[#8EAE9D] text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                We believe websites are living ecosystems of your brand. Our developers blend pristine custom typing, lightning-fast serverless structure, and organic UX principles to set you miles ahead.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('contact-booking')}
                  className="group px-12 py-5 bg-[#1B4231] hover:bg-[#25523E] border border-[#7EA18F]/40 text-white font-extrabold rounded-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(43,104,80,0.3)] transition-all flex items-center gap-4 active:scale-95 outline-none"
                >
                  Consult a Specialist
                  <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
               {/* Glowing back-glow */}
               <div className="absolute -inset-10 bg-[#2D5A27]/25 rounded-full blur-[100px] opacity-50"></div>
               
               <div className="relative glass p-2 rounded-[3.5rem] border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                 <img 
                   src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200" 
                   alt="Pristine Forest Canopy bathed in Mist" 
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
