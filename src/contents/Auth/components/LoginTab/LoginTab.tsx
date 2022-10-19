import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { GraphQLError } from 'graphql';
import { useAuthUserMutation } from 'graphql/generated/graphql.generated';
import type { LoginFormDataType } from 'interfaces';
import { setCookie } from 'nookies';
import { usersService } from 'services/user/users.service';
import { APP_USER_TOKEN } from 'shared/constants';
import { loginFormSchema } from 'shared/validations/forms';
import { useAuthStore } from 'store/Authentication/Auth.store';
import { useLoginPageStore } from 'store/pages/LoginPage';

import * as S from './LoginTab.styles';

export const LoginTab = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormDataType>({
    resolver: yupResolver(loginFormSchema),
  });

  const { handleRegister } = useLoginPageStore();
  const { updateSession } = useAuthStore();
  const [authMutation] = useAuthUserMutation();

  const onSubmit = useCallback(
    handleSubmit(async ({ email, password }) => {
      try {
        const data = await usersService.login({
          email,
          password,
          mutation: authMutation,
        });

        updateSession(data);
        setCookie(null, APP_USER_TOKEN, data.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
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
