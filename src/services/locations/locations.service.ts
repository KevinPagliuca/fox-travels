import { GraphQLError } from 'graphql';

import { ICreateLocationServiceParams } from './locationsService.interfaces';

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
}

export const locationsService = new LocationsService();
