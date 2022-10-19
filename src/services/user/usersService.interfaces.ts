import { AuthUserMutationFn, UserRegisterMutationFn } from 'graphql/generated/graphql.generated';

export interface IUserServiceLoginParams {
  mutation: AuthUserMutationFn;
  email: string;
  password: string;
}

export interface IUserServiceRegisterParams {
  mutation: UserRegisterMutationFn;
  email: string;
  password: string;
  name: string;
}
