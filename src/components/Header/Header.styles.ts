import { breakpoints } from 'shared/breakpoints';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  svg.svg-transition {
    transition: ${({ theme }) => theme.transitions.preset.default};
  }
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-areas: 'search search search notification . . profile';
  align-items: center;
  width: 100%;

  @media (max-width: ${breakpoints.mediumDesktop}) {
    display: flex;
    grid-template-areas: unset;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const HeaderSearchBox = styled.div`
  grid-area: search;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  gap: 1rem;

  background: ${({ theme }) => theme.colors.dark_blue};
  color: ${({ theme }) => theme.colors.body};
  border-radius: 14px;

  padding-left: 1rem;
  outline: 1px solid transparent;
  max-width: 33rem;
  flex: 1;
  height: 3rem;
  transition: ${({ theme }) => theme.transitions.preset.default};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.primary};

    > span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${breakpoints.mediumDesktop}) {
    min-width: 100%;
  }
`;

export const HeaderIconWrapper = styled.span`
  min-height: 2rem;
  min-width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: inherit;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;

  border: 0;
  background: transparent;
  color: inherit;
  outline: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.body};
  text-overflow: ellipsis;
  transition: ${({ theme }) => theme.transitions.preset.default};

  &::placeholder {
    color: inherit;
  }

  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: none;
  }

  @media (max-width: ${breakpoints.mediumDesktop}) {
    margin: 0;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 4px solid transparent;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.dark_blue};

  height: 100%;
  font-size: 0.875rem;
  padding: 0.5rem 0.875rem;
  font-weight: 700;

  transition: ${({ theme }) => theme.transitions.preset.default};

  &:active,
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary_dark};
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: none;
  }
`;

export const NotificationButton = styled.button`
  grid-area: notification;

  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 3rem;
  border: 1px solid transparent;

  background: ${({ theme }) => theme.colors.dark_blue};
  color: ${({ theme }) => theme.colors.body};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: ${({ theme }) => theme.transitions.preset.default};

  &:hover,
  &:focus {
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${breakpoints.mediumDesktop}) {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const ProfileContainer = styled.div`
  grid-area: profile;

  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-left: auto;

  @media (max-width: ${breakpoints.mediumDesktop}) {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const ProfileImage = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.dark_blue};
  border: 0;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
`;

export const ProfileLevel = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.body};
`;
