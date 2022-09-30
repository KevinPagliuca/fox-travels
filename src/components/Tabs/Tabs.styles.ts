import * as TabsPrimitive from '@radix-ui/react-tabs';
import styled, { css } from 'styled-components';

export const TabsContainer = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column;
`;

export const TabsOptionsContainer = styled(TabsPrimitive.List)`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

export const TabOption = styled(TabsPrimitive.Trigger)`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${theme.colors.body};
    border: 0;
    background: transparent;
    transition: color,
      filter ${theme.transitions.speeds.default} ${theme.transitions.easings.default};

    &[data-state='active'] {
      color: ${theme.colors.title};
    }
  `}
`;

export const TabContent = styled(TabsPrimitive.Content)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
