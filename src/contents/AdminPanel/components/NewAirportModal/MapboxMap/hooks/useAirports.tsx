import { useCallback, useEffect } from 'react';

import { IMapAiportMarkerProps, IMapboxGeoJsonFeature } from 'interfaces/airport.interfaces';

interface IUseAirportsProps {
  mapRef?: mapboxgl.Map;
  onDataReceived: (data: IMapAiportMarkerProps[]) => void;
}

const sourceId = 'airports' as const;

export const useAirports = ({ mapRef: map, onDataReceived }: IUseAirportsProps) => {
  const formatedData = useCallback(
    (data: IMapboxGeoJsonFeature[]) => {
      const airports: IMapAiportMarkerProps[] = data.map(({ id, properties, geometry }) => ({
        id: id ?? properties.iata_code,
        properties,
        coordinates: geometry.coordinates
      }));

      const uniqueAirports = airports.filter(
        (airport, index, selfArray) => selfArray.findIndex(item => item.id === airport.id) === index
      );

      onDataReceived(uniqueAirports);
    },
    [map, onDataReceived]
  );

  useEffect(() => {
    if (map) {
      map.on('load', () => {
        map.addSource(sourceId, {
          type: 'vector',
          url: 'mapbox://mapbox.04w69w5j'
        });

        map.addLayer({
          id: 'airport',
          source: sourceId,
          'source-layer': 'ne_10m_airports',
          type: 'fill',
          layout: {}
        });

        map.on('movestart', () => {
          map.setFilter('airport', ['has', 'iata_code']);
        });

        map.on('moveend', () => {
          const features = map.queryRenderedFeatures(undefined, { layers: ['airport'] });
          if (features.length) formatedData(features as IMapboxGeoJsonFeature[]);
        });

        map.on('data', e => {
          map.setFilter('airport', ['has', 'iata_code']);
          if (e.sourceId !== 'airports' || !e.isSourceLoaded) return;
          const features = map.queryRenderedFeatures(undefined, { layers: ['airport'] });
          if (features.length) formatedData(features as IMapboxGeoJsonFeature[]);
        });
      });
    }
  }, [map]);
};
