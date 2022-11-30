import { Airplane, MapPin } from 'phosphor-react';
import React from 'react';

import { LocationTypeEnum } from 'graphql/generated';

import { ILocationCardProps } from './LocationCard.interfaces';
import * as S from './LocationCard.styles';

export const LocationCard = ({ location, onEdit }: ILocationCardProps) => {
  const isAirport = location.type === LocationTypeEnum.Airport;

  return (
    <S.LocationCardContainer tabIndex={0}>
      <S.LocationCardContent>
        <S.LocationPlaceName>
          {location.placeName} {isAirport ? <Airplane size={24} /> : <MapPin size={24} />}
        </S.LocationPlaceName>
        <S.LocationCityCountry>
          {location.city}, {location.country}
        </S.LocationCityCountry>

        <S.LocationCoordinates>
          <S.CoordinateTitle>Coordenadas</S.CoordinateTitle>
          <S.CoordinateText>Latitude: {location.latitude}</S.CoordinateText>
          <S.CoordinateText>Longitude: {location.longitude}</S.CoordinateText>
        </S.LocationCoordinates>
      </S.LocationCardContent>

      <S.CardActionsContainer>
        <S.ButtonAction title={isAirport ? 'Editar aeroporto' : 'Editar local'}>
          <S.EditIcon size={32} />
        </S.ButtonAction>
        <S.ButtonAction title="Abrir" onClick={() => onEdit(location)}>
          <S.OpenLinkIcon size={32} />
        </S.ButtonAction>
        <S.ButtonAction title={isAirport ? 'Deletar aeroporto' : 'Deletar local'}>
          <S.DeleteIcon size={32} />
        </S.ButtonAction>
      </S.CardActionsContainer>
    </S.LocationCardContainer>
  );
};

LocationCard.displayName = 'LocationCardComponent';
