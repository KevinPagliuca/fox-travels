import { Airplane, MapPin } from 'phosphor-react';
import React, { useCallback, memo } from 'react';
import { toast } from 'react-toastify';

import { LocationTypeEnum } from 'graphql/generated';

import { isDifferent } from 'utils/objects';

import { ILocationCardProps } from './LocationCard.interfaces';
import * as S from './LocationCard.styles';

const LocationCardComponent = ({ location, onEdit, onDelete }: ILocationCardProps) => {
  const isAirport = location.type === LocationTypeEnum.Airport;

  const handleCopyAirportName = useCallback(() => {
    navigator.clipboard.writeText(location.placeName);
    toast.success('The airport name has been copied to your clipboard.');
  }, [location]);

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
        <S.ButtonAction
          title={isAirport ? 'Editar aeroporto' : 'Editar local'}
          onClick={() => onEdit(location)}
        >
          <S.EditIcon size={32} />
        </S.ButtonAction>
        <S.ButtonAction
          title={isAirport ? 'Copiar nome do aeroporto' : 'Copiar nome do local'}
          onClick={handleCopyAirportName}
        >
          <S.CopyIcon size={32} />
        </S.ButtonAction>
        <S.ButtonAction
          title={isAirport ? 'Deletar aeroporto' : 'Deletar local'}
          onClick={() => onDelete(location.id)}
        >
          <S.DeleteIcon size={32} />
        </S.ButtonAction>
      </S.CardActionsContainer>
    </S.LocationCardContainer>
  );
};

export const LocationCard = memo(LocationCardComponent, (prevProps, nextProps) => {
  return isDifferent(prevProps.location, nextProps.location);
});

LocationCardComponent.displayName = 'LocationCardComponent';
