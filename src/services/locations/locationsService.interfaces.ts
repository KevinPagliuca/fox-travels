import {
  CreateLocationInput,
  CreateNewLocationMutationFn,
  DeleteLocationMutationFn,
  UpdateLocationInput,
  UpdateLocationMutationFn
} from 'graphql/generated';

export interface ICreateLocationServiceParams {
  mutation: CreateNewLocationMutationFn;
  payload: CreateLocationInput;
}

export interface IUpdateLocationServiceParams {
  mutation: UpdateLocationMutationFn;
  payload: UpdateLocationInput;
}

export interface IDeleteLocationServiceParams {
  mutation: DeleteLocationMutationFn;
  payload: { id: string };
}
