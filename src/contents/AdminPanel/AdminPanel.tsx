import React, { useCallback, useState } from 'react';

import { Scroll } from 'components/Scroll';

import { AdminPanelRegisterButtonsProps } from './AdminPanel.interfaces';
import * as S from './AdminPanel.styles';
import { NewAirportModal } from './components/NewAirportModal';

export const AdminPanelContent = () => {
  const [modalStates, setModalStates] = useState({
    newAirport: false
  });

  const onModalOpenChange = useCallback((modalName: keyof typeof modalStates) => {
    setModalStates(prevState => ({
      ...prevState,
      [modalName]: !prevState[modalName]
    }));
  }, []);

  const RegisterButtons: AdminPanelRegisterButtonsProps<keyof typeof modalStates>[] = [
    {
      label: 'Cadastrar novo Aeroporto',
      variant: 'darkblue',
      modalName: 'newAirport'
    },
    {
      label: 'Cadastrar nova viagem',
      variant: 'darkblue',
      modalName: 'newAirport'
    }
  ];

  return (
    <S.AdminPanelContainer>
      <S.NewRegistersTitle>Cadastros</S.NewRegistersTitle>
      <S.NewRegistersContainer>
        {RegisterButtons.map(({ label, variant, modalName }) => (
          <S.RegistersButton
            key={label}
            variant={variant}
            onClick={() => onModalOpenChange(modalName)}
          >
            {label}
          </S.RegistersButton>
        ))}
      </S.NewRegistersContainer>

      <S.AdminPanelContent>
        <Scroll>
          <h1>Conteúdo</h1>
        </Scroll>
      </S.AdminPanelContent>

      <NewAirportModal
        isOpen={modalStates.newAirport}
        onOpenChange={() => onModalOpenChange('newAirport')}
      />
    </S.AdminPanelContainer>
  );
};
