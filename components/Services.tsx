import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { geminiService } from '../services/geminiService';

interface ServicesProps {
  onCustomClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onCustomClick }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleExplore = async (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setLoading(true);
    setAiInsight('');
    
    const prompt = `Explain how "${serviceTitle}" at AdVantageousMedia specifically helps a business scale using AI. Give a concise, professional, and innovative 2-sentence value proposition.`;
    const response = await geminiService.analyzeMarketingGoals(prompt);
    setAiInsight(response);
    setLoading(false);
  };

  return (
    <section id="services" className="py-24 bg-slate-100/50 dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">What We Offer<span className="text-[#db0072]">.</span></h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-lg">
            Our offerings range from algorithmic brand strategy to automated digital dominance. 
            We don't just market; we optimize every variable for success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group glass p-10 rounded-3xl border border-black/5 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all hover:-translate-y-2">
              <div className="text-4xl mb-6 bg-slate-200/50 dark:bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{service.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <button 
                onClick={() => handleExplore(service.title)}
                className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-4 transition-all cursor-pointer focus:ring-2 focus:ring-blue-500 outline-none rounded-lg py-1 px-2 -ml-2"
                aria-label={`Learn more about ${service.title}`}
              >
                Explore Solution
                <span>→</span>
              </button>
            </div>
          ))}
          
          <div className="bg-gradient-main p-10 rounded-3xl flex flex-col justify-center items-center text-center shadow-2xl shadow-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Custom AI Solutions</h3>
            <p className="mb-8 text-white/90">Need a bespoke machine learning model for your specific industry?</p>
            <button 
              onClick={onCustomClick}
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-all focus:ring-4 focus:ring-white/50 outline-none active:scale-95"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* AI Insight Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true">
          <div className="glass max-w-lg w-full p-10 rounded-[2.5rem] border border-white/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-main"></div>
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="Close Insight"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">💡</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedService} <span className="text-gradient">Insight</span></h3>
            </div>
            
            <div className="min-h-[100px] flex flex-col justify-center">
              {loading ? (
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 dark:bg-white/10 rounded-full w-full animate-pulse"></div>
                  <div className="h-4 bg-slate-200 dark:bg-white/10 rounded-full w-5/6 animate-pulse"></div>
                </div>
              ) : (
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg italic">
                  "{aiInsight}"
                </p>
              )}
            </div>
            
            <button 
              onClick={() => { setSelectedService(null); onCustomClick(); }}
              className="w-full mt-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-600/20"
            >
              Discuss with Specialist
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;