import { AppState, PomodoroSessionLog, PomodoroTimerSettings } from '../types/appState';
import { STORAGE_KEY, THEME_KEY, LANG_KEY, ROUTE_IDS } from '../constants';
import { renderAll } from '../renderer';

export const DEFAULT_POMODORO_SETTINGS: PomodoroTimerSettings = {
  preset: '25/5',
  focusDuration: 25,
  breakDuration: 5,
  longBreakDuration: 15,
  autoStartBreaks: false,
  soundEnabled: true,
  notificationEnabled: true,
};

const defaultState: AppState = {
  checked: {},
  resourceFlags: {},
  activeTab: ROUTE_IDS.DASHBOARD,
  theme: 'dark',
  lang: 'vi',
  pomodoroSettings: { ...DEFAULT_POMODORO_SETTINGS },
  pomodoroSessions: [],
};

let state: AppState = { ...defaultState };

export const getInitialTheme = (): 'dark' | 'light' => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const getInitialLang = (): 'vi' | 'en' => {
  const savedLang = localStorage.getItem(LANG_KEY);
  return savedLang === 'en' ? 'en' : 'vi';
};

export const normalizeState = (raw: Partial<AppState> | null): AppState => {
  if (!raw || typeof raw !== 'object') {
    return { ...defaultState, theme: getInitialTheme(), lang: getInitialLang() };
  }

  return {
    checked: raw.checked && typeof raw.checked === 'object' ? raw.checked : {},
    resourceFlags: raw.resourceFlags && typeof raw.resourceFlags === 'object' ? raw.resourceFlags : {},
    activeTab: raw.activeTab && typeof raw.activeTab === 'string' ? raw.activeTab : ROUTE_IDS.DASHBOARD,
    theme: raw.theme === 'light' || raw.theme === 'dark' ? raw.theme : getInitialTheme(),
    lang: raw.lang === 'en' || raw.lang === 'vi' ? raw.lang : getInitialLang(),
    pomodoroSettings: raw.pomodoroSettings
      ? { ...DEFAULT_POMODORO_SETTINGS, ...raw.pomodoroSettings }
      : { ...DEFAULT_POMODORO_SETTINGS },
    pomodoroSessions: Array.isArray(raw.pomodoroSessions) ? raw.pomodoroSessions : [],
  };
};

export const loadState = (): AppState => {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    if (!item) {
      state = normalizeState(null);
      return state;
    }
    const parsed = JSON.parse(item);
    state = normalizeState(parsed);
    return state;
  } catch (err) {
    console.error('Failed to load state from localStorage', err);
    state = normalizeState(null);
    return state;
  }
};

export const saveState = (): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    localStorage.setItem(THEME_KEY, state.theme);
    localStorage.setItem(LANG_KEY, state.lang);
  } catch (err) {
    console.error('Failed to save state to localStorage', err);
  }
};

export const getState = (): AppState => state;

export const toggleChecked = (id: string): void => {
  state.checked[id] = !state.checked[id];
  saveState();
  renderAll();
};

export const setChecked = (id: string, value: boolean): void => {
  state.checked[id] = value;
  saveState();
  renderAll();
};

export const toggleResourceFlag = (id: string): void => {
  state.resourceFlags[id] = !state.resourceFlags[id];
  saveState();
  renderAll();
};

export const setActiveTabState = (tabId: string): void => {
  state.activeTab = tabId;
  saveState();
};

export const setThemeState = (theme: 'dark' | 'light'): void => {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  saveState();
  renderAll();
};

export const setLangState = (lang: 'vi' | 'en'): void => {
  state.lang = lang;
  document.documentElement.setAttribute('lang', lang);
  saveState();
  renderAll();
};

export const resetProgress = (): void => {
  state.checked = {};
  state.resourceFlags = {};
  state.pomodoroSessions = [];
  state.pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
  saveState();
  renderAll();
};

export const addPomodoroSession = (sessionData: Omit<PomodoroSessionLog, 'id' | 'timestamp'>): PomodoroSessionLog => {
  if (!state.pomodoroSessions) {
    state.pomodoroSessions = [];
  }
  const newLog: PomodoroSessionLog = {
    ...sessionData,
    id: 'pom_log_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    timestamp: Date.now(),
  };
  state.pomodoroSessions.push(newLog);
  saveState();
  renderAll();
  return newLog;
};

export const removePomodoroSession = (id: string): void => {
  if (state.pomodoroSessions) {
    state.pomodoroSessions = state.pomodoroSessions.filter((s) => s.id !== id);
    saveState();
    renderAll();
  }
};

export const updatePomodoroSettings = (newSettings: Partial<PomodoroTimerSettings>): void => {
  state.pomodoroSettings = {
    ...(state.pomodoroSettings || DEFAULT_POMODORO_SETTINGS),
    ...newSettings,
  };
  saveState();
  renderAll();
};

export const importState = (newState: Partial<AppState>): void => {
  state = normalizeState(newState);
  document.documentElement.setAttribute('data-theme', state.theme);
  document.documentElement.setAttribute('lang', state.lang);
  saveState();
  renderAll();
};

export const exportStateJSON = (): string => {
  return JSON.stringify(state, null, 2);
};

