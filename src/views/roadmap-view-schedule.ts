import { getSprintModules, getMetaData } from '../data/planData';
import {
  getState,
  addPomodoroSession,
  removePomodoroSession,
  updatePomodoroSettings,
  DEFAULT_POMODORO_SETTINGS,
} from '../state/storage';
import { registerRenderListener, unregisterRenderListener } from '../renderer';
import { playSessionCompleteSound, playBreakCompleteSound } from '../utils/audio';
import { requestNotificationPermission, sendWebNotification } from '../utils/notification';
import { showToast } from '../toast';
import { Task } from '../types/appState';
import { ICONS } from '../utils/icons';
import { t, plural } from '../i18n';

type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

// Module-level persistent timer engine state (continues running across tab switches)
let timerMode: TimerMode = 'focus';
let secondsRemaining = 25 * 60;
let totalSeconds = 25 * 60;
let isRunning = false;
let timerInterval: number | null = null;
let selectedTaskId = '';
let completedFocusCountInRow = 0;

const formatTime = (secs: number): string => {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const updateDocumentTitle = () => {
  if (isRunning) {
    const modeLabel = timerMode === 'focus' ? t('schedule.docTitleMode.focus') : t('schedule.docTitleMode.break');
    document.title = t('schedule.docTitleRunning', { time: formatTime(secondsRemaining), mode: modeLabel });
  } else {
    document.title = t('meta.title');
  }
};

const stopTimerInterval = () => {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
};

export class RoadmapViewSchedule extends HTMLElement {
  private boundRefresh = this.refresh.bind(this);

  connectedCallback(): void {
    registerRenderListener(this.boundRefresh);
    this.refresh();
  }

  disconnectedCallback(): void {
    unregisterRenderListener(this.boundRefresh);
  }

  private startTimer(): void {
    if (isRunning) return;
    isRunning = true;
    updateDocumentTitle();

    stopTimerInterval();
    timerInterval = window.setInterval(() => {
      if (secondsRemaining > 0) {
        secondsRemaining--;
        updateDocumentTitle();
        this.updateTimerDisplayOnly();
      } else {
        this.onTimerComplete();
      }
    }, 1000);

    this.refresh();
  }

  private pauseTimer(): void {
    isRunning = false;
    stopTimerInterval();
    updateDocumentTitle();
    this.refresh();
  }

  private resetTimer(): void {
    this.pauseTimer();
    const settings = getState().pomodoroSettings || DEFAULT_POMODORO_SETTINGS;
    if (timerMode === 'focus') {
      secondsRemaining = settings.focusDuration * 60;
    } else if (timerMode === 'shortBreak') {
      secondsRemaining = settings.breakDuration * 60;
    } else {
      secondsRemaining = settings.longBreakDuration * 60;
    }
    totalSeconds = secondsRemaining;
    updateDocumentTitle();
    this.refresh();
  }

  private skipTimer(): void {
    this.pauseTimer();
    if (timerMode === 'focus') {
      this.switchMode('shortBreak');
    } else {
      this.switchMode('focus');
    }
  }

  private switchMode(newMode: TimerMode): void {
    this.pauseTimer();
    timerMode = newMode;
    const settings = getState().pomodoroSettings || DEFAULT_POMODORO_SETTINGS;
    if (newMode === 'focus') {
      secondsRemaining = settings.focusDuration * 60;
    } else if (newMode === 'shortBreak') {
      secondsRemaining = settings.breakDuration * 60;
    } else {
      secondsRemaining = settings.longBreakDuration * 60;
    }
    totalSeconds = secondsRemaining;
    updateDocumentTitle();
    this.refresh();
  }

  private setProfile(preset: '25/5' | '50/5' | 'custom', focusMins?: number, breakMins?: number): void {
    this.pauseTimer();
    let fMins = 25;
    let bMins = 5;

    if (preset === '25/5') {
      fMins = 25;
      bMins = 5;
    } else if (preset === '50/5') {
      fMins = 50;
      bMins = 5;
    } else if (preset === 'custom') {
      fMins = focusMins && focusMins > 0 ? focusMins : 45;
      bMins = breakMins && breakMins > 0 ? breakMins : 10;
    }

    updatePomodoroSettings({
      preset,
      focusDuration: fMins,
      breakDuration: bMins,
    });

    if (timerMode === 'focus') {
      secondsRemaining = fMins * 60;
    } else if (timerMode === 'shortBreak') {
      secondsRemaining = bMins * 60;
    }
    totalSeconds = secondsRemaining;
    updateDocumentTitle();
    this.refresh();
  }

  private onTimerComplete(): void {
    stopTimerInterval();
    const SPRINT_MODULES = getSprintModules();
    const settings = getState().pomodoroSettings || DEFAULT_POMODORO_SETTINGS;

    if (timerMode === 'focus') {
      if (settings.soundEnabled) playSessionCompleteSound();
      if (settings.notificationEnabled) {
        sendWebNotification(t('schedule.notif.focusDone.title'), {
          body: t('schedule.notif.focusDone.body'),
        });
      }
      showToast(t('schedule.toast.focusDone'), 'success');

      // Find task info if selected
      let taskTitle = '';
      if (selectedTaskId) {
        for (const s of SPRINT_MODULES) {
          const found = s.deliverables.find((t) => t.id === selectedTaskId);
          if (found) {
            taskTitle = found.title;
            break;
          }
        }
      }

      // Add session log (Increments total pomodoro count for 40% Dashboard weight)
      addPomodoroSession({
        durationMinutes: settings.focusDuration,
        taskId: selectedTaskId || undefined,
        taskTitle: taskTitle || undefined,
        preset: settings.preset,
      });

      completedFocusCountInRow++;

      // Switch to break
      if (completedFocusCountInRow % 4 === 0) {
        timerMode = 'longBreak';
        secondsRemaining = settings.longBreakDuration * 60;
      } else {
        timerMode = 'shortBreak';
        secondsRemaining = settings.breakDuration * 60;
      }
      totalSeconds = secondsRemaining;

      if (settings.autoStartBreaks) {
        this.startTimer();
      } else {
        isRunning = false;
        updateDocumentTitle();
        this.refresh();
      }
    } else {
      // Break complete
      if (settings.soundEnabled) playBreakCompleteSound();
      if (settings.notificationEnabled) {
        sendWebNotification(t('schedule.notif.breakDone.title'), {
          body: t('schedule.notif.breakDone.body'),
        });
      }
      showToast(t('schedule.toast.breakDone'), 'info');

      timerMode = 'focus';
      secondsRemaining = settings.focusDuration * 60;
      totalSeconds = secondsRemaining;
      isRunning = false;
      updateDocumentTitle();
      this.refresh();
    }
  }

  private updateTimerDisplayOnly(): void {
    const digitsEl = this.querySelector('.timer-digits');
    const ringEl = this.querySelector<SVGCircleElement>('.timer-ring-progress');

    if (digitsEl) {
      digitsEl.textContent = formatTime(secondsRemaining);
    }

    if (ringEl && totalSeconds > 0) {
      const radius = 120;
      const circumference = 2 * Math.PI * radius; // ~753.98
      const progressRatio = secondsRemaining / totalSeconds;
      const strokeDashoffset = circumference * (1 - progressRatio);
      ringEl.style.strokeDashoffset = strokeDashoffset.toString();
    }
  }

  refresh(): void {
    const SPRINT_MODULES = getSprintModules();
    const META_DATA = getMetaData();
    const state = getState();
    const settings = state.pomodoroSettings || DEFAULT_POMODORO_SETTINGS;
    const sessions = state.pomodoroSessions || [];

    // All Tasks flat list for dropdown
    const allTasks: { id: string; title: string; sprintTitle: string }[] = [];
    SPRINT_MODULES.forEach((sprint) => {
      sprint.deliverables.forEach((t: Task) => {
        allTasks.push({
          id: t.id,
          title: t.title,
          sprintTitle: `Sprint ${sprint.moduleNum}`,
        });
      });
    });

    // Today stats
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const todaySessions = sessions.filter((s) => s.timestamp >= startOfToday.getTime());
    const todayMinutes = todaySessions.reduce((acc, s) => acc + s.durationMinutes, 0);
    const totalAccumulatedPoms = sessions.length;

    // SVG Ring calculations
    const radius = 120;
    const circumference = 2 * Math.PI * radius;
    const progressRatio = totalSeconds > 0 ? secondsRemaining / totalSeconds : 1;
    const strokeDashoffset = circumference * (1 - progressRatio);

    this.innerHTML = `
      <div class="zen-pomodoro-container">
        <!-- Main Zen Focus Card -->
        <div class="timer-hero-card">

          <!-- Timer Mode Switcher (Focus / Short Break / Long Break) -->
          <div class="mode-pills-group">
            <button class="mode-pill mode-pill-icon ${timerMode === 'focus' ? 'active' : ''}" data-mode="focus">
              ${ICONS.target} Focus
            </button>
            <button class="mode-pill mode-pill-icon ${timerMode === 'shortBreak' ? 'active' : ''}" data-mode="shortBreak">
              ${ICONS.clock} Short Break (${settings.breakDuration}m)
            </button>
            <button class="mode-pill mode-pill-icon ${timerMode === 'longBreak' ? 'active' : ''}" data-mode="longBreak">
              ${ICONS.clock} Long Break (${settings.longBreakDuration}m)
            </button>
          </div>

          <!-- Profile Selector Pills -->
          <div class="profile-pills-group">
            <button class="profile-pill ${settings.preset === '25/5' ? 'active' : ''}" data-preset="25/5">
              25m Focus / 5m Break
            </button>
            <button class="profile-pill ${settings.preset === '50/5' ? 'active' : ''}" data-preset="50/5">
              50m Deep Focus / 5m Break
            </button>
            <button class="profile-pill ${settings.preset === 'custom' ? 'active' : ''}" data-preset="custom">
              Custom Preset
            </button>
          </div>

          <!-- Custom Duration Controls (Visible when preset === 'custom') -->
          ${
            settings.preset === 'custom'
              ? `
            <div class="custom-inputs-row">
              <div class="custom-input-group">
                <label for="custom-focus-input">Focus (m):</label>
                <input 
                  type="number" 
                  id="custom-focus-input" 
                  class="custom-input-field" 
                  min="1" 
                  max="120" 
                  value="${settings.focusDuration}" 
                />
              </div>
              <div class="custom-input-group">
                <label for="custom-break-input">Break (m):</label>
                <input 
                  type="number" 
                  id="custom-break-input" 
                  class="custom-input-field" 
                  min="1" 
                  max="60" 
                  value="${settings.breakDuration}" 
                />
              </div>
              <button class="action-btn btn-apply-custom" id="btn-apply-custom">
                ${t('schedule.custom.apply')}
              </button>
            </div>
          `
              : ''
          }

          <!-- Roadmap Task Selector -->
          <div class="task-selector-wrapper">
            <select id="task-select-dropdown" class="task-select-dropdown">
              <option value="">${t('schedule.task.freeFocus')}</option>
              ${allTasks
                .map(
                  (t) => `
                <option value="${t.id}" ${selectedTaskId === t.id ? 'selected' : ''}>
                  [${t.sprintTitle}] ${t.title}
                </option>
              `
                )
                .join('')}
            </select>
          </div>

          <!-- SVG Circular Progress Ring Display -->
          <div class="timer-svg-container ${timerMode !== 'focus' ? 'break' : ''} ${isRunning ? 'running' : ''}">
            <svg width="280" height="280" viewBox="0 0 280 280">
              <circle
                class="timer-ring-bg"
                cx="140"
                cy="140"
                r="${radius}"
                stroke-width="12"
                fill="none"
              />
              <circle
                class="timer-ring-progress"
                cx="140"
                cy="140"
                r="${radius}"
                stroke-width="12"
                fill="none"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${strokeDashoffset}"
              />
            </svg>

            <div class="timer-text-overlay">
              <div class="timer-digits">${formatTime(secondsRemaining)}</div>
              <div class="timer-status-badge">
                ${
                  timerMode === 'focus'
                    ? t('schedule.status.focus')
                    : timerMode === 'shortBreak'
                    ? t('schedule.status.shortBreak')
                    : t('schedule.status.longBreak')
                }
              </div>
            </div>
          </div>

          <!-- Action Buttons Controls -->
          <div class="timer-controls-group">
            <button class="btn-timer-secondary" id="btn-timer-reset" title="${t('schedule.reset.title')}">
              ${ICONS.reset}
            </button>
            <button class="btn-timer-primary btn-timer-icon" id="btn-timer-toggle">
              ${isRunning ? `${ICONS.pause} ${t('schedule.pause')}` : `${ICONS.play} ${t('schedule.start')}`}
            </button>
            <button class="btn-timer-secondary" id="btn-timer-skip" title="${t('schedule.skip.title')}">
              ${ICONS.skip}
            </button>
          </div>

          <!-- Toggles Row (Sound / Notification / Auto Break) -->
          <div class="timer-toggles-row">
            <label class="toggle-option" title="${t('schedule.toggle.sound.title')}">
              <input type="checkbox" id="chk-sound" ${settings.soundEnabled ? 'checked' : ''} />
              ${t('schedule.toggle.sound.label')}
            </label>
            <label class="toggle-option" title="${t('schedule.toggle.notif.title')}">
              <input type="checkbox" id="chk-notif" ${settings.notificationEnabled ? 'checked' : ''} />
              ${t('schedule.toggle.notif.label')}
            </label>
            <label class="toggle-option" title="${t('schedule.toggle.autobreak.title')}">
              <input type="checkbox" id="chk-autobreak" ${settings.autoStartBreaks ? 'checked' : ''} />
              ${t('schedule.toggle.autobreak.label')}
            </label>
          </div>

        </div>

        <!-- Today's Focus Metrics Row -->
        <div class="dashboard-grid">
          <div class="metric-card">
            <div class="metric-icon metric-icon--indigo-soft">
              ${ICONS.pomodoro}
            </div>
            <div class="metric-info">
              <span class="metric-value">${todaySessions.length} ${plural(todaySessions.length, 'phiên', 'session', 'sessions')}</span>
              <span class="metric-label">${t('schedule.metric.todayFocus')}</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon metric-icon--emerald-soft">
              ${ICONS.clock}
            </div>
            <div class="metric-info">
              <span class="metric-value">${todayMinutes}m</span>
              <span class="metric-label">${t('schedule.metric.todayHours', { hours: (todayMinutes / 60).toFixed(1) })}</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon metric-icon--amber-soft">
              ${ICONS.trophy}
            </div>
            <div class="metric-info">
              <span class="metric-value">${totalAccumulatedPoms}/${META_DATA.totalPomodoros}</span>
              <span class="metric-label">${t('schedule.metric.accumulated')}</span>
            </div>
          </div>
        </div>

        <!-- Session History List -->
        <div class="progress-card">
          <div class="progress-header progress-header--margin">
            <div class="progress-title section-title-flex">
              ${ICONS.bookOpen} ${t('schedule.history.title')}
            </div>
            <span class="section-subtitle-muted">
              ${t('schedule.history.totalCount', { count: sessions.length, unit: plural(sessions.length, 'phiên', 'session', 'sessions') })}
            </span>
          </div>

          ${
            sessions.length === 0
              ? `<div class="history-empty-text">
                  ${t('schedule.history.empty')}
                </div>`
              : `<div class="history-list">
                  ${sessions
                    .slice()
                    .reverse()
                    .slice(0, 5)
                    .map((s) => {
                      const d = new Date(s.timestamp);
                      const timeStr = `${d.getHours().toString().padStart(2, '0')}:${d
                        .getMinutes()
                        .toString()
                        .padStart(2, '0')} (${d.getDate()}/${d.getMonth() + 1})`;
                      // Resolve against the active language bundle first so old sessions
                      // don't stay stuck in the language they were logged in.
                      const liveTaskTitle = s.taskId ? allTasks.find((at) => at.id === s.taskId)?.title : undefined;
                      const displayTaskTitle = liveTaskTitle || s.taskTitle;
                      return `
                        <div class="history-item">
                          <div class="section-title-flex">
                            <span class="free-resource-tag">
                              ${ICONS.checkCircle} +1 Pomodoro
                            </span>
                            <span class="section-subtitle-muted">${timeStr}</span>
                            <span class="history-duration">(${s.durationMinutes}m)</span>
                            ${
                              displayTaskTitle
                                ? `<span class="task-tag task-tag--primary">
                                    ${displayTaskTitle}
                                  </span>`
                                : ''
                            }
                          </div>
                          <button class="history-item-del" data-session-id="${s.id}" title="${t('schedule.history.deleteTitle')}">
                            ${ICONS.trash}
                          </button>
                        </div>
                      `;
                    })
                    .join('')}
                </div>`
          }
        </div>
      </div>
    `;

    // Attach Event Listeners

    // Mode pills
    this.querySelectorAll<HTMLButtonElement>('.mode-pill').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const m = (e.currentTarget as HTMLElement).getAttribute('data-mode') as TimerMode;
        if (m) this.switchMode(m);
      });
    });

    // Profile pills
    this.querySelectorAll<HTMLButtonElement>('.profile-pill').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const p = (e.currentTarget as HTMLElement).getAttribute('data-preset') as '25/5' | '50/5' | 'custom';
        if (p) this.setProfile(p);
      });
    });

    // Custom Apply Button
    const btnApplyCustom = this.querySelector<HTMLButtonElement>('#btn-apply-custom');
    if (btnApplyCustom) {
      btnApplyCustom.addEventListener('click', () => {
        const focusInput = this.querySelector<HTMLInputElement>('#custom-focus-input');
        const breakInput = this.querySelector<HTMLInputElement>('#custom-break-input');
        const f = focusInput ? parseInt(focusInput.value, 10) : 45;
        const b = breakInput ? parseInt(breakInput.value, 10) : 10;
        this.setProfile('custom', f, b);
      });
    }

    // Task Selector
    const taskSelect = this.querySelector<HTMLSelectElement>('#task-select-dropdown');
    if (taskSelect) {
      taskSelect.addEventListener('change', (e) => {
        selectedTaskId = (e.target as HTMLSelectElement).value;
      });
    }

    // Primary Play/Pause
    const btnToggle = this.querySelector<HTMLButtonElement>('#btn-timer-toggle');
    if (btnToggle) {
      btnToggle.addEventListener('click', () => {
        if (isRunning) {
          this.pauseTimer();
        } else {
          this.startTimer();
        }
      });
    }

    // Reset button
    const btnReset = this.querySelector<HTMLButtonElement>('#btn-timer-reset');
    if (btnReset) {
      btnReset.addEventListener('click', () => this.resetTimer());
    }

    // Skip button
    const btnSkip = this.querySelector<HTMLButtonElement>('#btn-timer-skip');
    if (btnSkip) {
      btnSkip.addEventListener('click', () => this.skipTimer());
    }

    // Checkboxes toggles
    const chkSound = this.querySelector<HTMLInputElement>('#chk-sound');
    if (chkSound) {
      chkSound.addEventListener('change', (e) => {
        updatePomodoroSettings({ soundEnabled: (e.target as HTMLInputElement).checked });
      });
    }

    const chkNotif = this.querySelector<HTMLInputElement>('#chk-notif');
    if (chkNotif) {
      chkNotif.addEventListener('change', async (e) => {
        const isChecked = (e.target as HTMLInputElement).checked;
        if (isChecked) {
          const granted = await requestNotificationPermission();
          updatePomodoroSettings({ notificationEnabled: granted });
          if (!granted) {
            (e.target as HTMLInputElement).checked = false;
            showToast(t('schedule.toast.notifDenied'), 'warning');
          }
        } else {
          updatePomodoroSettings({ notificationEnabled: false });
        }
      });
    }

    const chkAutoBreak = this.querySelector<HTMLInputElement>('#chk-autobreak');
    if (chkAutoBreak) {
      chkAutoBreak.addEventListener('change', (e) => {
        updatePomodoroSettings({ autoStartBreaks: (e.target as HTMLInputElement).checked });
      });
    }

    // Session delete history items
    this.querySelectorAll<HTMLButtonElement>('.history-item-del').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const sid = (e.currentTarget as HTMLElement).getAttribute('data-session-id');
        if (sid) {
          removePomodoroSession(sid);
          showToast(t('schedule.toast.sessionDeleted'), 'info');
        }
      });
    });
  }
}

customElements.define('roadmap-view-schedule', RoadmapViewSchedule);
