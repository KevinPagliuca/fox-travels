import styled from 'styled-components';

import { ButtonVariantType } from './Button.interface';

const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 0;
  outline: 0;

  font-size: 1rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  transition: ${({ theme }) => theme.transitions.preset.default};
`;

const PrimaryButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.colors.dark_blue};
  background: ${({ theme }) => theme.colors.primary};

  &:active,
  &:hover {
    background: ${({ theme }) => theme.colors.primary_dark};
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  &:focus {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.secondary_light};
    /* box-shadow: none; */
    /* outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 2px; */
  }
`;

const SecondaryButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.colors.dark_blue};
  background: ${({ theme }) => theme.colors.secondary};
`;

const TertiaryButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.tertiary};
`;

const Buttons: Record<ButtonVariantType, typeof DefaultButton> = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
};

export default Buttons;
