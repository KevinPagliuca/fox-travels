import { useEffect, useState } from 'react';
import { MapRef } from 'react-map-gl';

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import { MapboxSearchFeatures } from 'services/mapbox/mapboxService.interfaces';

interface IUseGeocoderProps {
  mapRef: MapRef | null;
  searchAddressInputId?: string;
  onResult?: (result: MapboxSearchFeatures) => void;
}

export const useGeocoder = ({ mapRef }: IUseGeocoderProps) => {
  const [didRenderGeocoder, setDidRenderGeocoder] = useState(false);
  const geocoder = new MapboxGeocoder({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
    collapsed: false,
    marker: false,
    placeholder: 'Pesquisar aeroporto',
    language: 'pt-BR',
    types: 'poi',
    filter: item => item.properties?.category === 'airport'
  });

  geocoder.on('results', results => {
    if (results.features.length === 0) {
      const noResultsText = document.getElementsByClassName('mapbox-gl-geocoder--no-results')[0];
      if (noResultsText) noResultsText.innerHTML = 'Nenhum resultado encontrado';
    }
  });

  useEffect(() => {
    if (mapRef && !didRenderGeocoder) {
      mapRef.getMap().addControl(geocoder, 'top-right');
      setDidRenderGeocoder(true);
    }
  }, [mapRef]);
};
