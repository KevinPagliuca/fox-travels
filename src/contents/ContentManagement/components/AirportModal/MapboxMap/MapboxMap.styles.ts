import styled, { css } from 'styled-components';

import { AirportIconWrapperAttributes } from './MapboxMap.interfaces';

export const AirportIconWrapper = styled.span<AirportIconWrapperAttributes>`
  ${({ theme, isSelected }) => css`
    filter: drop-shadow(0 0 2px ${theme.colors.dark_blue});
    color: ${theme.colors.dark_blue};
    transition: ${theme.transitions.preset.default};

    &:hover {
      color: ${theme.colors.primary};
    }

    ${isSelected &&
    css`
      color: ${theme.colors.primary};
    `}
  `}
`;
