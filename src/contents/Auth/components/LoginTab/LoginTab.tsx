import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { GraphQLError } from 'graphql';
import { useAuthUserMutation } from 'graphql/generated';

import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from 'shared/validations/forms';
import { useAuthStore } from 'store/Authentication/Auth.store';
import { useLoginPageStore } from 'store/pages/LoginPage';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

import type { LoginFormDataType } from 'interfaces';
import { usersService } from 'services/user/users.service';

import * as S from './LoginTab.styles';

export const LoginTab = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<LoginFormDataType>({
    resolver: yupResolver(loginFormSchema)
  });

  const [authMutation] = useAuthUserMutation();
  const handleRegister = useLoginPageStore(state => state.handleRegister);
  const updateSession = useAuthStore(state => state.updateSession);

  const onSubmit = useCallback(
    handleSubmit(async payload => {
      try {
        const data = await usersService.login({
          payload,
          mutation: authMutation
        });
        updateSession(data);
        toast.success('Autenticado com sucesso!');
      } catch (err) {
        const error = err as GraphQLError;
        toast.error(error.message);
      }
    }),
    [authMutation, handleSubmit, updateSession]
  );

  return (
    <S.LoginTabContainer tabIndex={-1} onSubmit={onSubmit}>
      <S.InputWrapper>
        <Input name="email" type="email" label="E-mail" control={control} error={errors.email} />
        <Input
          name="password"
          type="password"
          label="Senha"
          control={control}
          error={errors.password}
        />
      </S.InputWrapper>

      <S.ForgotPassword tabIndex={0} type="button">
        Esqueci minha senha
      </S.ForgotPassword>
      <Button
        variant="primary"
        type="submit"
        isLoading={isSubmitting}
        disabled={Object.keys(errors).length > 0}
      >
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

LoginTab.displayName = 'LoginTabComponent';
