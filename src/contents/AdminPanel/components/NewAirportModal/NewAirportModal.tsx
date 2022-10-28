import { X } from 'phosphor-react';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { GraphQLError } from 'graphql';
import {
  LocationTypeEnum,
  useCreateNewLocationMutation
} from 'graphql/generated/graphql.generated';

import { yupResolver } from '@hookform/resolvers/yup';
import { NewAirportFormSchema } from 'shared/validations/forms';

import { Button } from 'components/Button';
import { DynamicForm } from 'components/DynamicForm';
import { Modal } from 'components/Modal';
import { Scroll } from 'components/Scroll';

import { NewAirportFields } from 'helpers/fields';
import { NewAirportFormDataType } from 'interfaces';
import { locationsService } from 'services/locations/locations.service';

import { MapboxMap } from './MapboxMap';
import { INewAirportModalProps } from './NewAirportModal.interfaces';
import * as S from './NewAirportModal.styles';

export const NewAirportModal = ({ onOpenChange, isOpen }: INewAirportModalProps) => {
  const [createNewLocationMutation] = useCreateNewLocationMutation();

  const methods = useForm<NewAirportFormDataType>({
    shouldUnregister: true,

    resolver: yupResolver(NewAirportFormSchema)
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitting }
  } = methods;

  const onSubmit = useCallback(
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
            <Scroll childrenFullHeight>
              <S.ModalBody>
                <S.ModalBodyContent>
                  <S.MapContainer>
                    <MapboxMap
                      width="100%"
                      height="100%"
                      style={{ borderRadius: '8px', flex: 1 }}
                    />
                  </S.MapContainer>

                  <S.FormWrapper onSubmit={onSubmit}>
                    <S.NoticeText>
                      Para cadastrar um novo aeroporto, você precisa informar o nome do aeroporto, o
                      país e a cidade onde ele se encontra. Além disso, você precisa clicar no mapa
                      para selecionar a localização do aeroporto.
                    </S.NoticeText>
                    <DynamicForm id="NewAirportDynamicForm" fields={NewAirportFields} />
                    <S.SubmitButtonWrapper>
                      <Button
                        fullWidth
                        type="submit"
                        isLoading={isSubmitting}
                        disabled={Object.keys(errors).length > 0}
                      >
                        Cadastrar
                      </Button>
                    </S.SubmitButtonWrapper>
                  </S.FormWrapper>
                </S.ModalBodyContent>
              </S.ModalBody>
            </Scroll>
          </S.ModalContent>
        </S.Container>
      </Modal>
    </FormProvider>
  );
};
