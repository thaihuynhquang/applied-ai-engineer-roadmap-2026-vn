import { getSprintModules } from '../data/planData';
import { getState, toggleChecked } from '../state/storage';
import { registerRenderListener, unregisterRenderListener } from '../renderer';
import { ICONS } from '../utils/icons';
import { t } from '../i18n';

export class RoadmapViewRoadmap extends HTMLElement {
  private boundRefresh = this.refresh.bind(this);

  connectedCallback(): void {
    registerRenderListener(this.boundRefresh);
    this.refresh();
  }

  disconnectedCallback(): void {
    unregisterRenderListener(this.boundRefresh);
  }

  refresh(): void {
    const SPRINT_MODULES = getSprintModules();
    const { checked } = getState();

    this.innerHTML = `
      <div class="roadmap-container">
        <div class="section-header section-header--margin">
          <div>
            <div class="section-title section-title-flex">
              ${ICONS.roadmap} ${t('roadmap.header.title', { count: SPRINT_MODULES.length })}
            </div>
            <div class="section-subtitle-muted">
              ${t('roadmap.header.subtitle')}
            </div>
          </div>
        </div>

        <div class="sprint-list">
          ${SPRINT_MODULES.map((sprint) => {
            const completedCount = sprint.deliverables.filter((t) => checked[t.id]).length;
            const totalCount = sprint.deliverables.length;
            const pct = Math.round((completedCount / totalCount) * 100);

            return `
              <div class="sprint-card" id="sprint-${sprint.id}">
                <div class="sprint-card-header">
                  <div class="sprint-title-group">
                    <span class="sprint-title">${sprint.title}</span>
                    <span class="sprint-subtitle sprint-subtitle-icon">
                      ${sprint.subtitle} • ${ICONS.clock} ${sprint.duration}
                    </span>
                  </div>
                  <div class="sprint-status-group">
                    <span class="sprint-status-value" style="--status-color: ${sprint.statusColor};">
                      ${completedCount}/${totalCount} (${pct}%)
                    </span>
                  </div>
                </div>

                <div class="sprint-card-body">
                  <!-- Objectives & Knowledge -->
                  <div class="roadmap-summary-box">
                    <div class="roadmap-summary-title">
                      ${ICONS.gradCap} ${t('roadmap.objectives.title')}
                    </div>
                    <ul class="roadmap-summary-list">
                      ${sprint.objectives.map((o) => `<li>• ${o}</li>`).join('')}
                    </ul>
                    <div class="roadmap-summary-title roadmap-summary-title--secondary">
                      ${ICONS.laptop} ${t('roadmap.knowledge.title')}
                    </div>
                    <ul class="roadmap-summary-list">
                      ${sprint.knowledgeToLoad.map((k) => `<li>• ${k}</li>`).join('')}
                    </ul>
                  </div>

                  <!-- Tasks Checklist -->
                  <div class="roadmap-deliverables-heading">
                    ${ICONS.laptop} ${t('roadmap.deliverables.title')}
                  </div>

                  <div class="task-list">
                    ${sprint.deliverables
                      .map((task) => {
                        const isChecked = !!checked[task.id];
                        return `
                          <div class="task-item ${isChecked ? 'checked' : ''}">
                            <input 
                              type="checkbox" 
                              class="task-checkbox" 
                              data-task-id="${task.id}" 
                              ${isChecked ? 'checked' : ''}
                            />
                            <div class="task-content">
                              <div class="task-title">${task.title}</div>
                              <div class="task-desc">${task.description}</div>
                              <div class="task-meta">
                                <span class="task-tag task-tag--primary">
                                  ${ICONS.pomodoro} ${task.pomodoros} Poms (~${task.hoursEstimate}h)
                                </span>
                                ${task.tags ? task.tags.map((t) => `<span class="task-tag">#${t}</span>`).join('') : ''}
                              </div>
                            </div>
                          </div>
                        `;
                      })
                      .join('')}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Attach checkbox handlers
    this.querySelectorAll<HTMLInputElement>('.task-checkbox').forEach((cb) => {
      cb.addEventListener('change', (e) => {
        const taskId = (e.target as HTMLInputElement).getAttribute('data-task-id');
        if (taskId) {
          toggleChecked(taskId);
        }
      });
    });
  }
}

customElements.define('roadmap-view-roadmap', RoadmapViewRoadmap);
