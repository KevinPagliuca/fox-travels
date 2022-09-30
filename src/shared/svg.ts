import { transitionsPreset } from 'styles/theme';

export const getSvgTransition = (type: keyof typeof transitionsPreset) => {
  return transitionsPreset[type];
};
