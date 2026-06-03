
import React from 'react';
import { Service, PortfolioItem, Insight } from './types';

export const SERVICES: Service[] = [
  {
    id: 'bespoke-web-design',
    title: 'Bespoke Web Design',
    description: 'We craft stunning, pixel-perfect user interfaces tailored specifically to your unique brand identity, beautifully blending layout, typography, and premium user experience.',
    icon: '🎨'
  },
  {
    id: 'sub-second-web-apps',
    title: 'Sub-Second Web Systems',
    description: 'Built with React, Vite, and modern serverless architectures. We ensure your application loads instantaneously globally, maximizing retention and conversion rates.',
    icon: '⚡'
  },
  {
    id: 'media-footage-integration',
    title: 'Custom Media & Footage Integration',
    description: 'Incorporate your own custom video footage, commercial assets, and photography. We seamlessly optimize and embed your unique media directly into high-performance web structures for a personalized digital presence.',
    icon: '🎥'
  },
  {
    id: 'interactive-collaboration',
    title: 'Premium Client Collaboration',
    description: 'We work step-by-step with you in a highly interactive process, utilizing collaborative live design reviews, real-time prototypes, and premium iterative updates to bring your vision online flawlessly.',
    icon: '✨'
  },
  {
    id: 'fast-website-creation',
    title: 'Fast Website Creation',
    description: 'We construct and deploy lightning-fast, highly optimized websites that offer instantaneous load times, superior search ranking viability, and flawless responsiveness.',
    icon: '🚀'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'project-1',
    title: 'Lumina Premium Apparel',
    description: 'A headless e-commerce flagship with stunning visual layouts, loading in under 200ms with bespoke cart functions.',
    category: 'E-Commerce Stack',
    image: 'https://picsum.photos/seed/cosmetics/800/500'
  },
  {
    id: 'project-2',
    title: 'Titan SaaS Analytics Dashboard',
    description: 'A high-performance analytics interface featuring robust chart structures, data queries, and secure user permissions.',
    category: 'SaaS Platform',
    image: 'https://picsum.photos/seed/energy/800/500'
  },
  {
    id: 'project-3',
    title: 'Veloce Bespoke Creative Agency',
    description: 'A beautifully interactive portfolio site styled with deep slate contrast colors, smooth layouts, and animations.',
    category: 'Interactive UI',
    image: 'https://picsum.photos/seed/apparel/800/500'
  },
  {
    id: 'project-4',
    title: 'Nexus Administrative Core',
    description: 'An internal web system mapping warehouse logistics, featuring Stripe reporting and tailored customer logs.',
    category: 'Custom Web Platform',
    image: 'https://picsum.photos/seed/software/800/500'
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: 'performance',
    title: 'Website Performance',
    description: 'Google Lighthouse optimization scores demonstrating instantaneous, fluid browser rendering.',
    icon: '⚡',
    trend: 'Pruned Bloat',
    metric: '100/100'
  },
  {
    id: 'conversion',
    title: 'Conversion Expansion',
    description: 'Average increase in online customer sales following a legacy Migration to our custom React stack.',
    icon: '📈',
    trend: 'Sales Boost',
    metric: '+82%'
  },
  {
    id: 'loading_speed',
    title: 'Load Speed Benchmark',
    description: 'Extrafast initial content paint measured across premium serverless edge networks.',
    icon: '⏱️',
    trend: 'Sub-Fluid Time',
    metric: '0.3s'
  },
  {
    id: 'security_uptime',
    title: 'Secured Architecture',
    description: 'Static hosting platforms offering absolute resistance to typical server vulnerabilities.',
    icon: '🔒',
    trend: 'Risk Gated',
    metric: '99.9%'
  }
];
