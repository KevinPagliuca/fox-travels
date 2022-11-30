import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper';

import { ICarouselProps } from './Carousel.interfaces';
import * as S from './Carousel.styles';

export const Carousel = ({
  id,
  itemMap,
  withShadowItems,
  className = '',
  withOutNavigation,
  allowTouchMove,
  ...rest
}: ICarouselProps) => {
  const classNames = withShadowItems ? `withShadowItems ${className}` : className;

  return (
    <S.Container>
      {!withOutNavigation && (
        <S.NavigationPrevButton className={`prev-button_${id}`}>
          <CaretLeft size={24} />
        </S.NavigationPrevButton>
      )}
      <S.CarouselContainer
        id={`CarouselContainer_${id}`}
        modules={[Pagination, Navigation]}
        className={classNames}
        pagination={{ dynamicBullets: true, clickable: true }}
        allowTouchMove={allowTouchMove}
        navigation={{
          nextEl: `.next-button_${id}`,
          prevEl: `.prev-button_${id}`,
          disabledClass: `disabled-navigation_${id}`
        }}
        {...rest}
      >
        {itemMap.map(Component => (
          <SwiperSlide key={`CarouselItem_${id}_${Component.key}`}>{Component}</SwiperSlide>
        ))}
      </S.CarouselContainer>
      {!withOutNavigation && (
        <S.NavigationNextButton className={`next-button_${id}`}>
          <CaretRight size={24} />
        </S.NavigationNextButton>
      )}
    </S.Container>
  );
};

Carousel.displayName = 'CarouselComponent';
