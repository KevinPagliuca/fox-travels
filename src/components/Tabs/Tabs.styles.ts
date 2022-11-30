import * as TabsPrimitive from '@radix-ui/react-tabs';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const MotionTabContent = motion(TabsPrimitive.Content);

export const TabsContainer = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TabsOptionsContainer = styled(TabsPrimitive.List)`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;

  &:focus {
    box-shadow: none;
  }

  &[data-state='active'] {
    background: ${({ theme }) => theme.colors.title};
  }
`;

export const TabOption = styled(TabsPrimitive.Trigger)`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${theme.colors.body};
    border: 0;
    background: transparent;

    border-bottom: 2px solid transparent;
    transition: ${theme.transitions.preset.default};

    &[data-state='active'] {
      color: ${theme.colors.title};
    }

    &:focus {
      box-shadow: none;
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`;

export const TabContent = styled(MotionTabContent)`
  display: flex;
  flex-direction: column;

  &:focus {
    box-shadow: none;
  }
`;
