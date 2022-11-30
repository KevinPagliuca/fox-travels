import React from 'react';
import { useFormContext, FieldError } from 'react-hook-form';

import { Input } from 'components/Input';
import { InputGroup } from 'components/InputGroup';

import { IDynamicFormProps } from './DynamicForm.interfaces';

export const DynamicForm = ({ fields }: IDynamicFormProps) => {
  const { control, formState } = useFormContext();
  const errors = formState.errors as Record<string, FieldError>;

  return (
    <>
      {fields.map(({ key, groupKey, ...field }) => {
        if (field.group) {
          return (
            <InputGroup key={groupKey} config={{ ...field.gridConfig }}>
              {field.group.map(({ key: groupFieldKey, ...groupField }) => {
                return (
                  <Input
                    key={groupFieldKey}
                    control={control}
                    error={errors[groupFieldKey]}
                    {...groupField}
                  />
                );
              })}
            </InputGroup>
          );
        } else {
          return (
            <InputGroup key={key}>
              <Input control={control} error={key ? errors[key] : undefined} {...field} />
            </InputGroup>
          );
        }
      })}
    </>
  );
};

DynamicForm.displayName = 'DynamicFormComponent';
