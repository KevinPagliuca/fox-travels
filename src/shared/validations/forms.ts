import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido.').required('O e-mail é obrigatório.'),
  password: yup
    .string()
    .required('A senha é obrigatória.')
    .min(4, 'A senha deve ter no mínimo 4 caracteres.'),
});

export const registerFormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório.'),
  email: yup.string().email('Insira um e-mail válido.').required('O e-mail é obrigatório.'),
  password: yup
    .string()
    .required('A senha é obrigatória.')
    .min(4, 'A senha deve ter no mínimo 4 caracteres.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais.')
    .required('A confirmação de senha é obrigatória.'),
});
