/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  token: Scalars['String'];
  user: User;
};

export type CreateUserInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: CreateUser;
  loginUser: CreateUser;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationLoginUserArgs = {
  data: LoginUserInput;
};

export type Query = {
  __typename?: 'Query';
  getAll: Array<User>;
  getById: User;
  me: CreateUser;
};

export type Travel = {
  __typename?: 'Travel';
  createdAt: Scalars['DateTime'];
  discount: Scalars['Float'];
  endDate: Scalars['DateTime'];
  id: Scalars['ID'];
  price: Scalars['Float'];
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  travels: Array<Travel>;
  updatedAt: Scalars['DateTime'];
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'CreateUser';
    token: string;
    user: { __typename?: 'User'; id: string; name: string; email: string };
  };
};

export type AuthUserMutationVariables = Exact<{
  userData: LoginUserInput;
}>;

export type AuthUserMutation = {
  __typename?: 'Mutation';
  loginUser: {
    __typename?: 'CreateUser';
    token: string;
    user: { __typename?: 'User'; id: string; email: string; name: string };
  };
};

export type UserRegisterMutationVariables = Exact<{
  data: CreateUserInput;
}>;

export type UserRegisterMutation = {
  __typename?: 'Mutation';
  createUser: {
    __typename?: 'CreateUser';
    token: string;
    user: { __typename?: 'User'; id: string; name: string; email: string };
  };
};

export const MeDocument = gql`
  query Me {
    me {
      user {
        id
        name
        email
      }
      token
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const AuthUserDocument = gql`
  mutation AuthUser($userData: LoginUserInput!) {
    loginUser(data: $userData) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;
export type AuthUserMutationFn = Apollo.MutationFunction<
  AuthUserMutation,
  AuthUserMutationVariables
>;

/**
 * __useAuthUserMutation__
 *
 * To run a mutation, you first call `useAuthUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authUserMutation, { data, loading, error }] = useAuthUserMutation({
 *   variables: {
 *      userData: // value for 'userData'
 *   },
 * });
 */
export function useAuthUserMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthUserMutation, AuthUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthUserMutation, AuthUserMutationVariables>(AuthUserDocument, options);
}
export type AuthUserMutationHookResult = ReturnType<typeof useAuthUserMutation>;
export type AuthUserMutationResult = Apollo.MutationResult<AuthUserMutation>;
export type AuthUserMutationOptions = Apollo.BaseMutationOptions<
  AuthUserMutation,
  AuthUserMutationVariables
>;
export const UserRegisterDocument = gql`
  mutation UserRegister($data: CreateUserInput!) {
    createUser(data: $data) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;
export type UserRegisterMutationFn = Apollo.MutationFunction<
  UserRegisterMutation,
  UserRegisterMutationVariables
>;

/**
 * __useUserRegisterMutation__
 *
 * To run a mutation, you first call `useUserRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userRegisterMutation, { data, loading, error }] = useUserRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUserRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<UserRegisterMutation, UserRegisterMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserRegisterMutation, UserRegisterMutationVariables>(
    UserRegisterDocument,
    options
  );
}
export type UserRegisterMutationHookResult = ReturnType<typeof useUserRegisterMutation>;
export type UserRegisterMutationResult = Apollo.MutationResult<UserRegisterMutation>;
export type UserRegisterMutationOptions = Apollo.BaseMutationOptions<
  UserRegisterMutation,
  UserRegisterMutationVariables
>;
