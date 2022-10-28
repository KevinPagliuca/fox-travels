import React, { forwardRef, ForwardRefRenderFunction as FFR } from 'react';
import { Controller } from 'react-hook-form';

import type { IInputProps } from './Input.interfaces';
import * as S from './Input.styles';

const InputComponent: FFR<HTMLInputElement, IInputProps> = (
  { name, label, control, error, variant = 'primary', ...rest },
  originalRef
) => {
  const isDisabled = rest?.disabled || rest?.readOnly;

  return (
    <S.InputContainer className={rest?.wrapperClassName}>
      {label && <S.InputLabel htmlFor={name}>{label}</S.InputLabel>}
      {control ? (
        <Controller
          name={name}
          control={control}
          defaultValue={rest?.defaultValue ?? ''}
          render={({ field: { name, onBlur, onChange, ref, value } }) => {
            return (
              <S.InputField
                id={name}
                value={value}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
                hasValue={!!value}
                hasError={!!error}
                variant={variant}
                disabled={isDisabled}
                {...rest}
              />
            );
          }}
        />
      ) : (
        <S.InputField id={name} name={name} ref={originalRef} variant={variant} {...rest} />
      )}
      {error && <S.InputError>{error.message}</S.InputError>}
    </S.InputContainer>
  );
};

export const Input = forwardRef(InputComponent);
export const InputLabel = S.InputLabel;
