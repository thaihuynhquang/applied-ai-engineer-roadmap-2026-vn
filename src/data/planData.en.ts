import { PlanDataBundle } from '../types/appState';
import { VI_PLAN_DATA } from './planData.vi';

// Structural step: re-exporting the Vietnamese bundle here lets the
// language-swap plumbing (facade, accessor migration, drift guard) be
// verified before the English translation of the curriculum content lands.
export const EN_PLAN_DATA: PlanDataBundle = VI_PLAN_DATA;
