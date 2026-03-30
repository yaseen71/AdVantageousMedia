
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

// Added Insight interface for data-driven agency metrics
export interface Insight {
  id: string;
  title: string;
  description: string;
  icon: string;
  trend: string;
  metric: string;
}