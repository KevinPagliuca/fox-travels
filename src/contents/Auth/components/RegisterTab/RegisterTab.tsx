import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { GraphQLError } from 'graphql';
import { useUserRegisterMutation } from 'graphql/generated';

import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from 'shared/validations/forms';
import { useAuthStore } from 'store/Authentication';
import { useLoginPageStore } from 'store/pages/LoginPage';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

import type { RegisterFormDataType } from 'interfaces';
import { usersService } from 'services/user/users.service';

import * as S from './RegisterTab.styles';

const InputFields = [
  { name: 'name', label: 'Nome completo' },
  { name: 'email', label: 'E-mail' },
  { name: 'password', label: 'Senha', type: 'password' },
  { name: 'confirmPassword', label: 'Confirmar senha', type: 'password' }
] as const;

export const RegisterTab = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormDataType>({
    resolver: yupResolver(registerFormSchema)
  });

  const handleLogin = useLoginPageStore(state => state.handleLogin);
  const [registerUserMutation] = useUserRegisterMutation();
  const updateSession = useAuthStore(state => state.updateSession);

  const onSubmit = useCallback(
    handleSubmit(async data => {
      try {
        const response = await usersService.register({
          mutation: registerUserMutation,
          payload: data
        });
        updateSession(response);
      } catch (err) {
        const error = err as GraphQLError;
        toast.error(error.message);
      }
    }),
    [handleSubmit]
  );

  return (
    <S.RegisterTabContainer tabIndex={-1} onSubmit={onSubmit}>
      <S.InputsWrapper>
        {InputFields.map(input => (
          <Input key={input.name} {...input} control={control} error={errors[input.name]} />
        ))}
      </S.InputsWrapper>

      <Button variant="primary" type="submit">
        Cadastrar
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

RegisterTab.displayName = 'RegisterTabComponent';
