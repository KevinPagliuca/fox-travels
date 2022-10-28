export type MapboxSearchFeatures = {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  geometry: {
    coordinates: [number, number];
  };
  place_name: string;
  'place_name_pt-BR': string;
  text: string;
  'text_pt-BR': string;
  properties?: {
    address: string;
    category: string;
  };
  context: {
    id: string;
    text: string;
    'text_pt-BR': string;
  }[];
};

export type MapboxServiceSearchByLatLngResponse = {
  query: string[];
  center: [number, number];
  features: MapboxSearchFeatures[];
};

export type MapboxServiceSearchTypes =
  | 'poi'
  | 'address'
  | 'locality'
  | 'neighborhood'
  | 'place'
  | 'district'
  | 'country';

export type MapboxServiceSearchByLatLngRequest = {
  lat: number;
  lng: number;
  limit?: number;
  types?: MapboxServiceSearchTypes[];
};
