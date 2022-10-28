import {
  AuthUserMutationFn,
  CreateUserInput,
  UserAuthInput,
  UserRegisterMutationFn
} from 'graphql/generated/graphql.generated';

export interface IUserServiceLoginParams {
  mutation: AuthUserMutationFn;
  payload: UserAuthInput;
}

export interface IUserServiceRegisterParams {
  mutation: UserRegisterMutationFn;
  payload: CreateUserInput;
}
