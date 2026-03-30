
import React from 'react';

const StatsBanner: React.FC = () => {
  const capabilities = [
    { label: 'AI AD PRODUCTION', status: 'ACTIVE' },
    { label: 'NEURAL VIDEO GEN', status: 'LIVE' },
    { label: 'BRAND-LOCKED ASSETS', status: 'SYNCED' },
    { label: 'WEEKLY AD CYCLES', status: 'RUNNING' },
  ];

  return (
    <section className="relative w-full overflow-hidden py-10 md:py-14">
      {/* Background with subtle shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3156fe] via-[#db0072] to-[#3156fe] bg-[length:200%_auto] animate-shimmer opacity-95"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-center">
          {capabilities.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="text-[10px] font-black text-white/70 tracking-widest">
                  {item.status}
                </span>
              </div>
              
              <div className="text-center">
                <span className="text-lg md:text-xl font-extrabold text-white tracking-tighter group-hover:scale-105 transition-transform duration-300 block">
                  {item.label}
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-white/30 transition-all duration-500 mx-auto mt-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
