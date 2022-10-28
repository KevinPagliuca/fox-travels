/* eslint-disable react-hooks/rules-of-hooks */
import { GraphQLError } from 'graphql';

import { IUserServiceLoginParams, IUserServiceRegisterParams } from './usersService.interfaces';

export class UsersService {
  async login({ mutation, payload }: IUserServiceLoginParams) {
    try {
      const { data, errors } = await mutation({
        variables: { data: payload }
      });

      if (!errors && data) return data.userAuth;

      throw new Error(errors?.map(error => error.message).join('\n'));
    } catch (err) {
      const error = err as GraphQLError;
      throw new Error(error.message);
    }
  }

  async register({ mutation, payload }: IUserServiceRegisterParams) {
    try {
      const { data, errors } = await mutation({
        variables: {
          data: payload
        }
      });
      if (!errors && data) return data.createUser;
      throw new Error(errors?.map(error => error.message).join('\n'));
    } catch (err) {
      const error = err as GraphQLError;
      throw new Error(error.message);
    }
  }
}

export const usersService = new UsersService();
