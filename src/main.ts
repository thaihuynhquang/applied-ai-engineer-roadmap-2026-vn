// Import all custom element views to register them
import './views/roadmap-view-dashboard';
import './views/roadmap-view-roadmap';
import './views/roadmap-view-schedule';
import './views/roadmap-view-resources';
import './views/roadmap-view-techstack';
import './views/roadmap-view-quitcriteria';

import { loadState, getState, setThemeState, setLangState } from './state/storage';
import { initRouter, navigateTo } from './router';
import { registerRenderListener, renderAll } from './renderer';
import { handleExportBackup, handleImportBackup, handleResetProgress } from './actions/backup';
import { calculateProgress } from './progress';
import { ICONS } from './utils/icons';
import { RouteId } from './constants';
import { applyStaticTranslations } from './i18n/dom';

function bootstrap(): void {
  // 1. Load initial state
  const state = loadState();

  // 2. Set theme and language attributes
  document.documentElement.setAttribute('data-theme', state.theme);
  document.documentElement.setAttribute('lang', state.lang);
  updateThemeToggleIcon(state.theme);
  updateLangToggleLabel(state.lang);

  // 3. Register render listeners for global badge update + static chrome translations
  registerRenderListener(() => {
    const stats = calculateProgress();
    const badge = document.getElementById('badge-overall-pct');
    if (badge) {
      badge.textContent = `${stats.overallPercentage}%`;
    }
  });
  registerRenderListener(applyStaticTranslations);

  // 4. Bind Header Action Buttons
  const btnTheme = document.getElementById('btn-theme');
  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const currentTheme = getState().theme;
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setThemeState(nextTheme);
      updateThemeToggleIcon(nextTheme);
    });
  }

  const btnLang = document.getElementById('btn-lang');
  if (btnLang) {
    btnLang.addEventListener('click', () => {
      const nextLang = getState().lang === 'vi' ? 'en' : 'vi';
      setLangState(nextLang);
      updateLangToggleLabel(nextLang);
    });
  }

  const btnExport = document.getElementById('btn-export');
  if (btnExport) {
    btnExport.addEventListener('click', handleExportBackup);
  }

  const btnImport = document.getElementById('btn-import');
  if (btnImport) {
    btnImport.addEventListener('click', handleImportBackup);
  }

  const btnReset = document.getElementById('btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', handleResetProgress);
  }

  // 5. Bind Navigation Tabs Click
  document.querySelectorAll<HTMLButtonElement>('.nav-tab').forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const targetRoute = (e.currentTarget as HTMLElement).getAttribute('data-tab') as RouteId;
      if (targetRoute) {
        navigateTo(targetRoute);
      }
    });
  });

  // 6. Init Router
  initRouter();

  // 7. Initial Render
  renderAll();
}

function updateThemeToggleIcon(theme: 'dark' | 'light'): void {
  const btnTheme = document.getElementById('btn-theme');
  if (btnTheme) {
    btnTheme.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
  }
}

function updateLangToggleLabel(lang: 'vi' | 'en'): void {
  const btnLang = document.getElementById('btn-lang');
  if (btnLang) {
    btnLang.textContent = lang === 'vi' ? 'EN' : 'VI';
  }
}

// Run bootstrap when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
