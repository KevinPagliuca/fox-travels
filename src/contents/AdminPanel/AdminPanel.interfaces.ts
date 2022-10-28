import { ButtonVariantType } from 'components/Button/Button.interface';

export type AdminPanelRegisterButtonsProps<T> = {
  label: string;
  variant: ButtonVariantType;
  modalName: T;
};
