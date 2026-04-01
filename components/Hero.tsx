import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

interface HeroProps {
  onLaunchClick: () => void;
  onProofClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLaunchClick, onProofClick }) => {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden min-h-screen flex flex-col justify-center transition-colors duration-300">
      <div className="absolute top-0 -left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-10 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-20 -right-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-10 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 dark:opacity-15 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="mb-6 px-4 py-1.5 glass rounded-full flex items-center gap-2 border border-blue-500/20 opacity-0 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#48fffa] animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 dark:text-[#48fffa]">
              Next-Gen AI Marketing Agency
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.2] tracking-tighter mb-8 text-slate-900 dark:text-white opacity-0 animate-fade-in animation-delay-100">
            Secure Your <br />
            <span className="text-gradient text-glow-blue inline-block px-4 pb-2">AdVantage.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200 mx-auto">
            Harness the predictive power of Artificial Intelligence to dominate your niche. 
            We build algorithms that don't just reach audiences—they convert them.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5 opacity-0 animate-fade-in animation-delay-300">
            <button 
              onClick={onLaunchClick}
              className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl overflow-hidden focus:ring-4 focus:ring-blue-500/50 outline-none active:scale-95"
            >
              <span className="relative z-10">Launch Your Campaign</span>
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