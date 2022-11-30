import { GraphQLError } from 'graphql';
import { Location } from 'graphql/generated';

import {
  ICreateLocationServiceParams,
  IDeleteLocationServiceParams,
  IUpdateLocationServiceParams
} from './locationsService.interfaces';

class LocationsService {
  async createLocation({ mutation, payload }: ICreateLocationServiceParams) {
    try {
      const { data, errors } = await mutation({
        variables: { data: payload },
        updateQueries: {
          getMyLocations: (prev, { mutationResult }) => {
            const newLocation = mutationResult.data?.createLocation;
            return Object.assign({}, prev, {
              getMyLocations: prev.getMyLocations.concat(newLocation)
            });
          }
        }
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
        variables: { data: payload },
        updateQueries: {
          getMyLocations: (prev, { mutationResult }) => {
            const updatedLocation = mutationResult.data?.updateLocation;
            return prev.getMyLocations.map((location: Location) =>
              location.id === updatedLocation?.id ? updatedLocation : location
            );
          }
        }
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
        variables: { id: payload.id },
        updateQueries: {
          getMyLocations: prev => {
            return Object.assign({}, prev, {
              getMyLocations: prev.getMyLocations.filter(
                (location: Location) => location.id !== payload.id
              )
            });
          }
        }
      });

      if (!errors && data) return data.deleteLocation;

      throw new Error(errors?.map(error => error.message).join('\n'));
    } catch (err) {
      const error = err as GraphQLError;
      throw new Error(error.message);
    }
  }
}

export const locationsService = new LocationsService();
