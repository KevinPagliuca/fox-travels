import React, { forwardRef, ForwardRefRenderFunction as FFR } from 'react';

import type { IButtonProps } from './Button.interface';
import Buttons from './Button.styles';

const ButtonComponent: FFR<HTMLButtonElement, IButtonProps> = (
  { children, variant = 'primary', ...rest },
  ref
) => {
  const ButtonComponent = Buttons[variant];
  return (
    <ButtonComponent {...rest} ref={ref}>
      {children}
    </ButtonComponent>
  );
};

export const Button = forwardRef(ButtonComponent);
