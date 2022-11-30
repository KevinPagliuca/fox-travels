import React from 'react';

import { IInputGroupProps } from './InputGroup.interfaces';
import * as S from './InputGroup.styles';

export const InputGroup = ({ children: inputsChildren, config }: IInputGroupProps) => {
  return <S.InputGroupContainer {...config}>{inputsChildren}</S.InputGroupContainer>;
};
InputGroup.displayName = 'InputGroupComponent';
