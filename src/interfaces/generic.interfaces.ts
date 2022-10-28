import { HTMLInputTypeAttribute } from 'react';

export type IGeometry = {
  coordinates: [number, number];
};

export type IGeometryObject = {
  latitude: number;
  longitude: number;
};

export type FieldComponentVariantOptions = 'primary' | 'secondary';
export type FieldTypesOptions = 'input' | 'select';

export type IFieldGridConfig = {
  gap?: string;
  templateColumns?: string;
  templateRows?: string;
};
export type FieldBaseProps<K = string> = {
  key: K;
  name: string;
  fieldType: FieldTypesOptions;
  inputType?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  variant?: FieldComponentVariantOptions;
  readOnly?: boolean;

  groupKey?: string;
  group?: undefined;
  gridConfig?: undefined;
};
export type GroupFieldBaseProps<K = string> = {
  key?: undefined;

  groupKey: string;
  group: FieldBaseProps<K>[];
  gridConfig?: IFieldGridConfig;
};
export type IFieldBase<KeyType = string> = FieldBaseProps<KeyType> | GroupFieldBaseProps<KeyType>;

export type IFieldObjectType<K = string> = Record<K extends string ? K : string, FieldBaseProps<K>>;
