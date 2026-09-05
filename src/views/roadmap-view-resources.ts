import { SPRINT_MODULES } from '../data/planData';
import { getState, toggleResourceFlag } from '../state/storage';
import { registerRenderListener, unregisterRenderListener } from '../renderer';
import { ICONS } from '../utils/icons';
import { resolveResourceUrl } from '../utils/url';
import { t } from '../i18n';


export class RoadmapViewResources extends HTMLElement {
  private boundRefresh = this.refresh.bind(this);
  private selectedModuleId: string = 'all';

  connectedCallback(): void {
    registerRenderListener(this.boundRefresh);
    this.refresh();
  }

  disconnectedCallback(): void {
    unregisterRenderListener(this.boundRefresh);
  }

  refresh(): void {
    const { resourceFlags } = getState();

    // Flatten all resources with module metadata
    const allResources = SPRINT_MODULES.flatMap((s) =>
      s.resources.map((r) => ({ ...r, moduleNum: s.moduleNum }))
    );
    const filteredResources =
      this.selectedModuleId === 'all'
        ? allResources
        : allResources.filter((r) => r.moduleId === this.selectedModuleId);

    this.innerHTML = `
      <div class="resources-container">
        <div class="section-header">
          <div>
            <div class="section-title section-title-flex">
              ${ICONS.bookOpen} ${t('resources.header.title')}
            </div>
            <div class="section-subtitle-muted">
              ${t('resources.header.subtitle')}
            </div>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-bar-container">
          <button class="action-btn btn-res-filter ${this.selectedModuleId === 'all' ? 'active' : ''}" data-mod="all">
            <span class="btn-label">${t('resources.filter.all')}</span>
          </button>
          ${SPRINT_MODULES.map(
            (s) => `
            <button class="action-btn btn-res-filter ${this.selectedModuleId === s.id ? 'active' : ''}" data-mod="${s.id}">
              <span class="btn-label">Module ${s.moduleNum}</span>
            </button>
          `
          ).join('')}
        </div>

        <!-- Resource Cards Grid -->
        <div class="resources-grid">
          ${filteredResources
            .map((res) => {
              const isFlagged = !!resourceFlags[res.id];
              const badgeBg =
                res.type === 'course'
                  ? 'rgba(16, 185, 129, 0.15)'
                  : res.type === 'docs'
                  ? 'rgba(99, 102, 241, 0.15)'
                  : 'rgba(245, 158, 11, 0.15)';
              const badgeColor =
                res.type === 'course' ? '#10b981' : res.type === 'docs' ? '#6366f1' : '#f59e0b';
              const typeIcon =
                res.type === 'course'
                  ? ICONS.gradCap
                  : res.type === 'docs'
                  ? ICONS.bookOpen
                  : ICONS.code;
              const typeLabel =
                res.type === 'course'
                  ? 'Course'
                  : res.type === 'docs'
                  ? 'Official Docs'
                  : 'Code Repo';

              return `
                <div class="resource-card">
                  <div>
                    <div class="resource-header-row">
                      <div class="section-title-flex">
                        <span class="resource-type-badge resource-type-badge-dynamic" style="--badge-bg: ${badgeBg}; --badge-color: ${badgeColor};">
                          ${typeIcon} ${typeLabel}
                        </span>
                        <span class="task-tag task-tag--primary">
                          Module ${res.moduleNum}
                        </span>
                      </div>
                      <button
                        class="action-btn btn-flag-resource btn-reset-filter"
                        data-res-id="${res.id}"
                        title="${t('resources.flag.title')}"
                      >
                        ${isFlagged ? ICONS.starFilled : ICONS.starOutline}
                      </button>
                    </div>

                    <div class="resource-title">${res.title}</div>
                    <div class="resource-desc">${res.description}</div>
                  </div>

                  <div class="resource-footer">
                    <span class="free-resource-tag">
                      ${ICONS.gradCap} ${res.isFree ? t('resources.free') : t('resources.paid')}
                    </span>
                    <a
                      href="${resolveResourceUrl(res.url)}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="action-btn btn-resource-primary"
                    >
                      <span class="btn-label">${t('resources.openLink')}</span> ${ICONS.externalLink}
                    </a>
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>
      </div>
    `;

    // Filter listener
    this.querySelectorAll<HTMLButtonElement>('.btn-res-filter').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const modId = (e.currentTarget as HTMLElement).getAttribute('data-mod');
        if (modId) {
          this.selectedModuleId = modId;
          this.refresh();
        }
      });
    });

    // Bookmark flag listener
    this.querySelectorAll<HTMLButtonElement>('.btn-flag-resource').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const resId = (e.currentTarget as HTMLElement).getAttribute('data-res-id');
        if (resId) {
          toggleResourceFlag(resId);
        }
      });
    });
  }
}

customElements.define('roadmap-view-resources', RoadmapViewResources);
