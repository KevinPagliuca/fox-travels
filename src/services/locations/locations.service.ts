import { GraphQLError } from 'graphql';

import {
  ICreateLocationServiceParams,
  IDeleteLocationServiceParams,
  IUpdateLocationServiceParams
} from './locationsService.interfaces';

class LocationsService {
  async createLocation({ mutation, payload }: ICreateLocationServiceParams) {
    try {
      const { data, errors } = await mutation({
        variables: { data: payload }
      });

      if (!errors && data) return data.createLocation;

      throw new Error(errors?.map(error => error.message).join('\n'));
    } catch (err) {
      const error = err as GraphQLError;
      throw new Error(error.message);
    }
  }

  async updateLocation({ mutation, payload }: IUpdateLocationServiceParams) {
    try {
      const { data, errors } = await mutation({
        variables: { data: payload }
      });

      if (!errors && data) return data.updateLocation;

      throw new Error(errors?.map(error => error.message).join('\n'));
    } catch (err) {
      const error = err as GraphQLError;
      throw new Error(error.message);
    }
  }

  async deleteLocation({ mutation, payload }: IDeleteLocationServiceParams) {
    try {
      const { data, errors } = await mutation({
        variables: { id: payload.id }
      });

      if (!errors && data) return data.deleteLocation;

      throw new Error(errors?.map(error => error.message).join('\n'));
    } catch (err) {
      const error = err as GraphQLError;
      throw new Error(error.message);
    }
  }

  // async getLocations({ query, payload }: IUpdateLocationServiceParams) {
  //   try {
  //     const { data, errors } = await query({
  //       variables: { data: payload }
  //     });

  //     if (!errors && data) return data.getLocations;

  //     throw new Error(errors?.map(error => error.message).join('\n'));
  //   } catch (err) {
  //     const error = err as GraphQLError;
  //     throw new Error(error.message);
  //   }
  // }

  // async getLocationById({ query, payload }: IUpdateLocationServiceParams) {
  //   try {
  //     const { data, errors } = await query({
  //       variables: { data: payload }
  //     });

  //     if (!errors && data) return data.getLocation;

  //     throw new Error(errors?.map(error => error.message).join('\n'));
  //   } catch (err) {
  //     const error = err as GraphQLError;
  //     throw new Error(error.message);
  //   }
  // }
}

export const locationsService = new LocationsService();
