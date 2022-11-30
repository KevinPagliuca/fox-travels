import { Swiper } from 'swiper/react';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  z-index: 1;
`;

const paginationBulletStyles = css`
  .swiper-pagination-bullet {
    cursor: pointer;
    width: 0.75rem;
    height: 0.75rem;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
  }

  .swiper-pagination-bullet-active-next,
  .swiper-pagination-bullet-active-prev {
    background: ${({ theme }) => theme.colors.white};
  }
  .swiper-pagination-bullet-active-next-next,
  .swiper-pagination-bullet-active-prev-prev {
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const CarouselContainer = styled(Swiper)`
  position: relative;

  margin: 0 -0.5rem -2rem;
  padding: 0.25rem 0.5rem 2rem;
  cursor: ${({ allowTouchMove }) => (allowTouchMove ? 'grab' : 'default')};
  ${paginationBulletStyles};

  &.withShadowItems {
    filter: drop-shadow(0, 0, 0, 0.25);
  }

  .swiper-slide {
    display: flex;
    flex-grow: 1;
    height: unset;
  }

  &:last-child {
    padding-right: 0.25rem;
  }
`;

const NavigationButtonsStyle = css`
  z-index: 2;
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  transition: all 0.3s linear;

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const NavigationNextButton = styled.button`
  ${NavigationButtonsStyle};
  right: 0;
`;

export const NavigationPrevButton = styled.button`
  ${NavigationButtonsStyle};
  left: 0;
`;
