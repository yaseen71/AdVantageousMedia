import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

interface HeroProps {
  onLaunchClick: () => void;
  onProofClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLaunchClick, onProofClick }) => {
  const [analysisInput, setAnalysisInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!analysisInput) return;
    setLoading(true);
    const result = await geminiService.analyzeMarketingGoals(analysisInput);
    setAnalysisResult(result);
    setLoading(false);
  };

  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden min-h-screen flex flex-col justify-center transition-colors duration-300">
      <div className="absolute top-0 -left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-10 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-20 -right-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-10 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 dark:opacity-15 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="mb-6 px-4 py-1.5 glass rounded-full flex items-center gap-2 border border-blue-500/20 opacity-0 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#48fffa] animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 dark:text-[#48fffa]">
              Next-Gen AI Marketing Agency
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05] tracking-tighter mb-8 text-slate-900 dark:text-white opacity-0 animate-fade-in animation-delay-100">
            Secure Your <br />
            <span className="text-gradient text-glow-blue inline-block">AdVantage.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            Harness the predictive power of Artificial Intelligence to dominate your niche. 
            We build algorithms that don't just reach audiences—they convert them.
          </p>
          
          <div className="flex flex-wrap gap-5 opacity-0 animate-fade-in animation-delay-300">
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

        <div className="lg:col-span-5 opacity-0 animate-fade-in animation-delay-500">
          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/10 relative shadow-2xl animate-float">
            <div className="absolute -top-4 -right-4 px-5 py-2 bg-gradient-main text-[10px] font-black text-white rounded-full animate-pulse z-20 tracking-widest uppercase shadow-lg shadow-blue-500/30">
              Live Neural Analysis
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-2xl" aria-hidden="true">🤖</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Strategy Simulator</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400">Describe your business for a custom roadmap</p>
              </div>
            </div>

            <form onSubmit={handleAnalyze} className="space-y-5">
              <div className="relative group">
                <label htmlFor="business-analysis" className="sr-only">Business Description</label>
                <textarea
                  id="business-analysis"
                  className="w-full bg-slate-100/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-2xl p-5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all min-h-[120px] placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="e.g. Aura Beauty: A high-end skincare line targeting tech-savvy millennials in Tokyo."
                  value={analysisInput}
                  onChange={(e) => setAnalysisInput(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                disabled={loading || !analysisInput}
                className={`w-full py-5 rounded-2xl font-bold text-sm text-white transition-all focus:ring-4 focus:ring-pink-500/30 outline-none ${loading ? 'bg-slate-400 dark:bg-slate-700 cursor-not-allowed' : 'bg-gradient-main hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 disabled:opacity-50'}`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Synthesizing Strategy...
                  </span>
                ) : 'Generate Growth Roadmap'}
              </button>
            </form>

            {analysisResult && (
              <div className="mt-8 p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 animate-fade-in" role="region" aria-live="polite">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-4 bg-[#db0072] rounded-full"></span>
                  <div className="text-xs font-black text-[#db0072] tracking-widest uppercase">Intelligence Report</div>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-gray-300">
                  {analysisResult}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;