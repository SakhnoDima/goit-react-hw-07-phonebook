import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const MainPage = styled.div`
  margin: 40px auto;
  padding: 16px;
  width: ${({ theme }) => theme.spacing(200)};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: var(--dark-background);
  color: var(--dark-text);
`;
export const Button = styled.button`
  display: block;
  margin: 80px auto 0;
  width: 150px;
  padding: 8px 16px;
  font: inherit;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid var(--button-border);
  color: var(--light-text);
  background-color: var(--button-background);
  font-size: ${({ theme }) => theme.fontSizes.medium};
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
export const Title = styled.h1`
  color: var(--light-text);
`;
export const Title2 = styled.h1`
  color: var(--light-text);
`;
