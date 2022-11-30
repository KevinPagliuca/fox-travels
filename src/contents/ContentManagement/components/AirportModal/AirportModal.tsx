import { X } from 'phosphor-react';
import React, { useCallback, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';

import { GraphQLError } from 'graphql';
import {
  LocationTypeEnum,
  useCreateNewLocationMutation,
  useUpdateLocationMutation
} from 'graphql/generated';

import { yupResolver } from '@hookform/resolvers/yup';
import { NewAirportFormSchema } from 'shared/validations/forms';

import { Button } from 'components/Button';
import { DynamicForm } from 'components/DynamicForm';
import { Modal } from 'components/Modal';

import { NewAirportFields } from 'helpers/fields';
import { NewAirportFormDataType } from 'interfaces';
import { locationsService } from 'services/locations/locations.service';

import { IAirportModalProps } from './AirportModal.interfaces';
import * as S from './AirportModal.styles';
import { MapboxMap } from './MapboxMap';

export const AirportModal = ({ onClose, isOpen, selectedAiport }: IAirportModalProps) => {
  const isEdditing = useMemo(() => !!selectedAiport && isOpen, [selectedAiport, isOpen]);

  const [createNewLocationMutation] = useCreateNewLocationMutation();
  const [updateLocationMutation] = useUpdateLocationMutation();

  const methods = useForm<NewAirportFormDataType>({
    shouldUnregister: true,
    resolver: yupResolver(NewAirportFormSchema)
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = methods;

  const onSubmitNewAirport = useCallback(
    handleSubmit(async payload => {
      try {
        await locationsService.createLocation({
          payload: {
            ...payload,
            latitude: Number(payload.latitude),
            longitude: Number(payload.longitude),
            type: LocationTypeEnum.Airport
          },
          mutation: createNewLocationMutation
        });

        toast.success('Novo aeroporto criado com sucesso!');
        onOpenChange(false);
      } catch (err) {
        const error = err as GraphQLError;
        toast.error(error.message);
      }
    }),
    [createNewLocationMutation]
  );

  const onSubmitEditAirport = useCallback(
    handleSubmit(async payload => {
      try {
        if (selectedAiport) {
          await locationsService.updateLocation({
            payload: {
              ...payload,
              id: selectedAiport?.id,
              latitude: Number(payload.latitude),
              longitude: Number(payload.longitude),
              type: LocationTypeEnum.Airport
            },
            mutation: updateLocationMutation
          });

          toast.success('Aeroporto editado com sucesso!');
          onOpenChange(false);
        } else toast.error('Não foi possível editar o aeroporto');
      } catch (err) {
        const error = err as GraphQLError;
        toast.error(error.message);
      }
    }),
    [createNewLocationMutation]
  );

  const onOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        reset({
          city: '',
          country: '',
          latitude: '',
          longitude: '',
          placeName: ''
        });
      }
      onClose(open);
    },
    [onClose]
  );

  const LoadedForm = useMemo(() => {
    if (isEdditing) {
      reset({
        placeName: selectedAiport?.placeName,
        city: selectedAiport?.city,
        country: selectedAiport?.country,
        latitude: selectedAiport?.latitude.toString(),
        longitude: selectedAiport?.longitude.toString()
      });
    }

    return <DynamicForm id="NewAirportDynamicForm" fields={NewAirportFields} />;
  }, [isEdditing, NewAirportFields]);

  return (
    <FormProvider {...methods}>
      <Modal open={isOpen} onOpenChange={onOpenChange} forceMount>
        <S.Container
          animate={isOpen ? 'show' : 'hide'}
          initial="hide"
          exit="hide"
          variants={{
            show: {
              opacity: 1,
              scale: 1,
              translateY: 0,
              transition: { duration: 0.3 }
            },
            hide: {
              opacity: 0,
              scale: 1,
              translateY: '15%',
              transition: { duration: 0.3 }
            }
          }}
        >
          <S.CloseButton onClick={() => onOpenChange(false)}>
            <X size={32} />
          </S.CloseButton>
          <S.ModalContent>
            <S.ModalBody>
              <S.ModalBodyContent>
                <S.MapContainer>
                  <MapboxMap width="100%" height="100%" style={{ borderRadius: '8px', flex: 1 }} />
                </S.MapContainer>

                <S.FormWrapper onSubmit={isEdditing ? onSubmitEditAirport : onSubmitNewAirport}>
                  <S.NoticeText>
                    Para cadastrar um novo aeroporto, você precisa informar o nome do aeroporto, o
                    país e a cidade onde ele se encontra. Além disso, você precisa clicar no mapa
                    para selecionar a localização do aeroporto.
                  </S.NoticeText>
                  {LoadedForm}
                  <S.SubmitButtonWrapper>
                    <Button
                      fullWidth
                      type="submit"
                      isLoading={isSubmitting}
                      disabled={Object.keys(errors).length > 0}
                    >
                      {isEdditing ? 'Salvar' : 'Cadastrar'}
                    </Button>
                  </S.SubmitButtonWrapper>
                </S.FormWrapper>
              </S.ModalBodyContent>
            </S.ModalBody>
          </S.ModalContent>
        </S.Container>
      </Modal>
    </FormProvider>
  );
};
AirportModal.displayName = 'AirportModal';
