import { IGeometry } from './generic.interfaces';

export type IAirportMapProperties = {
  iata_code: string;
  name: string;
  featureclass: string;
  abbrev: string;
  gps_code: string;
  location: string;
  natlscale: number;
  scalerank: number;
  type: string;
  wikipedia: string;
};

export interface IMapAiportMarkerProps {
  id: string | number;
  properties: IAirportMapProperties;
  coordinates: IGeometry['coordinates'];
}

export interface IMapboxGeoJsonFeature extends mapboxgl.MapboxGeoJSONFeature {
  geometry: GeoJSON.Geometry & IGeometry;
  properties: IAirportMapProperties;
}
