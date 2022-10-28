import { Airplane } from 'phosphor-react';
import { useState, memo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import Map, { FullscreenControl, MapRef, Marker, NavigationControl } from 'react-map-gl';

import { NewAirportFieldsObject } from 'helpers/fields';
import { IMapAiportMarkerProps, NewAirportFormDataType } from 'interfaces';
import { mapboxService, MapboxSearchFeatures } from 'services/mapbox/mapbox.service';

import { useGeocoder, useAirports } from './hooks';
import { IMapboxMapProps } from './MapboxMap.interfaces';
import * as S from './MapboxMap.styles';

const MapboxMapComponent = ({ width, height, style, searchAddressInputId }: IMapboxMapProps) => {
  const { setValue, clearErrors } = useFormContext<NewAirportFormDataType>();

  const [mapRef, setMapRef] = useState<MapRef | null>(null);
  const [airports, setAirports] = useState<IMapAiportMarkerProps[]>([]);
  const [selectedAirportId, setSelectedAirportId] = useState<number | string>();

  const onAirportsReceived = useCallback((data: IMapAiportMarkerProps[]) => {
    setAirports(data);
  }, []);

  useGeocoder({ mapRef, searchAddressInputId });
  useAirports({ mapRef: mapRef?.getMap(), onDataReceived: onAirportsReceived });

  const getFeatureData = useCallback((features: MapboxSearchFeatures[], types: string[]) => {
    const featuresItens = features.filter(feature => {
      return types.includes(feature.id.split('.')[0]);
    });

    if (featuresItens.length > 0) return featuresItens[0]?.text;

    const featuresContext = features.filter(feature => feature?.context?.length > 0);

    if (featuresContext.length > 0) {
      const placeName = featuresContext[0].context.filter(context =>
        types.includes(context.id.split('.')[0])
      );
      return placeName[0]?.text;
    }
  }, []);

  const handleMarkerClick = useCallback(
    async (airport: IMapAiportMarkerProps) => {
      const coords = { lat: airport.coordinates[1], lng: airport.coordinates[0] };
      mapRef?.getMap().flyTo({
        center: coords,
        zoom: mapRef?.getZoom() > 13 ? mapRef?.getZoom() : 13
      });

      const placeResult = await mapboxService.searchByLatLng(coords);

      if (placeResult) {
        const city = getFeatureData(placeResult.features, ['place', 'region']);
        const country = getFeatureData(placeResult.features, ['country']);

        if (city && country) {
          setValue(NewAirportFieldsObject.city.key, city);
          setValue(NewAirportFieldsObject.country.key, country);
          clearErrors([NewAirportFieldsObject.city.key, NewAirportFieldsObject.country.key]);
        }
        setValue(NewAirportFieldsObject.latitude.key, coords.lat.toString());
        setValue(NewAirportFieldsObject.longitude.key, coords.lng.toString());
        clearErrors([NewAirportFieldsObject.latitude.key, NewAirportFieldsObject.longitude.key]);
      }

      setSelectedAirportId(airport.id);
    },
    [mapRef]
  );

  return (
    <Map
      id="newAirportMap"
      minZoom={5}
      ref={mapRef => setMapRef(mapRef)}
      initialViewState={{ longitude: -46.63, latitude: -23.55, zoom: 10 }}
      style={{ width, height, ...style }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      mapStyle="mapbox://styles/kevinvp3/cl9nkdwhh007f15nvu6qy9x50"
    >
      <NavigationControl showCompass={false} position="top-left" />
      <FullscreenControl position="top-left" />
      {airports?.map(airport => (
        <Marker
          key={airport.id}
          longitude={airport.coordinates[0]}
          latitude={airport.coordinates[1]}
          onClick={() => handleMarkerClick(airport)}
          style={{ cursor: 'pointer' }}
        >
          <S.AirportIconWrapper
            title={
              airport.id !== selectedAirportId
                ? 'Selecionar este aeroporto'
                : 'Aeroporto selecionado'
            }
            isSelected={selectedAirportId === airport.id}
          >
            <Airplane size={42} weight="fill" />
          </S.AirportIconWrapper>
        </Marker>
      ))}
    </Map>
  );
};

const MapboxMap = memo(MapboxMapComponent);
export { MapboxMap };
export default MapboxMap;
