import {
  CreateLocationInput,
  CreateNewLocationMutationFn
} from 'graphql/generated/graphql.generated';

export interface ICreateLocationServiceParams {
  mutation: CreateNewLocationMutationFn;
  payload: CreateLocationInput;
}
