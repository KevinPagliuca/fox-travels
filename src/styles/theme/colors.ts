import { darken, lighten } from 'polished';

const commonColors = {
  white: '#FFFFFF',
  black: '#000000',
  primary: '#D1F366',
  secondary: '#EC502C',

  error: '#D21F3C',
  success: '#0E8A16',
  warning: '#F5A623',
} as const;

export const colors = {
  ...commonColors,
  primary_dark: '#A3D011',
  primary_light: '#DEF68E',
  secondary_dark: darken(0.1, commonColors.secondary),
  secondary_light: lighten(0.1, commonColors.secondary),
  tertiary: '#141627',
  dark_blue: '#1C1F37',
  title: '#D0D4E7',
  body: '#626577',
} as const;
