
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-[#FAF8F5] dark:bg-[#080E0C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <div className="mb-4 px-4 py-1.5 glass w-fit mx-auto md:mx-0 rounded-full flex items-center gap-2 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-800 dark:text-[#A1CCA5]">
              Bespoke Digital Ecosystems
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight tracking-tighter font-serif">
            Ethereal Aesthetics. <span className="text-gradient">Primal Speed.</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
            We don't build generic, bloated templates. We architect custom hand-crafted React and TypeScript websites designed with biological fluid responsiveness, security, and elite conversion scores.
          </p>
        </div>

        {/* Comparison Section: Product Fidelity */}
        <div className="mb-20">
          <div className="relative group max-w-6xl mx-auto">
            <div className="relative glass p-4 rounded-[3rem] border border-black/10 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(12,20,16,0.2)] bg-[#0C1410] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 rounded-[2.5rem] overflow-hidden">
                {/* Traditional Side */}
                <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden group/img">
                  <img 
                    src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=65&w=800" 
                    alt="Legacy Bloated Template" 
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover/img:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="absolute bottom-10 left-10">
                    <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] mb-1">WP TRADITIONAL</div>
                    <div className="text-3xl font-bold text-white uppercase tracking-tight font-serif">WordPress Bloat</div>
                  </div>
                  <div className="absolute top-8 left-8">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black text-white/60 tracking-widest uppercase">
                      Load Speed • 4.8s
                    </div>
                  </div>
                </div>

                {/* Our Side */}
                <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden group/img border-t md:border-t-0 md:border-l-2 border-[#A1CCA5]">
                  <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=65&w=800" 
                    alt="Bespoke High Performance Stack with Sunbeams" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <div className="text-[10px] font-black text-[#A1CCA5] uppercase tracking-[0.3em] mb-1">ADVANTAGEOUS MEDIA</div>
                    <div className="text-3xl font-bold text-white uppercase tracking-tight font-serif">Our Starlight Stack</div>
                  </div>
                  <div className="absolute top-8 left-8">
                    <div className="px-3 py-1 bg-[#1B4231] text-[9px] font-black text-[#A1CCA5] tracking-widest uppercase rounded-full shadow-lg shadow-emerald-500/20 border border-[#7EA18F]/30 animate-pulse">
                      Load Speed • 0.3s
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg md:text-xl italic font-medium text-slate-500 dark:text-gray-400 px-6 leading-relaxed">
                "Can you feel the speed difference? Your users certainly can. Migrating to organic custom web structures boosts conversion rates by up to <span className="text-slate-900 dark:text-white font-bold underline decoration-emerald-600 decoration-2 underline-offset-4">110%</span>."
              </p>
            </div>
          </div>
        </div>

        {/* Why Synthetic Production Section - Redesigned for Maximum Attraction */}
        <div className="pt-24 border-t border-black/5 dark:border-white/5">
          <div className="max-w-5xl mb-16">
            <h3 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tighter font-serif">
              The End of the <span className="text-gradient italic">Web Dev Headaches.</span>
            </h3>
            <p className="text-slate-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
              Traditional web building is a logistical hurdle of bloated builders, outdated modules, and broken dependencies. At <span className="text-slate-900 dark:text-white font-semibold">AdVantageousMedia</span>, we bypass templates entirely to deliver custom code built on serverless stacks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Zero Plug-in Vulnerabilities Card */}
            <div className="relative group overflow-hidden rounded-[2rem] bg-emerald-950/20 dark:bg-black p-1">
              <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-emerald-600/20 transition-colors"></div>
              <div className="relative h-full bg-[#08120F] rounded-[1.9rem] p-10 border border-emerald-800/30 group-hover:border-emerald-600 transition-all shadow-[0_0_30px_-10px_rgba(16,30,22,0.4)]">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 font-serif">
                  Zero Plug-in Vulnerabilities
                </h4>
                <p className="text-emerald-100/70 leading-relaxed text-lg">
                  WordPress environments are held together by loosely integrated plug-ins that break with every update. Our hand-crafted React and TypeScript code contains absolute type safety and zero security vulnerabilities.
                </p>
              </div>
            </div>

            {/* Unbeatable Performance & Speed Card */}
            <div className="relative group overflow-hidden rounded-[2rem] bg-amber-950/20 dark:bg-black p-1">
              <div className="absolute inset-0 bg-amber-600/10 group-hover:bg-amber-600/20 transition-colors"></div>
              <div className="relative h-full bg-[#12110D] rounded-[1.9rem] p-10 border border-amber-800/30 group-hover:border-amber-600 transition-all shadow-[0_0_30px_-10px_rgba(40,32,15,0.4)]">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 font-serif">
                  Unbeatable Load Speeds
                </h4>
                <p className="text-amber-100/70 leading-relaxed text-lg">
                  Slow page loads lose clients within the first 3 seconds. Our statically-generated products are lightweight, SEO optimized, and distributed globally over high-performance CDN edges.
                </p>
              </div>
            </div>

            {/* Perfect Brand Customization Card */}
            <div className="relative group overflow-hidden rounded-[2rem] bg-teal-950/20 dark:bg-black p-1">
              <div className="absolute inset-0 bg-[#7EA18F]/10 group-hover:bg-[#7EA18F]/20 transition-colors"></div>
              <div className="relative h-full bg-[#0C1411] rounded-[1.9rem] p-10 border border-[#7EA18F]/30 group-hover:border-[#7EA18F] transition-all shadow-[0_0_30px_-10px_rgba(20,40,30,0.4)]">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 font-serif">
                  Tailored Layout Customization
                </h4>
                <p className="text-[#a3c2b2] leading-relaxed text-lg">
                  Cookie-cutter themes lock your branding into rigid boxes. We hand-build your digital environment from scratch, bringing complex visual ideas, brand guidelines, and layouts to life.
                </p>
              </div>
            </div>

            {/* Agile Development Cycles Card */}
            <div className="relative group overflow-hidden rounded-[2rem] bg-stone-900/40 dark:bg-black p-1">
              <div className="absolute inset-0 bg-[#A1CCA5]/10 group-hover:bg-[#A1CCA5]/25 transition-colors"></div>
              <div className="relative h-full bg-[#0B120F] rounded-[1.9rem] p-10 border border-[#A1CCA5]/20 group-hover:border-[#A1CCA5] transition-all shadow-[0_0_30px_-10px_rgba(161,204,165,0.15)]">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 font-serif">
                  Agile Delivery Cycles
                </h4>
                <p className="text-[#C5D3C7] leading-relaxed text-lg">
                  While slow legacy agencies consume months debugging outdated databases, we ship premium, production-ready web designs in optimal timelines using streamlined components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
