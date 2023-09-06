import styled from 'styled-components';

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
