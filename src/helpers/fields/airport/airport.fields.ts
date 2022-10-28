import { IFieldBase } from 'interfaces/generic.interfaces';

import { getFieldsArrayToObject } from '../fields.formatter';

export const fieldsKeys = {
  placeName: 'placeName',
  latitude: 'latitude',
  longitude: 'longitude',
  city: 'city',
  country: 'country'
} as const;

export type NewAirportFieldKeysType = keyof typeof fieldsKeys;

export const NewAirportFields: IFieldBase<NewAirportFieldKeysType>[] = [
  {
    key: fieldsKeys.placeName,
    name: fieldsKeys.placeName,
    fieldType: 'input',
    inputType: 'text',
    label: 'Nome do aeroporto',
    placeholder: 'Nome do aeroporto',
    variant: 'secondary'
  },
  {
    groupKey: 'coordinates',
    gridConfig: {
      gap: '1rem',
      templateColumns: 'repeat(2, 1fr)'
    },
    group: [
      {
        key: fieldsKeys.latitude,
        name: fieldsKeys.latitude,
        fieldType: 'input',
        inputType: 'text',
        label: 'Latitude',
        placeholder: 'Selecione a localização no mapa',
        readOnly: true,
        variant: 'secondary'
      },
      {
        key: fieldsKeys.longitude,
        name: fieldsKeys.longitude,
        fieldType: 'input',
        inputType: 'text',
        label: 'Longitude',
        placeholder: 'Selecione a localização no mapa',
        readOnly: true,
        variant: 'secondary'
      }
    ]
  },
  {
    groupKey: 'airportLocations',
    gridConfig: {
      gap: '1rem',
      templateColumns: 'repeat(2, 1fr)'
    },
    group: [
      {
        key: fieldsKeys.city,
        name: fieldsKeys.city,
        fieldType: 'input',
        inputType: 'text',
        label: 'Cidade',
        placeholder: 'Selecione a localização no mapa',
        readOnly: true,
        variant: 'secondary'
      },
      {
        key: fieldsKeys.country,
        name: fieldsKeys.country,
        fieldType: 'input',
        inputType: 'text',
        label: 'País',
        placeholder: 'Selecione a localização no mapa',
        readOnly: true,
        variant: 'secondary'
      }
    ]
  }
];

export const NewAirportFieldsObject =
  getFieldsArrayToObject<NewAirportFieldKeysType>(NewAirportFields);
