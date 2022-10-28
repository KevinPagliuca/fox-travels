export const transitionsPreset = {
  low: 'all 0.1s ease-in-out',
  medium: 'all 0.2s ease-in-out',
  default: 'all 0.2s ease-in-out',
  high: 'all 0.3s ease-in-out'
} as const;

export const transitionsSpeeds = {
  low: '0.1s',
  medium: '0.2s',
  default: '0.2s',
  high: '0.3s'
} as const;

export const transitionsEasings = {
  default: 'ease-in-out',
  primary: 'ease-in-out',
  secondary: 'ease-in'
} as const;

export const transitions = {
  preset: transitionsPreset,
  speeds: transitionsSpeeds,
  easings: transitionsEasings
} as const;
