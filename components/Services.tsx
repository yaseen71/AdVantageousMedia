import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onCustomClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onCustomClick }) => {
  return (
    <section id="services" className="py-24 bg-[#FCFBF9] dark:bg-[#060B09] border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white font-serif">What We <span className="text-gradient">Offer.</span></h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-lg">
            Our offerings range from high-performance landing pages to scalable dynamic web solutions. We don't just write code; we deploy digital ecosystems with modern layout mechanics and smooth transitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group glass p-6 md:p-10 rounded-3xl border border-black/5 dark:border-white/10 hover:border-[#1B4231]/40 dark:hover:border-[#A1CCA5]/30 transition-all hover:-translate-y-2">
              <div className="text-4xl mb-6 bg-slate-200/50 dark:bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white font-serif">{service.title}</h3>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
          
          <div className="bg-gradient-main p-6 md:p-10 rounded-3xl flex flex-col justify-center items-center text-center shadow-2xl shadow-emerald-950/20">
            <h3 className="text-2xl font-bold mb-4 text-white font-serif">Custom Web Platforms</h3>
            <p className="mb-8 text-emerald-100/90 max-w-xs">Need a tailored web application, bespoke database integration, or a unique interactive tool?</p>
            <button 
              onClick={onCustomClick}
              className="px-8 py-3 bg-[#FAF8F5] text-[#1B4231] font-bold rounded-full hover:scale-105 transition-all focus:ring-4 focus:ring-white/50 outline-none active:scale-95"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;