import styled from 'styled-components';

export const Div = styled.div`
  background-color: var(--dark-background);
  color: var(--dark-text);
`;

export const List = styled.ul`
  margin: 16px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(100)};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: var(--dark-background);
  color: var(--dark-text);
  box-shadow: ${({ theme }) => theme.shadows.regular};
  list-style: none;
`;

export const Item = styled.li`
  border: 1px solid var(--button-border);
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: var(--light-text);
`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid var(--button-border);
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
export const Error = styled.h2`
  margin-top: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`;
