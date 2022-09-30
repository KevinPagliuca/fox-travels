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
  width: 100%;
`;

export const HeaderSearchBox = styled.div`
  grid-area: search;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.dark_blue};
  overflow: hidden;
  border-radius: 14px;
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors.body};
  outline: 1px solid transparent;
  box-sizing: border-box;
  max-width: 33rem;
  flex: 1;
  transition: ${({ theme }) => theme.transitions.preset.default};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.primary};

    > svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  margin-left: 1.5rem;
  border: 0;
  background: transparent;
  color: inherit;
  outline: 0;
  font-size: 1rem;
  padding-right: 1rem;
  text-overflow: ellipsis;
`;

export const SearchButton = styled.button`
  height: 100%;
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.dark_blue};
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 14px;
  transition: ${({ theme }) => theme.transitions.preset.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary_dark};
  }

  &:active,
  &:focus {
    background: ${({ theme }) => theme.colors.primary_dark};
  }
`;

export const NotificationButton = styled.button`
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 3rem;
  border: 0;
  background: ${({ theme }) => theme.colors.dark_blue};
  color: ${({ theme }) => theme.colors.body};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.preset.default};

  &:hover,
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-right: auto;
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
