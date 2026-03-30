
import React from 'react';
import { Service, PortfolioItem, Insight } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ai-video-ads',
    title: 'AI Video Production',
    description: 'High-converting video ads generated entirely via AI. We create cinematic-quality visual storytelling without the need for expensive cameras, crews, or location scouting.',
    icon: '🎬'
  },
  {
    id: 'weekly-ad-cycles',
    title: 'Weekly Ad Refresh',
    description: 'Stop ad fatigue before it happens. Our AI engine produces fresh creative variations every week, keeping your campaigns high-performing and your ROAS stable.',
    icon: '🔄'
  },
  {
    id: 'neural-creatives',
    title: 'Neural Creative Design',
    description: 'Static and motion assets engineered for platform-specific algorithms. From TikTok trends to LinkedIn professionalism, our AI adapts to every feed.',
    icon: '🧠'
  },
  {
    id: 'bespoke-branding',
    title: 'Brand-Locked AI',
    description: 'We train custom models on your brand guidelines to ensure every AI-generated ad looks, feels, and speaks exactly like your company—only faster and cheaper.',
    icon: '🛡️'
  },
  {
    id: 'cost-efficiency',
    title: 'Zero-Overhead Ads',
    description: 'Eliminate the $20k production budget. Get agency-level creative output at a fraction of the cost, redirecting your saved capital into your actual ad spend.',
    icon: '💰'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'project-1',
    title: 'Lumina Cosmetics',
    description: 'A series of 15 AI-generated video ads for a product launch that never existed in a physical studio.',
    category: 'AI Video Ads',
    image: 'https://picsum.photos/seed/cosmetics/800/500'
  },
  {
    id: 'project-2',
    title: 'Titan Energy',
    description: '30 unique ad variations created in 48 hours to A/B test high-performance neural backgrounds.',
    category: 'High-Volume Creative',
    image: 'https://picsum.photos/seed/energy/800/500'
  },
  {
    id: 'project-3',
    title: 'Veloce Apparel',
    description: 'AI-swapped models and environments allowing for instant global localization of ad campaigns.',
    category: 'Dynamic Creative',
    image: 'https://picsum.photos/seed/apparel/800/500'
  },
  {
    id: 'project-4',
    title: 'Nexus Software',
    description: 'Abstract conceptual video ads for SaaS features using advanced neural generative text-to-video.',
    category: 'B2B AI Ads',
    image: 'https://picsum.photos/seed/software/800/500'
  }
];

// Added INSIGHTS constant to fix the missing export error in BusinessInsights.tsx
export const INSIGHTS: Insight[] = [
  {
    id: 'velocity',
    title: 'Creative Velocity',
    description: 'AI-driven production cycles that keep your brand ahead of platform trends.',
    icon: '⚡',
    trend: '+450% Speed',
    metric: '10x'
  },
  {
    id: 'roas',
    title: 'Return on Spend',
    description: 'Algorithmic bid optimization ensuring every dollar works harder for your bottom line.',
    icon: '📈',
    trend: 'Industry Lead',
    metric: '4.8x'
  },
  {
    id: 'retention',
    title: 'Audience Retention',
    description: 'Neural creative variations specifically engineered to capture attention within 1.5 seconds.',
    icon: '🧠',
    trend: '+22% Hold',
    metric: '88%'
  },
  {
    id: 'overhead',
    title: 'Budget Efficiency',
    description: 'Redirecting production overhead into high-performing media spend for max impact.',
    icon: '💰',
    trend: 'Cost Saved',
    metric: '-75%'
  }
];