/* eslint-disable react-hooks/rules-of-hooks */
import { GraphQLError } from 'graphql';

import { IUserServiceLoginParams, IUserServiceRegisterParams } from './usersService.interfaces';

export class UsersService {
  async login({ email, mutation, password }: IUserServiceLoginParams) {
    try {
      const { data, errors } = await mutation({
        variables: {
          userData: {
            email,
            password,
          },
        },
      });

      if (!errors && data) return data.loginUser;

      throw new Error(errors?.map((error) => error.message).join('\n'));
    } catch (err) {
      const error = err as GraphQLError;
      throw new Error(error.message);
    }
  }

  async register({ email, mutation, password, name }: IUserServiceRegisterParams) {
    try {
      const { data, errors } = await mutation({
        variables: {
          data: {
            email,
            password,
            name,
            confirmPassword: password,
          },
        },
      });
      if (!errors && data) return data.createUser;
      throw new Error(errors?.map((error) => error.message).join('\n'));
    } catch (err) {
      const error = err as GraphQLError;
      throw new Error(error.message);
    }
  }
}

export const usersService = new UsersService();
