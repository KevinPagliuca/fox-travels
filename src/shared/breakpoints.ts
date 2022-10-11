export const breakpointsValues = {
  desktop: 1300,
  mediumDesktop: 1000,
  tablet: 800,
  mobile: 600,
  smallMobile: 480,
} as const;

export const breakpoints = {
  desktop: `${breakpointsValues.desktop}px`,
  mediumDesktop: `${breakpointsValues.mediumDesktop}px`,
  tablet: `${breakpointsValues.tablet}px`,
  mobile: `${breakpointsValues.mobile}px`,
  smallMobile: `${breakpointsValues.smallMobile}px`,
} as const;
