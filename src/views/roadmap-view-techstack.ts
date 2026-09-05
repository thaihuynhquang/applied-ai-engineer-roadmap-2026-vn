import { getTechStackLayers } from '../data/planData';
import { registerRenderListener, unregisterRenderListener } from '../renderer';
import { ICONS } from '../utils/icons';
import { t } from '../i18n';

export class RoadmapViewTechstack extends HTMLElement {
  private boundRefresh = this.refresh.bind(this);

  connectedCallback(): void {
    registerRenderListener(this.boundRefresh);
    this.refresh();
  }

  disconnectedCallback(): void {
    unregisterRenderListener(this.boundRefresh);
  }

  refresh(): void {
    const TECH_STACK_LAYERS = getTechStackLayers();
    this.innerHTML = `
      <div class="techstack-container">
        <div class="section-header">
          <div>
            <div class="section-title section-title-flex">
              ${ICONS.cpu} ${t('techstack.header.title')}
            </div>
            <div class="section-subtitle-muted">
              ${t('techstack.header.subtitle')}
            </div>
          </div>
        </div>

        <!-- Reference Architecture Cards -->
        <div class="techstack-grid">
          <div class="progress-card progress-card--top-primary">
            <div class="roadmap-summary-title">
              ${ICONS.layers} ${t('techstack.archA.title')}
            </div>
            <div class="progress-card-desc--lineheight">
              • ${t('techstack.archA.bullet1')}<br/>
              • ${t('techstack.archA.bullet2')}<br/>
              • ${t('techstack.archA.bullet3')}<br/>
              • ${t('techstack.archA.bullet4')}<br/>
              • ${t('techstack.archA.bullet5')}<br/>
              • ${t('techstack.archA.bullet6')}
            </div>
          </div>

          <div class="progress-card progress-card--top-emerald">
            <div class="progress-card-header-title--emerald">
              ${ICONS.shield} ${t('techstack.archB.title')}
            </div>
            <div class="progress-card-desc--lineheight">
              • ${t('techstack.archB.bullet1')}<br/>
              • ${t('techstack.archB.bullet2')}<br/>
              • ${t('techstack.archB.bullet3')}<br/>
              • ${t('techstack.archB.bullet4')}<br/>
              • ${t('techstack.archB.bullet5')}<br/>
              • ${t('techstack.archB.bullet6')}
            </div>
          </div>
        </div>

        <!-- 7 Layers Breakdown -->
        <div class="techstack-heading">
          ${ICONS.cpu} ${t('techstack.layers.heading')}
        </div>

        ${TECH_STACK_LAYERS.map(
          (layer) => `
          <div class="tech-layer-card">
            <div class="tech-layer-title">${layer.name}</div>
            <div class="tech-layer-desc">${layer.description}</div>

            <div class="table-wrapper">
              <table class="tech-table">
                <thead>
                  <tr>
                    <th>${t('techstack.table.tech')}</th>
                    <th>${t('techstack.table.role')}</th>
                    <th>${t('techstack.table.trend')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${layer.items
                    .map(
                      (item) => `
                    <tr>
                      <td>
                        <span class="techstack-item-name">${item.name}</span>
                        ${item.isPrimaryChoice ? '<span class="badge-primary-choice">Primary</span>' : ''}
                      </td>
                      <td class="tech-table-cell-muted">${item.role}</td>
                      <td><span class="task-tag" title="${item.usageShare || 'Standard'}">${item.usageShare || 'Standard'}</span></td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </div>
        `
        ).join('')}
      </div>
    `;
  }
}

customElements.define('roadmap-view-techstack', RoadmapViewTechstack);
