export const STORAGE_KEY = 'ai_langchain_roadmap_state_2026';
export const THEME_KEY = 'ai_langchain_roadmap_theme_2026';
export const LANG_KEY = 'ai_langchain_roadmap_lang_2026';

export type Lang = 'vi' | 'en';

export const ROUTE_IDS = {
  DASHBOARD: 'dashboard',
  ROADMAP: 'roadmap',
  SCHEDULE: 'schedule',
  RESOURCES: 'resources',
  TECHSTACK: 'techstack',
  QUITCRITERIA: 'quitcriteria',
} as const;

export type RouteId = typeof ROUTE_IDS[keyof typeof ROUTE_IDS];
