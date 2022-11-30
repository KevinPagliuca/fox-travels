import { SwiperProps } from 'swiper/react';

export interface ICarouselProps extends SwiperProps {
  id: string;
  itemMap: JSX.Element[];
  withShadowItems?: boolean;
  withOutNavigation?: boolean;
  allowTouchMove: boolean;
}

/**
 * ------------------------------------------------------------------------------------
 * STYLES ATTRIBUTES TYPES 👇🏻👇🏻
 * ------------------------------------------------------------------------------------
 */
