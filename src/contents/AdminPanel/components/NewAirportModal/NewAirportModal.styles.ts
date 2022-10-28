import { motion } from 'framer-motion';
import { breakpoints } from 'shared/breakpoints';
import styled, { css } from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 1.5rem 2rem 1.5rem;

    height: 90vh;
    max-height: 90vh;

    background: ${theme.colors.dark_blue};
    border-radius: 8px;

    overflow: hidden;
    position: relative;

    &:focus {
      box-shadow: none;
    }
  `}
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;

  @media (max-width: ${breakpoints.mediumDesktop}) {
    width: 90vw;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 80vw;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 70vw;
  }
`;

export const CloseButton = styled(Button).attrs({
  variant: 'unstyled'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  border-radius: 8px;
  margin-left: auto;
  position: absolute;
  right: 1rem;
  top: 1rem;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModalTitle = styled.h4`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.title};
  `}
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  flex: 1;
`;

export const ModalBodyContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 0.5rem;
  position: relative;
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: sticky;
  top: 0;
  height: calc(90vh - 4rem);
`;

export const NoticeText = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.title};
  `}
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1.25rem;
  height: 100%;
`;

export const SubmitButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
