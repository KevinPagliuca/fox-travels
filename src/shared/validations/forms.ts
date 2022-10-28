import * as yup from 'yup';

import {
  LoginFormDataType,
  RegisterFormDataType,
  NewAirportFormDataType
} from 'interfaces/forms.interfaces';

type PartialShapeSchema<K extends string> =
  | {
      [key in K]?: yup.AnySchema;
    }
  | Record<string, yup.AnySchema>;

export const loginFormSchema = yup.object().shape<PartialShapeSchema<keyof LoginFormDataType>>({
  email: yup.string().email('Insira um e-mail válido.').required('O e-mail é obrigatório.'),
  password: yup
    .string()
    .required('A senha é obrigatória.')
    .min(4, 'A senha deve ter no mínimo 4 caracteres.')
});

export const registerFormSchema = yup
  .object()
  .shape<PartialShapeSchema<keyof RegisterFormDataType>>({
    name: yup.string().required('O nome é obrigatório.'),
    email: yup.string().email('Insira um e-mail válido.').required('O e-mail é obrigatório.'),
    password: yup
      .string()
      .required('A senha é obrigatória.')
      .min(4, 'A senha deve ter no mínimo 4 caracteres.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais.')
      .required('A confirmação de senha é obrigatória.')
  });

export const NewAirportFormSchema = yup
  .object()
  .shape<PartialShapeSchema<keyof NewAirportFormDataType>>({
    placeName: yup.string().required('O nome do aeroporto é obrigatório.'),
    latitude: yup.string().required('A latitude é obrigatória.'),
    longitude: yup.string().required('A longitude é obrigatória.'),
    city: yup.string().required('A cidade é obrigatória.'),
    country: yup.string().required('O país é obrigatório.')
  });
