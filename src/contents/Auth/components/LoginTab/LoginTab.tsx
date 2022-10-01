import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useLoginPageStore } from 'contents/Auth/store';
import type { LoginFormDataType } from 'interfaces';
import { useAuthStore } from 'store/Auth.store';

import * as S from './LoginTab.styles';

export const LoginTab = () => {
  const { control, handleSubmit } = useForm<LoginFormDataType>();
  const { handleRegister } = useLoginPageStore();
  const { setUser } = useAuthStore();

  const onSubmit = handleSubmit((data) => {
    setUser({ email: data.email });
  });

  return (
    <S.LoginTabContainer tabIndex={-1} onSubmit={onSubmit}>
      <S.InputWrapper>
        <Input name="email" type="email" label="E-mail" control={control} />
        <Input name="senha" type="password" label="Senha" control={control} />
      </S.InputWrapper>

      <S.ForgotPassword tabIndex={0} type="button">
        Esqueci minha senha
      </S.ForgotPassword>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
      <S.RegisterButton>
        Ainda não tem uma conta ?
        <button type="button" onClick={handleRegister} tabIndex={0}>
          Cadastre-se
        </button>
      </S.RegisterButton>
    </S.LoginTabContainer>
  );
};
