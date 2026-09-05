import { SprintModule } from '../types/appState';
import { getState } from '../state/storage';
import { VI_PLAN_DATA } from './planData.vi';
import { EN_PLAN_DATA } from './planData.en';

// Every id here is a localStorage primary key (state.checked / state.resourceFlags),
// so the two language files must expose exactly the same set of ids or progress
// silently breaks when the user switches language. This dev-only check catches
// drift as soon as it's introduced instead of at some later runtime surprise.
const collectIds = (modules: SprintModule[]): string[] => {
  const ids: string[] = [];
  for (const m of modules) {
    ids.push(m.id);
    for (const task of m.deliverables) ids.push(task.id);
    for (const res of m.resources) ids.push(res.id);
  }
  return ids;
};

if (import.meta.env.DEV) {
  const viIds = collectIds(VI_PLAN_DATA.SPRINT_MODULES).sort();
  const enIds = collectIds(EN_PLAN_DATA.SPRINT_MODULES).sort();
  const mismatch = viIds.length !== enIds.length || viIds.some((id, i) => id !== enIds[i]);
  if (mismatch) {
    console.error(
      '[i18n] planData.vi.ts and planData.en.ts have mismatched ids - progress will not carry over correctly between languages.',
      { viOnly: viIds.filter((id) => !enIds.includes(id)), enOnly: enIds.filter((id) => !viIds.includes(id)) }
    );
  }
}

export const getPlanData = () => (getState().lang === 'en' ? EN_PLAN_DATA : VI_PLAN_DATA);
export const getSprintModules = () => getPlanData().SPRINT_MODULES;
export const getMetaData = () => getPlanData().META_DATA;
export const getTechStackLayers = () => getPlanData().TECH_STACK_LAYERS;
export const getQuitCriteriaData = () => getPlanData().QUIT_CRITERIA_DATA;
