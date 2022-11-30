import { ButtonVariantType } from 'components/Button/Button.interface';

export type ContentManagementRegisterButtonsProps = {
  label: string;
  variant: ButtonVariantType;
  onOpenModal: () => void;
};
