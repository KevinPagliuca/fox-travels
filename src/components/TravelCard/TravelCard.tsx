import React from 'react';

import { formatToBRL } from 'utils/formatToBRL';

import { ITravelCardProps } from './TravelCard.interfaces';
import * as S from './TravelCard.styles';

export const TravelCard = ({ item, orientation = 'landscape' }: ITravelCardProps) => {
  const itemPrice = item.type === 'package' ? item.packagePrice : item.pricePerDay;

  return (
    <S.TravelCardContainer orientation={orientation} tabIndex={0}>
      <S.TravelCardImageContainer orientation={orientation}>
        <span>
          <S.TravelCardImage src={item.imageSrc} layout="fill" quality={100} />
        </span>
      </S.TravelCardImageContainer>

      <S.TravelCardContent orientation={orientation}>
        <S.TravelCardTitle orientation={orientation}>Paris</S.TravelCardTitle>
        {orientation === 'portrait' && <span>📍 {item.destination.country}</span>}
        <S.TravelCardFooter isPromotion={item.isPromotion} orientation={orientation}>
          <span>{orientation === 'landscape' ? 'A partir de' : '/ dia'}</span>
          <strong>{formatToBRL(itemPrice)}</strong>
        </S.TravelCardFooter>
      </S.TravelCardContent>
    </S.TravelCardContainer>
  );
};
