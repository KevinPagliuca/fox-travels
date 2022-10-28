import styled, { css } from 'styled-components';

import { IFieldGridConfig } from 'interfaces/generic.interfaces';

export const InputGroupContainer = styled.div<IFieldGridConfig>`
  ${({ templateColumns, templateRows, gap }) => css`
    display: grid;
    grid-template-columns: ${templateColumns || '1fr'};
    grid-template-rows: ${templateRows || '1fr'};
    gap: ${gap};

    ${!templateColumns &&
    !templateRows &&
    css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `}
  `}
`;
