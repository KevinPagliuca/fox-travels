import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useLoginPageStore } from 'contents/Auth/store';
import type { RegisterFormDataType } from 'interfaces';

import * as S from './RegisterTab.styles';

const InputFields = [
  { name: 'name', label: 'Nome completo' },
  { name: 'email', label: 'E-mail' },
  { name: 'senha', label: 'Senha', type: 'password' },
  { name: 'password_confirmation', label: 'Confirmar senha', type: 'password' },
];

export const RegisterTab = () => {
  const { control } = useForm<RegisterFormDataType>();
  const { handleLogin } = useLoginPageStore();

  return (
    <S.RegisterTabContainer tabIndex={-1}>
      <S.InputsWrapper>
        {InputFields.map((input) => (
          <Input key={input.name} {...input} control={control} />
        ))}
      </S.InputsWrapper>

      <Button variant="primary" type="button">
        Entrar
      </Button>
      <S.RegisterButton>
        Já tem uma conta ?
        <button onClick={handleLogin} tabIndex={0} type="button">
          Fazer login
        </button>
      </S.RegisterButton>
    </S.RegisterTabContainer>
  );
};
