import { breakpoints } from 'shared/breakpoints';
import styled from 'styled-components';

export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.125rem 2rem 0.125rem 0.5rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const UserName = styled.strong`
  font-size: 2rem;
  font-weight: 700;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.title};
`;

export const Message = styled.span`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.body};
`;

export const EasyVisaWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const EasyVisaHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.title};
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.125rem;
    margin-left: auto;
  }
`;

export const EasyVisaContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex: 1;
  width: 100%;
  gap: 1rem;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const OthersTravelsWrapper = styled.div``;
