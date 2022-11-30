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

export type CreateLocationInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  placeName: Scalars['String'];
  type: LocationTypeEnum;
};

export type CreateTravelInput = {
  easyVisa: Scalars['Boolean'];
  locationId: Scalars['String'];
  maxPrice: Scalars['Float'];
  minPrice: Scalars['Float'];
  pricePerMiles: Scalars['Float'];
  title: Scalars['String'];
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

export type Location = {
  __typename?: 'Location';
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  placeName: Scalars['String'];
  travels: Array<Travel>;
  type: LocationTypeEnum;
};

/** Available Locations types enum */
export enum LocationTypeEnum {
  Airport = 'AIRPORT',
  Place = 'PLACE'
}

export type Mutation = {
  __typename?: 'Mutation';
  createLocation: Location;
  createTravel: Travel;
  createUser: CreateUser;
  deleteLocation: Scalars['String'];
  deleteTravel: Travel;
  updateLocation: Location;
  updateTravel: Travel;
  userAuth: CreateUser;
};

export type MutationCreateLocationArgs = {
  data: CreateLocationInput;
};

export type MutationCreateTravelArgs = {
  data: CreateTravelInput;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationDeleteLocationArgs = {
  id: Scalars['String'];
};

export type MutationDeleteTravelArgs = {
  id: Scalars['String'];
};

export type MutationUpdateLocationArgs = {
  data: UpdateLocationInput;
};

export type MutationUpdateTravelArgs = {
  data: UpdateTravelInput;
};

export type MutationUserAuthArgs = {
  data: UserAuthInput;
};

export type Query = {
  __typename?: 'Query';
  getAllLocations: Array<Location>;
  getAllTravels: Array<Travel>;
  getAllUsers: Array<User>;
  getLocationById: Location;
  getMyLocations: Array<Location>;
  getTravelById: Travel;
  getUserById: User;
  me: CreateUser;
};

export type QueryGetLocationByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetTravelByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};

export type Travel = {
  __typename?: 'Travel';
  createdAt: Scalars['DateTime'];
  discount: Scalars['Float'];
  id: Scalars['ID'];
  location: Location;
  locationId: Scalars['String'];
  maxPrice: Scalars['Float'];
  minPrice: Scalars['Float'];
  pricePerMiles: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UpdateLocationInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  placeName: Scalars['String'];
  type: LocationTypeEnum;
};

export type UpdateTravelInput = {
  discount: Scalars['Float'];
  endDate: Scalars['DateTime'];
  id: Scalars['String'];
  locationId: Scalars['String'];
  price: Scalars['Float'];
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserAuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateNewLocationMutationVariables = Exact<{
  data: CreateLocationInput;
}>;

export type CreateNewLocationMutation = {
  __typename?: 'Mutation';
  createLocation: {
    __typename?: 'Location';
    id: string;
    placeName: string;
    latitude: number;
    longitude: number;
    city: string;
    country: string;
    type: LocationTypeEnum;
  };
};

export type DeleteLocationMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteLocationMutation = { __typename?: 'Mutation'; deleteLocation: string };

export type GetMyLocationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyLocationsQuery = {
  __typename?: 'Query';
  getMyLocations: Array<{
    __typename?: 'Location';
    id: string;
    placeName: string;
    country: string;
    city: string;
    type: LocationTypeEnum;
    latitude: number;
    longitude: number;
    travels: Array<{ __typename?: 'Travel'; id: string; title: string }>;
  }>;
};

export type UpdateLocationMutationVariables = Exact<{
  data: UpdateLocationInput;
}>;

export type UpdateLocationMutation = {
  __typename?: 'Mutation';
  updateLocation: {
    __typename?: 'Location';
    id: string;
    placeName: string;
    latitude: number;
    type: LocationTypeEnum;
    longitude: number;
    city: string;
    country: string;
  };
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: 'Query';
  getAllUsers: Array<{
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  }>;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'CreateUser';
    token: string;
    user: { __typename?: 'User'; id: string; name: string; email: string; isAdmin: boolean };
  };
};

export type AuthUserMutationVariables = Exact<{
  data: UserAuthInput;
}>;

export type AuthUserMutation = {
  __typename?: 'Mutation';
  userAuth: {
    __typename?: 'CreateUser';
    token: string;
    user: { __typename?: 'User'; id: string; email: string; name: string; isAdmin: boolean };
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
    user: { __typename?: 'User'; id: string; name: string; email: string; isAdmin: boolean };
  };
};

export const CreateNewLocationDocument = gql`
  mutation createNewLocation($data: CreateLocationInput!) {
    createLocation(data: $data) {
      id
      placeName
      latitude
      longitude
      city
      country
      type
    }
  }
`;
export type CreateNewLocationMutationFn = Apollo.MutationFunction<
  CreateNewLocationMutation,
  CreateNewLocationMutationVariables
>;

/**
 * __useCreateNewLocationMutation__
 *
 * To run a mutation, you first call `useCreateNewLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewLocationMutation, { data, loading, error }] = useCreateNewLocationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateNewLocationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateNewLocationMutation,
    CreateNewLocationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateNewLocationMutation, CreateNewLocationMutationVariables>(
    CreateNewLocationDocument,
    options
  );
}
export type CreateNewLocationMutationHookResult = ReturnType<typeof useCreateNewLocationMutation>;
export type CreateNewLocationMutationResult = Apollo.MutationResult<CreateNewLocationMutation>;
export type CreateNewLocationMutationOptions = Apollo.BaseMutationOptions<
  CreateNewLocationMutation,
  CreateNewLocationMutationVariables
>;
export const DeleteLocationDocument = gql`
  mutation deleteLocation($id: String!) {
    deleteLocation(id: $id)
  }
`;
export type DeleteLocationMutationFn = Apollo.MutationFunction<
  DeleteLocationMutation,
  DeleteLocationMutationVariables
>;

/**
 * __useDeleteLocationMutation__
 *
 * To run a mutation, you first call `useDeleteLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLocationMutation, { data, loading, error }] = useDeleteLocationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLocationMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteLocationMutation, DeleteLocationMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteLocationMutation, DeleteLocationMutationVariables>(
    DeleteLocationDocument,
    options
  );
}
export type DeleteLocationMutationHookResult = ReturnType<typeof useDeleteLocationMutation>;
export type DeleteLocationMutationResult = Apollo.MutationResult<DeleteLocationMutation>;
export type DeleteLocationMutationOptions = Apollo.BaseMutationOptions<
  DeleteLocationMutation,
  DeleteLocationMutationVariables
>;
export const GetMyLocationsDocument = gql`
  query getMyLocations {
    getMyLocations {
      id
      placeName
      country
      city
      type
      latitude
      longitude
      travels {
        id
        title
      }
    }
  }
`;

/**
 * __useGetMyLocationsQuery__
 *
 * To run a query within a React component, call `useGetMyLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyLocationsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMyLocationsQuery, GetMyLocationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyLocationsQuery, GetMyLocationsQueryVariables>(
    GetMyLocationsDocument,
    options
  );
}
export function useGetMyLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMyLocationsQuery, GetMyLocationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyLocationsQuery, GetMyLocationsQueryVariables>(
    GetMyLocationsDocument,
    options
  );
}
export type GetMyLocationsQueryHookResult = ReturnType<typeof useGetMyLocationsQuery>;
export type GetMyLocationsLazyQueryHookResult = ReturnType<typeof useGetMyLocationsLazyQuery>;
export type GetMyLocationsQueryResult = Apollo.QueryResult<
  GetMyLocationsQuery,
  GetMyLocationsQueryVariables
>;
export const UpdateLocationDocument = gql`
  mutation updateLocation($data: UpdateLocationInput!) {
    updateLocation(data: $data) {
      id
      placeName
      latitude
      type
      longitude
      city
      country
    }
  }
`;
export type UpdateLocationMutationFn = Apollo.MutationFunction<
  UpdateLocationMutation,
  UpdateLocationMutationVariables
>;

/**
 * __useUpdateLocationMutation__
 *
 * To run a mutation, you first call `useUpdateLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLocationMutation, { data, loading, error }] = useUpdateLocationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateLocationMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateLocationMutation, UpdateLocationMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateLocationMutation, UpdateLocationMutationVariables>(
    UpdateLocationDocument,
    options
  );
}
export type UpdateLocationMutationHookResult = ReturnType<typeof useUpdateLocationMutation>;
export type UpdateLocationMutationResult = Apollo.MutationResult<UpdateLocationMutation>;
export type UpdateLocationMutationOptions = Apollo.BaseMutationOptions<
  UpdateLocationMutation,
  UpdateLocationMutationVariables
>;
export const GetAllUsersDocument = gql`
  query getAllUsers {
    getAllUsers {
      id
      name
      email
      isAdmin
    }
  }
`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
}
export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options
  );
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<
  GetAllUsersQuery,
  GetAllUsersQueryVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      user {
        id
        name
        email
        isAdmin
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
  mutation AuthUser($data: UserAuthInput!) {
    userAuth(data: $data) {
      token
      user {
        id
        email
        name
        isAdmin
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
 *      data: // value for 'data'
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
        isAdmin
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
