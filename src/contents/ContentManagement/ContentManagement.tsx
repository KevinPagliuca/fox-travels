import React, { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import Link from 'next/link';

import { GraphQLError } from 'graphql';
import { useDeleteLocationMutation, useGetMyLocations } from 'graphql/generated';

import { Carousel } from 'components/Carousel';
import { LocationCard } from 'components/LocationCard';

import { LocationWithoutTravels } from 'interfaces';
import { locationsService } from 'services/locations/locations.service';

import { AirportModal } from './components/AirportModal';
import { ContentManagementRegisterButtonsProps } from './ContentManagement.interfaces';
import * as S from './ContentManagement.styles';

const airportInitialState = {
  isOpen: false as boolean,
  selectedContent: undefined as LocationWithoutTravels | undefined
};

export const ContentManagementContent = () => {
  const [airportModal, setAirportModal] = useState(airportInitialState);
  const { data } = useGetMyLocations();
  const [handleDeleteLocation] = useDeleteLocationMutation();

  const onAirportModalOpenChange = useCallback((content?: LocationWithoutTravels) => {
    setAirportModal(prevState => ({
      selectedContent: content ?? undefined,
      isOpen: !prevState.isOpen
    }));
  }, []);

  const onAirportModalClose = useCallback((isOpen: boolean) => {
    setAirportModal({ isOpen, selectedContent: undefined });
  }, []);

  const onOpenEditAirportModal = useCallback((location: LocationWithoutTravels) => {
    onAirportModalOpenChange(location);
  }, []);

  const onDeleteAirport = useCallback(async (locationId: string) => {
    try {
      await locationsService.deleteLocation({
        mutation: handleDeleteLocation,
        payload: { id: locationId }
      });
      toast.success('The airport has been deleted.');
    } catch (err) {
      const error = err as GraphQLError;
      toast.error(error.message);
    }
  }, []);

  const RegisterButtons: ContentManagementRegisterButtonsProps[] = [
    {
      label: 'Cadastrar novo Aeroporto',
      variant: 'darkblue',
      onOpenModal: onAirportModalOpenChange
    },
    {
      label: 'Cadastrar nova viagem',
      variant: 'darkblue',
      onOpenModal: onAirportModalOpenChange
    }
  ];

  const locationCardMap = useMemo(() => {
    return data?.getMyLocations
      ? data.getMyLocations.map(airport => (
          <LocationCard
            key={airport.id}
            location={airport}
            onEdit={onOpenEditAirportModal}
            onDelete={onDeleteAirport}
          />
        ))
      : [];
  }, [data?.getMyLocations]);

  return (
    <S.ContentManagementContainer>
      <S.ContentManagementTitle>Gestão de conteúdo</S.ContentManagementTitle>
      <S.ContentManagementNotice>
        Aqui você pode cadastrar novos aeroportos e viagens, além de gerenciar os dados já
        existentes dos conteúdos que lhe pertencer.
      </S.ContentManagementNotice>

      <S.NewRegistersContainer>
        {RegisterButtons.map(({ label, variant, onOpenModal }) => (
          <S.RegistersButton key={label} variant={variant} onClick={() => onOpenModal()}>
            {label}
          </S.RegistersButton>
        ))}
      </S.NewRegistersContainer>

      <S.ContentManagementContent>
        <S.SectionHeaderContainer>
          <S.SectionTitle>Meus últimos aeroportos</S.SectionTitle>
          <Link href="#" passHref>
            <S.SectionSeAll>Ver todos</S.SectionSeAll>
          </Link>
        </S.SectionHeaderContainer>

        <Carousel
          id="airports_carousel"
          slidesPerView={3}
          spaceBetween={16}
          allowTouchMove={true}
          withOutNavigation
          itemMap={locationCardMap}
        />
      </S.ContentManagementContent>

      <AirportModal
        isOpen={airportModal.isOpen}
        selectedAiport={airportModal.selectedContent}
        onClose={onAirportModalClose}
      />
    </S.ContentManagementContainer>
  );
};
ContentManagementContent.displayName = 'ContentManagementContent';
