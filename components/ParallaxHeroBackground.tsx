import React, { useEffect, useRef } from 'react';

const ParallaxHeroBackground: React.FC = () => {
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const meshLayerRef = useRef<HTMLDivElement>(null);
  const blobsLayerRef = useRef<HTMLDivElement>(null);
  const particlesLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Completely disable parallax calculations on mobile devices to preserve high FPS and smooth scrolling
    const isMobileDevice = window.matchMedia('(max-width: 768px)').matches;
    if (isMobileDevice) {
      return;
    }

    const bgLayer = bgLayerRef.current;
    const meshLayer = meshLayerRef.current;
    const blobsLayer = blobsLayerRef.current;
    const particlesLayer = particlesLayerRef.current;

    let ticking = false;
    let lastScrollY = 0;
    let animationFrameId: number;

    const updateParallax = (scrollY: number) => {
      // Background Image Layer: moves slowly (0.12 speed)
      if (bgLayer) {
        bgLayer.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
      }
      // Tech-Organic Mesh Grid: moves moderately (0.22 speed)
      if (meshLayer) {
        meshLayer.style.transform = `translate3d(0, ${scrollY * 0.22}px, 0)`;
      }
      // Glowing Auras / Blurred Blobs: moves slightly faster (0.35 speed)
      if (blobsLayer) {
        blobsLayer.style.transform = `translate3d(0, ${scrollY * 0.35}px, 0)`;
      }
      // Interactive Drifting Particles: moves fast (0.55 speed)
      if (particlesLayer) {
        particlesLayer.style.transform = `translate3d(0, ${scrollY * 0.55}px, 0)`;
      }
    };

    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        animationFrameId = requestAnimationFrame(() => {
          updateParallax(lastScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Set initial layout alignment
    updateParallax(window.scrollY);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Deep Atmospheric Parallax Image Layer */}
      <div 
        ref={bgLayerRef} 
        className="absolute inset-x-0 -top-20 -bottom-40 transition-opacity duration-700 ease-in-out"
      >
        {/* Light Theme Background Forest */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] dark:opacity-0 transition-opacity duration-500"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=60&w=900')" }}
        />
        {/* Dark Theme Background Forest */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-[0.14] transition-opacity duration-500"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=60&w=900')" }}
        />
        
        {/* High-Performance Linear Masks for Perfect Seamless Blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent dark:from-[#080E0C] dark:via-[#080E0C]/85" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FAF8F5] to-transparent dark:from-[#080E0C]" />
      </div>

      {/* 2. Abstract Organic Tech Mesh Network Layer */}
      <div ref={meshLayerRef} className="absolute inset-0 opacity-15 dark:opacity-[0.25]">
        {/* Elegant structural coordinates network */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grad-light" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1B4231" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1B4231" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="grad-dark" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A1CCA5" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#A1CCA5" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          <g className="dark:hidden">
            {/* Tech nodes */}
            <circle cx="15%" cy="30%" r="6" fill="#1B4231" opacity="0.6" />
            <circle cx="20%" cy="45%" r="4" fill="#1B4231" opacity="0.4" />
            <circle cx="85%" cy="25%" r="5" fill="#1B4231" opacity="0.5" />
            <circle cx="80%" cy="60%" r="7" fill="#1B4231" opacity="0.7" />
            <circle cx="75%" cy="40%" r="3" fill="#1B4231" opacity="0.3" />
            <circle cx="50%" cy="18%" r="4" fill="#1B4231" opacity="0.4" />
            
            {/* Connection lines */}
            <path d="M15% 30% L20% 45% M85% 25% L75% 40% L80% 60% M50% 18% L85% 25%" stroke="#1B4231" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
          </g>

          <g className="hidden dark:block">
            {/* Dark Mode Organic Tech nodes */}
            <circle cx="15%" cy="30%" r="6" fill="#A1CCA5" opacity="0.4" />
            <circle cx="20%" cy="45%" r="4" fill="#A1CCA5" opacity="0.3" />
            <circle cx="85%" cy="25%" r="5" fill="#A1CCA5" opacity="0.3" />
            <circle cx="80%" cy="60%" r="7" fill="#A1CCA5" opacity="0.5" />
            <circle cx="75%" cy="40%" r="3" fill="#A1CCA5" opacity="0.2" />
            <circle cx="50%" cy="18%" r="4" fill="#A1CCA5" opacity="0.3" />
            
            {/* Connection lines */}
            <path d="M15% 30% L20% 45% M85% 25% L75% 40% L80% 60% M50% 18% L85% 25%" stroke="#A1CCA5" strokeWidth="1" strokeDasharray="6,4" opacity="0.15" />
          </g>
        </svg>
      </div>

      {/* 3. High-Depth Blurred Glowing Auras (Blobs) */}
      <div ref={blobsLayerRef} className="absolute inset-0">
        {/* Emerald Blob */}
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-emerald-800/10 dark:bg-emerald-600/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[110px] animate-blob" />
        
        {/* Amber Blob */}
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-amber-600/5 dark:bg-amber-600/12 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[110px] animate-blob animation-delay-2000" />
        
        {/* Soft Center Bottom Emerald Blur */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/5 dark:bg-emerald-500/12 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[130px] animate-blob animation-delay-4000" />
      </div>

      {/* 4. Elegant 3D Interactive Floating Particles & Digital Foliage */}
      <div ref={particlesLayerRef} className="absolute inset-0">
        {/* Particle / Leaf 1 */}
        <div className="absolute top-[28%] left-[12%] animate-float">
          <svg className="w-5 h-5 text-emerald-800/25 dark:text-[#A1CCA5]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        </div>
        
        {/* Particle / Leaf 2 */}
        <div className="absolute top-[55%] left-[8%] animate-float animation-delay-500">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-700/20 dark:bg-[#A1CCA5]/40 filter blur-[1px]"></div>
        </div>

        {/* Particle / Leaf 3 */}
        <div className="absolute top-[22%] right-[14%] animate-float animation-delay-300">
          <svg className="w-7 h-7 text-amber-500/15 dark:text-amber-400/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
          </svg>
        </div>

        {/* Particle / Leaf 4 */}
        <div className="absolute top-[48%] right-[10%] animate-float animation-delay-2000">
          {/* Subtle nature leaf line-art */}
          <svg className="w-6 h-6 text-emerald-700/20 dark:text-emerald-400/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 3C10.5 3 3 10.5 3 21C3 21 12 19.5 16.5 15C19.5 12 21 4.5 21 3Z" />
            <path d="M3 21L12 12" />
          </svg>
        </div>

        {/* Particle / Leaf 5 */}
        <div className="absolute top-[68%] left-[22%] animate-float animation-delay-4000">
          <div className="w-3 h-3 rounded-md rotate-45 border border-emerald-500/10 dark:border-emerald-500/25"></div>
        </div>

        {/* Particle / Leaf 6 */}
        <div className="absolute top-[75%] right-[25%] animate-float animation-delay-2000">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 dark:bg-emerald-400/30"></div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHeroBackground;
