
import React, { useState, useMemo } from 'react';

const TIMEZONES = [
  "UK, Ireland, Lisbon Time (GMT/BST)",
  "Central European Time (CET)",
  "Eastern Standard Time (EST)",
  "Pacific Standard Time (PST)",
  "Japan Standard Time (JST)"
];

const DiscoveryCall: React.FC = () => {
  const now = new Date();
  const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    user_email: '',
    user_phone: '',
    businessDetails: ''
  });

  const isFormValid = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name.trim().length > 1 && 
      emailRegex.test(formData.user_email) && 
      formData.user_phone.trim().length > 5
    );
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleConfirm = async () => {
    if (!isFormValid) return;
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const apiUrl = '/api/v1/inquiry';
      console.log(`Submitting form to: ${apiUrl}`);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      let data: any = {};
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.warn('Response is not JSON:', text.substring(0, 100));
        if (!response.ok) {
          throw new Error(`Server error (${response.status}): ${text.substring(0, 100)}`);
        }
      }

      if (!response.ok) {
        const errorMsg = data.error || 'Failed to submit inquiry';
        const details = data.details ? ` (${data.details})` : '';
        throw new Error(`${errorMsg}${details}`);
      }

      setIsBooked(true);
      // Reset form after success message
      setTimeout(() => {
        setIsBooked(false);
        setFormData({ name: '', user_email: '', user_phone: '', businessDetails: '' });
      }, 6000);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitError(error instanceof Error ? error.message : 'There was an error submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-booking" className="py-24 bg-[#FAF8F5] dark:bg-[#080E0C] border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight leading-tight font-serif">
            Request Your Free <br/><span className="text-gradient font-serif italic inline-block pr-2">Discovery Call</span>
          </h2>
          <div className="space-y-8 text-slate-600 dark:text-gray-300 text-lg">
            <p className="leading-relaxed">
              At AdVantageousMedia, we don’t follow standard template formulas. We’re your dedicated digital engineering partner—strategic, collaborative, and focused on building custom web ecosystems that scale organically.
            </p>
            
            {/* AdVantage Meeting Bonus Card - Optimized for Both Modes */}
            <div className="p-8 bg-white dark:bg-emerald-950/20 border border-emerald-500/10 dark:border-[#7EA18F]/20 rounded-[2.5rem] shadow-xl shadow-emerald-500/5 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  🌿
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xl font-serif">The Organic Advantage</h4>
              </div>
              <p className="text-base leading-relaxed text-slate-600 dark:text-gray-300">
                Submit your details and we'll use our <span className="text-[#1B4231] dark:text-[#A1CCA5] font-bold">Natural Code Engine</span> to generate a <span className="text-slate-900 dark:text-white font-semibold">custom concept layout blueprint</span> for your business. We will present this during our initial conference.
              </p>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2rem] border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden relative">
          {isBooked && (
            <div className="absolute inset-0 z-20 bg-gradient-main flex flex-col items-center justify-center text-white text-center p-10 animate-fade-in">
              <div className="text-6xl mb-6">🌿</div>
              <h3 className="text-3xl font-bold mb-4 font-serif">Request Received, {formData.name.split(' ')[0]}!</h3>
              <p className="text-lg opacity-90 max-w-sm">
                Our team will review your details and reach out to <strong>{formData.user_email}</strong> within 24 hours to schedule your sync.
              </p>
              <button 
                onClick={() => setIsBooked(false)}
                className="mt-8 px-8 py-3 bg-[#FAF8F5] text-[#1B4231] font-bold rounded-full hover:scale-105 transition-all shadow-lg"
              >
                Done
              </button>
            </div>
          )}

            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white font-serif">Tell Us About Your Project</h3>
              <p className="text-slate-500 dark:text-gray-400 text-sm">Fill in the details below and our software architects will get to work.</p>
            </div>

          <form noValidate onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#7EA18F] focus:ring-2 focus:ring-[#7EA18F]/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                <input
                  type="text"
                  id="user_email"
                  name="user_email"
                  placeholder="name@company.com"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#7EA18F] focus:ring-2 focus:ring-[#7EA18F]/20 transition-all"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="user_phone" className="block text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
              <input
                type="text"
                id="user_phone"
                name="user_phone"
                placeholder="+44 7000 000000"
                value={formData.user_phone}
                onChange={handleInputChange}
                className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#7EA18F] focus:ring-2 focus:ring-[#7EA18F]/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="businessDetails" className="block text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">Business & Goals</label>
              <textarea
                id="businessDetails"
                name="businessDetails"
                rows={4}
                placeholder="Tell us about your brand and what you're looking to achieve with your new website or custom web ecosystem..."
                value={formData.businessDetails}
                onChange={handleInputChange}
                className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#7EA18F] focus:ring-2 focus:ring-[#7EA18F]/20 transition-all resize-none"
              />
            </div>

            <div className="mt-8">
              <button 
                disabled={!isFormValid || isBooked || isSubmitting}
                onClick={handleConfirm}
                className={`w-full px-12 py-5 rounded-full text-lg font-bold transition-all shadow-xl active:scale-95 outline-none
                  ${isFormValid && !isSubmitting
                    ? 'bg-[#1B4231] dark:bg-[#A1CCA5] text-[#FAF8F5] dark:text-[#0C1410] hover:scale-[1.02] hover:opacity-90 shadow-emerald-950/20 cursor-pointer' 
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-gray-500 cursor-not-allowed opacity-50 shadow-none'}
                `}
              >
                {isSubmitting ? 'Processing...' : isBooked ? 'Success!' : 'Build Your Dream Website'}
              </button>
              {submitError && (
                <p className="mt-4 text-red-500 text-sm font-medium animate-pulse">
                  ⚠️ {submitError}
                </p>
              )}
              {!isFormValid && !isSubmitting && !isBooked && (
                <p className="mt-4 text-slate-400 text-xs italic">
                  Please complete all required fields to secure your call.
                </p>
              )}
            </div>
          </form>

          <div className="mt-10 pt-8 border-t border-black/5 dark:border-white/5">
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400">
              <span className="text-lg">🛡️</span>
              <p>Your data is encrypted and used only to prepare your custom website strategy and conceptual wireframe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryCall;
