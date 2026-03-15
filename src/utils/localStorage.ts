import type { User } from '../types';

const STORAGE_KEYS = {
  USER: 'buffalo_user',
  FAQ_VIEWS: 'buffalo_faq_views',
} as const;

function isClient(): boolean {
  return typeof window !== 'undefined';
}

export function getUser(): User | null {
  if (!isClient()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    if (!raw) return null;
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

export function setUser(user: User): void {
  if (!isClient()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } catch {
    // Storage full or unavailable
  }
}

export function clearUser(): void {
  if (!isClient()) return;
  localStorage.removeItem(STORAGE_KEYS.USER);
}

export function incrementFAQView(faqId: string): number {
  if (!isClient()) return 0;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FAQ_VIEWS);
    const views: Record<string, number> = raw ? JSON.parse(raw) : {};
    views[faqId] = (views[faqId] || 0) + 1;
    localStorage.setItem(STORAGE_KEYS.FAQ_VIEWS, JSON.stringify(views));
    return views[faqId];
  } catch {
    return 0;
  }
}

export function getFAQViews(): Record<string, number> {
  if (!isClient()) return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FAQ_VIEWS);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
