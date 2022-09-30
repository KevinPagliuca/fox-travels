import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  position: relative;
  height: 100vh;
  background: #1c1f37;
`;

export const LayoutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

  display: flex;
  overflow: hidden;
  flex: 1;
  width: 100%;
  gap: 1rem;
`;

export const LayoutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3.125rem 1.5rem 3.125rem 0;
  position: relative;
  gap: 2.5rem;
`;
