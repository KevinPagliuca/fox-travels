import React, { forwardRef, ForwardRefRenderFunction as FFR } from 'react';

import type { IButtonProps } from './Button.interface';
import { Buttons, LoaderStyled } from './Button.styles';

const ButtonComponent: FFR<HTMLButtonElement, IButtonProps> = (
  { children, variant = 'primary', isLoading = false, fontWeight = '700', fullWidth, ...rest },
  ref
) => {
  const ButtonComponent = Buttons[variant];
  return (
    <ButtonComponent
      {...rest}
      isLoading={isLoading}
      disabled={isLoading || rest?.disabled}
      fontWeight={fontWeight}
      fullWidth={fullWidth}
      ref={ref}
    >
      {isLoading ? <LoaderStyled color="currentColor" wrapperClass="buttonLoader" /> : children}
    </ButtonComponent>
  );
};

export const Button = forwardRef(ButtonComponent);
ButtonComponent.displayName = 'ButtonComponent';
