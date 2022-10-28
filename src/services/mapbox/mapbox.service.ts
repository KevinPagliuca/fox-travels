import { toast } from 'react-toastify';

import { mapboxAPI } from 'services/client';

import {
  MapboxServiceSearchByLatLngRequest,
  MapboxServiceSearchByLatLngResponse
} from './mapboxService.interfaces';
export * from './mapboxService.interfaces';

export class MapboxService {
  async searchByLatLng({ lat, lng, types, limit }: MapboxServiceSearchByLatLngRequest) {
    const typesString = types ? types.join(',') : '';

    try {
      const { data } = await mapboxAPI.get<MapboxServiceSearchByLatLngResponse>(
        `/${lng},${lat}.json`,
        {
          params: {
            types: typesString.length > 0 ? typesString : undefined,
            limit
          }
        }
      );
      return data;
    } catch (error) {
      toast.error('Erro ao buscar endereço');
    }
  }
}

export const mapboxService = new MapboxService();
