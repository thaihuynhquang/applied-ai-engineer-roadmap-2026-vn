import { getState } from '../state/storage';
import { UI_STRINGS } from './strings';

export const t = (key: string, params?: Record<string, string | number>): string => {
  const lang = getState().lang;
  let str = UI_STRINGS[lang][key] ?? UI_STRINGS.vi[key] ?? key;

  if (params) {
    for (const [paramKey, value] of Object.entries(params)) {
      str = str.replace(`{${paramKey}}`, String(value));
    }
  }

  return str;
};

export const plural = (n: number, vi: string, enOne: string, enOther: string): string => {
  if (getState().lang === 'en') {
    return n === 1 ? enOne : enOther;
  }
  return vi;
};
