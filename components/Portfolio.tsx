
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-slate-50 dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <div className="mb-4 px-4 py-1.5 glass w-fit mx-auto md:mx-0 rounded-full flex items-center gap-2 border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 dark:text-[#48fffa]">
              Traditional vs Our Methodology
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight tracking-tighter">
            Better Quality. <span className="text-gradient">Higher Conversion.</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
            We don't just replace photographers; we replace the entire friction-heavy production cycle with near-instant neural synthesis.
          </p>
        </div>

        {/* Comparison Section: Product Fidelity */}
        <div className="mb-20">
          <div className="relative group max-w-6xl mx-auto">
            <div className="relative glass p-4 rounded-[3rem] border border-black/10 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] bg-black overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 rounded-[2.5rem] overflow-hidden">
                {/* Traditional Side */}
                <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden group/img">
                  <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200" 
                    alt="Traditional Studio Photography" 
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute bottom-10 left-10">
                    <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] mb-1">TRADITIONAL</div>
                    <div className="text-3xl font-bold text-white uppercase tracking-tight">Expensive Studio</div>
                  </div>
                  <div className="absolute top-8 left-8">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black text-white/60 tracking-widest uppercase">
                      Traditional • 3 Weeks
                    </div>
                  </div>
                </div>

                {/* Our Side */}
                <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden group/img border-t md:border-t-0 md:border-l-2 border-blue-500">
                  <img 
                    src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=1200" 
                    alt="AI Generated Neural Render" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-1">ADVANTAGE AI</div>
                    <div className="text-3xl font-bold text-white uppercase tracking-tight">Our Render</div>
                  </div>
                  <div className="absolute top-8 left-8">
                    <div className="px-3 py-1 bg-blue-600 text-[9px] font-black text-white tracking-widest uppercase rounded-full shadow-lg shadow-blue-500/50 animate-pulse">
                      Our Render • 20 Mins
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg md:text-xl italic font-medium text-slate-500 dark:text-gray-400 px-6 leading-relaxed">
                "Can you spot the difference? Neither can the algorithms—except the AI ad converted <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4">40% better</span>."
              </p>
            </div>
          </div>
        </div>

        {/* Why Synthetic Production Section - Redesigned for Maximum Attraction */}
        <div className="pt-24 border-t border-black/5 dark:border-white/5">
          <div className="max-w-5xl mb-16">
            <h3 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tighter">
              The End of the <span className="text-[#db0072]">Production Drain.</span>
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
              Traditional ad production is a logistical nightmare of travel, equipment rentals, and crew fees. At <span className="text-slate-900 dark:text-white font-semibold">AdVantageousMedia</span>, we bypass the physical world entirely.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Zero Weather Risk Card */}
            <div className="relative group overflow-hidden rounded-[2rem] bg-slate-900 dark:bg-black p-1">
              <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors"></div>
              <div className="relative h-full bg-[#0a0a0a] rounded-[1.9rem] p-10 border border-blue-500/30 group-hover:border-blue-500 transition-all shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  Zero Weather Risk
                </h4>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Outdoor shoots stop for rain. Our neural engine generates "Golden Hour" lighting on demand, 24/7, with zero delays. Weather never dictates your campaign timeline.
                </p>
              </div>
            </div>

            {/* Unbeatable Cost Efficiency Card */}
            <div className="relative group overflow-hidden rounded-[2rem] bg-slate-900 dark:bg-black p-1">
              <div className="absolute inset-0 bg-[#db0072]/20 group-hover:bg-[#db0072]/40 transition-colors"></div>
              <div className="relative h-full bg-[#0a0a0a] rounded-[1.9rem] p-10 border border-[#db0072]/30 group-hover:border-[#db0072] transition-all shadow-[0_0_30px_-10px_rgba(219,0,114,0.3)]">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  Unbeatable Cost Efficiency
                </h4>
                <p className="text-gray-400 leading-relaxed text-lg">
                  By removing travel, high-end crews, and set builds, we provide premium assets at a fraction of traditional costs. Invest your budget where it counts: in the media spend.
                </p>
              </div>
            </div>

            {/* Instant Iteration Card */}
            <div className="relative group overflow-hidden rounded-[2rem] bg-slate-900 dark:bg-black p-1">
              <div className="absolute inset-0 bg-[#48fffa]/20 group-hover:bg-[#48fffa]/40 transition-colors"></div>
              <div className="relative h-full bg-[#0a0a0a] rounded-[1.9rem] p-10 border border-[#48fffa]/30 group-hover:border-[#48fffa] transition-all shadow-[0_0_30px_-10px_rgba(72,255,250,0.3)]">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  Instant Iteration
                </h4>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Don't like the background? Change it in minutes, not weeks. We A/B test environments at scale to find what works best for your specific audience.
                </p>
              </div>
            </div>

            {/* Production Velocity Card */}
            <div className="relative group overflow-hidden rounded-[2rem] bg-slate-900 dark:bg-black p-1">
              <div className="absolute inset-0 bg-slate-500/20 group-hover:bg-slate-400/40 transition-colors"></div>
              <div className="relative h-full bg-[#0a0a0a] rounded-[1.9rem] p-10 border border-slate-500/30 group-hover:border-slate-300 transition-all shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  Production Velocity
                </h4>
                <p className="text-gray-400 leading-relaxed text-lg">
                  While competitors wait for weather windows or studio availability, we ship high-converting creatives daily. Speed is the ultimate advantage.
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
