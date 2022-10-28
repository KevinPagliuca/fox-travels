import { NewAirportFieldKeysType } from 'helpers/fields';

export type LoginFormDataType = {
  email: string;
  password: string;
};

export type RegisterFormDataType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type NewAirportFormDataType = {
  [key in NewAirportFieldKeysType]: string;
};
