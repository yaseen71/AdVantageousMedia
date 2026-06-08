import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import ParallaxHeroBackground from './ParallaxHeroBackground';

interface HeroProps {
  onLaunchClick: () => void;
  onProofClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLaunchClick, onProofClick }) => {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden min-h-screen flex flex-col justify-center transition-colors duration-300">
      <ParallaxHeroBackground />

      <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="mb-6 px-4 py-1.5 glass rounded-full flex items-center gap-2 border border-emerald-500/10 opacity-0 animate-fade-in bg-white/20 dark:bg-black/20">
            <span className="w-2 h-2 rounded-full bg-[#A1CCA5] animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-700 dark:text-[#A1CCA5]">
              Next-Gen Custom Website Creation
            </span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[1.15] tracking-tighter mb-8 text-slate-900 dark:text-white opacity-0 animate-fade-in animation-delay-100 font-serif">
            Secure Your <br />
            <span className="text-gradient text-glow-blue inline-block px-4 pb-2 italic">AdVantage.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200 mx-auto">
            We design and build ultra-fast, high-converting websites and custom web systems using modern frameworks that amplify your brand and scale your business effortlessly.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5 opacity-0 animate-fade-in animation-delay-300">
            <button 
              onClick={onLaunchClick}
              className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl overflow-hidden focus:ring-4 focus:ring-blue-500/50 outline-none active:scale-95"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-main opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button 
              onClick={onProofClick}
              className="px-10 py-5 glass border border-black/5 dark:border-white/20 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              See The Proof
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;