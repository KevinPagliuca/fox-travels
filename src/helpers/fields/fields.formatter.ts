import { IFieldBase, IFieldObjectType } from 'interfaces/generic.interfaces';

export const getFieldsArrayToObject = <T extends string>(array: IFieldBase<T>[]) => {
  const formattedObject = array.reduce((acc, field) => {
    if (field.group) {
      field.group.forEach(groupField => {
        acc[groupField.key] = {
          ...acc[groupField.key],
          ...groupField
        };
      });
    } else {
      acc[field.key] = field;
    }

    return acc;
  }, {} as IFieldObjectType);

  return formattedObject as IFieldObjectType<T>;
};
