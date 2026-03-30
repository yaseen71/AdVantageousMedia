
import React, { useEffect } from 'react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] glass bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] border border-black/10 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-8 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-slate-50 dark:bg-black/40">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-[#48fffa]">AdVantageous Legal</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Privacy Policy</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all hover:scale-110 active:scale-95"
            aria-label="Close"
          >
            <span className="text-2xl">✕</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar text-slate-600 dark:text-gray-300">
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h3>
              <p className="leading-relaxed">
                Welcome to AdVantageousMedia ("I," "we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our AI-driven marketing services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">2. Data We Collect</h3>
              <p className="leading-relaxed mb-4">
                We collect information that you provide directly to us, such as when you book a discovery call or request a quote. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identifiers (Name, Email, Phone Number).</li>
                <li>Business details (Company name, marketing goals, website URLs).</li>
                <li>Interaction data (Queries sent to our AI strategy simulator).</li>
                <li>Technical data (IP address, browser type, cookies).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">3. AI Processing & Neural Engine Usage</h3>
              <div className="p-6 bg-blue-600/5 border border-blue-500/10 rounded-2xl italic">
                <p className="leading-relaxed">
                  As an AI-first agency, we utilize advanced Large Language Models (LLMs) and Neural Networks to process business data for the purpose of generating marketing strategies and creative assets. Your inputs into our "Strategy Simulator" are processed by Google Gemini models to provide real-time value.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. How We Use Your Information</h3>
              <p className="leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Generate personalized AI marketing roadmaps.</li>
                <li>Coordinate and confirm discovery calls.</li>
                <li>Improve our neural ad generation algorithms.</li>
                <li>Communicate performance reports and strategic updates.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Data Retention & Security</h3>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your data. We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">6. Your Rights</h3>
              <p className="leading-relaxed">
                Depending on your location (e.g., UK, EU/GDPR, California/CCPA), you may have the right to access, correct, or delete your personal data. To exercise these rights, please contact our data protection officer at advantageousmedia1@gmail.com.
              </p>
            </section>

            <section className="pb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">7. Contact Us</h3>
              <p className="leading-relaxed">
                If you have questions or comments about this policy, you may email us at <strong>advantageousmedia1@gmail.com</strong>.
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 dark:bg-black/40 border-t border-black/5 dark:border-white/5 flex justify-center">
          <button 
            onClick={onClose}
            className="px-10 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
