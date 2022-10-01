import React, { forwardRef, ForwardRefRenderFunction as FFR } from 'react';
import { Controller } from 'react-hook-form';

import type { IInputProps } from './Input.interfaces';
import * as S from './Input.styles';

const InputComponent: FFR<HTMLInputElement, IInputProps> = (
  { name, label, control, ...rest },
  originalRef
) => {
  return (
    <S.InputContainer>
      {label && <S.InputLabel htmlFor={name}>{label}</S.InputLabel>}
      {control ? (
        <Controller
          name={name}
          control={control}
          defaultValue={rest?.defaultValue ?? ''}
          render={({ field: { name, onBlur, onChange, ref, value } }) => (
            <S.InputField
              id={name}
              value={value}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              ref={() => ref(originalRef)}
              {...rest}
            />
          )}
        />
      ) : (
        <S.InputField id={name} name={name} ref={originalRef} {...rest} />
      )}
    </S.InputContainer>
  );
};

export const Input = forwardRef(InputComponent);
