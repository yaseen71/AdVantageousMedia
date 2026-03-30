import React from 'react';
import { INSIGHTS } from '../constants';

const BusinessInsights: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-slate-50 dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="mb-4 px-4 py-1.5 glass w-fit rounded-full flex items-center gap-2 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400">
                Agency Intelligence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Business <span className="text-gradient">Insights.</span></h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-xl text-lg">
              We don't just guess; we compute. Explore the core metrics and strategic principles that drive the AdVantageous edge.
            </p>
          </div>
          <div className="flex items-center gap-3 glass px-6 py-3 rounded-2xl border-blue-500/10">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#050505] bg-slate-300 dark:bg-white/10 overflow-hidden">
                  <img src={`https://picsum.photos/seed/expert-${i}/100/100`} alt="Analyst" />
                </div>
              ))}
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-gray-400">Live Analyst Monitoring</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSIGHTS.map((insight) => (
            <div 
              key={insight.id} 
              className="group glass p-8 rounded-[2rem] border border-black/5 dark:border-white/10 hover:border-blue-500/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl">{insight.icon}</span>
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600/10 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
                  {insight.trend}
                </span>
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-1 tracking-tighter">
                  {insight.metric}
                </div>
                <h3 className="text-lg font-bold text-slate-700 dark:text-white mb-4">{insight.title}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed">
                  {insight.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 glass rounded-[2.5rem] border border-blue-500/10 bg-blue-500/[0.02] flex flex-col md:flex-row items-center gap-8">
           <div className="w-20 h-20 rounded-full bg-gradient-main flex items-center justify-center text-3xl shadow-lg shadow-blue-500/20 flex-shrink-0">
             ⚡
           </div>
           <div>
             <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">The Data Philosophy</h4>
             <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-3xl">
               Every impression is a data point. Every click is a behavioral signal. Our systems aggregate millions of cross-platform interactions daily to refine our global marketing model, ensuring that AdVantageousMedia clients are always three steps ahead of market volatility.
             </p>
           </div>
           <button className="whitespace-nowrap px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:scale-105 transition-all shadow-xl ml-auto active:scale-95">
             Full Intelligence Report
           </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessInsights;