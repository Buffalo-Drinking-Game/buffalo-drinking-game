export interface User {
  name?: string;
  ageVerified: boolean;
  joinedAt: string;
  dominant_hand?: 'left' | 'right';
  returningVisit: boolean;
}

export interface Rule {
  id: string;
  title: string;
  description: string;
  emphasis?: string[];
  order: number;
}

export interface Variation {
  id: string;
  title: string;
  description: string;
  popularity?: 'high' | 'medium' | 'low';
  mustAgreeBeforehand: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, unknown>;
}

export type SocialPlatform = 'x' | 'instagram' | 'tiktok' | 'reddit';

export interface SocialPost {
  id: string;
  platform: SocialPlatform;
  authorName: string;
  authorHandle: string;
  content: string;
  imageUrl?: string;
  originalUrl: string;
  postedAt: string;
  likes?: number;
  featured?: boolean;
}
