import { IFieldBase } from 'interfaces/generic.interfaces';

export interface IDynamicFormProps {
  id: string;
  fields: IFieldBase[];
  onLoadReset?: () => void;
}
